function encrypt(text) {

  if (/[^a-z\s]/g.test(text)) {
    alert("Error: El texto de entrada solo debe contener minúsculas sin tildes ni caracteres especiales.");
    return;
  }

  const longitud = text.length;
  let resultado = "";

  for (let i = 0; i < longitud; i++) {
    let letra = text[i];
    switch (letra) {
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "a":
        letra = "ai";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "ufat";
        break;
    }
    resultado += letra;
  }
  return resultado;

  /*PRIMERA IMPLEMENTACION*/
  /* if(/[^a-z\s]/g.test(text)) {
   alert("Error: El texto de entrada solo debe contener minúsculas sin tildes ni caracteres especiales.");   
   return;
  }
  text = text.replace("e", "enter");
  text = text.replace("i", "imes");
  text = text.replace("a", "ai");
  text = text.replace("o", "ober");
  text = text.replace("u", "ufat");
  return text; */
}

function desencrypt(text) {
  if (/[^a-z\s]/g.test(text)) {
    alert("Error: El texto de entrada solo debe contener minúsculas sin tildes ni caracteres especiales.");
    return;
  }

  const longitud = text.length;
  let resultado = "";

  for (let i = 0; i < longitud; i++) {
    let letra = text[i];
    switch (letra) {
      case "e":
        if (text.substring(i, i + 5) === "enter") {
          letra = "e";
          i += 4;
        }
        break;
      case "i":
        if (text.substring(i, i + 4) === "imes") {
          letra = "i";
          i += 3;
        }
        break;
      case "a":
        if (text.substring(i, i + 2) === "ai") {
          letra = "a";
          i += 1;
        }
        break;
      case "o":
        if (text.substring(i, i + 4) === "ober") {
          letra = "o";
          i += 3;
        }
        break;
      case "u":
        if (text.substring(i, i + 4) === "ufat") {
          letra = "u";
          i += 3;
        }
        break;
    }
    resultado += letra;
  }

  return resultado;

  /*PRIMERA IMPLEMENTACION */
  /* text = text.replace("enter", "e");
  text = text.replace("imes", "i");
  text = text.replace("ai", "a");
  text = text.replace("ober", "o");
  text = text.replace("ufat", "u");
  return text; */
}



function encryptText() {
  var input = document.getElementById("input").value;
  var output = encrypt(input);
  document.getElementById("output").textContent = output;
}

function desencryptText() {
  var input = document.getElementById("input").value;
  var output = desencrypt(input);
  document.getElementById("output").textContent = output;
}

const textToCopy = document.querySelector('#output');
const copyButton = document.querySelector('#copy-button');

copyButton.addEventListener('click', copyText);

function copyText() {
  textToCopy.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}