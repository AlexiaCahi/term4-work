$(document).redy(function() {

    //------------------------------------------------------
    // sign up form 
    //------------------------------------------------------

    // On submit, prevent default form submission behaviour and do this instead

    $('#signupForm').submit(function(event) {

        event.preventDefult();

        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Add any code that should run on a submit
            
            window.localStorage.href = 'index.html';
        }
        $(this).addClass('was-validated');
    });

});