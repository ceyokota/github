(function(){
    "use strict";
    console.log("reading js");
    
    const firstForm = document.querySelector('#firstForm');
    const secondForm = document.querySelector('#secondForm');

    const computer1 = document.querySelector('.computer1');
    const computer2 = document.querySelector('.computer2');
    const overlay = document.querySelector('.overlay');

    firstForm.addEventListener('submit', function(event){
        event.preventDefault();
        computer1.style.display = 'none';
        computer2.style.display = 'block';
    });

    secondForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const company = document.querySelector('#company').value;
        const occupation = document.querySelector('#occupation').value;
        const adj1 = document.querySelector('#adj1').value;
        const verb1 = document.querySelector('#verb1').value;
    
        const pnoun = document.querySelector('#pnoun').value;
        const num = document.querySelector('#num').value;
        const utime = document.querySelector('#utime').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb2 = document.querySelector('#verb2').value;

        overlay.style.display = 'block';

        overlay.innerHTML = 
        overlay.innerHTML = 
        `<article>
            <div id="overlayHeader">
            <h1><span class="userInput">${company}</span> Careers</h1>
            </div>

            <div id="overlayParagraphs">
                <p>Dear <span class="userInput">${name}</span>,</p>

                <p>&nbsp;
                </p>
        
                <p>
                    We are thrilled to welcome you to join 
                    <span class="userInput">${company}</span>
                    as a 
                    <span class="userInput">${occupation}</span>
                    for the Summer 2026 Internship Program!
                </p>
        
                <p>
                    We were incredibly impressed by your 
                    <span class="userInput">${adj1}</span>
                    approach to 
                    <span class="userInput">${verb1}</span>
                    and your passion for 
                    <span class="userInput">${pnoun}</span>.
                </p>
        
                <p>
                    The pay rate will be 
                    $<span class="userInput">${num}</span>
                    per 
                    <span class="userInput">${utime}</span>.
                </p>
        
                <p>
                    We can't wait to see how your 
                    <span class="userInput">${adj2}</span>
                    ideas will 
                    <span class="userInput">${verb2}</span>
                    our team!
                </p>

                <p>&nbsp;
                </p>
        
                <p>Sincerely,</p>
                <p>The HR Team at <span class="userInput">${company}</span></p>
            </div>
        </article>`;
    });




   

})();