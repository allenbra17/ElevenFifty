//Example Fetch Request

// fetch('https://api.spacexdata.com/v5/launches/next')
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(jsonData => {
//         console.log(jsonData);
//         document.getElementById('display-data').innerText = jsonData.name;
//     })


const baseURL = 'https://api.spacexdata.com/v3/launches';

let formElement = document.getElementById('search-form');
let listElement = document.getElementById('rocket-list');

function fetchRockets() {

    //Retrieve the rocket data with FETCH
    //Format the data that comes back
    //Present that data with DOM Elements

    var radioButtons = document.getElementsByName('data-choice');
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            fetch( baseURL + radioButtons[i].value)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                for (let rocket of jsonData) {
                    displayRocket(rocket);
                }
            })
    

        }
    }
}
function displayRocket(rocketData) {
    
    let rocketCard = document.createElement('li');
    let rocketTitle = document.createElement('h1');
    let rocketImage = document.createElement('img');
    let rocketDetail = document.createElement('p');

    rocketTitle.innerText = rocketData.name;
    // rocketImage.src = rocketData.flickr_images[0];
    // rocketDetail.innerText = rocketData.mass.lb + " lbs";

    rocketCard.classList.add('rocket-card');
    rocketTitle.classList.add('rocket-title');
    rocketImage.classList.add('rocket-image');
    rocketDetail.classList.add('rocket-detail');

    rocketCard.appendChild(rocketTitle);
    rocketCard.appendChild(rocketImage);
    rocketCard.appendChild(rocketDetail);

    listElement.appendChild(rocketCard);
}

formElement,addEventListener('submit', (event) =>{
    event.preventDefault();
    fetchRockets();
});
