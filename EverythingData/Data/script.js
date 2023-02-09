//Get the image id in the index file
const image = document.getElementById("image");

// put your image assets in an array or list
const images = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg", "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg","https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",];

// set the currentImage(list) to be the first length which is zero
let currentImage = 0;

// create a function to change images 
function changeImage() {
  image.src = images[currentImage]; // image.src(image value) is now set to the first element in the list ie image.src[0]
  currentImage = (currentImage + 1) % images.length; // currentImage = (0 + 1) % 5; currentImage = 4 {state will keep change until there is nothing left in our list}
}

changeImage();
setInterval(changeImage, 1000); // the setInterval makes this possible as it change the state every 1000...
