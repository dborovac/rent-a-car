async function init() {
    const list = document.getElementById('userList');
    await fetch('http://127.0.0.1:65535/api/users')
        .then(res => res.json())
        .then(data => {
            data.data.forEach(element => {
                appendListItem(list, element);
            })
        })
}

async function addUser() {
    const data = {
        email: document.getElementById('createEmail').value,
        password: document.getElementById('createPassword').value
    }
    await fetch('http://127.0.0.1:65535/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {});

    document.getElementById('userList').innerHTML = "";
    init();
    document.getElementById('createUserForm').style.display = 'none';
}

async function editUser(id) {
    const data = {
        email: document.getElementById('editEmail').value,
        password: document.getElementById('editPassword').value
    }

    await fetch(`http://127.0.0.1:65535/api/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    document.getElementById('userList').innerHTML = "";
    init();
    document.getElementById('editUserForm').style.display = 'none';
}

async function deleteUser(id) {
    await fetch(`http://127.0.0.1:65535/api/users/${id}`, {
        method: 'DELETE'
    });

    document.getElementById('userList').innerHTML = "";
    init();
}