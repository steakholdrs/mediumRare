/**
 * Created by kevin on 10/9/14.
 */
Template.header.events({
    'click #viewHuddleLink' : function(e) {
     console.log(e);
        $("#createHuddleLink").removeClass("active");
        $('#viewHuddleLink').addClass("active");

    }

});

Template.header.events({
    'click #createHuddleLink' : function(e) {
        console.log(e);
        $("#viewHuddleLink").removeClass("active");
        $('#createHuddleLink').addClass("active");

    }

});

Template.header.helpers({
    getLinks: function () {
        return Metrics.find();
    }
});