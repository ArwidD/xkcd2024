var maxComic
var currentComic

window.onload = function(){
    //hämta senaste comic
    getComic('latest')
    //sätter funktionalitet för nav knappar

}

function getComic(which){
    //hämta(fetch) data från xkcd api
    fetch('https://xkcd.vercel.app/?comic='+which)
        .then(function(response){
            //kolla om svar är okej(200)
            if(response.status === 200){
                return response.json();
            } else {
                //kastar ett fel meddelande om satus inte är ok
                throw new Error('failed to load comic');

            }
        })
        .then(function(data){
            //Uppdatera maxComic värde
            if(maxComic < data.num){
                maxComic=data.num;
            }
            //skicka json data för behandling till DOM
            console.log(data);
            appendComic(data);
        })
        .catch(function(error){
            //logga eventuella errors
            console.log('Erorr: ', error);
        })
}

function appendComic(data){}