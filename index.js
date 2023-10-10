function findMatching(name, found) {
    return name.filter(
      (matched) => matched.toLowerCase() === found.toLowerCase()
    );
  }
  
  function fuzzyMatch(name, testingString) {
    return name.filter(
      (matched) =>
        matched.toLowerCase().indexOf(testingString.toLowerCase()) === 0
    );
  }
  
  function matchName(name, foundName) {
    return name.filter((record) => record.name === foundName);
  }