function insert_Row() {
    var table = document.getElementById('sampleTable');
    var newRow = table.insertRow(0);  // Insert a new row at the top of the table

    var leftCell = newRow.insertCell(0);  // Insert a new cell in the new row at index '0'
    leftCell.innerText = 'New Cell1';

    var rightCell = newRow.insertCell(1);  // Insert a new cell in the new row at index '1'
    rightCell.innerText = 'New Cell2';
}