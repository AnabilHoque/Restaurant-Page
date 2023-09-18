function loadHome() {
    const container = document.querySelector(".home-content.main-block");

    // h1
    const h1Elem = document.createElement("h1");
    h1Elem.textContent = "Home to the best Pizza in the world!";

    // intro
    const divIntro = document.createElement("div");
    divIntro.classList.add("intro");
    divIntro.textContent = "Welcome to Mamma Mia Pizzeria, where culinary excellence meets the art of pizza-making.  Nestled in the heart of Venice, our pizzeria is more than just a place to satisfy your cravings; it's an extraordinary culinary journey that promises to tantalize your taste buds like never before. With a passion for perfection and a commitment to using only the finest ingredients, we proudly present to you the best pizza in the world.";
    divIntro.appendChild(document.createElement("br"));
    
    // image
    const image = document.createElement("img");
    image.setAttribute("src", "./images/pizza-intro.jpg");
    image.setAttribute("alt", "pizza");
    divIntro.appendChild(image);

    // hours
    const divHours = document.createElement("div");
    divHours.classList.add("hours");
    const h2DivHours = document.createElement("h2");
    h2DivHours.textContent = "Hours";
    divHours.appendChild(h2DivHours);
    const listHours = document.createElement("ul");
    listHours.innerHTML = "<li>Monday: 9am - 6pm</li><li>Tuesday: 9am - 6pm</li><li>Wednesday: 9am - 6pm</li><li>Thursday: 9am - 6pm</li><li>Friday: 9am - 6pm</li><li>Saturday: 10am - 6pm</li><li>Sunday: 10am - 6pm</li>";
    divHours.appendChild(listHours);

    // append everything to container
    container.appendChild(h1Elem);
    container.appendChild(divIntro);
    container.appendChild(divHours);
}

export { loadHome };