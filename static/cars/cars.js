async function init() {
    await fetch('http://127.0.0.1:65535/api/cars')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('carList');
            data.data.forEach(element => {
                list.innerHTML += `<li>ID: ${element.id}, Manufacturer: ${element.manufacturer}, Model: ${element.model}, Year: ${element.year}, Details id: ${element.detailsId}&emsp;
                <button onclick="showEditForm(${element.id}, \'${element.manufacturer}\', \'${element.model}\', ${element.year}, ${element.detailsId});">Edit</button>&ensp;
                <button onclick="deleteCar(${element.id})">Delete</button>&ensp;
                <a href="#popup1" onclick="showCarDetails(${element.id}, ${element.detailsId})">Details</a></li>`;
            })
        })
}

function showCreateForm() {
    document.getElementById('createCarForm').style.display = 'block';
}

function showEditForm(id, manufacturer, model, year, detailsId) {
    const editForm = document.getElementById('editCarForm');
    editForm.style.display = 'block';
    let button;
    if (!document.getElementById('editButton')) {
        button = document.createElement('button');
    } else {
        button = document.getElementById('editButton');
    }
    editForm.appendChild(button);
    document.getElementById('editManufacturer').value = manufacturer;
    document.getElementById('editModel').value = model;
    document.getElementById('editYear').value = year;
    document.getElementById('editDetailsId').value = detailsId;
    button.textContent = 'Edit';
    button.setAttribute('id', 'editButton');
    button.setAttribute('onclick', `editCar(${id})`);
}

async function showCarDetails(carId, id) {
    await fetch(`http://127.0.0.1:65535/api/cardetails/${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('popupBoxTitle').textContent = carId;
            document.getElementById('detailsDoors').textContent = data.doors;
            document.getElementById('detailsFuel').textContent = data.fuel;
            document.getElementById('detailsTransmission').textContent = data.transmission;
        })
}

async function addCar() {
    const data = {
        car: {
            manufacturer: document.getElementById('createManufacturer').value,
            model: document.getElementById('createModel').value,
            year: document.getElementById('createYear').value,
            detailsId: document.getElementById('createDetailsId').value
        }
    }

    await fetch('http://127.0.0.1:65535/api/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {});

    document.getElementById('carList').innerHTML = "";
    init();
    document.getElementById('createCarForm').style.display = 'none';
}

async function editCar(id) {
    const data = {
        car: {
            manufacturer: document.getElementById('editManufacturer').value,
            model: document.getElementById('editModel').value,
            year: document.getElementById('editYear').value,
            detailsId: document.getElementById('editDetailsId').value
        }
    };

    await fetch(`http://127.0.0.1:65535/api/cars/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    document.getElementById('carList').innerHTML = "";
    init();
    document.getElementById('editCarForm').style.display = 'none';
}

async function deleteCar(id) {
    await fetch(`http://127.0.0.1:65535/api/cars/${id}`, {
        method: 'DELETE',
    });

    document.getElementById('carList').innerHTML = "";
    init();
}
