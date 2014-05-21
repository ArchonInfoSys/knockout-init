define(["knockout", "./knockout.init"], function(ko, init) {
	describe("Knockout Initialization Helper", function() {
		var data = {
			normalString: "testing",
			msStyleDate: "\/Date(1381928400000)\/",
			isoStyleDate: "2013-05-16T20:00:00",
			numberString: "050",
			number: 50
		};

		describe("when initializing new object", function() {
			var obj;

			beforeEach(function() {
				obj = {};
				init(obj, data);
			});

			it("should create observables for each property without molesting values", function() {
				for (var prop in data) {
					var actual = obj[prop];

					expect(ko.isObservable(actual)).toBe(true);
					expect(actual()).toEqual(data[prop]);
				}
			});
		});

		describe("when initializing new object while specifying date fields", function() {
			var obj;

			beforeEach(function() {
				obj = {};
				init(obj, data, {
					dates: ["msStyleDate", "isoStyleDate"]
				});
			});

			it("should coax MS-style date values to moment object", function() {
				expect(obj.msStyleDate.usFormat()).toEqual("10/16/2013");
				expect(obj.msStyleDate.localTime()).toEqual("8:00 am");
			});

			it("should coax ISO 8601 date values to moment object", function() {
				expect(obj.isoStyleDate.usFormat()).toEqual("05/16/2013");
				expect(obj.isoStyleDate.localTime()).toEqual("8:00 pm");
			});
		});

		describe("when initializing new object while specifying integer fields", function() {
			var obj;

			beforeEach(function() {
				obj = {};
				init(obj, data, {
					integers: ["numberString", "number"]
				});
			});

			it("should coax string values to integers", function() {
				expect(obj.numberString()).toEqual(50);
			});

			it("should leave integer values as integers", function() {
				expect(obj.number()).toEqual(50);
			});
		});

		describe("when initializing an existing object with existing observables", function() {
			var obj, obs;

			beforeEach(function() {
				obs = ko.observable("existing_name");
				obj = {
					name: obs
				};

				init(obj, {
					name: "new_name"
				});
			});

			it("should update name value to new name", function() {
				expect(obj.name()).toEqual("new_name");
			});

			it("should use existing observable and not replace it with a new one", function() {
				expect(obj.name).toEqual(obs);
			});
		});
	});
});