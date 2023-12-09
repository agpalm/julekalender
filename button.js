    
/* const newdisplayEl = document.getElementById('random-person');
    const newbuttonEl = document.getElementById('generate-person-btn');
    const newpreviousNumbersE1 = document.getElementById('previous-person')
    const TheFamily =  ["&#128046", "&#129414", "&#128027", "&#129446"];
    let newavailableNumbers = [...TheFamily];
    let originalNumbers = [...newavailableNumbers];
    let newpreviousNumbers = [];


    const updateRandomNumber2 = () => {
      if (newavailableNumbers.length === 0) {
        alert("begynn på nytt!");
        resetList();
      }

      const newrandomIndex = Math.floor(Math.random() * newavailableNumbers.length);
      const newrandomNumber = newavailableNumbers[newrandomIndex];

      // Fjern det genererte tallet fra listen over tilgjengelige tall
      newavailableNumbers.splice(newrandomIndex, 1);

      newdisplayEl.innerHTML = newrandomNumber;

      newpreviousNumbers.unshift(newrandomNumber);
      
      updateNewpreviousNumbers();
    }

    const updateNewpreviousNumbers = () => {
        newpreviousNumbersE1.innerHTML = "Fått pakke: " + newpreviousNumbers.join(', ');
    }

    const resetList = () => {
        newavailableNumbers = [...originalNumbers];
        newpreviousNumbers = [];
        updateNewpreviousNumbers();
    }


    newbuttonEl.addEventListener('click', () => updateRandomNumber2 ());

    /*updateRandomNumber2();*/


/*
    const displayEl = document.getElementById('random-number');
    const buttonEl = document.getElementById('generate-number-btn');
    const previousNumbersEl = document.getElementById('previous-numbers');
    let availableNumbers = Array.from({ length: 24 }, (_, i) => i+1); // Tallene fra 1 til 24
    let excludedNumbers = [11, 18]
    let previousNumbers = [];
    let meNumbers = [1, 2, 3, 4, 5, 6]
    let gabbiNumbers = [7, 8, 9, 10, 11, 12]
    let finnNumbers = [13, 14, 15, 16, 17, 18]
    let idaNumbers = [19, 20, 21, 22, 23, 24]


    const updateRandomNumber = () => {
      if (availableNumbers.length === 0) {
        alert("Julaften!!");
        return;
      }
 
      const filteredNumbers = availableNumbers.filter(num => !excludedNumbers.includes(num));
     
      if (filteredNumbers.length === 0) {
        alert("Julaften!!");
        return;
      }
      const randomIndex = Math.floor(Math.random() * filteredNumbers.length);
      const randomNumber = filteredNumbers[randomIndex];

      /*const finnGave = () => {
        const previousNumbers = filteredNumbers.filter(num => !finnNumbers.includes(num));
    }

        if (newpreviousNumbers === "&#128046") {
         updatefinnGave();
}
        console.log(finnGave)

      // Fjern det genererte tallet fra listen over tilgjengelige tall
      availableNumbers.splice(randomIndex, 1);

      displayEl.innerHTML = randomNumber;

      // Legg til det genererte tallet i listen over tidligere tall
      previousNumbers.unshift(randomNumber);


      // Oppdater visningen av tidligere tall
      updatePreviousNumbers();
    }


    const updatePreviousNumbers = () => {
      previousNumbersEl.innerHTML = "Allerede gitt ut: " + excludedNumbers.join(', ') + (', ') + previousNumbers.join(', ');
    }

    buttonEl.addEventListener('click', () => updateRandomNumber());

    /*updateRandomNumber();*/


let availableNumbers = Array.from({ length: 24 }, (_, i) => i + 1);
let excludedNumbers = [11, 18];
let previousNumbers = [];
let meNumbers = [1, 2, 3, 4, 5, 6];
let gabbiNumbers = [7, 8, 9, 10, 11, 12];
let finnNumbers = [13, 14, 15, 16, 17, 18];
let idaNumbers = [19, 20, 21, 22, 23, 24];

const newdisplayEl = document.getElementById('random-person');
const newbuttonEl = document.getElementById('generate-person-btn');
const newpreviousNumbersE1 = document.getElementById('previous-person');
const TheFamily = ["Finn", "Ida", "Gabbi", "Mats Erik"]; // Use names without HTML entities
let newavailableNumbers = generateAvailableNumbers();
let originalNumbers = [...newavailableNumbers];
let newpreviousNumbers = [];

const updateRandomNumber2 = () => {
  if (newavailableNumbers.length === 0) {
    alert("begynn på nytt!");
    resetList();
  }
console.log(newavailableNumbers)

  const newrandomIndex = Math.floor(Math.random() * newavailableNumbers.length);
  const newrandomNumber = newavailableNumbers[newrandomIndex];

  // Fjern det genererte tallet fra listen over tilgjengelige tall
  newavailableNumbers.splice(newrandomIndex, 1);

  newdisplayEl.innerHTML = newrandomNumber;

  newpreviousNumbers.unshift(newrandomNumber);

  updateNewpreviousNumbers();
};

const updateNewpreviousNumbers = () => {
  newpreviousNumbersE1.innerHTML = "Fått pakke: " + newpreviousNumbers.join(', ');
};

const resetList = () => {
  newavailableNumbers = generateAvailableNumbers();
  newpreviousNumbers = [];
  updateNewpreviousNumbers();
};

newbuttonEl.addEventListener('click', () => updateRandomNumber2());

const displayEl = document.getElementById('random-number');
const buttonEl = document.getElementById('generate-number-btn');
const previousNumbersEl = document.getElementById('previous-numbers');

const updateRandomNumber = () => {
  if (availableNumbers.length === 0) {
    alert("Julaften!!");
    return;
  }

  const filteredNumbers = availableNumbers.filter(num => !excludedNumbers.includes(num));

  if (filteredNumbers.length === 0) {
    alert("Julaften!!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * filteredNumbers.length);
  const randomNumber = filteredNumbers[randomIndex];

  // Fjern det genererte tallet fra listen over tilgjengelige tall
  availableNumbers.splice(randomIndex, 1);

  displayEl.innerHTML = randomNumber;

  // Legg til det genererte tallet i listen over tidligere tall
  previousNumbers.unshift(randomNumber);

  // Oppdater visningen av tidligere tall
  updatePreviousNumbers();
};

const updatePreviousNumbers = () => {
  previousNumbersEl.innerHTML = "Allerede gitt ut: " + excludedNumbers.join(', ') + (', ') + previousNumbers.join(', ');
};

buttonEl.addEventListener('click', () => updateRandomNumber());

function generateAvailableNumbers() {
  let lastavailableNumbers = [...availableNumbers];

  for (const familyMember of TheFamily) {
    switch (familyMember) {
      case "Finn":
        lastavailableNumbers = lastavailableNumbers.filter(num => !finnNumbers.includes(num));
        break;
      case "Ida":
        lastavailableNumbers = lastavailableNumbers.filter(num => !idaNumbers.includes(num));
        break;
      case "Gabbi":
        lastavailableNumbers = lastavailableNumbers.filter(num => !gabbiNumbers.includes(num));
        break;
      case "Mats Erik":
        lastavailableNumbers = lastavailableNumbers.filter(num => !meNumbers.includes(num));
        break;
    }
  }

  return lastavailableNumbers;
}