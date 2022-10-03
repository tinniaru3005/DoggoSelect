const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((data) => generateImage(data.message));


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateImage(data) {
    const html = `
        <img src = '${data}' alt>
        <p>Click to view the images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

