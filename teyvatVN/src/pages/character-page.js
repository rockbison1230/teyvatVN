const characters = [
  "albedo", "amber", "barbara", "dahlia", "diluc", "eula", "fischl",
  "jean", "kaeya", "keqing", "lisa", "mona", "noelle", "rosaria",
  "sucrose", "venti"
];

let selected = [];

const grid = document.getElementById("characterGrid");
const selectedIcons = document.getElementById("selectedIcons");
const selectedCount = document.getElementById("selectedCount");
const searchInput = document.getElementById("searchInput");
const continueBtn = document.getElementById("continueBtn");

function renderCharacters(filter = "") {
  grid.innerHTML = "";
  characters
    .filter(name => name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(name => {
      const card = document.createElement("div");
      card.className = "character-card";
      if (selected.includes(name)) card.classList.add("selected");

      const img = document.createElement("img");
      img.src = `public/src/assets/character sprites/${name}.webp`;
      img.alt = name;

      const label = document.createElement("div");
      label.className = "character-name";
      label.textContent = capitalize(name);

      card.appendChild(img);
      card.appendChild(label);
      card.onclick = () => toggleSelection(name);
      grid.appendChild(card);
    });
}

function toggleSelection(name) {
  if (selected.includes(name)) {
    selected = selected.filter(n => n !== name);
  } else if (selected.length < 2) {
    selected.push(name);
  } else {
    alert("You can only select 2 characters.");
    return;
  }
  updateSelectionDisplay();
  renderCharacters(searchInput.value);
}

function updateSelectionDisplay() {
  selectedIcons.innerHTML = "";
  selected.forEach(name => {
    const img = document.createElement("img");
    img.src = `/assets/character sprites/${name}.${getImageExtension(name)}`;
    img.alt = name;
    selectedIcons.appendChild(img);
  });
  selectedCount.textContent = `${selected.length}/2`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getImageExtension(name) {
  const pngList = ["jean", "kaeya", "keqing", "sucrose"]; // Adjust if needed
  return pngList.includes(name) ? "png" : "webp";
}

searchInput.addEventListener("input", () => renderCharacters(searchInput.value));
continueBtn.addEventListener("click", () => {
  if (selected.length === 2) {
    alert("Continue to story with: " + selected.join(" & "));
    // window.location.href = "story.html"; // Uncomment when ready
  }
});

renderCharacters();
updateSelectionDisplay();
