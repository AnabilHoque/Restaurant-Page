function setupHeader(parent) {
    const headerElem = document.createElement("header");

    // h1
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "Mamma Mia Pizzeria";
    headerElem.appendChild(h1Elem);

    // tabbed buttons
    const divButtons = document.createElement("div");
    divButtons.classList.add("tabbed-buttons");

    // create the individual buttons
    let btns = []
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btns.push(btn);
    }

    // Home button
    btns[0].setAttribute("id", "home-button");
    btns[0].classList.add("selected");
    btns[0].textContent = "Home";

    // Menu button
    btns[1].setAttribute("id", "menu-button");
    btns[1].textContent = "Menu";

    // Contact button
    btns[2].setAttribute("id", "contact-button");
    btns[2].textContent = "Contact";

    for (let i = 0; i < 3; i++) {
        divButtons.appendChild(btns[i]);
    }
    headerElem.appendChild(divButtons);

    // append header element to parent
    parent.appendChild(headerElem);
}

function setupMain(parent) {
    const mainElem = document.createElement("main");

    // div home-content main-block
    const divHome = document.createElement("div");
    divHome.classList.add("home-content");
    divHome.classList.add("main-block")
    mainElem.appendChild(divHome);

    // div menu-content main-block
    const divMenu = document.createElement("div");
    divMenu.classList.add("menu-content");
    divMenu.classList.add("main-block");
    mainElem.appendChild(divMenu);

    // contact-content main-block
    const divContent = document.createElement("div");
    divContent.classList.add("contact-content");
    divContent.classList.add("main-block");
    mainElem.appendChild(divContent);

    // append main element to parent
    parent.appendChild(mainElem);
}

function setupFooter(parent) {
    const footerElem = document.createElement("footer");
    footerElem.innerHTML = "<p>Copyright &copy; Anabil Hoque</p>";
    parent.appendChild(footerElem);
}

function load() {
    const contentContainer = document.querySelector("div#content");
    setupHeader(contentContainer);
    setupMain(contentContainer);
    setupFooter(contentContainer);
}

export { load };