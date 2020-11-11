/* STEPS FOR CREATING AN INTERACTIVE RECORDING STUDIO

- user selects instruments (from 1 to n) to be placed in their recording studio
- instruments are represented by buttons that will toggle between showing and hiding their respective instruments depending on how many times the button has been clicked
    - toggle having a "hidden" class to hide the objects
- instruments will appear in their own recording studio section underneath the buttons
- stretch goals:
    - have audio for each instrument
    - animate the instruments in some way so that they move when seen
        - or:
            - have part of the instruments move (e.g. strings)
            - have dancing music notes around each instrument
    - have instruments appear in the order the buttons have been clicked instead of at a designated place on the screen
*/

const studioApp = {};

// store instruments in an object
studioApp.instruments = {
    // NOTE these are not necessarily objects
    bassGuitar: {
        html: `bassGuitar Container`,
        audio: "to come"
    },
    electricGuitar: {
        html: `electricGuitar Container`,
        audio: "to come"
    },
    drumKit: {
        html: `drumKit Container`,
        audio: "to come"
    },
    keyboard: {
        html: `<div class="keyboard">
                    <div class="top">
                        <div class="musicStand">
                        <div class="horizontalBar bar1"></div>
                        <div class="horizontalBar bar2"></div>
                        <div class="horizontalBar bar3"></div>
                        <div class="verticalBar bar4"></div>
                        <div class="verticalBar bar5"></div>
                        <div class="verticalBar bar6"></div>
                        <div class="verticalBar bar7"></div>
                        <div class="verticalBar bar8"></div>
                        </div>
                        <div class="keys"></div>
                    </div>
                    <div class="stand">
                        <div class="legs leg1"></div>
                        <div class="legs leg2"></div>
                        <div class="feet foot1"></div>
                        <div class="feet foot2"></div>
                        <div class="feet foot3"></div>
                        <div class="feet foot4"></div>
                    </div>
                    <div class="floor"></div>
                </div>`,
        audio: "to come"
    },
    acousticGuitar: {
        html: `acousticGuitar Container`,
        audio: "to come"
    }
}

// function that will create a section inside of the recordingStudio container to hold the selected instrument
studioApp.addInstrument = function(object, instrument) {
    // this function will update the html inside the container

    // store instrument html in a variable.
    const revealInstrument = object[instrument].html;
    console.log("Revealed Instrument:", revealInstrument, typeof revealInstrument);

    // store result from for in loop in a variable
    let instrumentName;

    // use a for in loop to get property name that matches the $chosenInstrument
    for (musicalInstrument in object) {
        // find the div with the same class name (inside of the recordingStudio section) as the id of the button that was clicked
        if (musicalInstrument === instrument) {
            console.log("Musical Instrument:", musicalInstrument);
            instrumentName = musicalInstrument;
        }
    }
    
    console.log("Instrument Name:", instrumentName);
    
    // either add or remove the class hideInstrument
    // this will allow the instrument to appear and disappear from the page
    // REVIEW instrumentName.toggleClass is not a function
    instrumentName.toggleClass("hideInstrument");




    // const $instrumentContainer = $(".recordingStudio").find(theInstrument);
    // console.log("Instrument Container", $instrumentContainer, typeof $instrumentContainer);
    // $instrumentContainer.toggleClass("hideInstrument");


    // display instrument to the page only if the instrument is not being hidden by the .hideInstrument class
    // REVIEW .html, .append, .text?
    $(".recordingStudio").html(revealInstrument);
    
}


// function that listens for which button has been clicked
studioApp.instrumentPicker = function() {
    // listen for the user to click on of the instrument buttons
    $("button").on("click", function() {
        const $chosenInstrument = $(this).attr("id");
        console.log("Chosen Instrument:", $chosenInstrument, typeof $chosenInstrument);

        // pass the instruments object as an argument
        // pass chosenInstrument as an argument
        studioApp.addInstrument(studioApp.instruments, $chosenInstrument);
    });
}

// initialize studioApp
studioApp.init = function() {
    console.log("The app is initialized!");

    studioApp.instrumentPicker();
}

// doc ready
$(function() {
    // console test
    console.log("I'm ready!");

    // initialize app
    studioApp.init();
});