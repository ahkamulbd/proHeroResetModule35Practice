const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.data);
    displayPhones(data.data);
}

const displayPhones = phones => {
    //console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    //phonesContainer.textContent = '';
    phonesContainer.innerText = '';
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-3">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    `;
        phonesContainer.appendChild(phoneDiv);
    })

}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    searchField.value = '';
    loadPhones(searchText);
})


loadPhones();