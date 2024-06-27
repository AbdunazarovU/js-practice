"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll(".promo__adv img"),
    wrapper = document.querySelector(".promo__bg"),
    genre = wrapper.querySelector(".promo__genre"),
    seriesList = document.querySelector(".promo__interactive-list"),
    newSeries = document.querySelector(".adding__input"),
    addBtn = document.querySelector("button");

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  adv.forEach((item) => {
    item.remove();
  });

  genre.textContent = "comedy";

  wrapper.style.backgroundImage = 'url("img/1.jpg")';

  function drawSeries() {
    seriesList.innerHTML = "";

    seriesDB.series.forEach((item, idx) => {
      seriesList.innerHTML += `
      <li class="promo__interactive-item">${idx + 1} ${item}
        <div class="delete"></div>
      </li>
    `;
    });
  }
  drawSeries();

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (newSeries.value.length > 18) {
      newSeries.value = newSeries.value.substring(0, 18) + "...";
    }
    if (document.querySelector("input[type='checkbox']").checked) {
      console.log("Sevimli serial qo'shildi.");
    }
    if (newSeries.value.length > 0) {
      seriesDB.series.push(newSeries.value);
    }
    newSeries.value = "";
    seriesList.innerHTML = "";
    drawSeries();
  });
});
