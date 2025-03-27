document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('native-select-option');
  if (dropdown) {
    dropdown.value = 'isAuthorHidden';
    const event = new Event('change');
    dropdown.dispatchEvent(event);
  }
});