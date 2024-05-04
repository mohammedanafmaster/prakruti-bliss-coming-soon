// Form Handling with AJAX
$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();

        var email = $('#email').val();

        $.ajax({
            url: '/subscribe',
            type: 'POST',
            data: {
                email: email
            },
            success: function(response) {
                alert('Subscription successful!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('An error occurred: ' + errorThrown);
            }
        });
    });
});