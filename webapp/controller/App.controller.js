sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        return Controller.extend("sap.training.exc.controller.App", {
            // onSayHello: function () {
            //     MessageBox.information("Hello World");
            // }

            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
              }
        }

        );
    }
);