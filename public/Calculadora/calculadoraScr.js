function toggleHelp(prop, text) {
  window.document.getElementById('popUpText').innerText = text;
  const display = prop;
  window.document.getElementsByName('pop').forEach((e) => {
    e.style.display = prop;
  });
}

const data = {
  input1: '0',
  input2: '0',
  base1: '10',
  base2: '10',
  baseRes: '10',
  operacao: '',
  res: '',
};

function handleOnLoad() {
  document.getElementById('input1').value = '';
  document.getElementById('input2').value = '';
  document.getElementById('base1').value = 10;
  document.getElementById('base2').value = 10;
  document.getElementById('baseRes').value = 10;
  document.getElementById('operacao').value = '+';
  document.getElementById('res').value = '';
}

const opera = (dados) => {
  let dec = 0;
  switch (dados.operacao) {
    case '+':
      dec = Number(parseInt(dados.input1, dados.base1))
            + Number(parseInt(dados.input2, dados.base2));
      return dec.toString(dados.baseRes);
    case '-':
      dec = Number(parseInt(dados.input1, dados.base1))
            - Number(parseInt(dados.input2, dados.base2));
      return dec.toString(dados.baseRes);
    case 'x':
      dec = Number(parseInt(dados.input1, dados.base1))
            * Number(parseInt(dados.input2, dados.base2));
      return dec.toString(dados.baseRes);
    default:
  }
};

function converterDePara2(strNum, baseEntrada) {
  const num = parseInt(strNum, baseEntrada);
  if (num.toString(2) === 'NaN') return '';
  return num.toString(2);
}

function trataNumInvalido(num, base) {
  if (converterDePara(ent.slice(-1), baseEnt, 10)) {

  } else {
    document.getElementById('input').value = ent.slice(0, -1);
  }
}

function validaBases() {
  for (i = 1; i < 3; i++) {
    const base = Number(data[`base${i}`]);
    if (base <= 1 || base >= 37) return false;
  } return true;
}

function handleChange(e) {
  const element = !e.id.startsWith('input') ? null : e.id;

  data.base1 = window.document.getElementById('base1').value || 10;
  data.base2 = window.document.getElementById('base2').value || 10;
  if (element) {
    const num = e.id.charAt(5);
    if (converterDePara2(document.getElementById(element).value.slice(-1), Number(data[`base${num}`]))) {
      data[element] = window.document.getElementById(element).value;
    } else if (document.getElementById(element).value === '') {
      data[element] = 0;
    } else {
      window.document.getElementById(element).value = data[element];
    }
  }
  data.baseRes = window.document.getElementById('baseRes').value || 10;
  const sel = document.getElementById('operacao');
  data.operacao = sel.options[sel.selectedIndex].value;
  if ((opera(data) === 'NaN' || !validaBases())) {
    data.res = 'Entrada inválida';
    window.document.getElementById('res').classList.add('wrong');
  } else {
    data.res = opera(data);
    window.document.getElementById('res').classList.remove('wrong');
  }
  window.document.getElementById('res').value = data.res || '';
}
