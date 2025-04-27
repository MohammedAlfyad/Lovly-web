//Start typeWriter
const textElement = document.querySelector(".title p");
const originalText = textElement.textContent;
textElement.innerHTML = "<span id='typed'></span><span id='cursor'>|</span>"; // محتوى مبدأي
const typedSpan = document.getElementById("typed");
const cursorSpan = document.getElementById("cursor");
let i = 0;
const speed = 50;
function typeWriter() {
  if (i < originalText.length) {
    let char = originalText.charAt(i);
    typedSpan.innerHTML += char === "" ? "&nbsp;" : char;
    i++;
    setTimeout(typeWriter, speed);
  }
}
//End typeWriter();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Start changeSlide
const images = [
  { src: "./img/10.jpeg", caption: "مهما لفيت ادور مش هلاقي زيك تاني 🥺❤️❤️" },
  { src: "./img/11.jpeg", caption: "ياه مانت الدنيا واحلى مافيها 💗✨" },
  {
    src: "./img/12.jpeg",
    caption: "وأنت جنبي بحس إن الدنيا كلها بتبتدي من جديد  💑",
  },
  { src: "./img/13.jpeg", caption: "يا سند قلبى وسر إبتسامتى وكل كلى 😍" },
  {
    src: "./img/14.jpeg",
    caption: "و فى قلبى شخص واحد لا أقارنه بأحد مهما حدث 💞",
  },
  { src: "./img/15.jpeg", caption: "قلبي وراحتي فيكِ 💓" },
  {
    src: "./img/16.jpeg",
    caption: "...لا أحد سيأتى بعدك أنت خاتمة كل الأشياء فى قلبى 🌍",
  },
  {
    src: "./img/17.jpeg",
    caption:
      "هى كـ طفله مشاغبة نهاراً وأنثى فاتنه ليلاً , واحتار قلبي ما بين تسميتها صغيرتي أم أميرتى 🤗",
  },
  {
    src: "./img/18.jpeg",
    caption: "العين التي تمتلئ بك، لن تنظٌر لغيرك حاضراً كٌنت أو غائباً ♥️🥺💍",
  },
  { src: "./img/19.jpeg", caption: "لم تكن اول حُب ، كنت اول حياة ♥️🫂💐" },
  { src: "./img/2.jpeg", caption: "الصداقة والحُب في شخصٍ واحد ♥️✨😘" },
  {
    src: "./img/20.jpeg",
    caption: "مُتعلق بك وكأن الأرض لا تحتوي غيرك ♥️🫂🥰",
  },
  { src: "./img/21.jpeg", caption: "إنتِ سر سعادتي ✨" },
  {
    src: "./img/3.jpeg",
    caption: "سأكون بجانبكِ دائماً، حتى وإن إختلفنا كثيراً 🫂🖤👫",
  },
  {
    src: "./img/4.JPG",
    caption: "قد يخذلك العالم كله، وتبقى هى جيشك الوحيد ♥️✌️💎",
  },
  {
    src: "./img/5.jpeg",
    caption: "سأكون لك الآمان الذي لا يتخلى عنك يوماً ♥️🫂💗",
  },
  {
    src: "./img/6.jpeg",
    caption: "أنتَ المُفضل والدائم والثابّت في قلبي ♥️🫀🦋",
  },
  {
    src: "./img/7.jpeg",
    caption: "لم احبك كشخص فقط، بل احببتك كوطن لا أريد الإنتماء لغيره ♥️🫂🫀",
  },
  { src: "./img/8.jpeg", caption: "يليقُ بّك أن أستثنيك عن الكُل ♥️✨" },
  { src: "./img/9.jpg", caption: "الناس لبعضهَا وانت لـ قلبّي ♥️🫀💍" },
  {
    src: "./img/1.jpeg",
    caption: "حبيتك لأنك الوحيد اللي خليتني أحب نفسي أكثر ❤️",
  },
];

let index = 0;
const imageElement = document.getElementById("slider-image");
const captionElement = document.getElementById("caption");
function changeSlide() {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = images[index].src;
    captionElement.textContent = images[index].caption;
    imageElement.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 1000); // Fade out duration
}
setInterval(changeSlide, 5000); // كل 5 ثواني تتغير الصورة
//END changeSlide

//////////////////////////////////////////////////////////////////////////////////////////////////

//Start startSurprise
const audio1 = new Audio("./audio/tota.mp3");
const audio2 = new Audio("./audio/you.mp3");

function startSurprise() {
  // أخفي المودال
  document.getElementById("customAlert").style.display = "none";

  // أظهر الصفحة
  document.getElementById("mainContent").style.display = "flex";

  // شغّل الأغنية الأولى
  audio1
    .play()
    .then(() => {
      console.log("🎵 الأغنية الأولى بدأت");
    })
    .catch((err) => {
      console.log("🚫 مشكلة في تشغيل الصوت:", err);
    });
  typeWriter();
  fireworks.start();
  setTimeout(() => fireworks.stop(), 7000); // توقف بعد 7 ثانية
  // بعد ما تنتهي الأولى، شغّل التانية
  audio1.addEventListener("ended", () => {
    audio2
      .play()
      .then(() => {
        console.log("🎵 الأغنية التانية بدأت");
      })
      .catch((err) => {
        console.log("🚫 مشكلة في تشغيل الصوت التاني:", err);
      });
  });
}
//End startSurprise

/////////////////////////////////////////////////////////////////////////////////////////////////

// animation fireworks
document.getElementById("mainContent").classList.add("fade-in");
const container = document.getElementById("fireworks-container");
const fireworks = new Fireworks.default(container, {
  speed: 4,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 90,
  trace: 3,
  explosion: 6,
  intensity: 30,
  flickering: 35,
  lineStyle: "round",
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 10,
    max: 30,
  },
  rocketsPoint: {
    min: 20,
    max: 80,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.015,
    max: 0.03,
  },
  mouse: {
    click: false,
    move: false,
    max: 1,
  },
});

// fireworks.start();
// setTimeout(() => fireworks.stop(), 3000); // توقف بعد 3 ثانية
const modalMusic = new Audio("./audio/happy.mp3"); // ضع مسار أغنية المودال هنا
modalMusic.loop = false; // لا تكرار
function launchConfetti() {
  const duration = 30 * 1000; // مدة الاحتفال 30 ثواني
  const end = Date.now() + duration;

  (function frame() {
    // تطاير الورق من فوق
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
modalMusic.play();
launchConfetti()
