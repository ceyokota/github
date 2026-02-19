(function () {
    'use strict';

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    hotSpots.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className = 'start';
            document.querySelectorAll('#container section').forEach(function(section) {
                section.className = "hide";
            }); 
        });

    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'coup': theImg.className = 'coupchange'; break;
            case 'shadowhunters': theImg.className = 'shadowhunterschange'; break;
            case 'dominion': theImg.className = 'dominionchange'; break;
        }

        const textSection = document.querySelector(`#${thisCorner}text`);
        if (textSection) {
            textSection.className = "show";
    }
        
    }

})();