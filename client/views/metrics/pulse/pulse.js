Template.pulse.helpers({
  getHappy: function () {
    return Pulse.find({status: 1});
  },

  getNormal: function () {
    return Pulse.find({status: 2});
  },

  getSad: function() {
    return Pulse.find({status: 3});
  }

});

Template.pulse.events({
	'click .feels' : function(e, t) {
		alert(this.pulse);
	}
});