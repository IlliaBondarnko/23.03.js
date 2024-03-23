var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a 
caption
var imgs = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
imgs[i].addEventListener('click', e => {
modal.style.display = "block";
modalImg.src = e.target.src;
captionText.innerHTML = e.target.alt;
});
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}

document.onkeyup = function (e) {
e = e || window.event;

// 27 is the ESC key
if(e.keyCode === 27) modal.style.display = "none";
};
