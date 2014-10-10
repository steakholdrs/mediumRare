Session.setDefault('movedElementId', null);
Session.setDefault('mouseMoveElementId', 'Hello Dropzones!');
Session.setDefault('mouseMoveX', 0);
Session.setDefault('mouseMoveY', 0);

Template.canvas.rendered = function(){
  $(document).mousemove(function (e) {
     Session.set('movedElementId', e.target.id);
     Session.set('mouseMoveX', e.clientX);
     Session.set('mouseMoveY', e.clientY);
     //Session.set('mouseMoveElementId', document.elementFromPoint(e.clientX,e.clientY));
  });

  $('.dragDropBlock').draggable({
    stop: function(event, ui){
      //console.log(document.querySelectorAll( ":hover" ));
      console.log(document.elementFromPoint(Session.get('mouseMoveX'),Session.get('mouseMoveY')).id)
    },
    grid: [ 10, 10 ],
    opacity: 0.35
  });
  $('.dragdropzone').droppable({
    accept: ".dragDropBlock",
    drop: function(){
      $('#' + Session.get('movedElementId')).appendTo("#" + this.id);
      $('#' + Session.get('movedElementId')).css('top', '0');
      $('#' + Session.get('movedElementId')).css('left', '0');
      
      /* change this later, just to start out to test board saving */
      var tblColor = "";
      var metric = "";
      if (Session.get('movedElementId') == "redPanel") {tblColor="red"; metric="/pulse"}
      else if (Session.get('movedElementId') == "bluePanel") {tblColor="blue"; metric="/capacity"}
      else if (Session.get('movedElementId') == "yellowPanel") {tblColor="yellow"; metric="/announcements"}
      else {tblColor="green"; metric="/calendar"}
      Metrics.insert({grid: this.id, color: tblColor, url: metric });
      $('#' + Session.get('movedElementId')).css('top', '0');
      $('#' + Session.get('movedElementId')).css('left', '0');

      /* --------------------- */

      Session.clear('movedElementId');
    }
  });
}

Template.canvas.getMouseMoveId = function(){
  if(Session.get('mouseMoveElementId')){
    return Session.get('mouseMoveElementId');
  }else{
    return "...";
  }
}

