/*global QUnit*/

sap.ui.define([
	"comsp/order_to_delivery/controller/Startpage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Startpage Controller");

	QUnit.test("I should test the Startpage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
