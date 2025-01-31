let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function tabOpen(tabName) {
    let tabLinksArray = [...tabLinks];
    let tabContentsArray = [...tabContents];

    tabLinksArray.forEach(tabLink => {
        tabLink.classList.remove('active-link');
    });

    tabContentsArray.forEach(tabContent => {
        tabContent.classList.remove('active-tab');
    });

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

function toggleMenu() {
    const navMenu = document.querySelector('.header-stuff');
    const menuIcon = document.querySelector('.menu-icon');

    navMenu.classList.toggle('open');


    if (navMenu.classList.contains('open')) {
        menuIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        `;
    }

    else {
        menuIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
    }
}

document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.header-stuff');
    const menuIcon = document.querySelector('.menu-icon');

    if (!navMenu.contains(e.target) && !menuIcon.contains(e.target) && navMenu.classList.contains('open')) {
        toggleMenu();
    }
});

// form for google sheet (credit to @jamiewilson on GitHub)
const scriptUrl = "https://script.google.com/macros/s/AKfycbwRLATgDLgFp1biYG_YxsIcgyaElTT9F4KdJ1Ayr39aE8QDKgj-nPdPryO3IUNLcOsKlg/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptUrl, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Sent!', response))
        .catch(error => console.error('Error!', error.message));
})



