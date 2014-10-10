Template.capacity.helpers({
    getCapacity: function() {
        return Capacity.find();
    }
});

Template.captable.helpers({
	color: function() {
		if (this.actual > this.planned) {
			return "#EB3333";
		} else {
			return "#e9e9e9";
		}
	}
});

/**
 * Created by kevin on 10/9/14.
 */

