# KTONAL homemade website

## Installation
You only need 3 command lines 
```bash
git clone https://github.com/k-tonal/website.git
cd website
npm install
```

## Run dev server
once you are in `website/` run 
```bash
npm start
```

## Source code

1. For changing the behaviour and/or content of the page, edit `src/App.jsx` 
2. For changing the styling of the page, edit `src/App.scss`
3. For adding images, first paste them into `public/` then link to them with a
```
<img src={window.location.origin + "/my-image.png"}/>
``` 
4. The list of displayed youtube/soundcloud links is in `src/music-links.js` 
