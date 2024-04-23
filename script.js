function insert_Row() {
    //Write your code here

    var table = document.getElementById('sampleTable');
    var newRow = table.insertRow();
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);
    leftCell.innerHTML = 'New Cell1';
    rightCell.innerHTML = 'New Cell2';
}

  
}
