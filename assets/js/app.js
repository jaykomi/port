const change = src => {
  document.getElementById('main').src = src
}

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}


async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 12) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const carouselText = [

  { text: "Curious.", color: "black" }
]

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color)

    await waitForMs(1500);
    await deleteSentence(eleRef);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) { i = 2; }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

