/*
 * Musical Input Chairs randomly switches two input values on a page
 * any time an input element is clicked on
 */
window.onload = function() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function() {
      var n1 = inputs[Math.floor(Math.random() * inputs.length)];
      var n2 = n1;
      while (n1 == n2) {
        n2 = inputs[Math.floor(Math.random() * inputs.length)];
      }
      var swap = n2.value;
      n2.value = n1.value;
      n1.value = swap;
    }, false);
  }
}
