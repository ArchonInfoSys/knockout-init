# Knockout Init Component

> This is a simple knockout component which will automatically create observables from arbitrary json.

It uses [knockout.moment](https://github.com/civicsource/knockout.moment), [knockout.money](https://github.com/civicsource/knockout.money), and [knockout.integer](https://github.com/civicsource/knockout.integer) to automatically extend the observables with the specified names.

## Installation

```
npm install knockout-init
```

Then add `knockout.init.js` to your project.

## Usage

Include the script in your bundle, then:

```js
var koInit = require("knockout.init");

var dataFromServer = {
	createdOn: "May 15, 2014",
	expiresOn: "May 15, 2037",
	numberOfThings: "4700",
	price: "570000",
	otherThing: "hello world"
};

var myObj = {};
koInit(myObj, dataFromServer, {
	dates: ["createdOn", "expiresOn"],
	integers: ["numberOfThings"],
	moneys: ["price"]
});

console.log(myObj.createdOn.usFormat()); //05/15/2014
console.log(myObj.numberOfThings.formatted()); //4,700
console.log(myObj.price.formatted()); //$570,000.00
```

## How to Run Tests

Clone this repository and run:

```
npm install
npm run test
```

You will want to have `mocha` installed globally if you don't already have it. Install it if you don't:

```
npm install mocha -g
```