var selectRow = null

function onFormSubmit(){
    if(validate()){
    var formData = readFormDate();
    if(selectRow == null)
        insertNewRecord(formData);
        else
        UpdateRecord(formData);
    resetForm();
    }
}

function readFormDate(){
	var formData = {};
	formData["medicalName"] = document.getElementById("medicalName").value;
	formData["batchNo"] = document.getElementById("batchNo").value;
	formData["price"] = document.getElementById("price").value;
	formData["description"] = document.getElementById("description").value;
	return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("medicalList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.medicalName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.batchNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.description;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = "<a onClick="onEdit(this)">Edit</a> 
						<a>Delete</a>";
}  

function resetForm() {
    document.getElementById("medicalName").value = "";
    document.getElementsById("batchNo").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    selectRow = null;
}

function onView(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("medicalName").value = selectRow.cell[0].innerHTML;
    document.getElementsById("batchNo").value = selectRow.cell[1].innerHTML;
    document.getElementById("price").value = selectRow.cell[2].innerHTML;
    document.getElementById("description").value = selectRow.cell[3].innerHTML;
}

function UpdateRecord(formData) {
    selectRow.cell[0].innerHTML = formData.medicalName;
    selectRow.cell[1].innerHTML = formData.batchNo;
    selectRow.cell[2].innerHTML = formData.price;
    selectRow.cell[3].innerHTML = formData.description;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementsById("medicalList").deleterow(row.rowIndex);
        resetForm();
    }

}

function validate() {
    IsValid = true;
    if (document.getElementById("medicalName").value == "") {
        IsValid = false;
        document.getElementById("medicalNameValidationError").classList.remove("hide");
    } else {
        IsValid = true;
        if (!document.getElementById("medicalNameValidationError").classList.contains("hide")); 
            document.getElementById("medicalNameValidationError").classList.add("hide");
    }
    return IsValid;
}