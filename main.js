let myInput = document.getElementById("input");
let mySearching = document.getElementById("searching");
let myTitle = document.getElementById("title");
let myMeaning = document.getElementById("meaning");

async function fetchAPi(word) {
  try {
    mySearching.style.display = "block";
    myTitle.style.display = "none";
    myMeaning.style.display = "none";
    const myURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(myURL).then((e) => e.json());
    let theMeaningWeWant = result[0].meanings[0].definitions[0].definition;
    myTitle.innerText = `Your Word is :  ${word}`;
    myTitle.style.display = "block";
    myMeaning.innerText = theMeaningWeWant;
    myMeaning.style.display = "block";
  } catch (error) {
    myMeaning.innerText = "Please Try An Availble Word";
    myMeaning.style.display = "block";
  }
  mySearching.style.display = "none";
}
myInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && myInput.value) {
    fetchAPi(e.target.value);
  }
});
