/* STEPS FOR CREATING AN INTERACTIVE RECORDING STUDIO

- stretch goals:
    - have audio for each instrument
    - animate the instruments in some way so that they move when seen
        - or:
            - have part of the instruments move (e.g. strings)
            - have dancing music notes around each instrument
    - have instruments appear in the order the buttons have been clicked instead of in a predetermined order
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
        html: `
        <div class="stratocaster">
            <div class="top">
                <div class="head">
                    <div class="topShape"></div>
                    <div class="bottomShape"></div>
                </div>
                <div class="tuningPegs">
                    <div class="tuningPeg peg1"></div>
                    <div class="tuningPeg peg2"></div>
                    <div class="tuningPeg peg3"></div>
                    <div class="tuningPeg peg4"></div>
                    <div class="tuningPeg peg5"></div>
                    <div class="tuningPeg peg6"></div>
                </div>
                <div class="tuningBars">
                    <div class="tuningBar bar1"></div>
                    <div class="tuningBar bar2"></div>
                    <div class="tuningBar bar3"></div>
                    <div class="tuningBar bar4"></div>
                    <div class="tuningBar bar5"></div>
                    <div class="tuningBar bar6"></div>
                </div>
                <div class="neck"></div>
            </div>
            <div class="body">
                <div class="guard"></div>
                <div class="pickups">
                    <div class="pickupBar">
                        <div class="pickup pickup1"></div>
                        <div class="pickup pickup2"></div>
                        <div class="pickup pickup3"></div>
                        <div class="pickup pickup4"></div>
                        <div class="pickup pickup5"></div>
                        <div class="pickup pickup6"></div>
                    </div>
                    <div class="pickupBar">
                        <div class="pickup pickup1"></div>
                        <div class="pickup pickup2"></div>
                        <div class="pickup pickup3"></div>
                        <div class="pickup pickup4"></div>
                        <div class="pickup pickup5"></div>
                        <div class="pickup pickup6"></div>
                    </div>
                    <div class="pickupBar">
                        <div class="pickup pickup1"></div>
                        <div class="pickup pickup2"></div>
                        <div class="pickup pickup3"></div>
                        <div class="pickup pickup4"></div>
                        <div class="pickup pickup5"></div>
                        <div class="pickup pickup6"></div>
                    </div>
                </div>
                <div class="controls">
                    <div class="pickupSelector">
                    <div class="switch"></div>
                </div>
                <div class="knobs">
                    <div class="knob knob1"></div>
                    <div class="knob knob2"></div>
                    <div class="knob knob3"></div>
                </div>
                </div>
                <div class="bridge">
                    <div class="tremoloBar">
                        <div class="handle"></div>
                        <div class="handleEnd"></div>
                    </div>
                </div>
                <div class="jackInput">
                    <div class="input"></div>
                </div>
            </div>
            <div class="strings">
                <div class="topNodes">
                    <div class="topNode topNode1"></div>
                    <div class="topNode topNode2"></div>
                    <div class="topNode topNode3"></div>
                    <div class="topNode topNode4"></div>
                    <div class="topNode topNode5"></div>
                    <div class="topNode topNode6"></div>
                </div>
                <div class="flexString">
                    <div class="string string1">
                        <div class="bottomNode"></div>
                    </div>
                    <div class="string string2">
                        <div class="bottomNode"></div>
                    </div>
                    <div class="string string3">
                        <div class="bottomNode"></div>
                    </div>
                    <div class="string string4">
                        <div class="bottomNode"></div>
                    </div>
                    <div class="string string5">
                        <div class="bottomNode"></div>
                    </div>
                    <div class="string string6">
                        <div class="bottomNode"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guitarStand">
            <div class="topBrace">
                <div class="circle leftCircle"></div>
                <div class="circle rightCircle"></div>
            </div>
            <div class="bottomBrace">
                <div class="circle leftCircle"></div>
                <div class="circle rightCircle"></div>
            </div>
            <div class="stand">
                <div class="legs leg1"></div>
                <div class="legs leg2"></div>
                <div class="legs leg3"></div>
            </div>
        </div>
        <div class="amp">
            <div class="controlPanel">
                <div class="panel panel1">
                    <div class="input input1"></div>
                    <div class="input input2"></div>
                    <div class="ampKnob ampKnob1"></div>
                </div>
                <div class="panel panel2">
                    <div class="ampKnob ampKnob1"></div>
                    <div class="ampKnob ampKnob2"></div>
                    <div class="ampKnob ampKnob3"></div>
                </div>
                <div class="panel panel3">
                    <div class="ampKnob ampKnob1"></div>
                    <div class="ampKnob ampKnob2"></div>
                    <div class="ampKnob ampKnob3"></div>
                    <div class="ampKnob ampKnob4"></div>
                    <div class="headphoneInput headphone1"></div>
                    <div class="headphoneInput headphone2"></div>
                </div>
            </div>
            <div class="speaker"></div>
        </div>
        <div class="floor"></div>
        `,
        audio: "to come"
    },
    drumKit: {
        html: `drumKit Container`,
        audio: "to come"
    },
    keyboard: {
        html: `
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
            <div class="keyboardStand">
                <div class="legs leg1"></div>
                <div class="legs leg2"></div>
                <div class="feet foot1"></div>
                <div class="feet foot2"></div>
                <div class="feet foot3"></div>
                <div class="feet foot4"></div>
            </div>
            <div class="floor"></div>
        `,
        audio: "to come"
    },
    acousticGuitar: {
        html: `
            <div class="guitar">
                <div class="top">
                    <div class="head"></div>
                    <div class="tuningPegs">
                        <div class="tuningPeg peg1"></div>
                        <div class="tuningPeg peg2"></div>
                        <div class="tuningPeg peg3"></div>
                        <div class="tuningPeg peg4"></div>
                        <div class="tuningPeg peg5"></div>
                        <div class="tuningPeg peg6"></div>
                    </div>
                    <div class="tuningBars">
                        <div class="tuningBar bar1"></div>
                        <div class="tuningBar bar2"></div>
                        <div class="tuningBar bar3"></div>
                    </div>
                    <div class="neck"></div>
                </div>
                <div class="body">
                    <div class="topHalf"></div>
                    <div class="bottomHalf"></div>
                    <div class=" side rightSide"></div>
                    <div class="side leftSide"></div>
                    <div class="pickGuard"></div>
                    <div class="soundHole"></div>
                    <div class="bridge"></div>
                </div>
                <div class="strings">
                    <div class="topNodes">
                        <div class="topNode topNode1"></div>
                        <div class="topNode topNode2"></div>
                        <div class="topNode topNode3"></div>
                        <div class="topNode topNode4"></div>
                        <div class="topNode topNode5"></div>
                        <div class="topNode topNode6"></div>
                    </div>
                    <div class="flexString">
                        <div class="string">
                            <div class="angledString angledString1"></div>
                            <div class="bottomNode"></div>
                        </div>
                        <div class="string">
                            <div class="angledString angledString2"></div>
                            <div class="bottomNode"></div>
                        </div>
                        <div class="string">
                            <div class="angledString angledString3"></div>
                            <div class="bottomNode"></div>
                        </div>
                        <div class="string">
                            <div class="angledString angledString4"></div>
                            <div class="bottomNode"></div>
                        </div>
                        <div class="string">
                            <div class="angledString angledString5"></div>
                            <div class="bottomNode"></div>
                        </div>
                        <div class="string">
                            <div class="angledString angledString6"></div>
                            <div class="bottomNode"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="guitarStand">
                <div class="topBrace">
                    <div class="circle leftCircle"></div>
                    <div class="circle rightCircle"></div>
                </div>
                <div class="bottomBrace">
                    <div class="circle leftCircle"></div>
                    <div class="circle rightCircle"></div>
                </div>
                <div class="stand">
                    <div class="legs leg1"></div>
                    <div class="legs leg2"></div>
                    <div class="legs leg3"></div>
                </div>
            </div>
            <div class="floor"></div>
        `,
        audio: "to come"
    }
}

// function that will create a section inside of the recordingStudio container to hold the selected instrument by updating the html inside of the container
studioApp.addInstrument = function(object, instrument) {
    // store instrument html in a variable.
    const revealInstrument = object[instrument].html;

    // store the user's chosen instrument in a template literal to be used as a class name that will be used to:
        // reveal the instrument on the page
        // add/remove the class of hideInstrument so the instrument can disappear and reappear on the page
    let instrumentName = `.${instrument}`;
    
    // either add or remove the class hideInstrument
    const $instrumentContainer = $(".recordingStudio").find(instrumentName);
    $instrumentContainer.toggleClass("hideInstrument");

    // display instrument to the page only if the instrument is not being hidden by the .hideInstrument class
    // REVIEW .html, .append, .text?
    $(instrumentName).html(revealInstrument);

    // TODO add instrument audio
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
    studioApp.instrumentPicker();
}

// doc ready
$(function() {
    // initialize app
    studioApp.init();
});