# Knockout Init Component

> This is a simple knockout component that will automatically create observables from arbitrary json.

It uses [knockout.moment](https://github.com/ArchonInfoSys/knockout-moment), [knockout.money](https://github.com/ArchonInfoSys/knockout-money), and [knockout.integer](https://github.com/ArchonInfoSys/knockout-integer) to automatically extend the observables with the specified names.

##Install with [Bower](http://bower.io/)

```
bower install knockout-init
```

Then add `knockout.init.js` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to a button or a link.

```js
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

##How to Run Tests

Clone this repository and run:

```
npm install
bower install
grunt
```

You will need to have `grunt-cli` installed globally if you don't already have it. Install it if you don't:

```
npm install grunt-cli -g
```