let apiKey = "ghVZTjFJF6RX2Hr1K5Gij7ZdMgwEvBOygfQZzEzB";
let searchUrl = "https://developer.nps.gov/api/v1/parks";

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
}

function getNationalParks(states, maxValue){
    const params = {
        stateCode: states,
        api_key: apiKey,
        limit: maxValue,
    };

    let queryString = formatQueryParams(params);
    let url = searchUrl + '?' + queryString;

    fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            } 
        throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch (error => {
            $('.response-data').text(`Sorry but there was an issue behind the scenes - sorry ;( - ${error.message}`)
        })
}

function displayResults(responseJson){
    console.log(responseJson);

    for(let i = 0; i < responseJson.data.length; i++) {
        console.log(responseJson.data[i].fullName);
        $('.list').append(`<li><h1>${responseJson.data[i].fullName}</h1></li>
        <p><a href=${responseJson.data[i].url} target="_blank">${responseJson.data[i].url}</a></p>
        <p>${responseJson.data[i].description}</p>
        <p>${responseJson.data[i].weatherInfo}</p>
        <p><a href="${responseJson.data[i].directionsUrl}" target="_blank">Directions to the Park!</a></p>
        <hr>`)
    }
}

function submitForm() {
    $('#submit').on('click', function(e){
        e.preventDefault();
        let state = $('#userState').val();
        console.log(state);
        const maxValue = $('#maxValue').val();
        console.log(maxValue);
        getNationalParks(state, maxValue);
        $('.list').empty();
    })
}

submitForm();