sap.ui.define([], () => {
    "use strict";
    return {
        tileValueColor: function (value) {
            if (value <= 30) {
                return "Critical";
            } else if (value > 30 && value <= 60) {
                return "Neutral";
            } else {
                return "Good";
            }
        },
        formatJSONDate: function (date) {
			var oDate = new Date(Date.parse(date));
			return oDate.toLocaleDateString();
		}
    }
});