var person = {
    email:"",
    fname:"",
    password:""
}

// var persons = [];      array

var persons = JSON.parse(localStorage.getItem('persons')); //access data from localStorage

function createForm() {
    for (a in person){
        person[a] = document.getElementById(a).value
        
    }
    persons.push({...person})

    var convertedPersons = JSON.stringify(persons);    // data store in localStorage
    localStorage.setItem('persons',convertedPersons);

    console.log(person)
    clearForm();
    displayPerson();
    validate();

}