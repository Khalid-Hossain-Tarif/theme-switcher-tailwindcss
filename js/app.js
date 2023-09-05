
let theme = localStorage.getItem('theme');      
const themeToggle = document.querySelector('#theme-toggle')
const themeRemove = document.querySelector('.theme-remove')

const toDark = function() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}

const toLight = function() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
}

const toSystem = function() {
    localStorage.removeItem('theme');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}   

themeToggle.addEventListener('click', function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        toLight();
    } else {
        toDark();
    }
});

themeRemove.addEventListener('click', function() {
    toSystem();
});