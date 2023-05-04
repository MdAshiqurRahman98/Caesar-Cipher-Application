function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var ciphertext = "";
    for (var i = 0; i < plaintext.length; i++) {
      var charCode = plaintext.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126) {
        // Printable ASCII characters
        ciphertext += String.fromCharCode(((charCode - 32 + shift) % 95) + 32);
      } else {
        // Non-printable ASCII characters
        ciphertext += plaintext.charAt(i);
      }
    }
    document.getElementById("ciphertext").value = ciphertext;
  }
  
  function decrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var ciphertext = "";
    for (var i = 0; i < plaintext.length; i++) {
      var charCode = plaintext.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126) {
        // Printable ASCII characters
        ciphertext += String.fromCharCode(((charCode - 32 - shift + 95) % 95) + 32);
      } else {
        // Non-printable ASCII characters
        ciphertext += plaintext.charAt(i);
      }
    }
    document.getElementById("ciphertext").value = ciphertext;
  }