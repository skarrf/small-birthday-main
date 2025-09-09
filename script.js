// script.js
const message = document.querySelector(".message");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

// if yes selected, change the gif and message
yesButton.addEventListener("click", () => {
  gifChoices = [
    "https://media.giphy.com/media/DdXeghz17NWAMVa00H/giphy.gif",
    "https://media1.tenor.com/m/mFxfDDRvsfEAAAAd/frieren-anime.gif",
    "https://upload-os-bbs.hoyolab.com/upload/2021/03/18/76008736/62bfef29665f6ea8e334ed5a074c7df2_7537307563916721582.gif",
    "https://media1.tenor.com/m/0O8KHFjOSWIAAAAd/kiss-cute.gif",
    "https://media1.tenor.com/m/RDkxD7JoR9IAAAAd/cat-duck.gif",
    "https://media1.tenor.com/m/CGYOBQ6hJfwAAAAC/duck.gif",
    "https://media1.tenor.com/m/n1LGDgAcey8AAAAd/gaming-genshin-impact.gif",
    "https://media1.tenor.com/m/hX_qLlQTrFoAAAAd/murder-drones-n.gif",
    "https://media1.tenor.com/m/Kvyj9Xem2wcAAAAd/murder-drones.gif",
  ];
  // the formuler: Math.floor(Math.random() * (max - min + 1)) + min (this is 1 to 10 inclusive so make it 0 to 3 ish)
  let choice = Math.floor(Math.random() * gifChoices.length);
  gif.src = gifChoices[choice];
  message.innerHTML =
    "Keeping this short since I'm not good at these. I appreciate everything that you do. You are smart, silly, and hardworking which is admirable. I'm always here to listen to you. I wish this year will be less hellish for you than the last. Sus. Anyways, happy 20th birthday";
});

// move the button if no is hovered over
noButton.addEventListener("mouseover", () => {
  const NBRectangle = noButton.getBoundingClientRect();
  const maxX = window.innerWidth - NBRectangle.width;
  const maxY = window.innerHeight - NBRectangle.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

// figure out how to make confetti rain? also add borders to html
