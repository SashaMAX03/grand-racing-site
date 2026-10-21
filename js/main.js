document.addEventListener('DOMContentLoaded', () => {
    console.log('Grand Racing сайт загружен!');
    
    
    initSmoothScroll();
    initButtons();
});


function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


function initButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}


function showMessage(message, type = 'info') {

    console.log(`[${type.toUpperCase()}] ${message}`);
}


function initAuthPage() {

    const registerBlock = document.getElementById('registerBlock');
    if (!registerBlock) return;

    const loginBlock = document.getElementById('loginBlock');
    const toLoginLink = document.getElementById('toLoginLink');
    const toRegisterLink = document.getElementById('toRegisterLink');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    toLoginLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        registerBlock.classList.add('is-hidden');
        loginBlock.classList.remove('is-hidden');
    });

 
    toRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginBlock.classList.add('is-hidden');
        registerBlock.classList.remove('is-hidden');
    });

 
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        

        const name = document.getElementById('regName').value;
        alert(`Добро пожаловать, ${name}! \n(Это заглушка: данные никуда не отправлены, но валидация HTML сработала)`);
        
        
        registerForm.reset();
        toLoginLink.click();
    });

    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        alert('Вы успешно вошли в систему! \n(Это заглушка)');
        loginForm.reset();
        
        
    });
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Grand Racing сайт загружен!');
    initSmoothScroll();
    initButtons();
    initBackToTop();
    initAuthPage(); 
});