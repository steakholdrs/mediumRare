Template.huddleBoard.helpers({
	color: function () {
		return this.color;
	},
	metrics: function () {
    	return Metrics.find();
  	}
});