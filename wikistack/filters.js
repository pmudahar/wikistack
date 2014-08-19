// Setting custom filters on Swig
 
module.exports = function(swig) {
  var page_link = function (doc) {
    var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/wiki/"+doc.url_name+"'>"+link_name+"</a>";
  };

  var word_count = function(str){
    if(str.length > 200) {
      var newString = str.slice(0,200) + "  . . .";
      return newString;
    }
    return str;
  };

  page_link.safe = true;
  word_count.safe = true;

  swig.setFilter('page_link', page_link);
  swig.setFilter('word_count', word_count);
};