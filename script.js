/* =========================================================
   NEXT STEP — APP LOGIC
   ---------------------------------------------------------
   Handles: view switching, breadcrumb trail, and rendering
   content from NEXT_STEP_DATA (see data.js) into each view.
   No frameworks — plain DOM manipulation.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- state ---------- */
  let state = {
    view: "landing",      // landing | categories | subjects | detail | deepdive
    categoryId: null,
    subjectId: null
  };

  /* ---------- element refs ---------- */
  const views = document.querySelectorAll(".view");
  const trailEl = document.getElementById("trail");

  const categoryGrid = document.getElementById("categoryGrid");
  const subjectGrid = document.getElementById("subjectGrid");

  const subjectsEyebrow = document.getElementById("subjectsEyebrow");
  const subjectsTitle = document.getElementById("subjectsTitle");
  const subjectsSub = document.getElementById("subjectsSub");

  const detailEyebrow = document.getElementById("detailEyebrow");
  const detailTitle = document.getElementById("detailTitle");
  const detailShort = document.getElementById("detailShort");
  const detailOverview = document.getElementById("detailOverview");
  const detailDayLife = document.getElementById("detailDayLife");
  const detailPath = document.getElementById("detailPath");
  const subfieldGrid = document.getElementById("subfieldGrid");
  const subfieldsLabel = document.getElementById("subfieldsLabel");
  const detailRealTalk = document.getElementById("detailRealTalk");

  const deepdiveTitle = document.getElementById("deepdiveTitle");
  const deepdiveIntro = document.getElementById("deepdiveIntro");
  const segmentList = document.getElementById("segmentList");
  const deepdivePrep = document.getElementById("deepdivePrep");

  /* ---------- helpers ---------- */

  function getCategory(id) {
    return NEXT_STEP_DATA.categories.find((c) => c.id === id);
  }

  function getSubject(id) {
    return NEXT_STEP_DATA.subjects[id];
  }

  function showView(name) {
    state.view = name;
    views.forEach((v) => {
      v.classList.toggle("is-active", v.dataset.view === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderTrail();
  }

  /* ---------- trail (breadcrumb) ---------- */

  function renderTrail() {
    trailEl.innerHTML = "";

    const steps = [{ label: "Start", view: "landing" }];

    if (state.view !== "landing") {
      steps.push({ label: "Categories", view: "categories" });
    }
    if (state.categoryId && (state.view === "subjects" || state.view === "detail" || state.view === "deepdive")) {
      const cat = getCategory(state.categoryId);
      if (cat) steps.push({ label: cat.name, view: "subjects" });
    }
    if (state.subjectId && (state.view === "detail" || state.view === "deepdive")) {
      const subj = getSubject(state.subjectId);
      if (subj) steps.push({ label: subj.name, view: "detail" });
    }
    if (state.view === "deepdive") {
      steps.push({ label: "Deep dive", view: "deepdive" });
    }

    steps.forEach((step, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "trail-sep";
        sep.textContent = "/";
        trailEl.appendChild(sep);
      }

      const btn = document.createElement("button");
      btn.className = "trail-item";
      btn.textContent = step.label;
      const isCurrent = step.view === state.view;
      if (isCurrent) btn.classList.add("is-current");

      btn.addEventListener("click", () => {
        if (step.view === "landing") goLanding();
        else if (step.view === "categories") goCategories();
        else if (step.view === "subjects") goSubjects(state.categoryId);
        else if (step.view === "detail") goDetail(state.subjectId);
      });

      trailEl.appendChild(btn);
    });
  }

  /* ---------- navigation actions ---------- */

  function goLanding() {
    state.categoryId = null;
    state.subjectId = null;
    showView("landing");
  }

  function goCategories() {
    state.categoryId = null;
    state.subjectId = null;
    renderCategories();
    showView("categories");
  }

  function goSubjects(categoryId) {
    state.categoryId = categoryId;
    state.subjectId = null;
    renderSubjects(categoryId);
    showView("subjects");
  }

  function goDetail(subjectId) {
    state.subjectId = subjectId;
    const subj = getSubject(subjectId);
    if (subj) state.categoryId = subj.category;
    renderDetail(subjectId);
    showView("detail");
  }

  function goDeepDive(subjectId) {
    state.subjectId = subjectId;
    const subj = getSubject(subjectId);
    if (subj) state.categoryId = subj.category;
    renderDeepDive(subjectId);
    showView("deepdive");
  }

  /* ---------- render: categories ---------- */

  function renderCategories() {
    categoryGrid.innerHTML = "";

    NEXT_STEP_DATA.categories.forEach((cat, i) => {
      const card = document.createElement("button");
      card.className = "category-card";
      card.style.setProperty("--card-accent", cat.color);

      const num = String(i + 1).padStart(2, "0");
      const subjectCount = cat.subjects.length;

      card.innerHTML = `
        <span class="category-card-num">${num} / TERRITORY</span>
        <h3 class="category-card-name">${cat.name}</h3>
        <p class="category-card-tagline">${cat.tagline}</p>
        <span class="category-card-count">${subjectCount} subjects mapped</span>
      `;

      card.addEventListener("click", () => goSubjects(cat.id));
      categoryGrid.appendChild(card);
    });
  }

  /* ---------- render: subjects ---------- */

  function renderSubjects(categoryId) {
    const cat = getCategory(categoryId);
    if (!cat) return;

    subjectsEyebrow.textContent = "Step two — " + cat.name;
    subjectsTitle.textContent = cat.name;
    subjectsSub.textContent = cat.tagline + " Choose a subject to see what it really involves.";

    subjectGrid.innerHTML = "";

    cat.subjects.forEach((subjectId) => {
      const subj = getSubject(subjectId);
      if (!subj) return;

      const card = document.createElement("button");
      card.className = "subject-card";
      card.innerHTML = `
        <h4 class="subject-card-name">${subj.name}</h4>
        <p class="subject-card-short">${subj.short}</p>
      `;
      card.addEventListener("click", () => goDetail(subj.id));
      subjectGrid.appendChild(card);
    });
  }

  /* ---------- render: subject detail ---------- */

  function renderDetail(subjectId) {
    const subj = getSubject(subjectId);
    if (!subj) return;

    const cat = getCategory(subj.category);

    detailEyebrow.textContent = (cat ? cat.name : "") + " — Step three";
    detailTitle.textContent = subj.name;
    detailShort.textContent = subj.short;
    detailOverview.textContent = subj.overview;
    detailDayLife.textContent = subj.dayInLife;
    detailRealTalk.textContent = subj.realTalk;

    /* admission path */
    detailPath.innerHTML = "";
    subj.admissionPath.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      detailPath.appendChild(li);
    });

    /* subfields */
    subfieldsLabel.textContent = "Where " + subj.name + " branches";
    subfieldGrid.innerHTML = "";

    subj.subfields.forEach((sf) => {
      const card = document.createElement("div");
      const hasDeepDive = subj.cyberSecurityDeepDive && sf.name === "Cyber Security";

      card.className = "subfield-card" + (hasDeepDive ? " is-clickable" : "");
      card.innerHTML = `
        <div class="subfield-name">
          <span>${sf.name}</span>
          ${hasDeepDive ? '<span class="arrow">See full breakdown →</span>' : ""}
        </div>
        <p class="subfield-focus">${sf.focus}</p>
        <p class="subfield-note">${sf.note}</p>
      `;

      if (hasDeepDive) {
        card.addEventListener("click", () => goDeepDive(subj.id));
      }

      subfieldGrid.appendChild(card);
    });
  }

  /* ---------- render: deep dive (cyber security etc.) ---------- */

  function renderDeepDive(subjectId) {
    const subj = getSubject(subjectId);
    if (!subj || !subj.cyberSecurityDeepDive) return;

    const dd = subj.cyberSecurityDeepDive;

    deepdiveTitle.textContent = "Cyber Security";
    deepdiveIntro.textContent = dd.intro;
    deepdivePrep.textContent = dd.preparation;

    segmentList.innerHTML = "";
    dd.segments.forEach((seg) => {
      const item = document.createElement("div");
      item.className = "segment-item";
      item.innerHTML = `
        <div class="segment-name">${seg.name}</div>
        <div>
          <p class="segment-what">${seg.what}</p>
          <p class="segment-prep"><span class="segment-prep-label">Prep</span>${seg.prep}</p>
        </div>
      `;
      segmentList.appendChild(item);
    });
  }

  /* ---------- entry points wiring ---------- */

  document.getElementById("brandHome").addEventListener("click", goLanding);

  document.getElementById("deepDiveBtn").addEventListener("click", () => {
    document.getElementById("whySection").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("enterExplorerBtn").addEventListener("click", () => {
    renderCategories();
    showView("categories");
  });

  /* ---------- init ---------- */

  renderTrail();

})();