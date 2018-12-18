const contentElement = document.querySelector('.content');

function changePage (pageName) {
    fetch(`${pageName}.html`).then(res => res.text()).then(res => {
        contentElement.innerHTML = res;
    });

}
var title= document.querySelector('.page-title');
title.innerHTML= 'Centrul Local care e al vostru' ;

var today = new Date();
var footer = document.querySelector('.footer') ;
footer.innerHTML = `Copyright ${today.getFullYear()} | ${title.innerHTML}`;

const imageList = [
    'https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/53754/pexels-photo-53754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/666988/pexels-photo-666988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

var currentIndex;
currentIndex=0;
function nextImage() {
    if (currentIndex == imageList.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setImageSource();
}

 // PREVIOUS image
function previousImage() {
    if (currentIndex == 0) {
        currentIndex = imageList.length -1;
    } else {
        currentIndex--;
    }
    setImageSource();
}

 // SET IMAGE source
function setImageSource() {
    image.src = imageList[currentIndex];
    console.log(currentIndex);
} 


var imagecontent = document.querySelector('.gallery > .image-content');


var image = document.createElement("img");
image.src= imageList[currentIndex];
imagecontent.appendChild(image);