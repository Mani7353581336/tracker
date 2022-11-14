function addUser() {
    var person = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value
    }

    clearForm();  //calling clearForm function for clear the credential
    console.log(person)
}

function clearForm() {          //creating clear after entering the details

    document.getElementById("fname").value = "",
        document.getElementById("lname").value = "",
        document.getElementById("email").value = ""
}
