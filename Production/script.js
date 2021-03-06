var selectedRow = null
document.getElementById("showFormBtn").addEventListener("click", function() {
    var formCard = document.getElementById('formCard')
    formCard.classList.toggle("d-none")
})
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validate()) {
        var work = readwork();
        if (selectedRow == null)
            insertNewRow(work);
        else
        if (confirm("Confirmer que vous voulez modifier cette œuvre?"))
            editRow(work)
        resetForm();
        formCard.classList.className = "d-none"
    } else {
        alert("Remplissez tous les champs")
    }
})
function resetForm() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputPrix").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputLanguage").value = "";
    document.querySelector('input[name="workType"]:checked').checked = false
    selectedRow = null;
}
var onEditButton = document.getElemen
function readwork() {

    var work = {};
    work.title = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    work["type"] = document.querySelector('input[name="workType"]:checked').value
    return work;
}
function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.author;
    cell2.className = "d-none d-lg-table-cell"

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.price;
    cell3.className = "d-none d-lg-table-cell"

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell4.className = "d-none d-lg-table-cell"

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.language

    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.type
    cell6.className = "d-none d-lg-table-cell"

    cell7 = newRow.insertCell(6)
    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")
    var editContent = document.createTextNode("Modifier")
    editButton.appendChild(editContent)
    editButton.className = "btn btn-primary me-1"
    editButton.setAttribute('onclick', 'onEdit(this)')
    var deleteContent = document.createTextNode('Supprimer')
    deleteButton.appendChild(deleteContent)
    deleteButton.className = "btn btn-secondary"
    deleteButton.setAttribute("onclick", 'onDelete(this)')
    cell7.appendChild(editButton)
    cell7.appendChild(deleteButton)

}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputAuthor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputPrix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputLanguage").value = selectedRow.cells[4].innerHTML;

    var checkValue = document.getElementsByName("workType");
    for (var i = 0; i < checkValue.length; i++) {
        if (checkValue[i].value == selectedRow.cells[5].innerHTML) {
            checkValue[i].checked = true
        }
    }
}

function editRow(workToEdit) {
    selectedRow.cells[0].innerHTML = workToEdit.title;
    selectedRow.cells[1].innerHTML = workToEdit.author;
    selectedRow.cells[2].innerHTML = workToEdit.price;
    selectedRow.cells[3].innerHTML = workToEdit.date;
    selectedRow.cells[4].innerHTML = workToEdit.language;
    selectedRow.cells[5].innerHTML = workToEdit.type;

}
function onDelete(td) {
    if (confirm("Sûr vous voulez supprimer cette œuvre!?")) {
        row = td.parentElement.parentElement;
        document.getElementById("worksTable").deleteRow(row.rowIndex)
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("inputTitle").value == "") {
        isValid = false;
    }
    if (document.getElementById("inputAuthor").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputPrix").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputDate").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputLanguage").value == "") {
        isValid = false;
    } 
    if (document.querySelector('input[name="workType"]').value == null) {
        isValid = false;
    }  
    return isValid;
}