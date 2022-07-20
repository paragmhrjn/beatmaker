window.addEventListener("load", () => {
    // linked all html class to javascript file
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#5bc07d",
      
        "#b39c39",
    
        "#be5454",
    
        "#5f93e0",
    
        "#d2df58",
    
        "#606060"
        
    ];

    // all sound functions here

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            // to reset current time
            sounds[index].currentTime = 0;
            // to get audio file from html and played while clicked
            sounds[index].play();
            // to extract value from createBubbles function
            createBubbles(index);
        });
    });


    // create function that make some visual animation

    const createBubbles = (index) => {
        // to create div within visual 
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        // to get backgroundColor
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    };
});

