document.body.innerHTML=`<h1>Disney Characters</h1><br>
<ol class="container" id="list"></ol><br>`;

const displayArea = document.querySelector('#list');

fetchData = (async () => {
    try {
        let res = await fetch(`https://api.disneyapi.dev/characters?page=132`);
        let object = await res.json();
        displayInfo(object);
    } 
    catch (error) {
      console.log(error);
    }
  });

  displayInfo = (obj) => {
    for (let i = 1; i <= 50; i++) {
    let name = obj.data[i-1].name;
    let image = obj.data[i-1].imageUrl;
    displayArea.innerHTML += `
    <li class="card">
    <img class="card-img-top" src="${image}"/>
    <div class="card-body">
    <h3 class="card-title">${i}. ${name}</h3>
    </div>
    </li><br>
    `;
    }
}

fetchData();