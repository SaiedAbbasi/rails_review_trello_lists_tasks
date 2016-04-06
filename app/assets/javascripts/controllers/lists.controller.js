'use strict';
// Lists Controller

function ListsController() {
  this.$addListForm = $('#add_list');
  this.$listTitleInput = $('#list_title');
  this.$selectListMenu = $('#select_list');
  this.$addTaskForm = $('#add_task');
  this.$wrapper = $('#wrapper');
}

ListsController.prototype.init = function(){
  this.$addTaskForm.css('display','none');
  var that = this           
  $('#add_list').submit(function(event){
    event.preventDefault();
    //that.$addTaskForm.show();
   
    $.ajax({
      url: '/lists',
      type: 'POST',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', '#{form_authenticity_token}')}
      // ,
      // success: function(){
      //   // to be added later
      // }
    })
    // var myList = new List(that.$listTitleInput.val());
    // myList.build();
    // that.destroy();
  })    
};

ListsController.prototype.destroy = function(){
  $('#lists > div > h2 > button').click( function(){
    var div = $(this).parent().parent();
    var index = $(div.children()[1]).data("id");
    List.all[index] = null;
    $(this).parent().parent().remove();

    $($('#select_list').children()[index]).remove();
  });
}
       
    