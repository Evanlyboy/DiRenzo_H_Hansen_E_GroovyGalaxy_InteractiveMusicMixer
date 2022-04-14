(() => {

// Ok, so this should be pretty simple.
// The project has two big elements: The drag and drop and the music playback

// Drag and drop is comprised of:
// 1 - Targetting element
// 2 - dragging it over
// 3 - placing the dragged element into the new element space
// 4 - resetting it on command

// Music playback is comprised of:
// 1 - Importing music files
// 2 - Assigning music playback to actions
// 3 - Playback with media controls
// 4 - Resetting playback to 0


// Drag and Drop Variables
const draggableButtons = document.querySelectorAll(".buttonGroup *"),
      buttonList = document.querySelector(".buttonGroup"),
      dropZones = document.querySelectorAll(".planetContainer"),
      container = document.querySelectorAll("#planetSection *");

      // so fucking done. i can't figure this shit out. caveman mode it is. time to dumb down everything
      acoustic = document.querySelector("#c1-audio");
      ambi = document.querySelector("#c2-audio");
      kick = document.querySelector("#c3-audio");
      snare = document.querySelector("#c4-audio");
      elec = document.querySelector("#c5-audio");
      hihat = document.querySelector("#c6-audio");
      moog = document.querySelector("#c7-audio");


// Audio handling variables
const pauseBox = document.querySelector("#paused"),
      playBox = document.querySelector("#playing")

// this needs major reworking

    //Drag and Drop Functions
    // -----------------------------------------------------------------
    // 1 - Targetting element
    // The drag event, which will scrape the ID of any element that is trying to be dragged and store it in a disposable event variable
      function startDrag(event) {
		// console.log("started dragging");
		// save a reference to the element we're dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

    // 2 - dragging it over
    //Prevent the default action from happening
    function draggedOver(event) {
		event.preventDefault();
		// console.log("dragged over me");
	}

    // 3 - placing the dragged element into the new element space
    //The ID that is scraped from startDrag is taken and added to whatever we dragged it onto
    function handleDrop(event) {
		event.preventDefault();
		console.log("dropped on me");
        // Store the scrapped ID into this variable
        let scrapedID = event.dataTransfer.getData("draggedElement");
        // If no child, then drop. Otherwise output to console
		 if(this.childElementCount == 0){

            //  Add the img to the container
		 	this.appendChild(document.querySelector(`#${scrapedID}`));

            //  pass the scraped ID into the playInst function
             changePic(scrapedID);
		 }
		 else {
		 	console.log(this.childElementCount);
		 }
		console.log(`dropped this element:`, scrapedID);
	}


    //Audio functions
    function changePic (scrapedID) {
        // make a new variable based off the passed-in ID and add "-audio" to it
        let currentAudio = scrapedID + "-audio";
        // make a new variable that gets the audio from the HTML and adds our currentAudio variable to it to make a complete choice
        let audioMove = document.querySelector(`#${currentAudio}`);
        playBox.appendChild(audioMove);
        // 
        // instAudioCount.push(currentAudio);
        // instAudio.push(currentAudio);

        // console.log("currently playing audio", instAudio);
        // console.log("what is playing", instAudioCount);

        playInst(audioMove, scrapedID);
    }

    function playInst(yesAudio, scrapedID) { 

        // caveman mode
        if (scrapedID === "c1") {
            acoustic.play();
            console.log("acoustic playing");
        } else if (scrapedID === "c2") {
            ambi.play();
            console.log("ambi playing");
        } else if (scrapedID === "c3") {
            kick.play();
            console.log("kick playing");
        } else if (scrapedID === "c4") {
            snare.play();
            console.log("snare playing");
        } else if (scrapedID === "c5") {
            elec.play();
            console.log("elec playing");
        } else if (scrapedID === "c6") {
            hihat.play();
            console.log("hihat playing");
        } else if (scrapedID === "c7") {
            moog.play();
            console.log("moog playing");
        }

        // instAudio.play();
        // instAudio.loop = true;

    }

    function reset() {

        // put children back where they came from
        console.log("the drop zones: ", dropZones);
        console.log("the draggable buttons: ", draggableButtons);

        // check if there are elements in the playing div, then pause their players and move them back
        // moves the image but not the audio

        acoustic.pause();
        ambi.pause();
        kick.pause();
        snare.pause();
        elec.pause();
        hihat.pause();
        moog.pause();


        if (playBox.getChildElementCount > 0) {
            let i = 1;
            while (i < 8) {
                let loopAudio = document.getElementById(`c${i}-audio`);
                loopAudio.pause();
                if (playBox.firstChild === loopAudio)
                pauseBox.appendChild(loopAudio)
                i++;
            }
        }

		dropZones.forEach(zone => {
			if(zone.childElementCount > 0) {
                console.log("first element child: ", buttonList.firstElementChild);
				buttonList.appendChild(zone.firstElementChild);
			}
		})
        // stops the audio
        // console.log(instAudioCount);
        // instAudio.pause();
    }

    function rewindInst() {
        theAudio.currentTime = 0;
        playTrack();
    }

    // Event listeners that listen for triggers then execute a function
      draggableButtons.forEach(button => button.addEventListener("dragstart", startDrag))
      container.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
        zone.addEventListener("click", reset);
	});;

})();