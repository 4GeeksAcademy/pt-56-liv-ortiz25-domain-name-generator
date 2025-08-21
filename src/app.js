import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ["the", "our", "my", "her"];
  const adj = ["great", "big", "dazzling", "small"];
  const noun = ["jogger", "racoon", "book", "padawan"];
  const extensions = ["com", "net", "us", "io"];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in extensions) {
          document.querySelector("#domain").innerHTML +=
            `<li>${pronoun[i]}${adj[j]}${noun[k]}.${extensions[l]}</li>`;
        }
      }
    }
  }
};
