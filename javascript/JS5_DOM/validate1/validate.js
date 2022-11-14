function validate() {
    console.log("you have eneterd the button")
    var formvalid = true;
    for(a in person) {
        let userInput = document.getElementById(a).value

        if(a !== 'email') {
            if(userInput.length == 0) {
                formvalid = false;
            }
        } else {
            var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

            if( !emailPattern.test(userInput)) {
                formvalid = false;
            }
        }
    }
    if(formvalid) {
        document.querySelector('button').removeAttribute('disabled')
    } else {
        document.querySelector('button').setAttribute('disabled',true)
    }
}