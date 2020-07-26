console.log("yo the js file is linked");

// creating a request variable
let request = new XMLHttpRequest();

// opening a new connection using get
let api_url = 'https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures';
request.open('GET', api_url);

// need to access data as soon as it loaded
request.onload = function() {
  let data = JSON.parse(this.response);
  let textContent = data.contents;
  // let textContent = data.contents['1'].content); // just a pointer
  for (var i = 0; i < textContent.length; i++) {
    let returnedStrings = textContent[i].content;
    let accessWebpage = document.getElementById('root');
    console.log(accessWebpage.innerHTML = returnedStrings);
  }
}



request.send();
