export function loadMoreImages() {
    const gallery = document.getElementById('gallery');
    let page = Math.floor(Math.random() * 100) + 1;

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.alt = "Image from picsum.photos";
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}

export function clearGallery() {
    document.getElementById('gallery').innerHTML = '';
}

export function removeLastImage() {
    const gallery = document.getElementById('gallery');
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

export function reverseGallery() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.children);
    images.reverse().forEach(img => gallery.appendChild(img));
}
