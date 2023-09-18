function loadContact() {
    const container = document.querySelector(".contact-content.main-block");

    // 1st div
    const div1 = document.createElement("div");
    div1.innerHTML = '<img src="./images/phone-call.png" alt="phone">Call us! This is our number: 123456789';

    // 2nd div
    const div2 = document.createElement("div");
    div2.innerHTML = '<img src="./images/pin.png" alt="pin">Mamma Mia Pizzeria, via San Donato 48, Venice';

    // h2
    const h2Elem = document.createElement("h2");
    h2Elem.textContent = "Visit us at the heart of Venice!";

    // image
    const image = document.createElement("img");
    image.setAttribute("src", "./images/venice.jpg");
    image.setAttribute("alt", "Venice");

    // append everything to container
    container.appendChild(div1);
    container.appendChild(div2)
    container.appendChild(h2Elem);
    container.appendChild(image);
}

export { loadContact };