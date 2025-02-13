document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery");
    const loadMoreButton = document.getElementById("load-more");

    let currentImageIndex = 0;
    const imagesPerLoad = 6;
    const allImages = [
        'img1.jpg'

    ];

    function loadImages() {
        const imagesToLoad = allImages.slice(currentImageIndex, currentImageIndex + imagesPerLoad);
        imagesToLoad.forEach(imageSrc => {
            const img = document.createElement("img");
            img.src = `img/${imageSrc}`;
            img.alt = imageSrc;
            galleryContainer.appendChild(img);
        });
        currentImageIndex += imagesPerLoad;

        if (currentImageIndex >= allImages.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadImages();

    loadMoreButton.addEventListener("click", () => {
        loadImages();
    });
});
