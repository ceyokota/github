(function () {
    'use strict';
    console.log("reading js");

    const container = document.querySelector('#container'); //selects main container with the image
    const hotSpots = document.querySelectorAll('#container div'); //selects the board game hotspots in the image
    const theImg = document.querySelector('div img'); //selects main image that zooms

    hotSpots.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto); //when mouse goes into hotspot, zoom main image
        eachSpot.addEventListener('mouseout', function(){ //when mouse goes outside hotspot, un-zoom main image
            theImg.className = 'start'; //set image back to starting position/unzoom
            document.querySelectorAll('#container section').forEach(function(section) {
                section.className = "hide"; //hide all cards/text sections when mouse goes outside hotspot
            }); 
        });

    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){ //these three below trigger the zoom positioning by changing the class name 
            case 'coup': theImg.className = 'coupchange'; break;
            case 'shadowhunters': theImg.className = 'shadowhunterschange'; break;
            case 'dominion': theImg.className = 'dominionchange'; break;
        }

        const textSection = document.querySelector(`#${thisCorner}text`); //finds matching card/text section to the hotspot
        if (textSection) {
            textSection.className = "show"; //shows the card on hover
        }
        
    }

})();