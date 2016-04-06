'use strict';
// Tasks Controller

function TasksController(){
 this.$addTaskForm = $('#add_task');
 this.$taskDescriptionInput = $('#task_description');
 this.$selectListMenu = $('#select_list');
 this.$taskPriorityInput = $('#task_priority');
 this.$wrapper = $('#wrapper');
}

TasksController.prototype.init = function(){
  var that = this;
  this.$addTaskForm.submit(function(event){
    event.preventDefault();
    var listIndex = that.$selectListMenu.val();
    // var list = 
    // var myTask = new Task(that.$taskDescriptionInput.val(), that.$taskPriorityInput.val(), list);
    // myTask.build();
    // that.destroy();
    var taskDescription
    var taskPriority
    var taskListId
    taskDescription = that.$taskDescriptionInput.val();
    taskPriority = that.$taskPriorityInput.val();
    taskListId = $('select option:selected').val();
    $.ajax({
      url: '/tasks',
      type: 'POST',
      data: {description: taskDescription, priority: taskPriority, task_list_id: taskListId},
      success: function(data){
        debugger;
      }
    })
  })    
};

TasksController.prototype.destroy = function(){
  $('body').on('click', '.destroy-task', function(){
    //loop through per task item added before creation + self.  Avoid loop by checking for undefined in the nonexistant html
    if ($(this).parent().parent()[0] !== undefined) {
      var ul = $(this).parent().parent();
      var listIndex = $(ul).data("id");
      // var list = List.all[listIndex];
      var taskIndex = $(this).parent().data("id")
      list.tasks[taskIndex] = null;
      $(this).parent().remove();
    }
  });
}