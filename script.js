const courses = [document.addEventListener('DOMContentLoaded', function() {

    {    // Home page buttons

        emoji: "⚙️",    if (document.getElementById('maps-btn')) {

        title: "Bachelor of Engineering (B.E.) / Bachelor of Technology (B.Tech)",        document.getElementById('maps-btn').onclick = function() {

        about: "4-year degree in various branches like Computer, Mechanical, Civil, Electrical, etc.",            window.open('check10complete.html', '_blank');

        career: "Software Engineer, Mechanical Engineer, Civil Engineer, Data Scientist."        };

    },    }

    {    if (document.getElementById('quiz-btn')) {

        emoji: "🩺",        document.getElementById('quiz-btn').onclick = function() {

        title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",            window.open('quiz.html', '_blank');

        about: "5.5-year professional course to become a doctor.",        };

        career: "Doctor, Surgeon, Medical Officer, Researcher."    }

    },    if (document.getElementById('great-people-btn')) {

    {        document.getElementById('great-people-btn').onclick = function() {

        emoji: "💊",            alert('Great People feature coming soon!');

        title: "Bachelor of Pharmacy (B.Pharm)",        };

        about: "4-year degree focusing on drug formulation, chemistry, and pharmacology.",    }

        career: "Pharmacist, Drug Inspector, Medical Representative, Research Associate."    if (document.getElementById('chatbot-btn')) {

    },        document.getElementById('chatbot-btn').onclick = function() {

    {            alert('Chatbot feature coming soon!');

        emoji: "🔬",        };

        title: "Bachelor of Science in Biotechnology (B.Sc Biotechnology)",    }

        about: "Studies genetics, cell biology, and bioprocesses used in healthcare and agriculture.",    for (let i = 1; i <= 4; i++) {

        career: "Biotechnologist, Lab Technician, Research Scientist, Quality Analyst."        let blankBtn = document.getElementById('blank-btn-' + i);

    },        if (blankBtn) {

    {            blankBtn.onclick = function() {

        emoji: "💻",                alert('Feature under development.');

        title: "Bachelor of Computer Applications (BCA)",            };

        about: "3-year course in computer programming, software, and IT systems.",        }

        career: "Software Developer, Web Developer, Data Analyst, System Administrator."    }

    },    if (document.getElementById('about-btn')) {

    {        document.getElementById('about-btn').onclick = function() {

        emoji: "✈️",            alert('EduPath: Empowering your journey to the right stream and career!');

        title: "Bachelor of Science in Aviation",        };

        about: "Covers principles of flight, air traffic control, and airport operations.",    }

        career: "Pilot, Air Traffic Controller, Aviation Manager, Flight Dispatcher."    // Streams page buttons

    },    if (document.getElementById('diploma-card')) {

    {        document.getElementById('diploma-card').onclick = function() {

        emoji: "🧪",            window.open('diploma.html', '_blank');

        title: "Bachelor of Science in Chemistry / Physics / Mathematics",        };

        about: "Pure science courses focusing on theoretical and practical aspects.",    }

        career: "Scientist, Research Assistant, Lecturer, Lab Technician."    if (document.getElementById('science-card')) {

    },        document.getElementById('science-card').onclick = function() {

    {            window.open('science.html', '_blank');

        emoji: "🧫",        };

        title: "Bachelor of Science in Microbiology",    }

        about: "Studies microorganisms and their impact on humans and the environment.",    if (document.getElementById('commerce-card')) {

        career: "Microbiologist, Pathologist, Food Safety Officer, Research Assistant."        document.getElementById('commerce-card').onclick = function() {

    },            window.open('commerce.html', '_blank');

    {        };

        emoji: "🧠",    }

        title: "Bachelor of Psychology (B.Sc Psychology)",    if (document.getElementById('arts-card')) {

        about: "Studies human behavior, mental health, and cognitive processes.",        document.getElementById('arts-card').onclick = function() {

        career: "Psychologist, Counselor, HR Specialist, Clinical Researcher."            window.open('arts.html', '_blank');

    },        };

    {    }

        emoji: "🌌",});
        title: "Bachelor of Science in Environmental Science",
        about: "Focuses on ecology, pollution control, and sustainability.",
        career: "Environmental Consultant, Wildlife Conservationist, Research Officer."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const closeToggle = document.getElementById('closeToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const closeBtn = document.getElementById('closeBtn');
    const modal = document.getElementById('courseModal');
    
    // Create and populate course cards
    const grid = document.getElementById('courseGrid');
    courses.forEach((course, index) => {
        const card = document.createElement('div');
        card.className = 'stream-card';
        card.innerHTML = `
            <div class="emoji">${course.emoji}</div>
            <h2>${course.title}</h2>
        `;
        card.onclick = () => showModal(index);
        grid.appendChild(card);
    });

    function showModal(index) {
        const course = courses[index];
        document.getElementById('modalTitle').textContent = course.title;
        document.getElementById('modalAbout').textContent = "About: " + course.about;
        document.getElementById('modalCareer').textContent = "Career Options: " + course.career;
        modal.style.display = "block";
    }

    // Modal close functionality
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Sidebar toggle functionality
    function openSidebar() {
        sidebar.classList.remove('closed');
        mainContent.classList.remove('full');
        menuToggle.style.display = 'none';
        closeToggle.style.display = 'block';
    }

    function closeSidebar() {
        sidebar.classList.add('closed');
        mainContent.classList.add('full');
        menuToggle.style.display = 'flex';
        closeToggle.style.display = 'none';
    }

    menuToggle.addEventListener('click', openSidebar);
    closeToggle.addEventListener('click', closeSidebar);

    // Initial sidebar state setup
    if (sidebar.classList.contains('closed')) {
        menuToggle.style.display = 'flex';
        closeToggle.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        closeToggle.style.display = 'block';
    }
});