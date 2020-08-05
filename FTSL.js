
$.getJSON("http://newsapi.org/v2/everything?" +
'q=Apple&' +
'from=2020-07-24&' +
'sortBy=popularity&' +
apiKey,'4584921db9b84bf7a75d8f28e3034c46');

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

//APIKEY=4584921db9b84bf7a75d8f28e3034c46//
