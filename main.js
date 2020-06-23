
axios.get("https://spreadsheets.google.com/feeds/list/1wjjouWeONy8zlkiHyMt6lQIG9nEbWvDpLKgpN2W5qwg/1/public/values?alt=json"
).then(reponse => {
     let data = reponse.data.feed.entry
    let out = data.map(el => 
        `<div class="card">
            <div class="title">
            <h2>nom: ${el.gsx$nom.$t} </h2>
                <p>à répondu : ${el.gsx$lesapiscest.$t}</p>   
            </div>
        </div>`
        ).join("");
    let sortie = document.querySelector(".sortie");
    sortie.innerHTML =`${out}` 
 console.log(reponse.data.feed.entry)
    })