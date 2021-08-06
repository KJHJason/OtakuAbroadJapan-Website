// javascript from https://www.techyleaf.in/2021/05/lazy-load-youtube-video.html used for blogger but I have adapted it into my html webpages

// for the YouTube iframe attribute and it being added upon user clicking on the lazy loaded image
function labnolIframe(div) {
  var iframe = document.createElement("iframe"); // creates a iframe tag
  // sets attribute for the iframe
  iframe.setAttribute("src", "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
  div.parentNode.replaceChild(iframe, div); // new node, which is the iframe, to replace the div
}
// for the YouTube image
function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div"); // creates a div tag
    div.setAttribute("data-id", videoId); // sets the data-id attribute with the videoId
    var thumbNode = document.createElement("img"); // creates img element
    thumbNode.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", videoId); // for changing the YouTube thumbnail for the lazy loaded YouTube video
    div.appendChild(thumbNode); // appends the thumbnail img tag into the div
    var playButton = document.createElement("div"); // creates a div for the play button for the lazy loaded YouTube video
    playButton.setAttribute("class", "play"); // puts a class="play" in the div
    div.appendChild(playButton); // append the play button div to the parent div
    // upon clicking, execute the function below
    div.onclick = function () {
      labnolIframe(this); // puts in the iframe inside the youtube-player div
    };
    playerElements[n].appendChild(div); // append div
  }
}
document.addEventListener("DOMContentLoaded", initYouTubeVideos); // when the DOM hierarchy has been fully loaded/constructed, it will execute the function, initYouTubeVideos
