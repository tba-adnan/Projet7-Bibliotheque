var ouvrageManager = new OuvrageManager();
var selectRow = null;
var ouvrageId = null;

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    if (selectRow == null) {
        ouvrage.id = ouvrageManager.compteur

        ouvrageManager.addOuvrage(ouvrage);
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")) {
        ouvrage.id = rowId;
        ouvrageManager.editOuvrage(ouvrage)
    }

    insertNewRow();

    resetForm();

})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectRow = null;
}


function readOuvrage() {
    var ouvrage = new Ouvrage();

    ouvrage.titre = document.getElementById("inputTitle").value;
    return ouvrage;
}



function insertNewRow() {
    var ouvrageList = ouvrageManager.getAllItem()
    console.log(ouvrageManager.getAllItem())
    var tableBody = document.getElementById("ouvrageTable").getElementsByTagName('tbody')[0];
    while (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    }
    for (var i = 0; i < ouvrageList.length; i++) {
        var newRow = tableBody.insertRow(tableBody.length);
        newRow.insertCell(0).innerHTML = ouvrageList[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = ouvrageList[i].titre;
        cell3 = newRow.insertCell(2)
    }

}