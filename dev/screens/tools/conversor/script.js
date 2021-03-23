function converterDePara(strNum, baseEntrada, baseResultado) {
  const num = parseInt(strNum, baseEntrada);
  if (num.toString(baseResultado) === 'NaN') return '';
  return num.toString(baseResultado);
}

// eslint-disable-next-line no-unused-vars
function handleChange(elemento) {
  const ent = document.getElementById('input').value;
  const baseEnt = document.getElementById('inputBase').value || 10;
  const baseX = document.getElementById('baseX').value || 10;

  if ((baseEnt > 36 || baseEnt < 2 || baseEnt === '')
    || (baseX > 36 || baseX < 2 || baseX === '')) {
    document.getElementById('alert2').innerText = 'A base deve ser um inteiro entre 2 e 36';
    return;
  }
  document.getElementById('alert2').innerText = '';

  if (!!(converterDePara(ent.slice(-1), baseEnt, '2')) || ent === '') {
    document.getElementById('alert1').innerText = '';
    document.getElementById('base2').value = converterDePara(ent, baseEnt, '2');
    document.getElementById('base8').value = converterDePara(ent, baseEnt, '8');
    document.getElementById('base10').value = converterDePara(ent, baseEnt, '10');
    document.getElementById('base16').value = converterDePara(ent, baseEnt, '16');
    document.getElementById('numBaseX').value = converterDePara(ent, baseEnt, baseX);
  } else if (elemento.classList[0] === 'inputBase') {
    document.getElementById('alert1').innerText = 'Entrada inválida';
    document.getElementById('base2').value = '';
    document.getElementById('base8').value = '';
    document.getElementById('base10').value = '';
    document.getElementById('base16').value = '';
    document.getElementById('numBaseX').value = '';
  } else {
    document.getElementById('input').value = ent.slice(0, -1);
  }
}
