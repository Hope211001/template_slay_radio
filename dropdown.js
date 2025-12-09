
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const iconNum = id.replace('dropdown', '');
    const icon = document.getElementById('icon' + iconNum);

    // Fermer tous les autres dropdowns
    ['dropdown1', 'dropdown2', 'dropdown3'].forEach(dropId => {
        if (dropId !== id) {
            document.getElementById(dropId).classList.add('hidden');
            const otherIconNum = dropId.replace('dropdown', '');
            document.getElementById('icon' + otherIconNum).classList.remove('rotate-180');
        }
    });

    // Toggle le dropdown actuel
    dropdown.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Fermer les dropdowns quand on clique en dehors
document.addEventListener('click', function (event) {
    const dropdowns = ['dropdown1', 'dropdown2', 'dropdown3'];
    dropdowns.forEach((id, index) => {
        const dropdown = document.getElementById(id);
        const button = dropdown.previousElementSibling;
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.add('hidden');
            document.getElementById('icon' + (index + 1)).classList.remove('rotate-180');
        }
    });
});
