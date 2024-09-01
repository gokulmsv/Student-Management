var studentForm = document.getElementById("student-form");



studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    let submit = document.getElementById("submit")

    let nameRegex = /^[a-zA-Z]+$/
    let ageRegex =/d/
    let genderRegex = /^[a-zA-Z]/
    let courseRegex = /^[a-zA-Z]/
    let gmailRegex = /^[a-zA-Z0-9]+@gmail\.com/

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementById("gender")
    let course = document.getElementById("course")
    let gmail = document.getElementById("gmail")

    let validate = true
    if(!nameRegex.test(name.value)){
        document.querySelector(".nameerror").style.display = "inline";
        validate = false
    } else {
        document.querySelector(".nameerror").style.display = "none";
    }

    // Age validation
    if(!ageRegex.test(age.value)){
        document.querySelector(".ageerror").style.display = "inline";
        validate = false
    } else {
        document.querySelector(".ageerror").style.display = "none";
    }

    // Gender validation
    if(!genderRegex.test(gender.value)){
        document.querySelector(".gendererror").style.display = "inline";
        validate = false
    } else {
        document.querySelector(".gendererror").style.display = "none";
    }

    // Course validation
    if(!courseRegex.test(course.value)){
        document.querySelector(".courseerror").style.display = "inline";
        validate = false
    } else {
        document.querySelector(".courseerror").style.display = "none";
    }

    // Gmail validation
    if(!gmailRegex.test(gmail.value)){
        document.querySelector(".emailerror").style.display = "inline";
        validate = false
    } else {
        document.querySelector(".emailerror").style.display = "none";
    }
  
   if(validate == true)
   {
    var tb1 = document.getElementById("container");
    var row = tb1.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();

    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("age").value;
    cell3.innerHTML = document.getElementById("gender").value;
    cell4.innerHTML = document.getElementById("course").value;
    cell5.innerHTML = document.getElementById("email").value;
    cell6.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
   }
});

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
