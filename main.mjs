const handleSelect = function (event) {
  const targetElement = event.target; // 

  if (targetElement.closest("div")) {
    const selectedDiv = targetElement.closest(".container > div");
    // Toggle selected class
    selectedDiv.classList.toggle("selected");
    const selectedValue = selectedDiv.dataset.value;
    console.log(`Vous avez sélectionné : ${selectedValue}`);
  }
};
const container = document.querySelector(".container");

container.addEventListener("click", handleSelect, false);
