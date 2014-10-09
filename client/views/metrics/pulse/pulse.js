Template.pulse.helpers({
  getHappy: function () {
    return Pulse.find({status: "fa fa-smile-o fa-5x"});
  },

  getNormal: function () {
    return Pulse.find({status: "fa fa-meh-o fa-5x"});
  },

  getSad: function() {
    return Pulse.find({status: "fa fa-frown-o fa-5x"});
  }

});

Template.pulse.events({
	'click .feels' : function(e, t) {
		alert(this.pulse);
	}
});