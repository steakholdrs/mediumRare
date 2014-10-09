Template.huddleBoard.helpers({
	color: function () {
		return this.color;
	},
	metricsGrid1: function () {
    	return Metrics.find({grid: "grid1"});
  	},
  	metricsGrid2: function () {
    	return Metrics.find({grid: "grid2"});
  	},
  	metricsGrid3: function () {
    	return Metrics.find({grid: "grid3"});
  	},
  	metricsGrid4: function () {
    	return Metrics.find({grid: "grid4"});
  	}
});