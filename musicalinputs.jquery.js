/*
 * Musical Input Chairs randomly switches two input values on a page
 * any time an input element is clicked on
 */
$(function() {
  $('input').click(function() {
    var inputs = $('input');
    var n1 = inputs[Math.floor(Math.random() * inputs.length)];
    var n2 = n1;
    while (n2 == n1) {
      n2 = inputs[Math.floor(Math.random() * inputs.length)];
    }
    var swap = n2.value;
    n2.value = n1.value;
    n1.value = swap;
  });
});
