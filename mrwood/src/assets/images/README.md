# Image folders

Drop the real MRWOOD photos here using the exact paths listed in `src/data/*.js`.
No code change is needed — `index.js` picks them up automatically.

hero/hero-door.jpg            full-screen home hero (landscape, 1920px+)
hero/workshop-wide.jpg        wide workshop band on the home page
about/cover.jpg               wide banner on the About page
about/workshop.jpg            portrait photo beside the About text
about/showroom.jpg            wide photo at the bottom of Contact

doors/modern/mr-001.jpg …     one file per door, named after its code
doors/classic/mr-101.jpg …
doors/luxury/mr-201.jpg …
doors/interior/mr-301.jpg …

projects/<slug>/cover.jpg     project cover
projects/<slug>/entrance.jpg  gallery photos (names are in src/data/projects.js)

Suggested sizes: doors 1200×1600 portrait, projects/hero 2000px wide.
Export as .webp or .jpg at ~80% quality — .png and .avif also work.
