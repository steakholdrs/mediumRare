Router.configure({
  layoutTemplate: 'layout',
});


Router.map(function() {

/* huddle board views */
	this.route('canvas', {
		path: '/',
		
	});
	
	this.route('huddleBoard', {
		path: '/huddleBoard',
	});


/* metric views */

	this.route('announcements', {
		path: '/announcements',
		
	});

	this.route('pulse', {
		path: '/pulse',
	});

    this.route('capacity', {
        path: '/capacity',
    });

});
