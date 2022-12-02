var validator = $('#main-form').validate({
    rules: {
        username: {
            required: true,
            validName: true
        },
        usernum: {
            required: true,
            validCardNumber: true,
            maxlength: 19
        },
        userexpmonth: {
            required: true,
            maxlength: 2,
            minlength: 2,
            number: true,
            max: 12,
            min: 01,
        },
        userexpyear: {
            required: true,
            maxlength: 2,
            minlength: 2,
            number: true
        },
        usercvc: {
            required: true,
            maxlength: 3,
            minlength: 3,
            number: true
        }
    },
    messages: {
        username: {
            required: "Can't be blank"
        },
        usernum: {
            required: "Can't be blank",
            maxlength: "Please input 16 digits only"
        },
        userexpmonth: {
            required: "Can't be blank",
            maxlength: "Wrong format",
            minlength: "Wrong format",
            number: "Wrong format",
            max: 'Invalid Month',
            min: 'Invalid Month'
        },
        userexpyear: {
            required: "Can't be blank",
            maxlength: "Wrong format",
            minlength: "Wrong format",
            number: "Wrong format"
        },
        usercvc: {
            required: "Can't be blank",
            maxlength: "Wrong format",
            minlength: "Wrong format",
            number: "Wrong format"
        }
    },
    submitHandler: function(form) {
        form.submit();
    },
});

$.validator.addMethod("validCardNumber", function(value, element) {
    return this.optional(element) || /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/.test(value);
}, 'Wrong format, please enter a valid card number');

$.validator.addMethod('validName', function(value, element) {
    return this.optional(element) || /[a-z, A-Z]+ [a-z, A-Z]+/.test(value);
}, 'Please enter Firstname and Lastname');

$('#username').blur(function() {
    if($(this).valid()){
        $('.card-name').text($(this).val());
    };
});

$('#usernum').blur(function() {
    if($(this).valid()){
        $('.card-num').text($(this).val());
    };
});

$('#userexpmonth').blur(function() {
    if($(this).valid()){
        $('.card-month').text($(this).val());
    };
});

$('#userexpyear').blur(function() {
    if($(this).valid()){
        $('.card-year').text($(this).val());
    };
});

$('#usercvc').blur(function() {
    if($(this).valid()){
        $('.card-cvc').text($(this).val());
    };
});

$('.confirm').click(function() {
    if ($('#main-form').valid()) {
        $('.bottom').css('transform', 'rotateY(180deg)')
    }
});

$('.continue').click(function() {
    $('.bottom').css('transform', 'rotateY(360deg)');
    validator.resetForm();
});

// $('input').focus(function() {
//     if($(this).valid()) {
//         $(this).css('outline', '1px solid hsl(278, 94%, 30%)')
//     } else {
//         $(this).css('outline', '1px solid var(--red')
//     }
// });

$('#usernum').on('keydown keyup change', function(e){
    if ($(this).val().length > 18 && e.keyCode !== 46 && e.keyCode !== 8 ) {
       e.preventDefault();
    }
});

$('.userexpdate').on('keydown keyup change', function(e){
    if ($(this).val().length > 1 && e.keyCode !== 46 && e.keyCode !== 8 ) {
       e.preventDefault();
    }
});

$('#usercvc').on('keydown keyup change', function(e){
    if ($(this).val().length > 2 && e.keyCode !== 46 && e.keyCode !== 8 ) {
       e.preventDefault();
    }
});
