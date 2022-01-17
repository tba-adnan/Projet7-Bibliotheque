var workManager = new WorkManager();
var selectedRow = null;
var rowId = null;
insertNewRow()

document.getElementById("showFormBtn").addEventListener("click", function() {
    var formCard = document.getElementById('formCard')
    formCard.classList.toggle("d-none")
})

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    if (selectedRow == null) {
        // work.id = workManager.counter
        // workManager.counter++;
        workManager.addWork(work);
        alert(work.workDetail())
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")){
        work.id = rowId;
        workManager.editWork(work)

    }
        

    insertNewRow();

    resetForm();
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



function readwork() {
    var work = new Work();
    
    work.title = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    work["type"] = document.querySelector('input[name="workType"]:checked').value
    return work;
}



function insertNewRow() {
    var workList = workManager.getAllItems()
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    
    while(tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
      }


    for(var i = 0; i < workList.length; i++){
        var newRow = tableBody.insertRow(tableBody.length);
        newRow.insertCell(0).innerHTML = workList[i].id;

        cell2 = newRow.insertCell(1)
        cell2.innerHTML = workList[i].title;

        cell3 = newRow.insertCell(2);
        cell3.innerHTML = workList[i].author;
        cell3.className = "d-none d-lg-table-cell"

        cell4 = newRow.insertCell(3);
        cell4.innerHTML = workList[i].price;
        cell4.className = "d-none d-lg-table-cell"

        cell5 = newRow.insertCell(4);
        cell5.innerHTML = workList[i].date;
        cell5.className = "d-none d-lg-table-cell"

        cell6 = newRow.insertCell(5);
        cell6.innerHTML = workList[i].language

        cell7 = newRow.insertCell(6)
        cell7.innerHTML = workList[i].type
        cell7.className = "d-none d-lg-table-cell"


        cell8 = newRow.insertCell(7)

        var editButton = document.createElement("button")
        var deleteButton = document.createElement("button")

        var editContent = document.createTextNode("Modifier")
        editButton.appendChild(editContent)
        editButton.className = "btn-custom btn-primary-custom me-1"
        editButton.setAttribute('onclick', 'onEdit(this)')

        var deleteContent = document.createTextNode('Supprimer')
        deleteButton.appendChild(deleteContent)
        deleteButton.className = "btn-custom btn-secondary-custom"
        deleteButton.setAttribute("onclick", 'onDelete(this)')

        cell8.appendChild(editButton)
        cell8.appendChild(deleteButton)
    }
    
}



function onEdit(buttonReference) {
    document.getElementById('formCard').classList.remove("d-none")
    selectedRow = buttonReference.parentElement.parentElement;
    rowId = selectedRow.cells[0].innerHTML
    var work = new Work();
    work = workManager.getItem(rowId)
    document.getElementById("inputTitle").value = work.title;
    document.getElementById("inputAuthor").value = work.author;
    document.getElementById("inputPrix").value = work.price;
    document.getElementById("inputDate").value = work.date;
    document.getElementById("inputLanguage").value = work.language;

    var checkValue = document.getElementsByName("workType");
    for (var i = 0; i < checkValue.length; i++) {
        if (checkValue[i].value == work.type) {
            checkValue[i].checked = true
        }
    }

}



function onDelete(buttonReference) {
    if (confirm("Confirmez que vous voulez supprimer cette œuvre?")) {
        var row = buttonReference.parentElement.parentElement;
        var rowId = row.cells[0].innerHTML

        document.getElementById("worksTable").deleteRow(row.rowIndex)
        
        workManager.deleteWork(rowId)
        resetForm()
    }
}


function onPrint() {
    var tab = document.getElementById('worksTable');
    var win = window.open();
    win.document.write(tab.outerHTML);
    win.document.close();
    win.print();
}