var time = new Date();
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

console.log(h, m, s);

const h_hand = document.getElementById("h");
const m_hand = document.getElementById("m");
const s_hand = document.getElementById("s");

// s_hand.style.transform = `rotate(${s}deg)`;

const run_time = () => {
  clearTimeout();
  console.log(h, m, s);

  if (s >= 60) {
    m += 1;
    s = 0;
  }
  if (m >= 60) {
    h += 1;
    m = 0;
  }
  s += 1;
  h_hand.style.transform = `rotate(${
    h * (360.0 / 12) + m * (360.0 / 12 / 60) + s * (360.0 / 12 / 60 / 60)
  }deg)`;
  m_hand.style.transform = `rotate(${
    m * (360.0 / 60) + s * (360.0 / 60 / 60)
  }deg)`;
  s_hand.style.transform = `rotate(${s * (360.0 / 60)}deg)`;
  setTimeout(() => {
    run_time();
  }, 1000);
};

run_time();
