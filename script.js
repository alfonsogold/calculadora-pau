function calcularNota() {

  let primero = parseFloat(document.getElementById("primero").value) || 0;
  let segundo = parseFloat(document.getElementById("segundo").value) || 0;

  let mates = parseFloat(document.getElementById("mates").value) || 0;
  let historia = parseFloat(document.getElementById("historia").value) || 0;
  let ingles = parseFloat(document.getElementById("ingles").value) || 0;
  let lengua = parseFloat(document.getElementById("lengua").value) || 0;

  let opt1 = parseFloat(document.getElementById("opt1").value) || 0;
  let opt2 = parseFloat(document.getElementById("opt2").value) || 0;

  let pond1 = parseFloat(document.getElementById("pond1").value);
  let pond2 = parseFloat(document.getElementById("pond2").value);

  let notaFinal =
    (primero * 0.3) +
    (segundo * 0.3) +
    (mates * 0.1) +
    (historia * 0.1) +
    (ingles * 0.1) +
    (lengua * 0.1) +
    (opt1 * pond1) +
    (opt2 * pond2);

  document.getElementById("resultado").innerText =
    "Tu nota final es: " + notaFinal.toFixed(2);
}
