$(function() {
    let reg = {
        "username": /^[A-z]\w{5,15}$/,
        "password": /^.{6,16}$/,
        "email": /^\w{6,16}@[A-z0-9_-]{2,}\.[A-z]{2,7}\.?[A-z]*$/,
        "phone": /^1[3-9]\d{9}$/
    };


    $('#myform>input').each(function(index, elm) {
        $(elm).on('input', function() {
            if ($(elm).attr('id') == 'checkpass') return;
            if (reg[$(elm).attr('id')].test($(elm).val())) {
                $('span[class="' + $(elm).attr('id') + '"]').html('通过验证');
                $(this).attr('data-pass', true);
            } else {
                $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证');
                $(this).attr('data-pass', false);
            }
            check();
        });
    });

    // $('#checkpass').on('input', function() {
    //     if ($(this).val() === $('#password').val()) {
    //         $('.checkpass').html('通过验证');
    //         $(this).attr('data-pass', true);
    //     } else {
    //         $('.checkpass').html('两次输入的密码不同,请确认');
    //         $(this).attr('data-pass', false);
    //     }
    //     check();
    // });

    function check() {
        if ($('[data-pass=true]').length == 5) {
            $('#btn').removeAttr('disabled');
        } else {
            $('#btn').attr('disabled', 'disabled');
        }
    }

});