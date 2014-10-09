Router.configure({
  layoutTemplate: 'layout',
});


Router.map(function() {
	this.route('canvas', {
		path: '/',
		
	});

	this.route('pulse', {
		path: '/pulse',
	});
	
});
