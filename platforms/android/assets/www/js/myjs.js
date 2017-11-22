function onLoad(){
$("#camera").click(function()
//$(document).on("onClick","#pageone",function()
                 {
                      navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
					  destinationType: Camera.DestinationType.FILE_URI });
                 

function onSuccess(imageURI)
                 {
                      var image = document.getElementById('myImage');
					  image.src = imageURI;
                 }

function onFail()
                 {
                     alert('Failed because: ' + message);
                 }
				 
				 });
 }