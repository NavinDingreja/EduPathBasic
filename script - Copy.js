document.addEventListener('DOMContentLoaded', function() {
    // Home page buttons
    if (document.getElementById('maps-btn')) {
        document.getElementById('maps-btn').onclick = function() {
            window.open('check10complete.html', '_blank');
        };
    }
    if (document.getElementById('quiz-btn')) {
        document.getElementById('quiz-btn').onclick = function() {
            window.open('quiz.html', '_blank');
        };
    }
    if (document.getElementById('great-people-btn')) {
        document.getElementById('great-people-btn').onclick = function() {
            alert('Great People feature coming soon!');
        };
    }
    if (document.getElementById('chatbot-btn')) {
        document.getElementById('chatbot-btn').onclick = function() {
            alert('Chatbot feature coming soon!');
        };
    }
    for (let i = 1; i <= 4; i++) {
        let blankBtn = document.getElementById('blank-btn-' + i);
        if (blankBtn) {
            blankBtn.onclick = function() {
                alert('Feature under development.');
            };
        }
    }
    if (document.getElementById('about-btn')) {
        document.getElementById('about-btn').onclick = function() {
            alert('EduPath: Empowering your journey to the right stream and career!');
        };
    }
    // Streams page buttons
    if (document.getElementById('diploma-card')) {
        document.getElementById('diploma-card').onclick = function() {
            window.open('diploma.html', '_blank');
        };
    }
    if (document.getElementById('science-card')) {
        document.getElementById('science-card').onclick = function() {
            window.open('science.html', '_blank');
        };
    }
    if (document.getElementById('commerce-card')) {
        document.getElementById('commerce-card').onclick = function() {
            window.open('commerce.html', '_blank');
        };
    }
    if (document.getElementById('arts-card')) {
        document.getElementById('arts-card').onclick = function() {
            window.open('arts.html', '_blank');
        };
    }
});