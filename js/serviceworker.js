if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(function() {
    console.log('Service worker registration successful!');
  })
  .catch(function() {
    console.log('Service worker registration failed');
  });
}