document.addEventListener('DOMContentLoaded', () => {
    const heroBtn = document.getElementById('hero-btn');
    const navCta = document.getElementById('nav-cta');

    function handleInteraction(event) {
        const buttonName = event.target.textContent;
        alert(`Thank you for clicking "${buttonName}"! Welcome to SaaSify.`);
    }

    if (heroBtn) {
        heroBtn.addEventListener('click', handleInteraction);
    }

    if (navCta) {
        navCta.addEventListener('click', handleInteraction);
    }
});
