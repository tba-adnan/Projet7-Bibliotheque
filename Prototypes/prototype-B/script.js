document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    insertNewRow(work);
})

var onEditButton = document.getElemen

function readwork() {

    var work = {};
    work.title = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            work["type"] = cheackValues[i].value;
            break;
        }
    }
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.type
    cell7 = newRow.insertCell(6)

    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.className = "btn btn-primary"

    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.className = "btn btn-secondary"
    deleteButton.setAttribute("onclick", 'onDelete(this)')

    cell7.appendChild(editButton)
    cell7.appendChild(deleteButton)

}




function onDelete(td){
    if(confirm("Êtes-vous sûr de supprimer cette œuvre?")){
        row = td.parentElement.parentElement;
        document.getElementById("worksTable").deleteRow(row.rowIndex)
    }
}