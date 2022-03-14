// get the hero
const hero = document.querySelector(".hero");
hero.style.backgroundImage = `url('./assets/sf.jpg'), linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))`;

const greeting = document.querySelector(`.hero h3`);
greeting.textContent = `Here's my really great, cheesy greeting!`;

const profileImg = document.querySelector(".profile-img");
profileImg.src = "https://avatars.githubusercontent.com/u/24390149?v=4";

const favThings = [
  {
    name: "Cooking",
    img: "./assets/kitchen.jpg",
    desc: "I love to cook. When I was younger, I worked in kitchens and had a great time with a wide variety of people. Now, it's a way to keep exploring new cultures and challenge myself.",
  },
  {
    name: "Traveling",
    img: "./assets/cuba.jpg",
    desc: "Travelling is by far one of my favorite activiites. During COVID, it became harder - obviously - to get around. However, I'm happy to say I'm a traveller and not a tourist whenever I go somewhere.",
  },
  {
    name: "Exercising",
    img: "./assets/xfit.jpg",
    desc: "I like to lift heavy things and put them down. Wheter it's running, oly-lifting, or even hopping on a spin bike, I love it. No disc sports...I'm not a dog.",
  },
];

favThings.map((thing) => {
  const thingDiv = document.createElement("div");
  thingDiv.classList.add("info-item");
  thingDiv.innerHTML = `
        <img src="${thing.img}" class="item-img">
        <h4>${thing.name}</h4>
        <p>${thing.desc}</p>
    `;
  document.querySelector(".info-gallery").appendChild(thingDiv);
});
