// Selecting elements from the DOM
let breakingImg = document.querySelector('#breakingImg'); // Selects the element for breaking news image
let breakingNews_title = document.querySelector('#breakingNews .title'); // Selects the element for breaking news title
let breakingNews_desc = document.querySelector('#breakingNews .description'); // Selects the element for breaking news description
let topNews = document.querySelector('.topNews'); // Selects the container for top news
let sportsNews = document.querySelector('#sportsNews .newsBox'); // Selects the container for sports news
let businessNews = document.querySelector('#businessNews .newsBox'); // Selects the container for business news
let techNews = document.querySelector('#techNews .newsBox'); // Selects the container for tech news

let header = document.querySelector('.header'); // Selects the header element
let toggleMenu = document.querySelector('.bar'); // Selects the toggle menu button
let menu = document.querySelector('nav ul'); // Selects the menu items container

// Function to toggle the menu
const toggle = (e) => {
    toggleMenu.classList.toggle('active'); // Toggles the 'active' class on the toggle menu button
    menu.classList.toggle('activeMenu'); // Toggles the 'activeMenu' class on the menu items container
}

// Event listener for toggleMenu button click event
toggleMenu.addEventListener('click', toggle);

// Event listener for window scroll event
window.addEventListener('scroll', () => {
    // Adds or removes 'sticky' class from header based on scroll position
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// API key for fetching news data
const apiKey = "84324d55e6014fdd8c09f3a90ebd33df";

// Function to fetch news data from News API
const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url); // Fetches data from the URL
    const response = await data.json(); // Converts response to JSON format
    console.log(response); // Logs the response to console (for debugging)
    return response.articles; // Returns the articles array from the response
}

// Function to add breaking news to the DOM
const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`; // Sets breaking news image
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`; // Sets breaking news title
    breakingNews_desc.innerHTML = `${data[0].description}`; // Sets breaking news description
}

// Fetching and displaying breaking news
fetchData('general', 5).then(add_breakingNews);

// Function to add top news to the DOM
const add_topNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        // Truncates long titles for display
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }
        // Constructs HTML for each top news item
        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    topNews.innerHTML = html; // Sets the HTML content for top news container
}

// Fetching and displaying top news
fetchData('general', 20).then(add_topNews);

// Function to add sports news to the DOM
const add_sportsNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        // Truncates long titles for display
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }
        // Constructs HTML for each sports news item
        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    sportsNews.innerHTML = html; // Sets the HTML content for sports news container
}

// Fetching and displaying sports news
fetchData('sports', 5).then(add_sportsNews);

// Function to add business news to the DOM
const add_businessNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        // Truncates long titles for display
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }
        // Constructs HTML for each business news item
        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    businessNews.innerHTML = html; // Sets the HTML content for business news container
}

// Fetching and displaying business news
fetchData('business', 5).then(add_businessNews);

// Function to add tech news to the DOM
const add_techNews = (data) => {
    let html = '';
    let title = '';
    data.forEach((element) => {
        // Truncates long titles for display
        if (element.title.length < 100) {
            title = element.title;
        } else {
            title = element.title.slice(0, 100) + "...";
        }
        // Constructs HTML for each tech news item
        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    techNews.innerHTML = html; // Sets the HTML content for tech news container
}

// Fetching and displaying tech news
fetchData('technology', 5).then(add_techNews);
