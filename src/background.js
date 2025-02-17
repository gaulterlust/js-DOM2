export function setRandomBackgroundImage() {
    const randomImage = `https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)}`;
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
