var ko = require("knockout");
require("knockout.moment");
require("knockout.money");
require("knockout.integer");

function init(dest, src, options) {
	options = options || {};
	options.dates = options.dates || [];
	options.integers = options.integers || [];
	options.moneys = options.moneys || [];
	options.ignore = options.ignore || [];

	for (var prop in src) {
		if (src.hasOwnProperty(prop) && options.ignore.indexOf(prop) < 0) {
			var observable = dest.hasOwnProperty(prop) ? dest[prop] : ko.observable();

			if (options.dates.indexOf(prop) !== -1) {
				observable = observable.extend({
					moment: true
				});
			} else if (options.integers.indexOf(prop) !== -1) {
				observable = observable.extend({
					integer: true
				});
			} else if (options.moneys.indexOf(prop) !== -1) {
				observable = observable.extend({
					money: true
				});
			}

			observable(src[prop]);
			dest[prop] = observable;
		}
	}

	return dest;
}

module.exports = init;