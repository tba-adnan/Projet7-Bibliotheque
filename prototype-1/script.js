var workBLO = new WorkBLO();

var selectedRow = null


document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    if (selectedRow == null) {
        work.id = workBLO.counter
        workBLO.counter++;
        insertNewRow(work);
        workBLO.addWork(work);
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?"))
        editRow(work)

        resetForm();
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectedRow = null;
}


function readwork() {
    var work = new Work();
    
    work.title = document.getElementById("inputTitle").value;
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.title;
    cell3 = newRow.insertCell(2)


    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.setAttribute('onclick', 'onEdit(this)')

    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.setAttribute("onclick", 'onDelete(this)')

    cell3.appendChild(editButton)
    cell3.appendChild(deleteButton)
}



function onEdit(buttonReference) {
    selectedRow = buttonReference.parentElement.parentElement;
    var rowId = selectedRow.cells[0].innerHTML
    var work = new Work();
    work = workBLO.getItem(rowId)
    document.getElementById("inputTitle").value = work.title;

}

function editRow(workToEdit) {
    workBLO.editWork(workToEdit)
    selectedRow.cells[1].innerHTML = workToEdit.title;
}