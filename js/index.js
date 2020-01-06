document.addEventListener("DOMContentLoaded", function() {
  console.log("running");
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });

  function buttonClick() {
    window.alert("Thank you for Subscribing");
  }

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".main-carousel", {
    // Add flickity options here!
    // Add flickity styles in stylesheet
  });
});
