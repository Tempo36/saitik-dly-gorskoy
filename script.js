// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Модальное окно бронирования
const modal = document.getElementById('bookingModal');
const bookBtns = document.querySelectorAll('.book-btn');
const closeModal = document.querySelector('.close-modal');
const selectedRoom = document.getElementById('selectedRoom');
const bookingForm = document.getElementById('bookingForm');

if (bookBtns.length > 0) {
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const room = btn.getAttribute('data-room');
            selectedRoom.value = room;
            modal.classList.add('show');
        });
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Обработка формы бронирования
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const room = selectedRoom.value;
        
        alert(`Спасибо, ${name}! Заявка на номер "${room}" отправлена. Мы свяжемся с вами в ближайшее время.`);
        
        bookingForm.reset();
        modal.classList.remove('show');
    });
}

// Обработка формы контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        
        alert(`${name}, спасибо за сообщение! Мы ответим вам в ближайшее время.`);
        contactForm.reset();
    });
}

// Анимация счетчиков на странице "О нас"
const statNumbers = document.querySelectorAll('.stat-number');

function animateNumbers() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const current = parseInt(stat.innerText);
        const increment = target / 50; // Плавное увеличение
        
        if (current < target) {
            stat.innerText = Math.ceil(current + increment);
            setTimeout(animateNumbers, 30);
        } else {
            stat.innerText = target;
        }
    });
}

// Запускаем анимацию при загрузке страницы
if (statNumbers.length > 0) {
    animateNumbers();
}

// Галерея - открытие фото на весь экран
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        
        // Создаем модальное окно для фото
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Добавляем класс при скролле для навбара
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});
