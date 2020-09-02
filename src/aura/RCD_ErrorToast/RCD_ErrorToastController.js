({
    showNoDivisionsFoundToast: function(component,event,helper) {
        var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                title: "Warning",
                message: "No divisions found for such criteria.",
                type: "warning"
            });
        toastEvent.fire();
    },
        showNoCarsFoundToast: function(component,event,helper) {
            var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title: "Excuse us",
                    message: "We don't have a car for such criteria.",
                    type: "warning"
                });
            toastEvent.fire();
        }
})