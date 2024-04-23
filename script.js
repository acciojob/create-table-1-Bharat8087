function insert_Row() {
    //Write your code here

    var table = document.getElementById('sampleTable');
    var newRow = document.createElement('tr');
    table.insertBefore(newRow, table.firstChild);
    var leftCell = document.createElement('td');
    var rightCell = document.createElement('td');
    leftCell.innerText = 'New Cell1';
    rightCell.innerText = 'New Cell2';
    newRow.appendChild(leftCell);
    newRow.appendChild(rightCell);
}
