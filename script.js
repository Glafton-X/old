document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn').addEventListener('click', function (event) {
        event.preventDefault();
        const aboutSection = document.querySelector('#Games');
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth',
        });
    });
});
