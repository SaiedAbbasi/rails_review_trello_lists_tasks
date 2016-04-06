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
    var listTitle 
    listTitle = that.$listTitleInput.val();
    that.$addTaskForm.show();
    $.ajax({
      url: '/lists',
      type: 'POST',
      data: {title: listTitle},
      success: function(data){
        for(var i = 0; i < data.all_lists.length; i++) {
          $('#select_list').append(data.all_lists[i])
        }
      }
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
       
    