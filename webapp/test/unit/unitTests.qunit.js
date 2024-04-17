/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsp/order_to_delivery/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
