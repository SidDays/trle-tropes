var TRGame = {};
TRGame["tr1"] = "TR1";
TRGame["tr2"] = "TR2";
TRGame["tr3"] = "TR3";
TRGame["tr4"] = "TR4";
TRGame["tr5"] = "TR5";

function listTropes(json) {
  const tropesList = document.getElementById("tropes-list");
  // json.sort()
  for (const tropeName in json) {
    const trope = json[tropeName];
    const description = trope.description;
    const name = trope.name;
    console.log(trope);
    // Add the trope to the list
    const li = document.createElement("li");
    const liName = document.createElement("div");
    liName.innerHTML = name;
    li.appendChild(liName);
    const liDescription = document.createElement("div");
    liDescription.innerHTML = description;
    li.appendChild(liDescription);
    tropesList.appendChild(li);
  }
}

function listLevels(json) {
  const levelsList = document.getElementById("levels-list");
  for (const levelName in json) {
    const level = json[levelName];
    const name = level.name;
    // console.log(level);
    // Add the level to the list
    const li = document.createElement("li");
    const liName = document.createElement("div");
    liName.innerHTML = name;
    // const tropes: Trope[] = [];
    for (const trope of level.tropes) {
      const tropeBadge = document.createElement("span");
      tropeBadge.className = "tag";
      tropeBadge.innerText = trope.name;
      liName.appendChild(tropeBadge);
    }
    li.appendChild(liName);
    levelsList.appendChild(li);
  }
}

var tropes = {
  ascending: {
    name: "Ascending",
    description:
      "You go vertically upwards as your progress throughout the level (stairs, ladders, etc.).",
  },
  descending: {
    name: "Descending",
    description:
      "You go vertically downwards as your progress throughout the level (stairs, slopes, long drops, waterfalls, etc.).",
  },
  "enemies-await-your-return": {
    name: "Enemies Await Your Return",
    description:
      "Return to a previously explored area to find new enemies to fight (often triggered after finding an essential pickup).",
  },
  "over-the-ceiling": {
    name: "Over the Ceiling",
    description:
      "Revisit the same area and traveling across the ceiling instead. This can include holes. so if you fall back to the floor, you have to make your way to the ceiling again.",
  },
  "st-francis-folly": {
    name: "St. Francis Folly",
    description:
      "Explore a series of areas that hold pieces of a puzzle leading up to a final room (e.g. a set of four puzzle holes that open a single door when completed).",
  },
  "swept-by-the-current": {
    name: "Swept by the Current",
    description:
      "The water has a strong current, and falling into the water causes you to lose progress.",
  },
  "bigger-on-the-inside": {
    name: "Bigger On The Inside",
    description:
      "Enter a closed section to find out it's much bigger on the inside.",
  },
  "mandatory-damage": {
    name: "Mandatory Damage",
    description:
      "The player cannot complete the level without taking some damage to clear a certain section (e.g. a long fall). A medipack might be placed right before such a section.",
  },
  "unreachable-pickup": {
    name: "Unreachable Pickup",
    description:
      "There's a fancy looking pickup in plain sight but there's no way to actually reach it.",
  },
  "look-at-the-ceiling": {
    name: "Look at the Ceiling",
    description:
      "The hint to progressing is hidden in the ceiling — a clue to a puzzle, a secret crawlspace, etc, and without using the Look button you're unlikely to find it.",
  },
  "lose-your-weapons": {
    name: "Lose Your Weapons",
    description: "Start the level without your weapons and/or ammo.",
  },
  "came-here-by-accident": {
    name: "Came Here By Accident",
    description: "",
  },
  "dont-kill-me-just-yet": {
    name: "Don't Kill Me Just Yet",
    description:
      "An enemy triggers something in the level (e.g. open a door to a secret) but they can be killed before having the chance to.",
  },
};

