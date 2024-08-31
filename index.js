var studentForm = document.getElementById("student-form");

studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

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
});

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}