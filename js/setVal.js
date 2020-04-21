// Get the modal
		var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		var marbImgs = ["MarbleOne.png", "MarbleTwo.png",
  		"MarbleThree.png", "MarbleFour.png", "MarbleFive.png", "MarbleSix.png", "MarbleSeven.png"];

		// When the user clicks the button, open the modal 
		btn.onclick = function() {
		  modal.style.display = "block";

		  var x;
		  for(x = 0; x < 7; x++){
		  	document.getElementById("img" + x).setAttribute("src", marbImgs[x]);
		  	document.getElementById("img" + x).setAttribute("width", "55%");
		  	document.getElementById("img" + x).setAttribute("height", "auto");
		  }
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
		    modal.style.display = "none";
		  }
		}


	var inIds = ["1", "2", "3", "4", "5", "6", "7"]
	var inputStores = []
	var sum;
	var outcome = [];
	function getInputs(){
		var a;
		sum = 0;
		for (a = 0; a < inIds.length; a++){
			outcome[a] = (document.getElementById(a + "r").value);
			inputStores[a] = document.getElementById(inIds[a]).value;
			sum = sum + parseInt(inputStores[a]); 
		}
		modal.style.display = "none"
		document.getElementById("set").disabled = true;
		document.getElementById("why").innerHTML = "You cannot set new values unless you clear the board.";
	} 