// const themeToggle = document.getElementById("theme-switch");
// const body = document.body;

// themeToggle.addEventListener("change", () => {
//     if (themeToggle.checked) {
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });

import {toDarkMode, toLightMode, toSystemMode} from './theme';
 
window.toDarkMode = toDarkMode;
window.toLightMode = toLightMode;
window.toSystemMode = toSystemMode;


function updateTheme() {
    if (! ('theme', in localStorage) ) {
        localStorage.theme = 'system';
    }
}

switch(localStorage.theme) {
    case 'system':
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        document.documentElement.setAttribute('color-theme', 'system');
        break;
    case 'dark':
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        break;
    case 'light':
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('color-theme', 'light');
        break;
}