function clicked() {
  console.log("printing hello");

  //   //   fetch("https://dog.ceo/api/breeds/image/random")
  //   fetch("http://127.0.0.1:5000/images/random")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("this got printed out -> ", response);

  //       document.getElementById("display").innerHTML =
  //         '<img src="' + response.message + '"/>';
  //     });

  fetch(
    "http://127.0.0.1:5000/restaurants/" +
      document.getElementById("user-input-1").value
  )
    .then((res) => res.json())
    .then((response) => {
      console.log("this got printed out -> ", response);

      //   document.getElementById("display").innerHTML =
      // '<img src="' + response.message + '"/>';
    });
}
// api = backend = server

//  http request = api call

// const obj1 = {
//     name: "ryan",
//     school: "uci",
//     age: 24,

// }

// obj1.name  // return "ryan"
