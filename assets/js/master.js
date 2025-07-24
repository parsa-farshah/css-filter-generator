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

// update filters
function updateFilters() {
  image.style.filter = `blur(${currentBlur}px)  brightness(${currentBrighness}%) contrast(${currentContrast}%) grayscale(${currentGrayscale}%) hue-rotate(${currentHue}deg) `;
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
