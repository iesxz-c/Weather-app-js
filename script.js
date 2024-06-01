const weaform = document.querySelector(".weather")
const cityinp = document.querySelector(".city")
const card = document.querySelector(".card")

const apiKey = "7126f4c0d8ea4756999379a2bdbcbcd0"

weaform.addEventListener("submit", async(event) =>{
    event.preventDefault();

    const city = cityinp.value

    if(city){
        try{

            const weatherdata = await getweatherdata(city)
            todisplay(weatherdata)

        }catch(error){
            console.log(error)
        }
    }
    else{
        displayError("PLS ENTER A CITY ")
    }


})

async function getweatherdata(city){

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiurl)
    if(!response.ok){
        throw new Error("Couldnt fetch the data")
    }
    return await response.json()

}


function todisplay(data){
    //object restructuring 
    const {name: city, main: {temp,humidity}, weather:[{description,id}]} = data
    card.textContent=""
    card.style.display ="flex"
    const citydisplay = document.createElement("h1")
    const tempdisplay = document.createElement("p")
    const humiditydisplay = document.createElement("p")
    const descdisplay = document.createElement("p")
    const weatheremoji = document.createElement("p")

    citydisplay.textContent =city;
    citydisplay.classList.add("cd")

    tempdisplay.textContent=`${(temp-273.15).toFixed(1)}°C`
    tempdisplay.classList.add("cd")

    humiditydisplay.textContent = `Humidity : ${humidity} %`
    humiditydisplay.classList.add("hd")
 
    descdisplay.textContent=`${description}`
    descdisplay.classList.add("dd")

    weatheremoji.textContent = getweatheremoji(id);
    weatheremoji.classList.add("ed")

    card.appendChild(citydisplay)
    card.appendChild(tempdisplay)
    card.appendChild(humiditydisplay)
    card.appendChild(descdisplay)
    card.appendChild(weatheremoji)

}

function getweatheremoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId <300):
            return "⛈️";
        case (weatherId >= 300 && weatherId <400):
            return "🌧️";
        case (weatherId >= 500 && weatherId <600):
            return "☔";
        case (weatherId >= 600 && weatherId <700):
            return "☃️";
        case (weatherId >= 700 && weatherId <800):
            return "🌫️";

        case (weatherId === 800):
            return "☀️";
        case (weatherId > 800 && weatherId <900):
            return "☁️";
            
        default:
            return"?"

    }
}


function displayError(message) {
    const errord = document.createElement("p");
    errord.textContent = message;
    errord.classList.add("ed");
    
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errord);
}