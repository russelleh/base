var base_write = function(base, bits) {
  var element = document.getElementById("base-" + base);
  element.innerHTML = bits.toString(base).toUpperCase();

  var target = Math.ceil(32 / Math.log2(base));
  while (element.innerHTML.length < target) {
    element.innerHTML = '0' + element.innerHTML;
  }
};

var write = function(bits) {
  base_write(10, bits);

  base_write(16, bits);
  base_write(4,  bits);
  base_write(2,  bits);
};

document.addEventListener('DOMContentLoaded', function() {
  var bits = 0;
  write(bits);
  setInterval(function() {
    bits += 1;
    bits %= Math.pow(2, 32);
    write(bits);
  }, 1000);
}, false);
