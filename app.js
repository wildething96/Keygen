let event1 = document.getElementById("event");
let event2 = document.getElementById("event1");
let event3 = document.getElementById("event2");
let event4 = document.getElementById("event3");
let outer = document.getElementsByClassName("flex")[0]

console.log(outer)
document.addEventListener("keydown", (e) => {
  event1.innerHTML = e.which
  event3.innerHTML = e.which
  event2.innerHTML = e.key
  event4.innerHTML = e.code
  outer.style.opacity = 1;
});
