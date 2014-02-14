/*
 * Musical Input Chairs randomly switches two input values on a page
 * any time an input element is clicked on
 */
dojo.addOnLoad(function() {
  dojo.query("input").forEach(function(i) {
    dojo.connect(i, "onclick",  function(evt) {
      var arr = dojo.query("input");
      var n1 = arr[Math.floor(Math.random() * arr.length)];
      var n2 = n1;
      while(n2==n1) {
        n2 = arr[Math.floor(Math.random() * arr.length)];
      }
      var swap = n2.value;
      n2.value = n1.value;
      n1.value = swap;
    });
  });
});
