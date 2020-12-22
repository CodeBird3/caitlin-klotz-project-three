/* STEPS FOR CREATING AN INTERACTIVE RECORDING STUDIO

- stretch goals:
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
        html: `
        <div class="bass">
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
                </div>
                <div class="tuningBars">
                    <div class="tuningBar bar1"></div>
                    <div class="tuningBar bar2"></div>
                    <div class="tuningBar bar3"></div>
                    <div class="tuningBar bar4"></div>
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
                    </div>
                    <div class="pickupBar">
                        <div class="pickup pickup1"></div>
                        <div class="pickup pickup2"></div>
                        <div class="pickup pickup3"></div>
                        <div class="pickup pickup4"></div>
                    </div>
                    <div class="pickupBar">
                        <div class="pickup pickup1"></div>
                        <div class="pickup pickup2"></div>
                        <div class="pickup pickup3"></div>
                        <div class="pickup pickup4"></div>
                    </div>
                </div>
                <div class="controls">
                    <div class="knobs">
                        <div class="knob knob1"></div>
                        <div class="knob knob2"></div>
                        <div class="knob knob3"></div>
                    </div>
                </div>
                <div class="bridge"></div>
            </div>
            <div class="strings">
                <div class="topNodes">
                    <div class="topNode topNode1"></div>
                    <div class="topNode topNode2"></div>
                    <div class="topNode topNode3"></div>
                    <div class="topNode topNode4"></div>
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
        `
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
        `
    },
    drumKit: {
        html: `
        <div class="drums">
            <div class="cymbal rideCymbal"></div>
            <div class="drum middleTom"></div>
            <div class="drum highTom"></div>
            <div class="cymbal crashCymbal"></div>
            <div class="hiHat">
                <div class="cymbal topHat"></div>
                <div class="cymbal bottomHat"></div>
            </div>
            <div class="drum floorTom"></div>
            <div class="drum bassDrum"></div>
            <div class="drum snareDrum"></div>
        </div>
        <div class="drumStand">
            <!-- floor tom stand -->
            <div class="floorStand">
                <div class="leg">
                    <div class="foot"></div>
                </div>
            </div>
            <!-- ride cymbal stand -->
            <div class="cymbalStand stand1">
                <div class="boom boom1"></div>
                <div class="stand"></div>
                <div class="tripod tripod1">
                    <div class="leg leg1">
                        <div class="foot foot1"></div>
                    </div>
                    <div class="leg leg2">
                        <div class="foot foot2"></div>
                    </div>
                    <div class="leg leg3">
                        <div class="foot foot3"></div>
                    </div>
                </div>
            </div>
            <!-- middle tom and high tom stand -->
            <div class="topStand">
                <div class="stand leftStand"></div>
                <div class="stand centreStand"></div>
                <div class="stand rightStand"></div>
                <div class="brace"></div>
            </div>
            <!-- bass drum stand -->
            <div class="bassStand">
                <div class="leg leftLeg">
                    <div class="foot"></div>
                </div>
                <div class="leg rightLeg">
                    <div class="foot"></div>
                </div>
            </div>
            <!-- snare drum stand -->
            <div class="snareStand">
                <div class="braces">
                    <div class="brace brace1"></div>
                    <div class="brace brace2"></div>
                    <div class="brace brace3"></div>
                </div>
                <div class="stand"></div>
                <div class="tripod tripod3">
                    <div class="leg leg7">
                        <div class="foot foot1"></div>
                    </div>
                    <div class="leg leg8">
                        <div class="foot foot2"></div>
                    </div>
                    <div class="leg leg9">
                        <div class="foot foot3"></div>
                    </div>
                </div>
            </div>
            <!-- crash cymbal stand -->
            <div class="cymbalStand stand2">
                <div class="boom boom2"></div>
                <div class="stand"></div>
                <div class="tripod tripod2">
                    <div class="leg leg1">
                        <div class="foot foot1"></div>
                    </div>
                    <div class="leg leg2">
                        <div class="foot foot2"></div>
                    </div>
                    <div class="leg leg3">
                        <div class="foot foot3"></div>
                    </div>
                </div>
            </div>
            <!-- hihat cymbal stand -->
            <div class="cymbalStand stand3">
                <div class="stand"></div>
                <div class="tripod tripod3">
                    <div class="leg leg4">
                        <div class="foot foot1"></div>
                    </div>
                    <div class="leg leg5">
                        <div class="foot foot2"></div>
                    </div>
                    <div class="leg leg6">
                        <div class="foot foot3"></div>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    keyboard: {
        html: `
            <div class="top">
                <div class="musicStand">
                    <div class="horizontalBars">
                        <div class="horizontalBar bar1"></div>
                        <div class="horizontalBar bar2"></div>
                        <div class="horizontalBar bar3"></div>
                    </div>
                    <div class="verticalBars">
                        <div class="verticalBar bar4"></div>
                        <div class="verticalBar bar5"></div>
                        <div class="verticalBar bar6"></div>
                        <div class="verticalBar bar7"></div>
                        <div class="verticalBar bar8"></div>
                    </div>
                </div>
                <div class="keys"></div>
            </div>
            <div class="keyboardStand">
                <div class="legs leg1"></div>
                <div class="legs leg2"></div>
                <div class="topFeet">
                    <div class="feet foot1"></div>
                    <div class="feet foot2"></div>
                </div>
                <div class="bottomFeet">
                    <div class="feet foot3"></div>
                    <div class="feet foot4"></div>
                </div>
            </div>
        `
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
        `
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
    $(instrumentName).append(revealInstrument);

    // add instrument audio
    $(`#${instrument}Audio`)[0].play();
    // pause audio
    if ($instrumentContainer.hasClass("hideInstrument")) {
        $(`#${instrument}Audio`)[0].pause();
    }
}


// function that listens for which button has been clicked
studioApp.instrumentPicker = function() {
    // listen for the user to click on of the instrument buttons
    $("button").on("click", function() {
        const $chosenInstrument = $(this).attr("id");

        // pass the instruments object as an argument
        // pass chosenInstrument as an argument
        studioApp.addInstrument(studioApp.instruments, $chosenInstrument);
    });
}

// method that allows the instruments to start at a width of 20% of the recording studio container width instead of the default 300px
    // this will also allow for the instruments to scale properly in the resizeInstruments method so that the instruments will not break out of the recording studio container
studioApp.initialInstrumentSize = function() {
    // store the recording studio container in a variable
    const $recordingStudio = $(".recordingStudio");
    // store the size of the window/viewport when the page is first loaded
    const $initialStudioSize = $recordingStudio.width();

    // store the default width of the instrument containers
    const $instrument = $(".instrument");
    const defaultWidth = 300;

    // the initial width of the instrument containers should be 20% of the width of the recording studio container and the height should keep the aspect ratio of 3 : 4
    const $initialWidth = $initialStudioSize / 5;
    const $initialHeight = (4 * $initialWidth) / 3;

    // scale the size of the instrument containers by comparing the default width to the initial width
    const scale = $initialWidth / defaultWidth;

    // update the recording studio container's height to be the same as the instrument containers
    $recordingStudio.height($initialHeight);

    // scale the instruments inside the containers to fit inside of the new dimensions
    $instrument.css("transform", `scale(${scale})`);
}

// resize instrument containers with recording studio container's size
studioApp.resizeInstruments = function() {
    // store the instrument containers in a variable
    const $instrument = $(".instrument");
    // store the default width of the instrument containers in a variable
    const currentWidth = 300;

    // store recording studio container in a variable
    const $recordingStudio = $(".recordingStudio");

    // listen for the window/viewport to change in size
    $(window).on("resize", function() {
        // store the width of the recording studio container in a variable
        const $studioSize = $recordingStudio.width();
    
        // create variables to store the aspect ratio that will scale the width and height of the instrument containers in proportion to the change in the recording studio container's size
            // the aspect ratio for each instrument container is 3 : 4
        const newWidth = $studioSize / 5;
        const newHeight = (4 * newWidth) / 3;

        // create a variable that will compare original width of the instrument containers to the new width
        const scale = newWidth / currentWidth;

        // update the recording studio container's height to be the same as the instrument containers
        $recordingStudio.height(newHeight);

        // scale the instruments inside the containers to fit inside of the new dimensions
        $instrument.css("transform", `scale(${scale})`);
        
    });

}

// initialize studioApp
studioApp.init = function() {
    studioApp.instrumentPicker();
    studioApp.initialInstrumentSize();
    studioApp.resizeInstruments();
}

// doc ready
$(function() {
    // initialize app
    studioApp.init();
});