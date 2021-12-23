async function init() {
    await fetch('http://127.0.0.1:65535/api/cardetails')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('detailsList');
            data.data.forEach(element => {
                list.innerHTML += `<li>ID: ${element.id}, Doors: ${element.doors}, Fuel: ${element.fuel}, Transmission: ${element.transmission}&emsp;
                <button onclick="showEditForm(${element.id}, ${element.doors}, \'${element.fuel}\', \'${element.transmission}\');">Edit</button>&ensp;
                <button onclick="deleteDetails(${element.id})">Delete</button></li>`;
            })
        })
}

function showCreateForm() {
    document.getElementById('createDetailsForm').style.display = 'block';
}

function showEditForm(id, doors, fuel, transmission) {
    const editForm = document.getElementById('editDetailsForm');
    editForm.style.display = 'block';
    let button;
    if (!document.getElementById('editButton')) {
        button = document.createElement('button');
    } else {
        button = document.getElementById('editButton');
    }
    editForm.appendChild(button);
    document.getElementById('editDoors').value = doors;
    document.getElementById('editFuel').value = fuel;
    document.getElementById('editTransmission').value = transmission;
    button.textContent = 'Edit';
    button.setAttribute('id', 'editButton');
    button.setAttribute('onclick', `editDetails(${id})`);
}

async function addDetails() {
    const data = {
        doors: document.getElementById('createDoors').value,
        fuel: document.getElementById('createFuel').value,
        transmission: document.getElementById('createTransmission').value
    }

    await fetch('http://127.0.0.1:65535/api/cardetails', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {});

    document.getElementById('detailsList').innerHTML = "";
    init();
    document.getElementById('createDetailsForm').style.display = 'none';
}

async function editDetails(id) {
    const data = {
        doors: document.getElementById('editDoors').value,
        fuel: document.getElementById('editFuel').value,
        transmission: document.getElementById('editTransmission').value
    }

    await fetch(`http://127.0.0.1:65535/api/cardetails/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    document.getElementById('detailsList').innerHTML = "";
    init();
    document.getElementById('editDetailsForm').style.display = 'none';
}

async function deleteDetails(id) {
    await fetch(`http://127.0.0.1:65535/api/cardetails/${id}`, {
        method: 'DELETE',
    });

    document.getElementById('detailsList').innerHTML = "";
    init();
}