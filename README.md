# Restaurant Reviews Project - Tom Stephenson

## Project Overview

The project was to convert a a static design that lacks accessibility and convert the design to be responsive, mobile-ready web application.


### Specification

When I was provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it doesn’t work offline at all. I updated the code to resolve these issues while still maintaining the included functionality by doing the following:

* Ensuring the design worked responsively by adding percentage widths and using breakpoints. 
* Using 
* Adjusting the colour scheme to a sleek, black and white look to ensure it meets accessibility standards
* Adjusting the DOM order and using correct headers to make the site more accessible to screen readers
* Implementing ARIA role and label tags, and alt tags for all images to meet accessibility standards.
* Implemented a service worker to cache responses to requests for site assets, so that visited pages are rendered when there is no network access.
* Added a favicon :)

### Project Rubric

The project was evaluated according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements.

### How to view the site

1. Download the zip of this folder by clicking the button in the top-right corner.
2. In the downloaded folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
4. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
5. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). [Mapbox](https://www.mapbox.com/) is free to use, and does not require any payment information.
