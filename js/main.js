const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

//Phone mask
mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

// Yandex map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.943543, 30.338928], // «широта, долгота»
    zoom: 16, // 0-19
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {
      balloonContent: `
        <div class="balloon">
          <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
          <div class="balloon__contacts">
            <a href="+78121234567">8 (812) 123-45-67</a>
          </div>
        </div>`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map/location-pin.svg",
      icon_imagesize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.controls.add("zoomControl");
  myMap.behaviors.disable(["scrollZoom"]);

  myMap.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}
