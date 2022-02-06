async function init() {
    const list = document.getElementById('reservationList');
    await fetch('http://127.0.0.1:65535/api/reservations')
        .then(res => res.json())
        .then(data => {
            data.data.forEach(element => {
                appendListItem(list, element);
            })
        })
}

async function addReservation() {
    const data = {
        startDate: document.getElementById('createStartDate').value,
        endDate: document.getElementById('createEndDate').value,
        carId: document.getElementById('createCarId').value,
        userId: document.getElementById('createUserId').value
    }

    await fetch('http://127.0.0.1:65535/api/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {});

    document.getElementById('reservationList').innerHTML = "";
    init();
    document.getElementById('createReservationForm').style.display = 'none';
}

async function editReservation(id) {
    const data = {
        startDate: document.getElementById('editStartDate').value,
        endDate: document.getElementById('editEndDate').value,
        carId: document.getElementById('editCarId').value,
        userId: document.getElementById('editUserId').value
    }

    await fetch(`http://127.0.0.1:65535/api/reservations/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    });

    document.getElementById('reservationList').innerHTML = "";
    init();
    document.getElementById('editReservationForm').style.display = 'none';
}

async function deleteReservation(id) {
    await fetch(`http://127.0.0.1:65535/api/reservations/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    });

    document.getElementById('reservationList').innerHTML = "";
    init();
}