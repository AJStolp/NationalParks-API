let searchUrl = "https://developer.nps.gov/api/v1/";
let apiKey;

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
}

function getNationalParks(state){
    let apiKey = "ghVZTjFJF6RX2Hr1K5Gij7ZdMgwEvBOygfQZzEzB";
    const params = {
        limit: 25,
        stateCode: state,
        q: search,
        key: apiKey,
    }
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