let 
    started = false,
    skillSection = document.querySelector('#skills'),
    progress = document.querySelectorAll('.progress .progress-bar'),
    spans = document.querySelectorAll('.progress-title span');







/*Skill Progress Bar*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= skillSection.offsetTop - 100) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        });
        spans.forEach((span) => {
            span.style.left = span.dataset.num;
            span.style.opacity = '1';
            span.style.visibility = 'visible';
        });
    }
});




