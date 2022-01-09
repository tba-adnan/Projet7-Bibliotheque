var workBLO = new WorkBLO();

var selectedRow = null;
var rowId = null;


document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    if (selectedRow == null) {
        workBLO.addWork(work);
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")){
        work.id = rowId;
        workBLO.editWork(work)

    }
        

    insertNewRow();

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



function insertNewRow() {
    var workList = workBLO.getAllItems()
    console.log(workBLO.getAllItems())
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    
    while(tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
      }


    for(var i = 0; i < workList.length; i++){
        var newRow = tableBody.insertRow(tableBody.length);
        newRow.insertCell(0).innerHTML = workList[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = workList[i].title;
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
    
}



function onEdit(buttonReference) {
    selectedRow = buttonReference.parentElement.parentElement;
    rowId = selectedRow.cells[0].innerHTML
    var work = new Work();
    work = workBLO.getItem(rowId)
    document.getElementById("inputTitle").value = work.title;

}



function onDelete(buttonReference) {
    if (confirm("Delete this entry?")) {
        var row = buttonReference.parentElement.parentElement;
        var rowId = row.cells[0].innerHTML

        document.getElementById("worksTable").deleteRow(row.rowIndex)
        
        workBLO.deleteWork(rowId)
        resetForm()
        console.log(workBLO.workList)
    }
}