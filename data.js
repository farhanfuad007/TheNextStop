/* =========================================================
   NEXT STEP — DATA FILE
   ---------------------------------------------------------
   This file holds ALL subject / career content, separate
   from the UI code. To add a new subject or category, just
   add a new object below following the same shape — the
   interface will pick it up automatically.
   ========================================================= */

const NEXT_STEP_DATA = {

  categories: [
    {
      id: "sciences",
      name: "Sciences",
      tagline: "Understand how the world works, then change it.",
      color: "#3A7D7B",
      subjects: ["medicine", "biology", "physics", "chemistry", "cs", "environmental-science"]
    },
    {
      id: "engineering",
      name: "Engineering",
      tagline: "Build the things science makes possible.",
      color: "#E8A93B",
      subjects: ["software-engineering", "civil-engineering", "electrical-engineering", "mechanical-engineering"]
    },
    {
      id: "commerce",
      name: "Commerce",
      tagline: "Learn how value is created, moved, and measured.",
      color: "#D96C5F",
      subjects: ["economics", "accounting", "business-admin", "finance"]
    },
    {
      id: "arts",
      name: "Arts & Humanities",
      tagline: "Study what makes us human, and how to say it well.",
      color: "#8C7BC4",
      subjects: ["english-lit", "psychology", "law", "journalism", "fine-arts"]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      tagline: "Care for people at the most important moments of their lives.",
      color: "#5FA8D9",
      subjects: ["nursing", "pharmacy", "public-health", "dentistry"]
    }
  ],

  subjects: {

    /* ============ SCIENCES ============ */

    medicine: {
      id: "medicine",
      name: "Medicine",
      category: "sciences",
      icon: "stethoscope",
      short: "The study and practice of diagnosing, treating, and preventing illness.",
      overview: "Medicine is one of the longest and most demanding academic paths — typically 5-6 years of study followed by years of supervised practice. Doctors don't just treat sickness; they carry the weight of decisions that directly change whether someone gets better. It suits people who can stay calm under pressure, who genuinely like people, and who don't mind a decade of delayed reward before real independence.",
      dayInLife: "Rounds start early — often before 7am. A typical day is a mix of patient consultations, reading scans and lab results, discussing cases with senior doctors, and documentation. No two days are the same, and interruptions are constant. Emotional weight is part of the job: some days you deliver good news, some days you don't.",
      admissionPath: [
        "Strong Biology, Chemistry, and Physics at the higher-secondary level",
        "Entrance exam (varies by country — e.g. MCAT, NEET, UCAT, or university-specific tests)",
        "MBBS or equivalent medical degree (5-6 years)",
        "Internship / house job (1 year, supervised clinical practice)",
        "Specialization via residency (3-7 years depending on the field)"
      ],
      subfields: [
        { name: "Cardiology", focus: "Heart and blood vessels", note: "Long residency, high demand, high stress, high reward." },
        { name: "Pulmonology", focus: "Lungs and the respiratory system", note: "Growing field given rising respiratory illness rates globally." },
        { name: "Neurology", focus: "Brain and nervous system", note: "One of the most intellectually demanding specializations." },
        { name: "Pediatrics", focus: "Medical care for infants, children, and teens", note: "Requires patience and comfort working with young patients and worried parents." },
        { name: "Psychiatry", focus: "Mental health and behavioral disorders", note: "Shorter residency than surgical fields; growing global demand." },
        { name: "General Surgery", focus: "Operative treatment of injury and disease", note: "Physically demanding, long training, hands-on from early on." },
        { name: "Dermatology", focus: "Skin, hair, and nail conditions", note: "Highly competitive to get into; better work-life balance than most specialties." },
        { name: "Radiology", focus: "Diagnosis through medical imaging", note: "Less direct patient contact; strong fit for detail-oriented, analytical minds." }
      ],
      realTalk: "The biggest regret medical students report isn't choosing medicine — it's choosing it without understanding how long the road really is, or picking a specialty later purely for prestige rather than fit. Shadow a doctor before you commit if you possibly can."
    },

    biology: {
      id: "biology",
      name: "Biology",
      category: "sciences",
      icon: "leaf",
      short: "The study of living organisms — from cells to entire ecosystems.",
      overview: "Biology is broader than most people assume — it's not just 'pre-med.' It splits into life at the microscopic level (molecular biology, genetics) and life at the ecosystem level (botany, zoology, ecology). A biology degree opens doors to research, healthcare-adjacent careers, environmental work, biotech, and education.",
      dayInLife: "Varies hugely by specialization — a botanist might spend a day in a greenhouse or field site, while a molecular biologist spends it at a lab bench running experiments and analyzing data. Research roles involve long stretches of trial, failure, and slow iteration.",
      admissionPath: [
        "Strong Biology and Chemistry at higher-secondary level",
        "Bachelor's degree in Biology or a specialization (Botany, Zoology, Microbiology, Genetics) — typically 4 years",
        "Master's or PhD required for most research or academic careers",
        "Lab experience / internships strongly recommended during undergrad"
      ],
      subfields: [
        { name: "Botany", focus: "Plant life, agriculture, and plant genetics", note: "Growing relevance in food security and climate-resilient crops." },
        { name: "Zoology", focus: "Animal life, behavior, and physiology", note: "Path into wildlife conservation, veterinary science, or research." },
        { name: "Genetics", focus: "Heredity and gene function", note: "High-growth field due to gene therapy and personalized medicine." },
        { name: "Microbiology", focus: "Bacteria, viruses, and microscopic organisms", note: "Central to vaccine development and infectious disease research." },
        { name: "Marine Biology", focus: "Ocean life and ecosystems", note: "Competitive field; often requires fieldwork in remote locations." }
      ],
      realTalk: "A lot of students pick biology assuming it automatically leads to medical school, then discover mid-degree they actually want lab research or fieldwork, not clinical practice. These need very different next steps — decide early which direction you're aiming for."
    },

    physics: {
      id: "physics",
      name: "Physics",
      category: "sciences",
      icon: "atom",
      short: "The study of matter, energy, and the fundamental laws of the universe.",
      overview: "Physics is intellectually rigorous and mathematically heavy. It trains a kind of problem-solving that transfers well beyond physics itself — many physics graduates end up in finance, data science, or engineering because the analytical skillset is so portable. Pure physics research (academia) is a long, competitive path with limited positions at the top.",
      dayInLife: "Undergraduate life is dense with problem sets and lab work. At the research level, day-to-day work is either theoretical (equations, simulations, papers) or experimental (building and running physical experiments, often in large teams for fields like particle physics).",
      admissionPath: [
        "Strong Mathematics and Physics at higher-secondary level — this subject is unforgiving of weak math foundations",
        "Bachelor's in Physics (4 years)",
        "Master's/PhD required for research or academic careers",
        "Postdoctoral research typically required before a permanent academic position"
      ],
      subfields: [
        { name: "Astrophysics", focus: "Stars, galaxies, and the universe at large", note: "Glamorous but extremely competitive academically." },
        { name: "Particle Physics", focus: "Fundamental particles and forces", note: "Often requires work at large research facilities (e.g. CERN)." },
        { name: "Condensed Matter Physics", focus: "Properties of solid and liquid matter", note: "Strong industry ties to materials science and semiconductors." },
        { name: "Medical Physics", focus: "Physics applied to medical imaging and radiation therapy", note: "More direct industry/clinical job market than pure research physics." }
      ],
      realTalk: "If you love physics but are unsure about a research career, know that a physics degree is one of the most flexible 'launchpad' degrees — into finance, engineering, data science — as long as you build some programming skills alongside it."
    },

    chemistry: {
      id: "chemistry",
      name: "Chemistry",
      category: "sciences",
      icon: "flask",
      short: "The study of substances, their properties, and how they react and combine.",
      overview: "Chemistry sits at the intersection of biology and physics, and it's the backbone of pharmaceuticals, materials science, and much of manufacturing. It's lab-heavy from the start, and most serious careers in the field expect at least a Master's degree.",
      dayInLife: "Undergraduate life alternates lecture theory with hands-on lab sessions. Industry chemists spend significant time in labs running and documenting experiments; the work rewards precision and patience over speed.",
      admissionPath: [
        "Strong Chemistry, Mathematics, and Physics at higher-secondary level",
        "Bachelor's in Chemistry (4 years)",
        "Master's or PhD for research, pharmaceutical, or academic roles",
        "Industry-specific certifications depending on sector (e.g. pharmaceutical regulatory knowledge)"
      ],
      subfields: [
        { name: "Organic Chemistry", focus: "Carbon-based compounds", note: "Foundation for pharmaceutical and materials research." },
        { name: "Biochemistry", focus: "Chemical processes within living organisms", note: "Strong bridge into medicine, genetics, and biotech." },
        { name: "Analytical Chemistry", focus: "Identifying and measuring chemical composition", note: "In demand across manufacturing, forensics, and quality control." },
        { name: "Pharmaceutical Chemistry", focus: "Designing and developing drugs", note: "Directly tied to the pharmaceutical industry job market." }
      ],
      realTalk: "Chemistry graduates who stop at a Bachelor's often find the job market tighter than expected — most well-paid roles want a Master's minimum. Plan for graduate study from day one if this is your path."
    },

    "environmental-science": {
      id: "environmental-science",
      name: "Environmental Science",
      category: "sciences",
      icon: "globe",
      short: "The study of the environment and solutions to environmental problems.",
      overview: "One of the fastest-growing fields globally as climate concerns push governments and companies to hire environmental expertise. It's interdisciplinary — pulling in biology, chemistry, geography, and policy — which makes it a good fit for people who don't want to be boxed into one narrow lane.",
      dayInLife: "Ranges from fieldwork (sample collection, site assessments) to lab analysis to policy writing, depending on specialization. Many roles mix outdoor and desk work.",
      admissionPath: [
        "Solid Biology, Chemistry, and Geography at higher-secondary level",
        "Bachelor's in Environmental Science (4 years)",
        "Master's recommended for policy, consulting, or specialized research roles",
        "Fieldwork experience and internships are highly valued by employers"
      ],
      subfields: [
        { name: "Climate Science", focus: "Climate systems and change over time", note: "High-growth area tied to global policy and research funding." },
        { name: "Environmental Policy", focus: "Regulation and governance of environmental issues", note: "Good fit for science-minded students who also like law/policy." },
        { name: "Conservation Biology", focus: "Protecting ecosystems and species", note: "Often fieldwork-heavy; competitive nonprofit and government roles." }
      ],
      realTalk: "This field has strong long-term demand but historically modest entry-level pay in many countries — worth researching the job market in your specific region before committing."
    },

    cs: {
      id: "cs",
      name: "Computer Science",
      category: "sciences",
      icon: "cpu",
      short: "The study of computation, algorithms, and how to build systems that solve problems.",
      overview: "Computer Science is theory-first: algorithms, data structures, computation theory, systems design. It's different from Software Engineering, which is more about building real-world production software. A CS degree gives you the deepest technical foundation and the most flexibility — you can move into research, software, data, AI, or hardware-adjacent fields.",
      dayInLife: "Heavy on problem-solving: writing and debugging code, working through proofs and algorithmic problems, and — especially in upper years — building larger projects. Group work and technical presentations become more common later in the degree.",
      admissionPath: [
        "Strong Mathematics at higher-secondary level (especially discrete math and logic)",
        "Bachelor's in Computer Science (4 years)",
        "Internships during undergrad are almost mandatory for competitive job placement",
        "Master's optional — useful for research, AI/ML specialization, or academia"
      ],
      subfields: [
        { name: "Data Science", focus: "Extracting insight and predictions from data", note: "Needs strong statistics alongside programming — not just coding skill." },
        { name: "Web Development", focus: "Building websites and web applications", note: "Fastest entry point into the industry; huge freelance/startup opportunity." },
        { name: "IoT (Internet of Things)", focus: "Connected devices and embedded systems", note: "Blends software with hardware — good fit if you like both." },
        { name: "Cyber Security", focus: "Protecting systems and data from attacks", note: "See the full breakdown below — this is a deep field on its own." },
        { name: "Artificial Intelligence / Machine Learning", focus: "Building systems that learn from data", note: "Currently the highest-demand, highest-hype specialization — also the most competitive." },
        { name: "Game Development", focus: "Building interactive games and engines", note: "Passion-driven field; pay is often lower relative to other CS tracks early on." }
      ],
      cyberSecurityDeepDive: {
        intro: "Cyber Security is one of the fastest-growing sectors inside Computer Science, driven by the sheer volume of systems now connected to the internet. It's a defensive and investigative field — you're either preventing attacks, detecting them, or responding after the fact.",
        segments: [
          { name: "Penetration Testing (Ethical Hacking)", what: "Simulating attacks on systems to find vulnerabilities before real attackers do.", prep: "Strong networking fundamentals, certifications like CEH or OSCP, hands-on practice via platforms like TryHackMe or HackTheBox." },
          { name: "Security Operations (SOC Analyst)", what: "Monitoring systems in real time to detect and respond to active threats.", prep: "Understanding of SIEM tools, incident response processes, comfort working shift-based, high-alertness roles." },
          { name: "Cryptography", what: "Designing systems that keep data secret and secure.", prep: "Heavy mathematics background (number theory, discrete math) — one of the more academic sub-fields." },
          { name: "Network Security", what: "Securing the infrastructure that connects systems together.", prep: "Deep networking knowledge (firewalls, VPNs, protocols) — often a natural next step after general IT/networking experience." },
          { name: "Digital Forensics", what: "Investigating breaches after they happen to determine what occurred and recover evidence.", prep: "Attention to detail, legal/procedural knowledge, often works closely with law enforcement or corporate legal teams." },
          { name: "Governance, Risk & Compliance (GRC)", what: "Ensuring organizations meet security regulations and manage risk properly.", prep: "Less hands-on-keyboard, more policy and process — good fit if you like security but not constant technical firefighting." }
        ],
        preparation: "Major in Computer Science or a dedicated Cyber Security program. Build hands-on skills outside class — capture-the-flag competitions, home lab setups, and certifications matter as much as your degree here. Internships in IT or security teams during undergrad make a major difference in first-job placement."
      },
      realTalk: "The single most common regret CS students report: choosing it because 'tech pays well' without ever actually enjoying programming. This is a field where genuine curiosity compounds — if you don't enjoy the process of solving logic puzzles for hours, reconsider before committing four years."
    },

    /* ============ ENGINEERING ============ */

    "software-engineering": {
      id: "software-engineering",
      name: "Software Engineering",
      category: "engineering",
      icon: "code",
      short: "Applying engineering principles to design, build, and maintain real-world software systems.",
      overview: "Where Computer Science is theory-heavy, Software Engineering is built around the practical discipline of shipping and maintaining working software at scale — architecture, testing, team workflows, and system design. It's the more direct route into industry software jobs.",
      dayInLife: "Writing code, reviewing teammates' code, attending planning meetings, debugging production issues, and designing system architecture. Most professional work happens in teams using structured workflows (agile, sprints, code review).",
      admissionPath: [
        "Strong Mathematics at higher-secondary level",
        "Bachelor's in Software Engineering (4 years) — coursework overlaps heavily with CS but adds project management, system design, and software architecture",
        "Personal or team projects (portfolio) matter enormously for job applications",
        "Internships during undergrad are close to essential for competitive placement"
      ],
      subfields: [
        { name: "Frontend Development", focus: "The visual, interactive part of applications users see", note: "Fast-moving ecosystem; strong design sense is a real advantage." },
        { name: "Backend Development", focus: "Servers, databases, and application logic behind the scenes", note: "More systems-thinking heavy; often better long-term pay stability." },
        { name: "DevOps / Infrastructure", focus: "Automating and managing how software is deployed and run", note: "High demand, blends software and systems administration skills." },
        { name: "Mobile Development", focus: "Building apps for phones and tablets", note: "Platform-specific (iOS/Android) — deep but narrower specialization." },
        { name: "QA / Test Engineering", focus: "Ensuring software works correctly before release", note: "Great entry point into tech; less saturated than pure development roles." }
      ],
      realTalk: "Students often confuse this with Computer Science and pick whichever their university offers without realizing the emphasis is different. If you like building and shipping real things over abstract theory, Software Engineering is usually the better direct-to-industry fit."
    },

    "civil-engineering": {
      id: "civil-engineering",
      name: "Civil Engineering",
      category: "engineering",
      icon: "building",
      short: "Designing and building the physical infrastructure of society — roads, bridges, buildings, water systems.",
      overview: "Civil engineering is one of the oldest engineering disciplines and remains foundational to every growing economy. It's a strong choice for people who want to see tangible, physical results of their work in the real world, and who don't mind regulatory and safety-driven processes.",
      dayInLife: "A mix of site visits, technical drawing/modeling software (CAD), regulatory paperwork, and coordination with contractors and other engineers. Early-career roles often involve more site supervision; senior roles shift toward design and project management.",
      admissionPath: [
        "Strong Mathematics and Physics at higher-secondary level",
        "Bachelor's in Civil Engineering (4 years)",
        "Professional licensure typically required to practice independently (varies by country)",
        "Internships/site experience during study strongly recommended"
      ],
      subfields: [
        { name: "Structural Engineering", focus: "Designing buildings and structures to withstand load and stress", note: "Highly technical; licensure especially important here." },
        { name: "Transportation Engineering", focus: "Roads, transit systems, and traffic infrastructure", note: "Growing relevance with urban planning and smart-city projects." },
        { name: "Water Resources Engineering", focus: "Water supply, drainage, and flood management systems", note: "Critical field in climate-vulnerable regions." },
        { name: "Geotechnical Engineering", focus: "How structures interact with soil and rock", note: "Foundational to virtually every large construction project." }
      ],
      realTalk: "This field rewards patience — projects can take years from design to completion, and regulatory approval processes are slow. If you want fast-moving, quick-feedback work, this may frustrate you."
    },

    "electrical-engineering": {
      id: "electrical-engineering",
      name: "Electrical Engineering",
      category: "engineering",
      icon: "zap",
      short: "Designing systems that generate, transmit, and use electrical power and signals.",
      overview: "Electrical engineering underlies everything from power grids to microchips to telecommunications. It's mathematically demanding and splits broadly into power systems (large-scale) and electronics/signals (small-scale, chip-level).",
      dayInLife: "Design and simulation work using specialized software, circuit testing in labs, and — depending on specialization — either large infrastructure projects or micro-scale chip and device design.",
      admissionPath: [
        "Strong Mathematics and Physics at higher-secondary level",
        "Bachelor's in Electrical Engineering (4 years)",
        "Professional licensure for certain roles (especially power systems)",
        "Master's often pursued for specialization in electronics, telecom, or power systems"
      ],
      subfields: [
        { name: "Power Systems", focus: "Generation and distribution of electrical power", note: "Stable, essential-infrastructure career path." },
        { name: "Electronics", focus: "Circuit design at the chip and device level", note: "Ties closely to the semiconductor industry." },
        { name: "Telecommunications", focus: "Systems that transmit information over distance", note: "Growing with 5G and satellite communication expansion." },
        { name: "Control Systems", focus: "Automated systems that regulate behavior of machines", note: "Core to robotics and industrial automation." }
      ],
      realTalk: "This is one of the more math-heavy engineering fields — students who struggle with calculus and differential equations early on often find the degree significantly harder than they expected."
    },

    "mechanical-engineering": {
      id: "mechanical-engineering",
      name: "Mechanical Engineering",
      category: "engineering",
      icon: "cog",
      short: "Designing and building machines, engines, and mechanical systems.",
      overview: "Often called the broadest engineering discipline — mechanical engineers work across automotive, aerospace, manufacturing, robotics, and energy sectors. The breadth is a strength (many career paths) but also means the degree can feel less specialized than others until you choose a track.",
      dayInLife: "CAD design work, physical prototyping and testing, working with manufacturing teams, and — in senior roles — project and product management.",
      admissionPath: [
        "Strong Mathematics and Physics at higher-secondary level",
        "Bachelor's in Mechanical Engineering (4 years)",
        "Internships in manufacturing, automotive, or aerospace are highly valued",
        "Professional licensure for certain regulated roles"
      ],
      subfields: [
        { name: "Automotive Engineering", focus: "Vehicle design and systems", note: "Facing major transformation with electric vehicle transition." },
        { name: "Aerospace Engineering", focus: "Aircraft and spacecraft design", note: "Highly competitive, prestigious, often requires further specialization." },
        { name: "Robotics", focus: "Designing autonomous and semi-autonomous machines", note: "Fast-growing intersection with software and AI." },
        { name: "HVAC / Thermal Systems", focus: "Heating, cooling, and thermal energy systems", note: "Steady, essential-infrastructure demand." }
      ],
      realTalk: "Because the field is so broad, many students graduate without a clear specialization and end up in generalist roles. Picking a focus area during undergrad internships pays off significantly at graduation."
    },

    /* ============ COMMERCE ============ */

    economics: {
      id: "economics",
      name: "Economics",
      category: "commerce",
      icon: "trending-up",
      short: "The study of how societies produce, distribute, and consume resources.",
      overview: "Economics is more mathematical than most people expect, especially at higher levels. It's a strong general-purpose degree that opens doors into finance, policy, consulting, and data analysis — but it rewards people who like abstract models and statistics, not just 'business.'",
      dayInLife: "Undergraduate life is coursework-heavy: statistics, modeling, and theory. Professional economists in industry or government spend time on data analysis, report writing, and forecasting.",
      admissionPath: [
        "Strong Mathematics at higher-secondary level",
        "Bachelor's in Economics (4 years)",
        "Master's or PhD required for research, academic, or senior policy roles",
        "Internships in finance, consulting, or government are valuable for job placement"
      ],
      subfields: [
        { name: "Macroeconomics", focus: "Economy-wide phenomena: growth, inflation, unemployment", note: "Central to policy and central-bank careers." },
        { name: "Microeconomics", focus: "Individual and firm-level decision making", note: "Foundation for business strategy and market analysis roles." },
        { name: "Econometrics", focus: "Statistical methods applied to economic data", note: "The most technical, most in-demand specialization within economics." },
        { name: "Development Economics", focus: "Economic growth and policy in developing regions", note: "Common path into NGO, World Bank, or government policy work." }
      ],
      realTalk: "Students who chose economics expecting a business degree are often surprised by how theoretical and math-heavy it becomes past the first year. If you want something more applied and less abstract, Business Administration may fit better."
    },

    accounting: {
      id: "accounting",
      name: "Accounting",
      category: "commerce",
      icon: "file-text",
      short: "Recording, analyzing, and reporting financial information for organizations.",
      overview: "Accounting is one of the more stable, structured career paths — clear qualification requirements, consistent demand, and a defined ladder from junior to senior roles. It suits detail-oriented people who like process and precision over ambiguity.",
      dayInLife: "Reviewing financial records, preparing reports and statements, ensuring regulatory compliance. Around tax season or audit periods, workload increases significantly.",
      admissionPath: [
        "Strong Mathematics at higher-secondary level",
        "Bachelor's in Accounting (4 years)",
        "Professional certification required for senior roles (e.g. CA, CPA, ACCA depending on country)",
        "Certification exams are demanding and typically take 2-3 years alongside early career work"
      ],
      subfields: [
        { name: "Financial Accounting", focus: "Preparing official financial statements", note: "Foundational — most accountants start here." },
        { name: "Management Accounting", focus: "Internal financial analysis for business decisions", note: "More strategic, closer to business leadership roles." },
        { name: "Auditing", focus: "Independently verifying financial records", note: "Common path into Big Four accounting firms." },
        { name: "Taxation", focus: "Tax planning and compliance", note: "Highly specialized, consistent demand regardless of economic conditions." }
      ],
      realTalk: "The professional certification (not just the degree) is what actually unlocks senior roles and higher pay — students who stop at the Bachelor's often plateau early in their careers."
    },

    "business-admin": {
      id: "business-admin",
      name: "Business Administration",
      category: "commerce",
      icon: "briefcase",
      short: "Broad training in how organizations are managed and operated.",
      overview: "A generalist degree covering management, marketing, operations, and strategy. Its flexibility is both its strength and its risk — graduates can go many directions, but without a chosen specialization or strong internships, it can also blend into the crowd in a competitive job market.",
      dayInLife: "Varies enormously by role — anything from marketing campaign planning to operations management to leadership meetings. Entry-level roles are often broad and rotate across functions before specializing.",
      admissionPath: [
        "No specific subject requirement, though Mathematics is helpful",
        "Bachelor's in Business Administration (4 years)",
        "MBA often pursued later for leadership-track roles (usually after some work experience)",
        "Internships and real projects matter more here than in almost any other field, given the degree's breadth"
      ],
      subfields: [
        { name: "Marketing", focus: "Understanding and reaching customers", note: "Blends creative and analytical skill; highly competitive entry-level market." },
        { name: "Operations Management", focus: "Making organizational processes efficient", note: "Strong overlap with supply chain and logistics roles." },
        { name: "Human Resources", focus: "Managing people and workplace culture", note: "Steady demand across every industry." },
        { name: "Entrepreneurship", focus: "Starting and growing new ventures", note: "High risk, high upside — best paired with a practical skill (technical or sales)." }
      ],
      realTalk: "This is the degree students most often pick 'because they're not sure what else to do.' That's not necessarily wrong, but without deliberately specializing through internships and electives, graduates can struggle to differentiate themselves to employers."
    },

    finance: {
      id: "finance",
      name: "Finance",
      category: "commerce",
      icon: "dollar-sign",
      short: "Managing money, investments, and financial risk for individuals and organizations.",
      overview: "Finance is more quantitative and competitive than general business degrees, especially for roles in investment banking or asset management. It rewards strong analytical skills and — particularly for top-tier roles — a high tolerance for long hours early in your career.",
      dayInLife: "Financial modeling, market analysis, client or stakeholder meetings, and (in high-finance roles) genuinely long hours, especially early career.",
      admissionPath: [
        "Strong Mathematics at higher-secondary level",
        "Bachelor's in Finance (4 years)",
        "Professional certifications (e.g. CFA) significantly boost credibility for investment roles",
        "Internships — especially in banking — are often make-or-break for landing competitive first jobs"
      ],
      subfields: [
        { name: "Investment Banking", focus: "Raising capital and advising on major financial transactions", note: "Extremely competitive, notoriously long hours, high early-career pay." },
        { name: "Corporate Finance", focus: "Managing a company's own financial strategy", note: "Better work-life balance than investment banking, still analytically demanding." },
        { name: "Asset Management", focus: "Investing money on behalf of clients", note: "Performance-driven; results are highly visible and measurable." },
        { name: "Personal Financial Planning", focus: "Helping individuals manage their money and future", note: "More relationship-driven, often client-facing career." }
      ],
      realTalk: "Students drawn purely by the salary headlines often underestimate how competitive and demanding entry-level finance roles are. It's a legitimate path, but it rewards people who genuinely enjoy the analytical grind, not just the paycheck."
    },

    /* ============ ARTS & HUMANITIES ============ */

    "english-lit": {
      id: "english-lit",
      name: "English Language & Literature",
      category: "arts",
      icon: "book-open",
      short: "The study of written language, literature, and how meaning is made through words.",
      overview: "Often underestimated as a career path, but it builds genuinely rare skills: precise writing, critical thinking, and the ability to construct an argument — all of which transfer into law, publishing, journalism, marketing, UX writing, and education.",
      dayInLife: "Heavy reading load, essay writing, seminar discussion. Careers after graduation vary hugely depending on chosen direction — teaching, publishing, content strategy, law school, and more.",
      admissionPath: [
        "Strong grades in English/Language subjects at higher-secondary level",
        "Bachelor's in English Language & Literature (3-4 years depending on country)",
        "Further specialization (education, publishing, law) usually requires additional qualification after the degree",
        "Building a writing portfolio during study significantly helps post-graduation options"
      ],
      subfields: [
        { name: "Literary Studies", focus: "Analysis and criticism of literary works", note: "Common path into academia, publishing, or further postgraduate study." },
        { name: "Linguistics", focus: "The scientific study of language structure", note: "More technical than people expect — overlaps with cognitive science." },
        { name: "Creative Writing", focus: "Writing original fiction, poetry, and prose", note: "Rewarding but financially unpredictable without a second skill or job." },
        { name: "Technical & UX Writing", focus: "Clear writing for products, software, and documentation", note: "One of the strongest-paying, most in-demand practical outcomes of this degree today." }
      ],
      realTalk: "The biggest misconception is that this degree only leads to teaching. In reality, the skill it builds — clear written communication — is scarce and valuable across almost every industry, if you pair it with a practical direction."
    },

    psychology: {
      id: "psychology",
      name: "Psychology",
      category: "arts",
      icon: "brain",
      short: "The scientific study of the mind and behavior.",
      overview: "Psychology is more scientific and statistics-heavy than its popular image suggests. Clinical practice (therapy, counseling) requires significant further study beyond the Bachelor's — most career paths in the field need a Master's or Doctorate to practice independently.",
      dayInLife: "Undergraduate life includes research methods, statistics, and experimental design alongside theory. Clinical psychologists spend their days in sessions with clients; research psychologists spend it designing studies and analyzing data.",
      admissionPath: [
        "Solid grades across sciences and mathematics at higher-secondary level",
        "Bachelor's in Psychology (4 years)",
        "Master's or Doctorate required for clinical practice (adds 2-6 more years)",
        "Licensure required to practice as a therapist or clinical psychologist (varies by country)"
      ],
      subfields: [
        { name: "Clinical Psychology", focus: "Diagnosing and treating mental health conditions", note: "Requires a Doctorate in most countries to practice independently." },
        { name: "Counseling Psychology", focus: "Helping people navigate life challenges and relationships", note: "Slightly shorter path to practice than clinical psychology in many countries." },
        { name: "Industrial-Organizational Psychology", focus: "Applying psychology to workplaces", note: "Strong, less-saturated career path in HR and organizational consulting." },
        { name: "Cognitive Psychology", focus: "How people think, remember, and process information", note: "Common path into research or UX research roles." }
      ],
      realTalk: "The single most common regret: assuming a Bachelor's in Psychology alone qualifies you to become a therapist. In most countries, it doesn't — real clinical practice requires years of further study. Know this going in."
    },

    law: {
      id: "law",
      name: "Law",
      category: "arts",
      icon: "scale",
      short: "The study of legal systems, rights, and how justice is structured and applied.",
      overview: "Law rewards precise reading, argumentation, and a genuine tolerance for dense, technical material. It's a demanding, text-heavy path — not the courtroom-drama version many students imagine. Most law graduates never see a courtroom; corporate and advisory law is far more common.",
      dayInLife: "Heavy reading of case law and statutes, drafting documents, client meetings, and — for litigators specifically — court appearances. Corporate lawyers spend more time on contracts and advisory work than in court.",
      admissionPath: [
        "Strong performance across humanities subjects at higher-secondary level, especially critical reading and writing",
        "Law degree (LLB, 3-4 years, or JD after a Bachelor's depending on country's system)",
        "Bar exam / licensing exam required to practice",
        "Articling or clerkship period required in many countries before full qualification"
      ],
      subfields: [
        { name: "Corporate Law", focus: "Legal matters for businesses — contracts, mergers, compliance", note: "Highest-paying common specialization, also most demanding hours." },
        { name: "Criminal Law", focus: "Prosecution or defense in criminal cases", note: "Emotionally demanding; public sector pay often lower than corporate law." },
        { name: "Human Rights / Public Interest Law", focus: "Advocacy for civil rights and public causes", note: "Meaningful work, typically lower pay than corporate tracks." },
        { name: "Intellectual Property Law", focus: "Protecting patents, trademarks, and creative works", note: "Growing field tied closely to tech and pharmaceutical industries." }
      ],
      realTalk: "Many students choose law expecting courtroom drama and instead spend their careers in contract review and document drafting. If you love reading, writing, and rigorous argument, that's the real day-to-day — decide if that appeals to you specifically, not the TV version."
    },

    journalism: {
      id: "journalism",
      name: "Journalism",
      category: "arts",
      icon: "mic",
      short: "Investigating, writing, and reporting news and information to the public.",
      overview: "A field going through real structural change — traditional print journalism has shrunk, while digital, multimedia, and independent journalism have grown. It rewards curiosity, fast writing under deadline pressure, and increasingly, comfort with video/audio production alongside writing.",
      dayInLife: "Chasing sources, verifying facts, writing under deadline, and increasingly managing your own social/digital presence as part of the job. Freelance journalism adds the additional work of finding and pitching stories.",
      admissionPath: [
        "Strong English/writing skills at higher-secondary level",
        "Bachelor's in Journalism or a related field (3-4 years)",
        "Building a public portfolio (published articles, a blog, multimedia work) during study is essential",
        "Internships at media outlets are often the actual entry point into paid work"
      ],
      subfields: [
        { name: "Investigative Journalism", focus: "Long-form, deeply researched reporting on important issues", note: "Prestigious but resource-intensive; harder to break into." },
        { name: "Broadcast Journalism", focus: "Reporting for TV and radio", note: "Requires on-camera/on-air comfort alongside writing skill." },
        { name: "Digital & Multimedia Journalism", focus: "News reporting across web, video, and social platforms", note: "The fastest-growing and most in-demand track today." },
        { name: "Sports / Business / Specialist Journalism", focus: "Reporting focused on a specific subject area", note: "Deep subject knowledge becomes as valuable as writing skill." }
      ],
      realTalk: "Job security in traditional journalism has genuinely declined — this is worth entering with eyes open, and with a self-built portfolio and digital skillset rather than relying purely on the degree."
    },

    "fine-arts": {
      id: "fine-arts",
      name: "Fine Arts",
      category: "arts",
      icon: "palette",
      short: "The study and practice of visual art — painting, sculpture, design, and beyond.",
      overview: "A genuinely rewarding but financially unpredictable path unless paired with a practical direction like design, illustration for industry, or art education. Passion alone doesn't guarantee income — the students who do best usually combine artistic skill with a specific commercial application.",
      dayInLife: "Studio time is the core of the degree — painting, sculpting, or digital design work, alongside critique sessions where your work is reviewed by peers and instructors.",
      admissionPath: [
        "A portfolio is typically required for admission, alongside academic grades",
        "Bachelor of Fine Arts (BFA, typically 4 years)",
        "Further specialization (illustration, animation, gallery/curatorial work) shapes career direction significantly",
        "Building a public portfolio/personal brand during study is essential for freelance or commercial work after graduation"
      ],
      subfields: [
        { name: "Illustration", focus: "Creating images for books, media, and products", note: "Strong commercial demand, especially with digital/freelance work." },
        { name: "Animation", focus: "Creating moving visual art for film, games, and media", note: "High demand in gaming and entertainment industries." },
        { name: "Graphic Design", focus: "Visual communication for brands and media", note: "Most direct-to-industry path within fine arts." },
        { name: "Fine Art / Gallery Practice", focus: "Creating and exhibiting original artwork", note: "The most passion-driven, least financially predictable track — plan accordingly." }
      ],
      realTalk: "This is the field where 'follow your passion' most needs a practical partner. The students who build sustainable careers usually pair genuine artistic skill with a commercial specialization (design, illustration, animation) rather than pursuing gallery art alone as a first career."
    },

    /* ============ HEALTHCARE ============ */

    nursing: {
      id: "nursing",
      name: "Nursing",
      category: "healthcare",
      icon: "heart-pulse",
      short: "Direct patient care, health education, and support across every stage of illness and recovery.",
      overview: "Nursing offers one of the most reliable job markets in healthcare, with strong global demand and a clearer, shorter path to a stable career than medicine. It's hands-on and emotionally demanding — you're often the person spending the most time directly with patients.",
      dayInLife: "Direct patient care — monitoring vitals, administering medication, supporting patients and families, and coordinating with doctors. Shift work (including nights) is standard, especially early in a career.",
      admissionPath: [
        "Strong Biology and Chemistry at higher-secondary level",
        "Bachelor of Science in Nursing (4 years) or diploma-level nursing programs in some countries (shorter path)",
        "Licensing exam required to practice (e.g. NCLEX in the US, or country-equivalent)",
        "Specializations (ICU, pediatric, surgical) typically develop through experience and additional certification after initial licensure"
      ],
      subfields: [
        { name: "Critical Care Nursing (ICU)", focus: "Caring for critically ill patients", note: "High-intensity, high-skill specialization." },
        { name: "Pediatric Nursing", focus: "Nursing care for infants, children, and teens", note: "Requires strong communication skills with both children and families." },
        { name: "Psychiatric Nursing", focus: "Care for patients with mental health conditions", note: "Growing demand alongside broader mental health awareness." },
        { name: "Nurse Anesthetist / Advanced Practice", focus: "Advanced clinical roles with expanded responsibilities", note: "Requires additional post-graduate qualification; significantly higher pay." }
      ],
      realTalk: "Burnout is a real and well-documented issue in nursing, particularly in high-intensity units. It's a genuinely meaningful career, but going in aware of the emotional and physical demands — and building support systems early — matters."
    },

    pharmacy: {
      id: "pharmacy",
      name: "Pharmacy",
      category: "healthcare",
      icon: "pill",
      short: "The science of medications — how they're prepared, dispensed, and used safely.",
      overview: "Pharmacy combines chemistry, biology, and direct patient interaction. It offers a clearer, more predictable career path than medicine with a shorter total training time, and options ranging from retail pharmacy to hospital settings to pharmaceutical industry research.",
      dayInLife: "Retail/hospital pharmacists spend the day dispensing medication, checking for drug interactions, and counseling patients. Industry-based pharmacists may work in research, regulatory affairs, or drug development instead.",
      admissionPath: [
        "Strong Biology and Chemistry at higher-secondary level",
        "Doctor of Pharmacy (PharmD) or equivalent — typically 4-6 years depending on country",
        "Licensing exam required to practice",
        "Further specialization (clinical pharmacy, industry roles) often requires additional certification or residency"
      ],
      subfields: [
        { name: "Retail/Community Pharmacy", focus: "Direct patient-facing dispensing and counseling", note: "Most common first career path for pharmacy graduates." },
        { name: "Hospital/Clinical Pharmacy", focus: "Medication management within hospital care teams", note: "More collaborative with doctors; often requires residency training." },
        { name: "Pharmaceutical Industry", focus: "Drug research, development, and regulatory affairs", note: "Less patient contact, more research and corporate structure." }
      ],
      realTalk: "The retail pharmacy job market has become more saturated in some countries in recent years — it's worth researching regional demand specifically before committing, rather than assuming it's automatically secure everywhere."
    },

    "public-health": {
      id: "public-health",
      name: "Public Health",
      category: "healthcare",
      icon: "shield-plus",
      short: "Protecting and improving health at the population level, rather than one patient at a time.",
      overview: "Public health is about systems, policy, and prevention rather than individual clinical treatment. It's a strong fit for people who want healthcare impact without necessarily wanting to be a clinician — combining elements of statistics, policy, and health science.",
      dayInLife: "Varies hugely — could involve analyzing disease outbreak data, designing community health programs, writing policy recommendations, or coordinating public health campaigns.",
      admissionPath: [
        "No strict subject requirement, though Biology and Mathematics/Statistics help",
        "Bachelor's in Public Health (4 years), though many enter via a Master of Public Health (MPH) after a different first degree",
        "MPH is often the real entry point into serious public health careers",
        "Government or NGO experience/internships significantly help career entry"
      ],
      subfields: [
        { name: "Epidemiology", focus: "Studying patterns and causes of disease in populations", note: "The most technical, statistics-heavy specialization in public health." },
        { name: "Health Policy", focus: "Shaping laws and regulations around healthcare", note: "Good fit for people who like both health and government/policy work." },
        { name: "Global Health", focus: "Health challenges across countries, often in developing regions", note: "Common path into NGO and international organization work." },
        { name: "Environmental Health", focus: "How environmental factors affect population health", note: "Growing overlap with climate and environmental science fields." }
      ],
      realTalk: "Many students discover public health only after starting a different degree — it's genuinely one of the more common 'second path' fields for people who want health-sector impact without clinical practice. It's worth knowing this is a legitimate direct-entry option too."
    },

    dentistry: {
      id: "dentistry",
      name: "Dentistry",
      category: "healthcare",
      icon: "smile",
      short: "Diagnosing and treating conditions of the teeth, gums, and mouth.",
      overview: "Dentistry offers a shorter training path than medicine with strong earning potential and — for many practitioners — better long-term work-life balance, especially in private practice. It's hands-on and precision-focused work.",
      dayInLife: "Patient appointments back-to-back for most of the day — exams, procedures, and patient education. Private practice owners also handle business operations alongside clinical work.",
      admissionPath: [
        "Strong Biology and Chemistry at higher-secondary level",
        "Entrance exam (varies by country)",
        "Bachelor of Dental Surgery (BDS) or equivalent — typically 4-5 years",
        "Licensing exam required to practice",
        "Further specialization (orthodontics, oral surgery) requires additional postgraduate training"
      ],
      subfields: [
        { name: "General Dentistry", focus: "Routine dental care and treatment", note: "Most common path; strong option for private practice ownership." },
        { name: "Orthodontics", focus: "Correcting teeth and jaw alignment", note: "Requires further specialization; among the highest-paid dental specialties." },
        { name: "Oral Surgery", focus: "Surgical procedures on the mouth and jaw", note: "Most demanding specialization, closest to a surgical medical career." },
        { name: "Pediatric Dentistry", focus: "Dental care for children", note: "Requires strong patience and comfort working with young patients." }
      ],
      realTalk: "The upfront cost of dental education is high in many countries, and setting up or buying into a private practice adds further investment — factor the full financial picture in, not just the degree itself."
    }

  }

};
