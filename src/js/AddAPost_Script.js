window.onload = function() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
      var filesInput = document.getElementById("files");
      filesInput.addEventListener("change", function(event) {
        var files = event.target.files; //FileList object
        var output = document.getElementById("result");
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          //Only pics
          if (!file.type.match('image'))
            continue;
          var picReader = new FileReader();
          picReader.addEventListener("load", function(event) {
            var picFile = event.target;
            var div = document.createElement("div");
            div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
              "title='" + picFile.name + "'/>";
            output.insertBefore(div, null);
          });
          //Read the image
          picReader.readAsDataURL(file);
        }
      });
    } else {
      console.log("Your browser does not support File API");
    }
}




// const searchFocus = document.getElementById('search-focus');
// const keys = [
// { keyCode: 'AltLeft', isTriggered: false },
// { keyCode: 'ControlLeft', isTriggered: false },
// ];

// window.addEventListener('keydown', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = true;
//     }
//   });

//   const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

//   if (shortcutTriggered) {
//     searchFocus.focus();
//   }
// });

// window.addEventListener('keyup', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = false;
//     }
//   });
// });