'use strict';
// List Model


var List = (function() {
    var list = function List(title){
      this.title = title;
      this.id = List.all.length;
      this.tasks = [];
      List.all.push(this);
    }
    return list;
  }());

List.all = []

List.find = function(id){
      return $.grep(List.all, function(list) {
        return list.id == id
      })[0];    
    }

List.findBy = function(attrb) {
   var key = Object.keys(attrb)[0];
   var value = attrb[key];
   return $.grep(List.all, function(list){
     return list[key] == value;
   });
 }

 List.prototype.listEl = function() {
  // '<div class="list"><h2><button class="destroy-list">x</button> Jon\'s List</h2><ul id="list-0" data-id="0"></ul></div>'
  var begin = '<div class="list"><h2><button class="destroy-list">x</button> ';
  var title = this.title;
  var ulTag = '</h2><ul id="list-';
  var id = this.id;
  var dataTag = '" data-id="';
  var ending = '"></ul></div>';

  return begin + title + ulTag + id + dataTag + id + ending;

 }

 List.prototype.optionEl = function() {
  // '<option value="0">Jon\'s List</option>'
  var begin = '<option value="';
  var id = this.id;
  var middle = '">'
  var title = this.title;
  var ending = '</option>';
  return begin + id + middle + title + ending;
 }

 List.prototype.build = function() {
  var htmlList = this.listEl();
  var htmlOption = this.optionEl();

  var selectorList = "#lists";
  var selectorOption =  '#select_list';
  // debugger;

  $(selectorList).append(htmlList);  
  $(selectorOption).append(htmlOption);
 }



// #lists > div:nth-child(1) > h2

// var List = {
//   all: [],
//   new: (function() {
//     var counter = 0
//     var list = function List(title){
//       this.title = title;
//       this.id = ++counter
//       this.tasks = []
//       List.all.push(this)
//     }
//     return list
//   }()),
//   find: function find(id){
//       return $.grep(List.all, function(list) {
//         return list.id == id
//       });    
//     }
// }

