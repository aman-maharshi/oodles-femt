let serviceImages = document.querySelectorAll('.services-list img')

serviceImages.forEach(function(image){
    image.addEventListener('mouseover', zoomIn);
});
serviceImages.forEach(function(image){
    image.addEventListener('mouseout', zoomOut);
});

function zoomIn() {
    if(!(this.classList.contains('zoom-image'))) {
        this.className += 'zoom-image';
    }
}

function zoomOut() {
    if((this.classList.contains('zoom-image'))) {
        this.classList.remove('zoom-image') ;
    }
}