var levels = {
  "the-great-wall": {
    name: "The Great Wall",
    game: "TR2",
    tropes: [],
  },
  venice: {
    name: "Venice",
    game: "TR2",
    tropes: [],
  },
  "bartolis-hideout": {
    name: "Bartoli's Hideout",
    game: "TR2",
    tropes: [],
  },
  "opera-house": {
    name: "Opera House",
    game: "TR2",
    tropes: [],
  },
  "offshore-rig": {
    name: "Offshore Rig",
    game: "TR2",
    tropes: [],
  },
  "diving-area": {
    name: "Diving Area",
    game: "TR2",
    tropes: [],
  },
  "40-fathoms": {
    name: "40 Fathoms",
    game: "TR2",
    tropes: [],
  },
  "wreck-of-the-maria-doria": {
    name: "Wreck of the Maria Doria",
    game: "TR2",
    tropes: [],
  },
  "living-quarters": {
    name: "Living Quarters",
    game: "TR2",
    tropes: [],
  },
  "the-deck": {
    name: "The Deck",
    game: "TR2",
    tropes: [],
  },
  "tibetan-foothills": {
    name: "Tibetan Foothills",
    game: "TR2",
    tropes: [],
  },

  "barkhang-monastery": {
    name: "Barkhang Monastery",
    game: "TR2",
    tropes: [],
  },
  "catacombs-of-the-talion": {
    name: "Catacombs of the Talion",
    game: "TR2",
    tropes: [],
  },
  "ice-palace": {
    name: "Ice Palace",
    game: "TR2",
    tropes: [],
  },
  "temple-of-xian": {
    name: "Temple of Xian",
    game: "TR2",
    tropes: [],
  },
  "floating-islands": {
    name: "Floating Islands",
    game: "TR2",
    tropes: [],
  },
  "the-dragons-lair": {
    name: "The Dragon's Lair",
    game: "TR2",
    tropes: [],
  },
  "home-sweet-home": {
    name: "Home Sweet Home",
    game: "TR2",
    tropes: [],
  },
  jungle: {
    name: "Jungle",
    game: "TR3",
    tropes: ["swept-by-the-current"],
  },
  "temple-ruins": {
    name: "Temple Ruins",
    game: "TR3",
    tropes: [],
  },
  "the-river-ganges": {
    name: "The River Ganges",
    game: "TR3",
    tropes: [],
  },
  "caves-of-kaliya": {
    name: "Caves Of Kaliya",
    game: "TR3",
    tropes: [],
  },
  "thames-wharf": {
    name: "Thames Wharf",
    game: "TR3",
    tropes: [],
  },
  aldwych: {
    name: "Aldwych",
    game: "TR3",
    tropes: [],
  },
  "luds-gate": {
    name: "Lud's Gate",
    game: "TR3",
    tropes: [],
  },
  city: {
    name: "City",
    game: "TR3",
    tropes: [],
  },
  "nevada-desert": {
    name: "Nevada Desert",
    game: "TR3",
    tropes: [],
  },
  "high-security-compound": {
    name: "High Security Compound",
    game: "TR3",
    tropes: [],
  },
  "area-51": {
    name: "Area 51",
    game: "TR3",
    tropes: [],
  },
  "coastal-village": {
    name: "Coastal Village",
    game: "TR3",
    tropes: [],
  },
  "crash-site": {
    name: "Crash Site",
    game: "TR3",
    tropes: [],
  },
  "madubu-gorge": {
    name: "Madubu Gorge",
    game: "TR3",
    tropes: [],
  },
  "temple-of-puna": {
    name: "Temple Of Puna",
    game: "TR3",
    tropes: [],
  },
  antarctica: {
    name: "Antarctica",
    game: "TR3",
    tropes: [],
  },
  "rx-tech-mines": {
    name: "RX-Tech Mines",
    game: "TR3",
    tropes: [],
  },
  "lost-city-of-tinnos": {
    name: "Lost City Of Tinnos",
    game: "TR3",
    tropes: [],
  },
  "meteorite-cavern": {
    name: "Meteorite Cavern",
    game: "TR3",
    tropes: [],
  },
};

listTropes(tropes);
listLevels(levels);

console.log("Scripts loaded.");
