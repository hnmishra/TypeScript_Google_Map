
# Google Maps Project (TypeScript)

Overview
--------
A TypeScript-based  project that demonstrates:
- A  Google Maps integration that displays markers for a `User` and a `Company`.
- Basic TypeScript features and examples located in the learning folder (`features-learning`).

Core map app entry points and main classes
-----------------------------------------
- HTML entry: [maps/index.html](maps/index.html) — includes the Google Maps script and boots the app.
- Styles: [maps/styles.css](maps/styles.css)
- App package config: [maps/package.json](maps/package.json)
- Main TypeScript entry: [maps/src/index.ts](maps/src/index.ts)
- Map wrapper: [`CustomMap`](maps/src/CustomMap.ts) — [maps/src/CustomMap.ts](maps/src/CustomMap.ts)
- Domain classes:
  - [`User`](maps/src/User.ts) — [maps/src/User.ts](maps/src/User.ts)
  - [`Company`](maps/src/Company.ts) — [maps/src/Company.ts](maps/src/Company.ts)

What the map app does
---------------------
- Initializes a Google Map (center at lat: 0, lng: 0 by default).
- Instantiates a [`User`](maps/src/User.ts) and a [`Company`](maps/src/Company.ts).
- Adds both to the map using [`CustomMap`](maps/src/CustomMap.ts). Markers show an info window on click with content returned from `markerContent()` on each class.

Important implementation notes
------------------------------
- Google Maps script tag in [maps/index.html](maps/index.html) contains a placeholder for the API key. Replace `<API Key>` with a valid key:
  - Example snippet in [maps/index.html](maps/index.html): `<script src="https://maps.googleapis.com/maps/api/js?key=<API Key>"></script>`
- [`CustomMap`](maps/src/CustomMap.ts) defines a `Mappable` interface (inline) that requires:
  - `location: { lat: number; lng: number }`
  - `markerContent(): string`
- [`User`](maps/src/User.ts) and [`Company`](maps/src/Company.ts) both implement the required members to be used with `CustomMap.addMarker`.

features-learning — TypeScript samples
-------------------------------------
This project also contains many TypeScript example files for learning and reference under `features-learning/`. Key examples:
- Annotations and variables: [features-learning/annotations/variables.ts](features-learning/annotations/variables.ts)
- Annotation examples for objects: [features-learning/annotations/objects.ts](features-learning/annotations/objects.ts)
- Annotation examples for functions: [features-learning/annotations/functions.ts](features-learning/annotations/functions.ts)
- Arrays examples: [features-learning/arrays.ts](features-learning/arrays.ts)
- Classes examples: [features-learning/classes.ts](features-learning/classes.ts) — includes [`Vehicle`](features-learning/classes.ts) and [`Car`](features-learning/classes.ts)
- Interfaces example: [features-learning/interfaces.ts](features-learning/interfaces.ts) — includes `Reportable` usage
- Tuples example: [features-learning/tuples.ts](features-learning/tuples.ts)
- Types example: [features-learning/types.ts](features-learning/types.ts)

Notes on content
-------------------------
- The `features-learning` folder contains annotated TypeScript examples covering:
  - Primitive and complex type annotations
  - Function types and return annotations
  - Tuples, arrays, interfaces, and classes
  - Destructuring with type annotations
- Many example files have near-duplicate counterparts in `features-learning/features/` (for alternate organization). Example files:
  - [features-learning/annotations/variables.ts](features-learning/annotations/variables.ts) and [features-learning/features/annotations/variables.ts](features-learning/features/annotations/variables.ts)
  - [features-learning/tuples.ts](features-learning/tuples.ts) and [features-learning/features/tuples.ts](features-learning/features/tuples.ts)

## Technologies used

- TypeScript — primary language for app and learning examples.
- JavaScript (runtime) — produced bundles run in the browser.
- Node.js & npm — dependency management and scripts.
- Parcel — bundler used for building/serving the maps app (see maps/package.json).
- Google Maps JavaScript API — renders the interactive map and markers.
- @types/google.maps (optional) — improves TypeScript typings for Google Maps usage.
- @faker-js/faker (optional) — used/optional for generating fake User/Company data.
- HTML5 & CSS3 — map entry page and styles (maps/index.html, maps/styles.css).
- Visual Studio Code — recommended editor; project tested in Windows environment.
- Git — version control.
- 
How to run (development)
------------------------
1. Install dependencies:
   - Open a terminal in the `maps` folder and run:
     ```
     npm install
     ```
     (See maps/package.json for exact dependencies and scripts.)
2. Start the dev server:
   - Run the start or dev script from maps/package.json. Common commands:
     ```
     npm run start
     ```
     or
     ```
     npm run dev
     ```
3. Open the app:
   - Visit the served HTML (usually `http://localhost:<port>`). The map container is defined in [maps/index.html](maps/index.html) as `<div id="map"></div>` and styled by [maps/styles.css](maps/styles.css).

Google Maps API key
-------------------
- Add a valid Google Maps JavaScript API key in [maps/index.html](maps/index.html).
- Ensure the API key has access to the Maps JavaScript API in the Google Cloud Console and set appropriate restrictions (HTTP referrers or IPs).

Development tips & known minor issues
------------------------------------
- The project appears to use a bundler (Parcel) indicated by `.parcel-cache/` in `maps/`. Use the dev script in [maps/package.json](maps/package.json) to run/reserve correct CLI flags.
- Some faker usage in [`User`](maps/src/User.ts) and [`Company`](maps/src/Company.ts) is commented/placeholder. If you want realistic random data, enable `faker` usage and ensure `@faker-js/faker` is installed (check [maps/package.json](maps/package.json)).
- TypeScript DOM/Google types:
  - If `CustomMap` references `google.maps`, ensure `@types/google.maps` or proper TS libs are configured in tsconfig to avoid compiler errors.

Project structure (relevant files)
---------------------------------
- maps/
  - [maps/index.html](maps/index.html)
  - [maps/styles.css](maps/styles.css)
  - [maps/package.json](maps/package.json)
  - [maps/src/index.ts](maps/src/index.ts)
  - [maps/src/CustomMap.ts](maps/src/CustomMap.ts)
  - [maps/src/User.ts](maps/src/User.ts)
  - [maps/src/Company.ts](maps/src/Company.ts)
  - .parcel-cache/ (bundler cache)
- features-learning/
  - [features-learning/arrays.ts](features-learning/arrays.ts)
  - [features-learning/classes.ts](features-learning/classes.ts)
  - [features-learning/interfaces.ts](features-learning/interfaces.ts)
  - [features-learning/tuples.ts](features-learning/tuples.ts)
  - [features-learning/types.ts](features-learning/types.ts)
  - annotations/
    - [features-learning/annotations/variables.ts](features-learning/annotations/variables.ts)
    - [features-learning/annotations/objects.ts](features-learning/annotations/objects.ts)
    - [features-learning/annotations/functions.ts](features-learning/annotations/functions.ts)
  - features/ (alternate copies)

License
-------
Project mentions MIT in earlier project documents — keep consistent and include an MIT license file if you publish.
