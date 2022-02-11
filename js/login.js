document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == "asadmilton@gmail.com" && userPassword == "1979") {
        window.location.href = "http://127.0.0.1:5500/banking.html";
        // location.replace("http://127.0.0.1:5500/banking.html");
    }

});
