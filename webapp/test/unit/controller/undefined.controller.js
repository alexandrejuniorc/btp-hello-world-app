/*global QUnit*/

sap.ui.define([
	"sapbtp/helloworldui5/controller/.controller"
], function (Controller) {
	"use strict";

	QUnit.module(" Controller");

	QUnit.test("I should test the  controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
