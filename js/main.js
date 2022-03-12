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
      dropZones = document.querySelector(".planetContainer"),
      container = document.querySelectorAll("#planetSection *");

// Audio handling variables
const theAudio = document.querySelector("audio[id]"),
      trackButtons = document.querySelectorAll(".track-ref");

    //Drag and Drop Functions
    // -----------------------------------------------------------------
    // 1 - Targetting element
    // The drag event, which will scrape the ID of any element that is trying to be dragged and store it in a disposable event variable
      function startDrag(event) {
		console.log("started dragging");
		// save a reference to the element we're dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

    // 2 - dragging it over
    //Prevent the default action from happening
    function draggedOver(event) {
		event.preventDefault();
		console.log("dragged over me");
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
             instArray(scrapedID);
		 }
		 else {
		 	console.log(this.childElementCount);
		 }
		console.log(`dropped this element:`, scrapedID);
	}

    // we need to save which instrument it is so we can loop it later
    function instArray (scrapedID) {
        // make a new variable based off the passed-in ID and add "-audio" to it
        let currentAudio = scrapedID + "-audio";
        console.log(`the chosen instrument:`, currentAudio);
        // make a new variable that gets the audio from the HTML and adds our currentAudio variable to it to make a complete choice
        let instAudio = [document.querySelector(`audio[id=${currentAudio}]`)];
        
        playInst
    }

    //Audio functions
    function playInst(scrapedID) { 
        
        // this needs to loop
        console.log(`current tracks playing: `, instAudio);
        instAudio[0].play();
    }

    function reset() {

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