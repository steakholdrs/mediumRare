Template.pulse.helpers({
  getHappy: function () {
    return Pulse.find({emotion: "fa fa-smile-o fa-5x"});
  },

  getNormal: function () {
    return Pulse.find({emotion: "fa fa-meh-o fa-5x"});
  },

  getSad: function() {
    return Pulse.find({emotion: "fa fa-frown-o fa-5x"});
  }

});

Template.pulse.events({
	'click .feels' : function(e,t) {
		//alert(this.emotion);
	}
});

Template.pulse.events({
	'click a' : function(e) {
		// console.log($(e.target));
		// console.log($(e.target).__proto__);
		var tar = e.target.className;
		// $('.feels').fadeOut('slow');
		Pulse.update(this._id, {$set: {emotion: tar}});
	}
});