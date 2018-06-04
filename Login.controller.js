sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.wt.Login", {

      onInit : function () {
         // set data model on view
         var oData = {
            login : {
               user : "Default"  ,
               password : "**********"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

        onLogin: function () {
            // show a native JavaScript alert
            alert("Logged In");
        }
    });
});