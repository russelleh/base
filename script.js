const base_data = {
  "2":  "01".split(''),
  "16": "0123456789ABCDEF".split(''),
  "32": "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(''),
  "64": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(''),
};

var generate = function(bitlen) {
  var str = "";
  while (str.length < bitlen) {
    str += Math.floor(Math.random() * 2);
  }
  return str;
};

var base_encode = function(base, bits, bits_length) {
  var chunk_length = Math.ceil(Math.log(base) / Math.log(2));
  var out          = [];
  var overhead     = (2 ** chunk_length) - base;
  var buffer       = 0;

  while (bits.length > 0) {
    var chunk = bits.slice(0, chunk_length);
    var bits  = bits.slice(chunk_length, bits.length);

    var chunk_val = parseInt(chunk, 2);
    out.push(base_data[base][chunk_val]);
  }
  return out.join('');
};

var base_write = function(base, bits, bits_length) {
  var el = document.getElementById("base-" + base);
  el.innerHTML = base_encode(base, bits, bits_length);
  el.style["font-size"] = Math.log2(base) + "em";
}

var write = function() {
  var bitlen = 60;
  var bitstr = generate(bitlen);
  document.getElementById("base-2").innerHTML = bitstr;
  base_write(16, bitstr, bitlen);
  base_write(32, bitstr, bitlen);
  base_write(64, bitstr, bitlen);
}

document.addEventListener('DOMContentLoaded', function(){ 
  write();
  document.addEventListener("click", function(e) {
    write();
  }, false);
}, false);
