const data = {
  ent1: 0,
  ent2: 0,
  sai: 0,
  porta: 'AND',
};

let linha = 1;

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  document.getElementById('portaSelect').options[0].selected = 'selected';
}

function operacao(porta) {
  switch (porta) {
    case 'AND':
      return (a, b) => a && b;
    case 'OR':
      return (a, b) => a || b;
    case 'NAND':
      return (a, b) => !(a && b);
    case 'NOR':
      return (a, b) => !(a || b);
    case 'XOR':
      return (a, b) => (!a && b) || (a && !b);
    default:
      return undefined;
  }
}

function notacao(porta) {
  switch (porta) {
    case 'AND':
      return { unicode: '&#8226;', overLine: 'none' };
    case 'OR':
      return { unicode: '+', overLine: 'none' };
    case 'NAND':
      return { unicode: '&#8226;', overLine: 'overline' };
    case 'NOR':
      return { unicode: '+', overLine: 'overline' };
    case 'XOR':
      return { unicode: '&#8853;', overLine: 'none' };
    default:
      return undefined;
  }
}

function processaNotacao(porta) {
  const not = notacao(porta);
  document.getElementById('notation').style.textDecoration = not.overLine;
  document.getElementById('operatorNotation').innerHTML = not.unicode;
}

function processaTabela(porta) {
  const tabela = document.getElementById('tabela');
  tabela.rows[1].cells[2].innerText = operacao(porta)(0, 0) ? 1 : 0;
  tabela.rows[2].cells[2].innerText = operacao(porta)(0, 1) ? 1 : 0;
  tabela.rows[3].cells[2].innerText = operacao(porta)(1, 0) ? 1 : 0;
  tabela.rows[4].cells[2].innerText = operacao(porta)(1, 1) ? 1 : 0;
}

function toggleSelectedRowClass() {
  const classe = data.sai ? 'rowTruthy' : 'rowFalsy';
  document.getElementById(`linha${linha}`).classList.remove('rowTruthy');
  document.getElementById(`linha${linha}`).classList.remove('rowFalsy');
  if (data.ent1 && data.ent2) {
    document.getElementById('linha4').classList.add(classe);
    linha = 4;
  }
  if (data.ent1 && !data.ent2) {
    document.getElementById('linha3').classList.add(classe);
    linha = 3;
  }
  if (!data.ent1 && data.ent2) {
    document.getElementById('linha2').classList.add(classe);
    linha = 2;
  }
  if (!data.ent1 && !data.ent2) {
    document.getElementById('linha1').classList.add(classe);
    linha = 1;
  }
}

// eslint-disable-next-line no-unused-vars
function onLoad() {
  toggleSelectedRowClass();
  processaTabela('AND');
  const sel = document.getElementById('portaSelect');
  sel.options[sel.selectedIndex].value = 'AND';
}

function toggleSaidaClass(porta) {
  data.sai = operacao(porta)(data.ent1, data.ent2);
  if (data.sai) {
    document.getElementById('saida').classList.remove('entradaOff');
    document.getElementById('saida').classList.add('entradaOn');
    document.getElementById('saida').innerText = '1';
  } else {
    document.getElementById('saida').classList.remove('entradaOn');
    document.getElementById('saida').classList.add('entradaOff');
    document.getElementById('saida').innerText = '0';
  }
}

// eslint-disable-next-line no-unused-vars
function handleSelectChange() {
  const sel = document.getElementById('portaSelect');
  const porta = sel.options[sel.selectedIndex].value;
  window.document.getElementById('porta').src = `./imagens/Porta${porta}.png`;
  toggleSaidaClass(porta, data.ent1, data.ent2);
  processaTabela(porta);
  processaNotacao(porta);
}

function toggleEntradaClass(e) {
  if (Number(e.value)) {
    e.classList.remove('entradaOn');
    e.classList.add('entradaOff');
  } else {
    e.classList.remove('entradaOff');
    e.classList.add('entradaOn');
  }
  e.value = e.value === '1' ? '0' : '1';
  e.innerText = e.value;
}

// eslint-disable-next-line no-unused-vars
function handleInput(e) {
  const sel = document.getElementById('portaSelect');
  const porta = sel.options[sel.selectedIndex].value;
  toggleEntradaClass(e);
  data.ent1 = !!Number(document.getElementById('entrada1').value);
  data.ent2 = !!Number(document.getElementById('entrada2').value);
  toggleSaidaClass(porta);
  toggleSelectedRowClass();
}
