function setDropdownValue() {
  const dropdown = document.getElementById('native-select-option');
  if (dropdown) {
    dropdown.value = 'isAuthorHidden';
    const event = new Event('change');
    dropdown.dispatchEvent(event);
  }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      setDropdownValue();
    }
  }
});

// Start observing the target node for configured mutations
observer.observe(document.body, { childList: true, subtree: true });

// Initially set the dropdown value in case the element is already present
setDropdownValue();