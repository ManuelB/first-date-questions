sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("first-date-questions.view.App", {
	   save: function(oEvent) {
		   var value = this.byId("input").getValue();
		   var model = this.getOwnerComponent().getModel();
		   model.create("/Questions", {"Question": value});
	   } 
   });
});