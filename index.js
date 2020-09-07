let count = 0;

const shiftNotify = (event) => {
  document.getElementById("sticky").classList.add("hide");
  const key = event.key;
  console.log(key);
  if (key === "Shift") count++;
  else {
    timer = setInterval(() => {
      count = 0;
    }, 5000);
  }
  if (count === 5) {
    count = 0;
    // clearInterval(timer);
    console.log("win");
    document.getElementById("sticky").classList.remove("hide");
  }
};
document.addEventListener("keydown", shiftNotify);

document.getElementById("btn").addEventListener("click", shiftNotify);
let timer = setInterval(() => {
  count = 0;
}, 5000);
