const form = document.getElementById("form-randomize");
const quantityInput = document.getElementById("quantity");
const minimumInput = document.getElementById("minimum");
const maximumInput = document.getElementById("maximum");
const noRepeatInput = document.getElementById("no-repeat");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");
const btnRandomize = document.getElementById("btn-randomize");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearError();

  const quantity = Number(quantityInput.value);
  const minimum = Number(minimumInput.value);
  const maximum = Number(maximumInput.value);
  const noRepeat = noRepeatInput.checked;

  const error = validateFields(quantity, minimum, maximum, noRepeat);

  if (error) {
    showError(error);
    return;
  }

  animateRandomization();

  setTimeout(function () {
    const randomizedNumbers = randomizeNumbers(quantity, minimum, maximum, noRepeat);
    showResult(randomizedNumbers);
  }, 900);
});

function validateFields(quantity, minimum, maximum, noRepeat) {
  if (
    quantityInput.value === "" ||
    minimumInput.value === "" ||
    maximumInput.value === ""
  ) {
    return "Fill in all fields before randomizing.";
  }

  if (quantity <= 0) {
    return "The amount of numbers must be greater than zero.";
  }

  if (maximum <= minimum) {
    return "The maximum value must be greater than the minimum value.";
  }

  const availableInterval = maximum - minimum + 1;

  if (noRepeat && quantity > availableInterval) {
    return "The amount cannot be greater than the available interval when the no repeat option is checked.";
  }

  return "";
}

function randomizeNumbers(quantity, minimum, maximum, noRepeat) {
  const numbers = [];

  while (numbers.length < quantity) {
    const randomNumber = generateRandomNumber(minimum, maximum);

    if (noRepeat && numbers.includes(randomNumber)) {
      continue;
    }

    numbers.push(randomNumber);
  }

  return numbers;
}

function generateRandomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function showResult(numbers) {
  result.innerHTML = "";

  numbers.forEach(function (number, index) {
    const card = document.createElement("span");
    card.classList.add("number-card");
    card.textContent = number;
    card.style.animationDelay = `${index * 0.08}s`;

    result.appendChild(card);
  });

  btnRandomize.disabled = false;
  btnRandomize.textContent = "Randomize again";
}

function animateRandomization() {
  btnRandomize.disabled = true;
  btnRandomize.textContent = "Randomizing...";

  result.innerHTML = `
    <span class="number-card loading">?</span>
    <span class="number-card loading">?</span>
    <span class="number-card loading">?</span>
  `;
}

function showError(text) {
  errorMessage.textContent = text;
  result.innerHTML = `<p class="empty">Correct the information above to perform the randomization.</p>`;
}

function clearError() {
  errorMessage.textContent = "";
}
