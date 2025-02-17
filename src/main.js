import { setRandomBackgroundImage } from './background.js';
import { loadMoreImages, clearGallery, removeLastImage, reverseGallery } from './gallery.js';

document.getElementById('loadImages').addEventListener('click', loadMoreImages);
document.getElementById('clearGallery').addEventListener('click', clearGallery);
document.getElementById('removeLastImage').addEventListener('click', removeLastImage);
document.getElementById('reverseGallery').addEventListener('click', reverseGallery);

window.onload = () => {
    setRandomBackgroundImage();
    loadMoreImages();
};
