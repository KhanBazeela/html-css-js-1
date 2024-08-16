document.getElementById('addButton').addEventListener('click', function() {
    // Get input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;

    // Check if inputs are not empty
    if(name === '' || age === '' || phone === '') {
        alert('Please fill out all fields');
        return;
    }

    // Create a new row
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const phoneCell = newRow.insertCell(2);

    // Fill cells with data
    nameCell.textContent = name;
    ageCell.textContent = age;
    phoneCell.textContent = phone;

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
});
