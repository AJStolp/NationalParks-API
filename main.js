let apiKey = "ghVZTjFJF6RX2Hr1K5Gij7ZdMgwEvBOygfQZzEzB";
let searchUrl = "https://developer.nps.gov/api/v1/";

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
}

function getNationalParks(state){
    const params = {
        limit: 25,
        stateCode: state,
        q: search,
        key: apiKey,
    }

    let queryString = formatQueryParams(params);
    let url = searchUrl + '?' + queryString;

    fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            } 
        throw new Error(response.statusText)
        .then(responseJson => console.log(JSON.stringify(responseJson)))
        .catch (error => {
            $('.response-data').text(`Sorry but there was an issue behind the scenes - sorry ;( ${error.message}`)
        })
}

function submitForm() {
    $('.section1').on('click', function(e){
        e.preventDefault();
        const state = $('#userState').val();
        const maxValue = $('#maxValue').val();
        getNationalParks(state, maxValue);
    })
}

submitForm();