async function init() {
  let a = Math.floor(Math.random() * 74 + 1);
  await fetch("https://x-colors.herokuapp.com/api/random")
    .then((response) => response.json())
    .then((data) => (document.body.style.background = data.hex));
  await fetch("https://www.scorebat.com/video-api/v3/")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("iframe").src = data.response[a].matchviewUrl;
    });
}
init();
let newMatch = document.getElementById("new");
newMatch.addEventListener("click", init);
