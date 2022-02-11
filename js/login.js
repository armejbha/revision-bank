// button caption
document.getElementById('submit-button').addEventListener('click', function () {
    // console.log('mejbha');
    // email part 
    const emailPart = document.getElementById('email-input');
    const email = emailPart.value;
    // password part 
    const passPart = document.getElementById('pass-input');
    const pass = passPart.value;
    if (email == 'masbha7629@gmail.com' && pass == 'mejbha') {
        window.location.href = "bank.html";
    }
})