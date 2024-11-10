const gallery = document.getElementById('gallery');
let page = Math.floor(Math.random() * 100) + 1; 


function setRandomBackgroundImage() {
    const randomImage = `https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)}`;
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}


window.onload = () => {
    setRandomBackgroundImage();
    loadMoreImages();
};

function loadMoreImages() {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.alt = "Image from picsum.photos";
                gallery.appendChild(imgElement);
            });
            page++; 
        })
        .catch(error => console.error('Error fetching images:', error));
}

function clearGallery() {
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }
}

function removeLastImage() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

function reverseGallery() {
    const images = Array.from(gallery.children);
    images.reverse().forEach(img => gallery.appendChild(gallery.removeChild(img)));
}
