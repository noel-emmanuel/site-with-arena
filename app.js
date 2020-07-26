console.log("yo the js file is linked");

// creating a request variable
let request = new XMLHttpRequest();

// opening a new connection using get
let api_url = 'https://api.are.na/v2/channels/personal-style-gpepcau7jt4';
request.open('GET', api_url);

// need to access data as soon as it loaded
request.onload = function() {
  let data = JSON.parse(this.response);
  let arr = data.contents;
  for (var i = 0; i < 6; i++) {
    // console.log(arr[i].image.original.url);
    images = arr[i].image.original.url;
    // console.log(images); 
    var a = document.createElement("img");
    a.height = 500;
    a.src = images;
    // console.log(a);
    document.getElementById("photolink").appendChild(a);

  }
  // let img = data.image.original.url;
  // console.log(img);
}



request.send();
