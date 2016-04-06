'use strict';
// Task Model


var Task = (function() {
    var task = function (description, priority, list) {
    this.description = description;
    this.priority = priority;
    this.list = list;
    this.id = this.list.tasks.length;
    this.list.tasks.push(this);
    }
    return task;
  }());


Task.prototype.liEl = function() {
  return '<li data-id="' + this.id + '"><button class="destroy-task">x</button> ' + this.description + ', ' + this.priority + '</li>'
}

Task.prototype.build = function() {
  var html = this.liEl();
  var selector = '#list-' + this.list.id;
  $(selector).append(html);
}

