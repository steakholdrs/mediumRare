/**
 * Created by kevin on 10/9/14.
 */
Template.header.events({
    'click #huddleBoard' : function(e) {
     console.log(e);
        $("#canvas").removeClass("active");
        $("#announcements").removeClass("active");
        $("#pulse").removeClass("active");
        $("#capacity").removeClass("active");
        $("#calendar").removeClass("active");
        $('#huddleBoard').addClass("active");

    }

});


Template.header.events({
    'click #canvas' : function(e) {
        console.log(e);
        $("#huddleBoard").removeClass("active");
        $("#announcements").removeClass("active");
        $("#pulse").removeClass("active");
        $("#capacity").removeClass("active");
        $("#calendar").removeClass("active");
        $('#canvas').addClass("active");

    }
});

Template.header.events({
    'click #announcements' : function(e) {
        console.log(e);
        $("#huddleBoard").removeClass("active");
        $("#canvas").removeClass("active");
        $("#pulse").removeClass("active");
        $("#capacity").removeClass("active");
        $("#calendar").removeClass("active");
        $('#announcements').addClass("active");

    }
});

Template.header.events({
    'click #pulse' : function(e) {
        console.log(e);
        $("#huddleBoard").removeClass("active");
        $("#canvas").removeClass("active");
        $("#announcements").removeClass("active");
        $("#capacity").removeClass("active");
        $("#calendar").removeClass("active");
        $('#pulse').addClass("active");

    }
});

Template.header.events({
    'click #capacity' : function(e) {
        console.log(e);
        $("#huddleBoard").removeClass("active");
        $("#canvas").removeClass("active");
        $("#pulse").removeClass("active");
        $("#announcements").removeClass("active");
        $("#calendar").removeClass("active");
        $('#capacity').addClass("active");

    }
});

Template.header.events({
    'click #calendar' : function(e) {
        console.log(e);
        $("#huddleBoard").removeClass("active");
        $("#canvas").removeClass("active");
        $("#pulse").removeClass("active");
        $("#capacity").removeClass("active");
        $("#announcements").removeClass("active");
        $('#calendar').addClass("active");

    }
});

Template.header.helpers({
    getLinks: function () {
        return Metrics.find();
    }
});