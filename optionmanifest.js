// Select a IIIF manifest from <select> to populate text value and the IIIF logo href
function run() {
	var link = document.getElementById("manifestSelect").value;
    	document.getElementById("manifest").value = link;
   		document.getElementById("dragndrop").href = link;
    return false;
    			}

function run() {
	var link = document.getElementById("manifestSelect").value2;
   		document.getElementByID("uvIcon").href = link;
    return false;
    			}

function run() {
	var link = document.getElementById("manifestSelect").value3;
   		document.getElementByID("miradorIcon").href = link;
    return false;
    			}      			