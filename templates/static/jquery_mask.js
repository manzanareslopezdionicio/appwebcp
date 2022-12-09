$(document).ready(function(){
    $('#cedula').mask('SSS-SSSSSS-SSSSA', {'translation': {
        'S': {pattern: /[0-9]/},
        'A': {pattern: /[A-Za-z]/}
    }});

    $('#telefono').mask('(000) 0000-0000');
});