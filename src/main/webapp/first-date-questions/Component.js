sap.ui.define([ "sap/ui/core/UIComponent", "sap/ui/model/odata/v2/ODataModel"],
function(UIComponent, ODataModel) {
	"use strict";
	return UIComponent.extend("first-date-questions.Component", {

		metadata : {
			manifest: "json"
		},

		init : function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new ODataModel("Data.svc");
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			this.setModel(oModel);

		}
	});
});