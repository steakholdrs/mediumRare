/**
 * Created by kevin on 10/10/14.
 */
Template.calendar.rendered = function() {
    this.$('.calendar').fullCalendar({
        // put your fullcalendar options and callbacks here
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2014-10-01'
            },
            {
                title: 'Long Event',
                start: '2014-09-07',
                end: '2014-10-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-10-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-10-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2014-10-11',
                end: '2014-09-13'
            },
            {
                title: 'Meeting',
                start: '2014-10-12T10:30:00',
                end: '2014-09-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2014-10-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2014-10-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2014-10-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2014-10-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2014-10-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-10-28'
            }
        ]
    });
}