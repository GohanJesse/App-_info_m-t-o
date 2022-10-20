// Partie JS comprenant l'heure 
        
setInterval(() =>{
    
    // Horloge digitale
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // ajouter 0 avant les nombres simple

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
})

// Partie JS comprenant les appels a L'API "openweathermap" 


// Appel API
function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Mazamet,fr&lang=fr&appid=c08c6b4f2ad2e2bc8306c05f46a42209&units=metric"
    
    $.get( url, callBackGetSuccess).done(function() {
        // Alerte ("second success");
    })
    .fail(function() {
        alarte( "error" );
    })
    .always(function() {
        //alerte ( "finished" );
    });

}

// demandes et reponses

let callBackGetSuccess = function(data) {
    console.log("donnees api meteo" , data)

    let ville = document.getElementById("ville");
    ville.innerHTML = data.name;
    
    let icon = document.getElementById("icon");
    icon.innerHTML = data.weather[0].description;
    
    let temperature = document.getElementById("temperature");
    temperature.innerHTML =  data.main.temp + "°C";

    let vent = document.getElementById("vent");
    vent.innerHTML = data.wind.speed;
    
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity;
}

// Partie JS comprenant les appels a L'API "google-actu-fr"


// Appel API

function btnClickGET() {
    var api_actu = "https://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=4c54f1d59fb14f8a87be552e95a41ad7"

    $.get( api_actu, btnClickGETSucess).done(function() {
        // Alerte ("second success");
    })
    .fail(function() {
        alarte( "error" );
    })
    .always(function() {
        //alerte ( "finished" );
    });

}

// Demandes et reponses

let btnClickGETSucess = function(data) {
    console.log("données api info" , data)

    let news = document.getElementById("news");
    news.innerHTML = data.articles[0].description;
}


