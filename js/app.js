const party = new Date("August 15, 2020 05:00:00").getTime();
setInterval(function() {
  const today = new Date().getTime();

  // get the difference
  const diff = party - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

},1);

let active = false;
const mark = document.getElementById("mark")

function slide(init) {
  let interval = 2000;
  if (init) {
    interval = 1000
  }
  if (active) {
    setTimeout(()=> {
      mark.classList.remove('mark-active')
      mark.classList.add('mark-inactive')
      active = false
    }, interval)
  } else {
    setTimeout(()=> {
      mark.classList.remove('mark-inactive')
      mark.classList.add('mark-active')
      active = true
    }, interval)
  }
  setTimeout(slide, 1);
}

slide(true)