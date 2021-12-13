function init() {
    fetch('http://127.0.0.1:65535/api/cars')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('carList');
            data.data.forEach(element => {
                list.innerHTML += `<li>ID: ${element.id}, Manufacturer: ${element.manufacturer}, Model: ${element.model}, Year: ${element.year}</li>`;
            })
        })
}