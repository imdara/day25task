document.body.innerHTML=`<h1>Forza API</h1>
<div class="container" id="carImg" ></div><br>
<button class="btn btn-light" onclick="getArandomCar()">Click here to get a random car image</button><br>`;
getArandomCar = (async () => {
    try {
        let res = await fetch(`https://forza-api.tk/`);
        let object = await res.json();
        displayCar(object);
    } 
    catch (error) {
      console.log(error);
    }
  });

  displayCar = (obj) => {
    let image = obj.image;
    document.querySelector('#carImg').innerHTML = `
    <li class="card">
    <img class="card-img-top" src="${image}" height="600px" alt="randomcarimg"/>
    </li>
    `;
    }