document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('btnThemeToogle');
    const storageKey = 'theme';

    const readTheme = () => root.dataset.theme ?? root.getAttribute('data-theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = (t) => {
        root.setAttribute('data-theme', t);
        root.dataset.theme = t;
        localStorage.setItem(storageKey, t);
    };

    const saved = localStorage.getItem(storageKey);
    if (saved) applyTheme(saved);
    else applyTheme(readTheme());

    const btn = document.getElementById('btnThemeToogle');
    btn?.addEventListener('click', () => {
        const current = root.dataset.theme === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change', (e) => {
        if (!localStorage.getItem(storageKey)) applyTheme(e.matches ? 'dark' : 'light');
    });

})