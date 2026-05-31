// Castle International - Main Application Script

// Chatbot Toggle Logic
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.classList.contains('chatbot-hidden')) {
        chatWindow.classList.remove('chatbot-hidden');
        chatWindow.classList.add('chatbot-visible');
    } else {
        chatWindow.classList.remove('chatbot-visible');
        chatWindow.classList.add('chatbot-hidden');
    }
}

// ScrollSpy Logic: Highlight Active Navigation Link based on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active-nav');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// INTEGRATION POINTS:
// 1. Chatbot Integration: Replace the chat-body div content with your chatbot provider's iframe/script
// 2. External Services: Add API calls for contact forms, calendly integration, etc.
// 3. Analytics: Connect Google Analytics or other tracking tools

console.log('Castle International - App Initialized');
