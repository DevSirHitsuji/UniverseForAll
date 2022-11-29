
function addContent(data){
    const content = document.getElementsByClassName("content");
    const linkDonwload = document.getElementById("downloadImage");

    content[0].innerHTML = "";

    let tittle = document.createElement("h2");
    tittle.innerHTML = data.title;
    content[0].appendChild(tittle);

    let text = document.createElement("p");
    text.innerHTML = data.explanation;
    content[0].appendChild(text);

    document.getElementsByClassName("bg")[0].style = "background-image: url("+data.hdurl+")";
    console.log(linkDonwload)
    linkDonwload.href = data.hdurl;

}


function requestData(token, date){
    url = "https://api.nasa.gov/planetary/apod?api_key=" + token + "&date=" + date
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        addContent(data);
    })
}

function getDate(){
    const date = document.getElementById("inputDate");
    return date.value;
}

function loadToken(date){
    fetch("JS/Controller/config.json")
    .then(resp => resp.json())
    .then(data => {
        requestData(data.token, date);
    })
}



