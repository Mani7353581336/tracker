function clearForm() {
    var person = {
        email: "",
        fname: "",
        password: ""
    }
    for (a in person) {
        document.getElementById(a).value = ""
    }
}