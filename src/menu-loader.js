function loadMenu() {
    const container = document.querySelector(".menu-content.main-block");

    // h1 
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "Menu";

    // list menu
    const listMenu = document.createElement("ul");
    listMenu.innerHTML = '<li><a href="#">Margherita, £6.00</a></li><li><a href="#">Pizza Peperoni, £7.00</a></li><li><a href="#">Pizza Zucchine, £7.00</a></li><li><a href="#">Pizza Napoletana, £8.00</a></li><li><a href="#">Pizza Funghi, £8.00</a></li><li><a href="#">Pizza Romana, £8.00</a></li><li><a href="#">Pizza Capricciosa, £9.00</a></li><li><a href="#">Pizza Asparagi & Gamberetti, £9.50</a></li>';

    // append everything to container
    container.appendChild(h1Elem);
    container.appendChild(listMenu);
}

export { loadMenu };