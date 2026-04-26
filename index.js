// filepath: index.js
document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');
    
    profileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const profileData = link.getAttribute('data-profile');
            if (profileData) {
                const profile = JSON.parse(profileData);
                localStorage.setItem('perfilAtivo', JSON.stringify(profile));
            }
        });
    });
});