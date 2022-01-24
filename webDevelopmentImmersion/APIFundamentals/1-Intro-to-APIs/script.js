baseURL = 'https://api.spacexdata.com/v3'
let table = document.querySelector('table');

fetch(`${baseURL}/launches`)
    .then(response => response.json())
    .then(json => displayLaunches(json))

let displayLaunches = (json) => {
    console.log(json);

    json.forEach(launch => {
        let tr = document.createElement('tr')
        let flightNumber = document.createElement('td');
        let missionName = document.createElement('td');
        let rocketName = document.createElement('td');

        flightNumber.innerText = launch.flight_number
        missionName.innerText = launch.mission_name
        rocketName.innerText = launch.rocket.rocket_name;

        tr.appendChild(flightNumber);
        tr.appendChild(missionName);
        tr.appendChild(rocketName);
        table.appendChild(tr);


    });
}