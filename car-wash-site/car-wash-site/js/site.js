// ===== Edit this block for each client. Everything marked data-* on the pages fills from here. =====
const SITE = {
    brand: 'The Car Cave',
    phone: '+27 123 456 7890',
    whatsapp: '27123456789',          // digits only, with country code, no +
    email: 'hello@example.com',
    hours: 'Mon to Sat, 8am to 5pm',
    address: '[Street address, suburb, city]',
    area: '[Your suburb or city]',
    customers: '1,483+'               // replace with a real number, or delete the pop-ups block in index.html
};

const fill = (sel, fn) => document.querySelectorAll(sel).forEach(fn);
const tel = 'tel:' + SITE.phone.replace(/[^+\d]/g, '');
const wa = 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent('Hi ' + SITE.brand + ', I would like to book a wash.');

fill('[data-brand]', e => e.textContent = SITE.brand);
fill('[data-phone]', e => { e.textContent = SITE.phone; e.href = tel; });
fill('[data-tel]', e => e.href = tel);
fill('[data-whatsapp]', e => { e.href = wa; e.target = '_blank'; e.rel = 'noopener'; });
fill('[data-email]', e => { e.textContent = SITE.email; e.href = 'mailto:' + SITE.email; });
fill('[data-hours]', e => e.textContent = SITE.hours);
fill('[data-address]', e => e.textContent = SITE.address);
fill('[data-maps]', e => { e.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(SITE.address); e.target = '_blank'; e.rel = 'noopener'; });
fill('[data-area]', e => e.textContent = SITE.area);
fill('[data-customers]', e => e.textContent = SITE.customers);
fill('[data-year]', e => e.textContent = new Date().getFullYear());

// Staggered cards: one active card per group (works for every .cards block, mouse or keyboard)
document.querySelectorAll('.cards').forEach(group => {
    const wraps = [...group.querySelectorAll('.card-wrap')];
    wraps.forEach(wrap => {
        const card = wrap.querySelector('.card');
        const activate = () => wraps.forEach(w => w.classList.toggle('active', w === wrap));
        card.addEventListener('click', activate);
        card.addEventListener('focus', activate);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
        });
    });
});

// Pricing: Car / SUV toggle swaps the numbers
const typeButtons = [...document.querySelectorAll('.toggle button')];
typeButtons.forEach(b => b.addEventListener('click', () => {
    typeButtons.forEach(x => x.setAttribute('aria-pressed', x === b));
    document.querySelectorAll('[data-car]').forEach(c => {
        c.querySelector('.price b').textContent = c.dataset[b.dataset.type];
    });
}));

// Other Services scroller: the progress bar mirrors the scroll position; drag the thumb or click the track
document.querySelectorAll('.svc').forEach(root => {
    const scroller = root.querySelector('.svc-scroller');
    const track = root.querySelector('.svc-progress');
    const thumb = root.querySelector('.svc-thumb');
    const range = () => scroller.scrollWidth - scroller.clientWidth;
    const update = () => {
        track.hidden = range() <= 1;
        thumb.style.width = (scroller.clientWidth / scroller.scrollWidth * 100) + '%';
        const room = track.clientWidth - thumb.offsetWidth;
        thumb.style.transform = 'translateX(' + (range() > 0 ? scroller.scrollLeft / range() * room : 0) + 'px)';
    };
    scroller.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();

    let drag = null;
    thumb.addEventListener('pointerdown', e => {
        thumb.setPointerCapture(e.pointerId);
        scroller.style.scrollSnapType = 'none';            // no snapping fight while the thumb is held
        drag = { x: e.clientX, left: scroller.scrollLeft };
    });
    thumb.addEventListener('pointermove', e => {
        if (!drag) return;
        const room = track.clientWidth - thumb.offsetWidth;
        scroller.scrollLeft = drag.left + (e.clientX - drag.x) * (range() / room);   // 1:1 with the pointer
    });
    const release = () => { drag = null; scroller.style.scrollSnapType = ''; };
    thumb.addEventListener('pointerup', release);
    thumb.addEventListener('pointercancel', release);
    track.addEventListener('click', e => {
        if (e.target !== track) return;
        scroller.scrollTo({ left: e.offsetX / track.clientWidth * range(), behavior: 'smooth' });
    });
});
