import { load } from './page-load';
import { loadHome } from './home-loader';
import { loadMenu } from './menu-loader';
import { loadContact } from './contact-loader';
import './style.css';

function changeSelectedTab(to, ...from) {
    // if 'to' tab is already selected then return
    if (to.classList.contains("selected")) {
        return;
    }

    // otherwise add 'selected' class to 'to' tab
    to.classList.add("selected");

    for (let i = 0; i < from.length; i++) {
        // remove selected tag from all other buttons
        if (from[i].classList.contains("selected")) {
            from[i].classList.remove("selected");
        }
    }
}

function run() {
    load();
    loadHome();
    loadMenu();
    loadContact();

    const homeBtn = document.querySelector("#home-button");
    const menuBtn = document.querySelector("#menu-button");
    const contactBtn = document.querySelector("#contact-button");

    const homeTab = document.querySelector(".home-content");
    const menuTab = document.querySelector(".menu-content");
    const contactTab = document.querySelector(".contact-content");

    homeBtn.addEventListener("click", e => {
        changeSelectedTab(homeBtn, menuBtn, contactBtn);
        homeTab.style.display = "flex";
        menuTab.style.display = "none";
        contactTab.style.display = "none";
        
    });
    menuBtn.addEventListener("click", e => {
        changeSelectedTab(menuBtn, homeBtn, contactBtn);
        homeTab.style.display = "none";
        menuTab.style.display = "block";
        contactTab.style.display = "none";
    });

    contactBtn.addEventListener("click", e => {
        changeSelectedTab(contactBtn, homeBtn, menuBtn);
        homeTab.style.display = "none";
        menuTab.style.display = "none";
        contactTab.style.display = "block";
    });
}

run();