function switchLanguage(lang) {
    document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang-' + lang).forEach(el => el.style.display = 'block');
}
window.onload = () => switchLanguage('en');
