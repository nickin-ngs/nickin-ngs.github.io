/* ===============================
   LOAD HEADER & FOOTER
================================ */

function loadLayout(id, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = html;
                if (callback) callback();
            }
        });
}

// โหลด header
loadLayout('header', 'header.html', () => {
    const dropdown = document.getElementById('navDropdown');
    const toggle = document.getElementById('dropdownToggle');

    if (dropdown && toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    }
});

// โหลด footer
loadLayout('footer', 'footer.html');


/* ===============================
   SLIDESHOW
================================ */

const slides = document.querySelectorAll('#slideshow .slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

let index = 0;
let interval = null;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

// เช็คก่อนใช้งาน (กัน error หน้าอื่น)
if (slides.length > 0) {
    showSlide(index);
    startAutoSlide();

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }
}
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // dropdown inside menu
    document.querySelectorAll('.nav-dropdown > a').forEach(link => {
        link.addEventListener('click', e => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            }
        });
    });document.querySelector('.menu-toggle')
.onclick = () => document.querySelector('header nav').classList.toggle('active');