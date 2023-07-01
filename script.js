function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

window.onload = function loadLanguage() {
  fetch("./" + location.hash.substring(1) + ".json")
    .then((res) => {
      return res.json();
    })
    .then((language) => {
      home.textContent = language.home;
      about.textContent = language.about;
      works.textContent = language.works;
      contact.textContent = language.contact;
    });
};

let fullStoryOpened = false;
let cvOpened = false;

function showFullStory() {
  var modal = document.getElementById("modal-full-story");

  modal.style.display = "block";
  fullStoryOpened = true;
}

function showCV() {
  var modal = document.getElementById("modal-cv");

  modal.style.display = "block";
  cvOpened = true;
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if(fullStoryOpened) {
        var modal = document.getElementById("modal-full-story");
    } else if(cvOpened) {
        var modal = document.getElementById("modal-cv");
    }
  
  if (event.target == modal && (fullStoryOpened || cvOpened)) {
    modal.style.display = "none";
    fullStoryOpened = false;
    cvOpened = false;
  }
});
