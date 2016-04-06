class List < ActiveRecord::Base
  has_many :tasks

  def optionEl
    @lists = List.all  
    @lists.map do |list|
      "<option value='#{list.id}'>#{list.title}</option>"
    end
  end

end

 # List.prototype.optionEl = function() {
 #  // '<option value="0">Jon\'s List</option>'
 #  var begin = '<option value="';
 #  var id = this.id;
 #  var middle = '">'
 #  var title = this.title;
 #  var ending = '</option>';
 #  return begin + id + middle + title + ending;