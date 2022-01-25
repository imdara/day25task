document.body.innerHTML=`<h1>Fun Facts API</h1>
<div class="container" id="funFact" ></div><br>
<button class="btn btn-light" onclick="getArandomFact()">Click here to get a random fun fact</button><br>`;
getArandomFact = (async () => {
    try {
        let res = await fetch(`https://ffa.aakhilv.me/json`);
        let object = await res.json();
        displayText(object);
    } 
    catch (error) {
      console.log(error);
    }
  });

  displayText = (obj) => {
    let text = obj.text;
    document.querySelector('#funFact').innerHTML = `
    <li class="card">
    <p>${text}</p>
    </li>
    `;
    }