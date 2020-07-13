	   var runAmt = 1;
  	var marbClass = [];
  	var marbImgs = ["img/MarbleOne.png", "img/MarbleTwo.png",
  	"img/MarbleThree.png", "img/MarbleFour.png", "img/MarbleFive.png", "img/MarbleSix.png", "img/MarbleSeven.png"];
  	var marb = [-1];
  	//this is the array containing all the marble picks
  	function run() {

  			var check = 0;
  			//this is the check to make sure that 2 integers aren't matching in the array

  			var evaluate = false;

  			var randInt;

	  			randInt = Math.floor(Math.random() * (sum));


  			marb[runAmt] = randInt;
  			//here we are just creating a stacked sum for each number (probability range representation)
  			var stacksum = [];
  			var c;
  			for(c = 0; c < 7; c++){
  				if(c > 0){
  					stacksum[c] = parseInt(stacksum[c-1]) + parseInt(inputStores[c]);
  				}
  				else{
  					stacksum[c] = parseInt(inputStores[c]);
  				}
  				

  			}

        if(inputStores.length == 0){
          alert("Set the values for your marble game!")
  			}
        else{
    			var b;
    			for (b = 0; b < 7; b++){
    				if(marb[runAmt] < stacksum[b]){
    					document.getElementById("marble").innerHTML = (outcome[b] + "R");
    					document.getElementById("marbleImg").src = marbImgs[b];
    					marbClass[runAmt-1] = (b);
    					b=7
    				}
    			}

    			
  			//this is the actual marble picking if-elseif-else loop

  			
  			let start = Date.now();

        		let timer = setInterval(function() {
          	let timePassed = Date.now() - start;

          	
          	marbleImg.style.top = timePassed / -80 + 'vh';
          	if (timePassed > 1200) clearInterval(timer);
       		}, 20);		


        		var newImg = document.createElement("IMG");
        		//var newPar = document.createElement("p");
        		//newPar.innerHTML = outcome[marbClass[runAmt] -1];
    			newImg.setAttribute("src", marbImgs[(marbClass[runAmt-1])]);
    			newImg.setAttribute("width", "8%");
    			newImg.setAttribute("height", "8%");
    			document.getElementById("indexx").appendChild(newImg);
    			//document.getElementById("indexx").appendChild(newPar);


    			runAmt = runAmt + 1;

          var r;
          var netSum = 0;
          for(r = 0; r < (marbClass.length); r++){
            netSum += parseInt(outcome[marbClass[r]]);
          }
          document.getElementById("net").innerHTML = "NET R VALUE: " + netSum + "R";
        }

        
			//tracking amount of runs
    }

//this function will clear the marbles from the array as well as reset any visual or numerical client-side storage of the instance
    function clearMarbles() {
      alert("This will reset all of your progress");
      document.getElementById("indexx").innerHTML = "";
      marb = [];
      marbClass = [];
      netSum = 0;
      document.getElementById("net").innerHTML = "";
      runAmt = 1;
      document.getElementById("set").disabled = false;
      document.getElementById("why").innerHTML = "";
      document.getElementById("marbleImg").setAttribute("src", "img/blank.png");
      document.getElementById("marble").innerHTML = " "
    }