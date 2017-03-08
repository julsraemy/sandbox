// Select a IIIF manifest from <select> to populate text value and the IIIF logo href
function run() {
	var link = document.getElementById("manifestSelect").value;
    	document.getElementById("manifest").value = link;
   		document.getElementById("dragndrop").href = link;
    return false;
    			}
    			