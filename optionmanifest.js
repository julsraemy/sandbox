// Select a IIIF manifest from <select> to populate text value and the IIIF logo href
function run() {

  var select = $('select#manifestSelect');
  var value = select.val();
  var option = select.find("option[value='"+value+"']") ;

  $("#dragndrop").attr('href', value);
  $('#uvIcon').attr('href', option.attr('href_uv'));
  $('#miradorIcon').attr('href', option.attr('href_mirador'));
    return false;
    			}
	