/*
 * JavaScript Party Pack (JSPP)
  This javascript turns that frown upside down. Fun++!
 */
(function() {
  var tags = ['span', 'p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'a', 'td', 'pre', 'label'];
  for(var y = 0; y < tags.length; y++) {
    var party = document.getElementsByTagName(tags[y]);
    for(var x = 0; x < party.length; x++) {
      var html = party[x].innerHTML;
      party[x].innerHTML = '<marquee>'+html+'</marquee>';
    }
  }
  alert('GET READY TO PARTY');
})();
