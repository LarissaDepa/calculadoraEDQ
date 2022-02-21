/* eslint-disable no-undef */
botaoCalcular.addEventListener("click", calcularEDQ);

function calcularEDQ() {
  const intradividual = parseFloat(document.getElementById("cvi").value);
  const interindividual = parseFloat(document.getElementById("cvg").value);

  if (intradividual !== "" && interindividual !== "") {
    const valorEAmin = (0.75 * intradividual).toFixed(2);
    document.querySelector("#minimoEA").innerHTML = valorEAmin;

    const valorEAdesej = (0.5 * intradividual).toFixed(2);
    document.querySelector("#desejavelEA").innerHTML = valorEAdesej;

    const valorEAotimo = (0.25 * intradividual).toFixed(2);
    document.querySelector("#otimoEA").innerHTML = valorEAotimo;

    /* ERRO SISTEMATICO */

    const cviAoquadrado = intradividual ** 2;
    const cvgAoquadrado = interindividual ** 2;

    const valorESmin = (
      0.375 *
      (cviAoquadrado + cvgAoquadrado) ** (1 / 2)
    ).toFixed(2);
    document.querySelector("#minimoES").innerHTML = valorESmin;

    const valorESdesej = (
      0.25 *
      (cviAoquadrado + cvgAoquadrado) ** (1 / 2)
    ).toFixed(2);
    document.querySelector("#desejavelES").innerHTML = valorESdesej;

    const valorESotimo = (
      0.125 *
      (cviAoquadrado + cvgAoquadrado) ** (1 / 2)
    ).toFixed(2);
    document.querySelector("#otimoES").innerHTML = valorESotimo;

    /* ERRO TOTAL */
    const valorETotimo = (
      1.65 * Number(valorEAotimo) +
      Number(valorESotimo)
    ).toFixed(2);
    document.querySelector("#otimoET").innerHTML = valorETotimo;

    const valorETdesej = (
      1.65 * Number(valorEAdesej) +
      Number(valorESdesej)
    ).toFixed(2);
    document.querySelector("#desejavelET").innerHTML = valorETdesej;

    const valorETmin = (1.65 * Number(valorEAmin) + Number(valorESmin)).toFixed(
      2
    );
    document.querySelector("#minimoET").innerHTML = valorETmin;
  } else {
    alert("Preencha os campos vazios");
  }
}
