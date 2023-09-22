import phoneCallImage from './assets/phone-call.png';
import pinImage from './assets/pin.png';
import veniceImage from './assets/venice.jpg';


function loadContact() {
    const container = document.querySelector(".contact-content.main-block");

    // 1st div
    const div1 = document.createElement("div");
    const img1 = document.createElement("img");
    img1.src = phoneCallImage;
    img1.alt = "phone";
    div1.innerHTML = `${img1.outerHTML} Call us! This is our number: 123456789`;

    // 2nd div
    const div2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.src = pinImage;
    img2.alt = "pin";
    div2.innerHTML = `${img2.outerHTML} Mamma Mia Pizzeria, via San Donato 48, Venice`;

    // h2
    const h2Elem = document.createElement("h2");
    h2Elem.textContent = "Visit us at the heart of Venice!";

    // image
    const image = document.createElement("img");
    image.src = veniceImage;
    image.alt = "Venice";

    // append everything to container
    container.appendChild(div1);
    container.appendChild(div2)
    container.appendChild(h2Elem);
    container.appendChild(image);
}

export { loadContact };