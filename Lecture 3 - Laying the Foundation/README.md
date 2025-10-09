## How to build server without using npx

We can add "start" in the scripts section in package.json file

and also we can build dev using "build" in the scripts section

"scripts": {
"start" : "parcel index.html",
"build" : "parcel build index.html",
"test": "jest"
}

## To run this we have to type in the terminal :

as to start the server we use : "npm run start" or we can do "npm start"✅

but for building the dev we use : "npm run build" ❌{here we cannot do npm build}
