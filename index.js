window.location.hash = '#';

const loadCompanies = () => {
    axios.get(`https://acme-users-api-rev.herokuapp.com/api/companies`)
    .then(response => {
        const {data} = response
        renderCompanies(data);
    })
}

const loadProducts = () => {
    axios.get(`https://acme-users-api-rev.herokuapp.com/api/products`)
    .then(response => {
        const {data} = response
        renderProducts(data);
    })
}

const renderCompanies = (companies) => {
    let html = companies.map(company => {
        return `
                <tr class='item'>
                    <td>${company.id}</td>
                    <td>${company.name}</td>
                    <td>${company.phone}</td>
                    <td>${company.state}</td>
                    <td>${company.catchPhrase}</td>
                    <td>${company.createdAt}</td>
                    <td>${company.updatedAt}</td>
                </tr>`;
    }).join('');

    html = `
    <tr class='item'>
        <th>id</th>
        <th>name</th>
        <th>phone</th>
        <th>state</th>
        <th>catchPhrase</th>
        <th>createdAt</th>
        <th>updatedAt</th>
    </tr>
    ${html}`
    document.querySelector('#results').innerHTML = html;
}

const renderProducts = (products) => {
    let html = products.map(product => {
        return `
                <tr class='item'>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.suggestedPrice}</td>
                    <td>${product.createdAt}</td>
                    <td>${product.updatedAt}</td>
                </tr>`;
    }).join('');

    html = `
    <tr class='item'>
        <th>id</th>
        <th>name</th>
        <th>description</th>
        <th>suggestedPrice</th>
        <th>createdAt</th>
        <th>updatedAt</th>
    </tr>
    ${html}`
    document.querySelector('#results').innerHTML = html;
}


window.addEventListener('hashchange', (ev) => {
    if(window.location.hash === '#companies'){
        loadCompanies();
    }else if(window.location.hash === '#products'){
        loadProducts();
    }
})