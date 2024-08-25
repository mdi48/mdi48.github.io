// opening tabs in the About Me section
let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function tabOpen(tabName) {
    let tabLinksArray = [...tabLinks]; // remember to use spread operator to convert html collection to array
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




