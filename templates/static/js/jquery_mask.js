$(document).ready(function(){
    $('#cedula').mask('SSS-SSSSSS-SSSSA', {'translation': {
        'S': {pattern: /[0-9]/},
        'A': {pattern: /[A-Za-z]/}
    }});
    $('#telefono').mask('(000) 0000-0000');
});

    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 100 ) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark','shadow');
        }
    });