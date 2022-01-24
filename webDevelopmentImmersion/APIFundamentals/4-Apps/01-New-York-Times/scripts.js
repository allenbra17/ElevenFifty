const key = '9mSTD5XZ9CmbeW05qyVAl3t4PvFP4Ca3';
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

let query = document.querySelector('.search');
let startDate = document.querySelector('.startDate');
let endDate = document.querySelector('.endDate');
let submitBtn = document.querySelector('.submit');
let searchForm = document.querySelector('form');

let section = document.querySelector('section');

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let nav = document.querySelector('nav');
let pageNumber = 0;
let displayNav = false;

nav.style.display = 'none';

nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    let url = `${baseURL}api-key=${key}&page=${pageNumber}&q=${query.value}`;
    if(startDate.value !== '') {
        url += '&begin_date=' + startDate.value
    };
    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value
    };

    fetch(url)
        .then(function(result) {
            return result.json();
        }) .then(function(json) {
            displayResults(json)
        });
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    nav.style.display = 'none';

    if(articles.length === 0) {
        console.log('No Results');
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img)
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
    // console.log(pageNumber);
    if(articles.length === 10 && pageNumber === 0) {
        nav.style.display = 'block';
        prevBtn.style.display = 'none';
    } else if (articles.length === 10 && pageNumber.value !== 0) {
        nav.style.display = 'block';
        prevBtn.style.display = 'block';
    } else {
        nav.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }
}

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
}
function prevPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
}

