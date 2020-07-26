console.log("yo the js file is linked");

// creating a request variable
let request = new XMLHttpRequest();

// opening a new connection using get
request.open('GET', 'https://api.are.na/v2/blocks/852210/');

// need to access data as soon as it loaded
request.onload = function() {
  let data = JSON.parse(this.response);
  let img = data.image.original.url;
  console.log(img);
  var a = document.createElement("img");
  a.height = 500;
  a.src = img;
  console.log(a);
  document.getElementById("photolink").appendChild(a);
}



request.send();
