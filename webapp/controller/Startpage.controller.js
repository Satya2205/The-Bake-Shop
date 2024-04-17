sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";
        var oView, ownerComponent;
        return Controller.extend("com.sp.ordertodelivery.controller.Startpage", {
            formatter: formatter,

            onInit: function () {
                oView = this.getView();
                ownerComponent = this.getOwnerComponent();
                this.setYear();
            },
            setYear: function () {
                let date = new Date();
                let year = date.getFullYear();
                ownerComponent.getModel("tile").setProperty("/year", year);

            }
        });
    });
