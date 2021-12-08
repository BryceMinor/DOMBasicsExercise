// DOM BASICS EXERCISE
// 1
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 4
const ginosEast = document.querySelector(`#ginos`);
console.dir(ginosEast);

// 5
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);

// 6a
const h1 = document.querySelector(`h1`);

// 6b
h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";

// 7a
const others =  document.querySelector(`#others`);
console.dir(others);

// 7b
others.innerHTML = `<h3>Other Favorites</h3>`;

// 8a
const aTag = document.getElementsByTagName(`a`);
console.dir(aTag);

// 8b
aTag.innerHTML = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);

// 11b
h4.innerText = "CHICAGO: A great place to eat!";

// 11c
const bodySection = document.querySelector(`body`);
bodySection.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = `See you in the Windy City sometime!`;

// 12c
// aTag.insertAdjacentElement(`afterend`, h5);

// 13
document.querySelector(`ul > li`).remove();

// BONUS
// 14a
console.log(`Number 14`);
const divs = document.getElementsByTagName(`div`);
console.dir(divs);

// 14b
for (d of divs){
    d.classList.toggle(`background`);
}

// 15a
const hungry = [ "Thanks", "A", "Lot", "Now", "I", "Am", "Hungry" ];

// 15b
const end = document.querySelector(`body`);
for (a of hungry){
    const span = document.createElement(`span`);
    span.innerHTML = `${a}`;
    end.append(span);
}