$(document).ready(function(){
    $("#cedula").mask('DDD-DDDDDD-DDDDA', {'translation':{
        D: {pattern: /[0-9]/},
        A: {pattern: /[A-Za-z]/},
    }});

    $("#telefono").mask('0000-0000');
});