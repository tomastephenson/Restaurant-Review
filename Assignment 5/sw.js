let cacheName = 'restaurant-content';

// Create an array of the URLs we want to cache.
let cachedUrls = [
        '/',
        '/index.html',
        '/restaurant.html',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',

        // Install the service worker

        self.addEventListener('install', function(event) {
            //

            event.waitUntil(

                // Utilise the cache interface so that we can store all items we want to cache

                caches.open(cacheName).then(function(cache) {

                    // Then add all the cached URLs from the previosuly-defined array.

                    return cache.addAll(cachedUrls);
                })
            );
        });


        // Listens for the activate event that signifies that the service worker has been installed

        self.addEventListener('activate', function(event) {
            event.waitUntil(

                // Returns a Promise that resolves to an array of all Cache keys.

                caches.keys().then(function(keys) {
                    return Promise.all(

                        // Filters out any cache keys that aren't in our previously-defined array list and deletes them.
                        keys.filter(function(key) {
                            return key.startsWith('restaurant-content') &&
                                key != cacheName;
                        }).map(function(key) {
                            return caches.delete(key);
                        })
                    );
                })
            );
        });