Template.pulse.helpers({
	getHappy: function () {
		return Pulse.find({status: 1});
	}
});