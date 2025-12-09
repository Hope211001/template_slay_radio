
function toggleCart() {
    document.getElementById('cart').classList.toggle('translate-y-full');
}

function addToCart(name, price, img = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop') {
    const body = document.getElementById('cartBody');
    const exist = [...body.children].find(r => r.dataset.name === name);
    if (exist) {
        const qty = exist.querySelector('span');
        qty.textContent = parseInt(qty.textContent) + 1;
    } else {
        body.insertAdjacentHTML('beforeend', `
        <div class="flex items-center gap-3 position relative" data-name="${name}">
          <img src="${img}" class="w-14 h-14 rounded-lg object-cover">
          <div class="flex-1">
            <p class="text-sm font-medium text-foreground">${name}</p>
            <p class="text-xs text-muted-foreground">${price}</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="changeQty(this,-1)" class="w-6 h-6 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">-</button>
            <span class="text-sm w-6 text-center">1</span>
            <button onclick="changeQty(this,1)" class="w-6 h-6 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">+</button>
          </div>
        </div>`);
    }
    updateTotals();
    document.getElementById('cart').classList.remove('translate-y-full');
}

function changeQty(btn, delta) {
    const span = btn.parentElement.querySelector('span');
    let q = parseInt(span.textContent) + delta;
    if (q < 1) q = 1;
    span.textContent = q;
    updateTotals();
}

function updateTotals() {
    let t = 0, items = 0;
    document.querySelectorAll('#cartBody > div').forEach(r => {
        const price = parseInt(r.querySelector('.text-xs').textContent.replace(/\D/g, ''));
        const q = parseInt(r.querySelector('span').textContent);
        t += price * q;
        items += q;
    });
    /* on teste l’existence avant d’écrire */
    const totalEl = document.getElementById('cartTotal');
    const badgeEl = document.getElementById('navCartBadge');
    if (totalEl) totalEl.textContent = t.toLocaleString() + '€';
    if (badgeEl) badgeEl.textContent = items;
}
