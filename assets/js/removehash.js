// removehash.js

function removeHashFromURL() {
  // Check if the URL contains a hash
  if (window.location.hash) {
    // Remove the hash from the URL using history.replaceState()
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }
}
