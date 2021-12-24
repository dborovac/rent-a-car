async function init() {
    const list = document.getElementById('carList');
    await fetch('http://127.0.0.1:65535/api/cars')
        .then(res => res.json())
        .then(data => {
            data.data.forEach(element => {
                appendListItem(list, element);
            })
        })
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
