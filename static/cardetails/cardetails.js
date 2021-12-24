async function init() {
    const list = document.getElementById('detailsList');
    await fetch('http://127.0.0.1:65535/api/cardetails')
        .then(res => res.json())
        .then(data => {
            data.data.forEach(element => {
                appendListItem(list, element);
            })
        })
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