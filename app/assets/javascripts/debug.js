onButtonClick = function() {
  a = 1;

  b = 1;
  c = a + b;
  alert("it works in js!")
};

$(function() {
    $("#button").click(onButtonClick);
});
