Router.configure({
  layoutTemplate: 'layout',
});


Router.map(function() {

/* huddle board views */
    this.route('landing', {
        path: '/',

    });

	this.route('canvas', {
		path: '/canvas',
		
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

    this.route('calendar', {
        path: '/calendar',
    });
});
