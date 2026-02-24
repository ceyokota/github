(function () {
    'use strict';
    console.log("reading js");

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    hotSpots.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className = 'start';
        });

    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'coup': theImg.className = 'coupchange'; break;
            case 'shadowhunters': theImg.className = 'shadowhunterschange'; break;
            case 'dominion': theImg.className = 'dominionchange'; break;
            // case 'bottomright': theImg.className = 'bottomright'; break;
            // case 'center': theImg.className = 'center'; break;
        }
    }

})();