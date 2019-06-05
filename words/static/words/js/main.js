
$(document).ready(function() {

    // AJAX GET
    $('.get-more').click(function(){

        $.ajax({
            type: "GET",
            url: "/ajax/more/",
            success: function(data) {
            for(i = 0; i < data.length; i++){
                $('ul').append('<li>'+data[i]+'</li>');
            }
        }
        });

    });


    // AJAX POST




    // CSRF code
    function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });


});

function vote(slug, direction,element){
  console.log('am i called');
    $.ajax({
        type: "POST",
        url: '/words/votes/'+slug+'/'+direction+'vote/',
        dataType: "json",
        data: { "word": slug },
        success: function(data) {
            if(data.success){
              $(element).text(data.votes);
        }
        else {
            alert(data.message);
            $(element).innerText = "fuck";
              }
        },
        error: function() {
                console.log("error due to request");
            }

    });

};

function myScript() {
  var el = document.getElementById('username').firstElementChild;
  el.innerText = 'שם משתמש:';
  try {
    var el = document.getElementById('password').firstElementChild;
    el.innerText = 'סיסמא:';
  } finally {
    var el = document.getElementById('password1').firstElementChild;
    el.innerText = 'סיסמא:';
    var el = document.getElementById('password2').firstElementChild;
    el.innerText = 'סיסמא חוזרת:';
  }
}
