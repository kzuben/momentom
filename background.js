const images = [

  "2.jpg",
  "8.jpg",
  "12.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

console.log(chosenImage)

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

console.log(bgImage);


document.body.appendChild(bgImage)
