document.addEventListener("DOMContentLoaded", function() {
  if (window.screenX <= 700) {
    let counter = 0;
    let burger = document.getElementById("burger");
    burger.addEventListener("click", function() {
      counter++;
      let link = document.getElementsByClassName("link");
      console.log(link);
      if (counter % 2 == 1) {
        for (let i = 0; i < link.length; i++) {
          link[i].style.display = "block";
          console.log(link[i]);
        }
      } else {
        for (let i = 0; i < link.length; i++) {
          link[i].style.display = "none";
          console.log(link[i]);
        }
      }
    });
  } else {
    let link = document.getElementsByClassName("link");
    console.log(link);
    for (let i = 0; i < link.length; i++) {
      link[i].style.display = "block";
      console.log(link[i]);
    }
  }

  // function initMap() {
  //   // The location of Uluru
  //   var uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   var map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   // The marker, positioned at Uluru
  //   var marker = new google.maps.Marker({ position: uluru, map: map });
  // }
});
