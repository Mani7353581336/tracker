
// /Another Afdvanced way creating--------------------------------------
 var users = []
function addUser() {
    var person = {
        fname: "",
        lname: "",
        email: ""

    }
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    users.push(person)
    clearForm();  //calling clearForm function for clear the credential
    
    displayUsers();
    console.log(person)
}

// clear the form after entering the credential
function clearForm() {
    var person = {
        fname: "",
        lname: "",
        email: ""

    }
    for (a in person) {
        document.getElementById(a).value = ""
    }
}
