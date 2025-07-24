//------------------------ blur radius ------------------
let inpBlurRadius = document.getElementById("inpBlurRadius");
let image = document.getElementById("mainImage");
let txtBlurRadius = document.getElementById("numbBlurRadius");
let blurTxt = document.getElementById("blurTxt");
let currentBlur = 0;
// ------------------------ Brightness ----------------
let inpBrightness = document.getElementById("inpBrightness");
let txtBrightness = document.getElementById("numbBrightness");
let brightnessTxt = document.getElementById("brightnessTxt");
let currentBrighness = 100;

// ------------------------ Contrast ----------------
let inpContrast = document.getElementById("inpContrast");
let txtContrast = document.getElementById("numbContrast");
let contrastTxt = document.getElementById("contrastTxt");
let currentContrast = 100;

// ------------------------ grayscale ----------------
let inpGrayscale = document.getElementById("inpGrayscale");
let txtGrayscale = document.getElementById("numbGrayscale");
let grayscaleTxt = document.getElementById("grayscaleTxt");
let currentGrayscale = 0;

// ------------------------ hue ----------------
let inpHue = document.getElementById("inpHue");
let txtHue = document.getElementById("numbHue");
let hueTxt = document.getElementById("hueTxt");
let currentHue = 0;

// ------------------------ invert ----------------
let inpInvert = document.getElementById("inpInvert");
let txtInvert = document.getElementById("numbInvert");
let invertTxt = document.getElementById("invertTxt");
let currentInvert = 0;

// ------------------------ opacity ----------------
let inpOpacity = document.getElementById("inpOpacity");
let txtOpacity = document.getElementById("numbOpacity");
let opacityTxt = document.getElementById("opacityTxt");
let currentOpacity = 100;

// ------------------------ Saturate ----------------
let inpSaturate = document.getElementById("inpSaturate");
let txtSaturate = document.getElementById("numbSaturate");
let saturateTxt = document.getElementById("saturateTxt");
let currentSaturate = 100;

// ------------------------ Sepia ----------------
let inpSepia = document.getElementById("inpSepia");
let txtSepia = document.getElementById("numbSepia");
let sepiaTxt = document.getElementById("sepiaTxt");
let currentSepia = 0;

// copy
var copyText = document.getElementById("myInput");
let copyButton = document.getElementById("copyButton");

// creator
let creatorBt = document.getElementById("creatorBt");
let creator = document.getElementById("creator");

// closeBtn
let closeBtn = document.getElementById("closeBtn");

// update filters
function updateFilters() {
  image.style.filter = `blur(${currentBlur}px)  brightness(${currentBrighness}%) contrast(${currentContrast}%) grayscale(${currentGrayscale}%) hue-rotate(${currentHue}deg) 
  invert(${currentInvert}%) opacity(${currentOpacity}%) saturate(${currentSaturate}%) sepia(${currentSepia}%)
  `;
}

//------------------------ blur radius event ------------------
inpBlurRadius.addEventListener("change", () => {
  currentBlur = inpBlurRadius.value;
  txtBlurRadius.textContent = currentBlur;
  blurTxt.innerHTML = currentBlur == 0 ? " " : `blur(${currentBlur}px)`;
  updateFilters();
});
// ------------------------ Brightness event ----------------

inpBrightness.addEventListener("change", () => {
  currentBrighness = inpBrightness.value;
  txtBrightness.textContent = currentBrighness;
  brightnessTxt.innerHTML =
    currentBrighness == 0
      ? " "
      : (brightnessTxt.innerHTML = `brightness(${currentBrighness}%)`);
  updateFilters();
});

// ------------------------ contrast event ----------------

inpContrast.addEventListener("change", () => {
  currentContrast = inpContrast.value;
  txtContrast.textContent = currentContrast;
  currentContrast == 0
    ? " "
    : (contrastTxt.innerHTML = `contrast(${currentContrast}%)`);

  updateFilters();
});

// ------------------------ grayscale event ----------------

inpGrayscale.addEventListener("change", () => {
  currentGrayscale = inpGrayscale.value;
  txtGrayscale.textContent = currentGrayscale;
  currentGrayscale == 0
    ? " "
    : (grayscaleTxt.innerHTML = `grayscale(${currentGrayscale}%)`);

  updateFilters();
});

// ------------------------ hue event ----------------

inpHue.addEventListener("change", () => {
  currentHue = inpHue.value;
  txtHue.textContent = currentHue;
  currentHue == 0 ? " " : (hueTxt.innerHTML = `hue-rotate(${currentHue}deg)`);

  updateFilters();
});

// ------------------------ invert event ----------------

inpInvert.addEventListener("change", () => {
  currentInvert = inpInvert.value;
  txtInvert.textContent = currentInvert;
  currentInvert == 0
    ? " "
    : (invertTxt.innerHTML = `invert(${currentInvert}%)`);

  updateFilters();
});

// ------------------------ opacity event ----------------

inpOpacity.addEventListener("change", () => {
  currentOpacity = inpOpacity.value;
  txtOpacity.textContent = currentOpacity;
  currentOpacity == 0
    ? " "
    : (opacityTxt.innerHTML = `opacity(${currentOpacity}%)`);

  updateFilters();
});

// ------------------------ Saturate event ----------------

inpSaturate.addEventListener("change", () => {
  currentSaturate = inpSaturate.value;
  txtSaturate.textContent = currentSaturate;
  currentSaturate == 0
    ? " "
    : (saturateTxt.innerHTML = `opacity(${currentSaturate}%)`);

  updateFilters();
});

// ------------------------ Sepia event ----------------

inpSepia.addEventListener("change", () => {
  currentSepia = inpSepia.value;
  txtSepia.textContent = currentSepia;
  currentSepia == 0 ? " " : (sepiaTxt.innerHTML = `opacity(${currentSepia}%)`);

  updateFilters();
});

// copy
copyButton.addEventListener("click", () => {
  const textToCopy = copyText.innerText.trim();

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => alert("کپی شد:\n" + textToCopy))
    .catch((err) => console.error("خطا در کپی:", err));
});

// Creator button
creatorBt.addEventListener("click", () => {
  creator.classList.add("creatorOpen");
});

// close btn
closeBtn.addEventListener("click", () => {
  creator.classList.remove("creatorOpen");
});
