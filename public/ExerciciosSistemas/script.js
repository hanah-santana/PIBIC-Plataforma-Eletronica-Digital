const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
const questions = [
  {
    title: '1) (TBG-2006) O equivalente na base 10 do número binário 00100111 é:',
    type: 'default',
    items: ['38', '39', '36', '34', '37'],
    resp: 'b',
  },
  {
    title: '2) (TBG-2006) O equivalente binário do número 47 na base 10 é:',
    type: 'subj',
    resp: '101111',
  },
  {
    title: '3) Transforme para decimal os seguintes números binários:',
    type: 'itemsSubj',
    items: ['100110', '011110', '111011', '1010000'],
    resp: ['38', '30', '59', '80'],
  },
  {
    title: '4) Transforme para binário os seguintes números decimais:',
    type: 'itemsSubj',
    items: ['10', '102', '215', '404'],
    resp: ['1010', '1100110', '11010111', '110010100'],
  },
  {
    title: '5) Transforme para decimal os seguintes números octais:',
    type: 'itemsSubj',
    items: ['10', '100', '452', '777'],
    resp: ['8', '64', '298', '511'],
  },
  {
    title: '6) (SEPLAG/FUNED-2012) Ao convertermos o número hexadecimal C13 para binário teremos:',
    type: 'default',
    items: ['1101 0001 0011', '1100 0010 0011', '1100 0001 0100', '1100 0001 0011'],
    resp: 'd',
  },
  {
    title: '7) (ABIN-2004) julgue o item a seguir,'
        + ' relativo à conversão entre sistemas de numeração,'
        + ' considerando que o sistema de numeração é indicado em subscrito:',
    title_second: 'FD (HEXADECIMAL) = 253 (DECIMAL)',
    type: 'default',
    items: ['verdadeiro', 'falso'],
    resp: 'a',

  },
  {
    title: '8) (CASAN-2015) Em informática, é importante'
        + ' entender como um computador interpreta os dados'
        + ' por meio de sinais eletrônicos. O BIT (Binary'
        + ' Digit) é a forma que o computador processa e'
        + ' interpreta os dados. Ciente disso, assinale a'
        + ' alternativa que representa, em binário, o número'
        + ' “2015”, sabendo que esse número está na base 10.',
    type: 'subj',
    items: ['0001 0001 0001', '1110 1110 0000', '1111 1111 1111', '0111 1101 1111', '1111 0110 1111'],
    resp: '10000000010101',
  },
  {
    title: '9) As seguintes operações estão em BINÁRIO. Responda-as em DECIMAL:',
    type: 'itemsSubj',
    items: ['1000 + 1001', '1110 + 1001011 + 11101', '1100 - 1010', '11110 - 1111', '10101 x 11', '11110 x 110'],
    resp: ['17', '118', '2', '15', '63', '180'],
  },
];

const auxObj = {
  title: '',
  type: '',
  items: '',
  resp: '',
};

function toggleHelp(prop, text) {
  window.document.getElementById('popUpText').innerText = text;
  const display = prop;
  window.document.getElementsByName('pop').forEach((e) => {
    e.style.display = prop;
  });
}

const toggleGabarito = () => {
  const i = window.document.getElementById('innerGabarito');
  const gabarito = window.document.getElementById('gabarito');
  i.className = i.className === 'fa fa-eye-slash' ? 'fa fa-eye' : 'fa fa-eye-slash';
  gabarito.style.display =  gabarito.style.display === 'none' ? 'block' : 'none';
};

const generateQuestions = () => {
  let box;
  let item;
  let items;
  let titleQuest;
  let title;
  let input;
  let label;
  let labelInput;
  let divInput;
  let itemP;
  let pDiv;
  let button;
  let inputSubj;
  questions.forEach((question, i) => {
    box = document.createElement('div');
    box.className = 'boxed',
    box.id = `q${i + 1}`;
    document.getElementsByClassName('main')[0].appendChild(box);
    title = document.createElement('p');
    titleQuest = document.createElement('p');
    titleQuest.className = 'titleQuest';
    titleQuest.innerText = question.title;
    title.innerText = (question.title_second || '');
    title.className = 'secondText';
    box.appendChild(titleQuest);
    box.appendChild(title);
    switch (question.type) {
      case 'default':
        items = document.createElement('div');
        items.className = 'items';
        box.appendChild(items);
        question.items.forEach((itemText, j) => {
          item = document.createElement('div');
          item.className = 'item';
          items.appendChild(item);
          input = document.createElement('input');
          input.type = 'radio';
          input.id = `${alfabeto[j]}${i + 1}`;
          input.name = `q${i + 1}`;
          input.value = `${alfabeto[j]}`;
          item.appendChild(input);
          label = document.createElement('LABEL');
          label.setAttribute('for', `${alfabeto[j]}${i + 1}`);
          label.id = `l${alfabeto[j]}${i + 1}`;
          label.innerText = alfabeto[j];
          label.className = 'itemLabel';
          item.appendChild(label);
          itemP = document.createElement('p');
          itemP.innerText = itemText;
          pDiv = document.createElement('div');
          pDiv.className = 'pDiv';
          pDiv.appendChild(itemP);
          item.appendChild(pDiv);
        });
        break;
      case 'subj':
        inputSubj = document.createElement('input');
        inputSubj.type = 'text';
        inputSubj.name = `q${i + 1}`;
        box.appendChild(inputSubj);
        break;
      case 'itemsSubj':
        question.items.forEach((itemText, j) => {
          divInput = document.createElement('div');
          divInput.className = 'divInput';
          labelInput = document.createElement('label');
          labelInput.innerText = `${itemText}   =   `;
          labelInput.className = 'subjLabel';
          inputSubj = document.createElement('input');
          inputSubj.type = 'text';
          inputSubj.name = `q${i + 1}`;
          inputSubj.id = `${alfabeto[j]}${i + 1}`;
          labelInput.setAttribute('for', `${alfabeto[j]}${i + 1}`);
          divInput.appendChild(labelInput);
          divInput.appendChild(inputSubj);
          box.appendChild(divInput);
        });
        break;
      default:
        break;
    }
  });
  button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Corrigir';
  button.className = 'button';
  button.onclick = takeSelected;
  document.getElementsByClassName('main')[0].appendChild(button);


  const gabaritoButton = document.createElement('button');
  gabaritoButton.className = 'button';
  gabaritoButton.onclick = toggleGabarito;
  gabaritoButton.style.marginTop = '10px';
  const innerGabarito = document.createElement('i');
  innerGabarito.className = 'fa fa-eye-slash';
  innerGabarito.id = 'innerGabarito';
  innerGabarito.style.marginRight = '10px';
  const textGabarito = document.createElement('span');
  textGabarito.innerText = 'Gabarito';
  gabaritoButton.appendChild(innerGabarito);
  gabaritoButton.appendChild(textGabarito);
  document.getElementsByClassName('main')[0].appendChild(gabaritoButton);
  let gabarito = document.createElement('p');
  let text = '';
  questions.forEach((quest, index) => {
    text += `${index + 1}-${quest.resp} \n`;
  });
  gabarito.innerText = text;
  gabarito.style.fontSize = '20px';
  gabarito.style.display = 'none';
  gabarito.id = 'gabarito';
  document.getElementsByClassName('main')[0].appendChild(gabarito);
};

const handleButton = () => 1;

const toggleClassCerto = (elemento) => {
  elemento.classList.add('boxedCerto');
};

const toggleClassErrado = (elemento) => {
  elemento.classList.add('boxedErrado');
};

const toggleClassFalta = (elemento) => {
  elemento.classList.add('boxedFalta');
};

const destacaItemCerto = (questao) => {
  window.document.getElementById(`l${questions[questao - 1].resp}${questao}`).classList.add('itemDestacadoCerto');
};

const retornaMarcado = (lisRadios) => {
  for (let j = 0; j < lisRadios.length; j++) {
    if (lisRadios[j].checked) {
      return lisRadios[j].value;
    }
  } return false;
};

const avaliaResposta = (resposta, questao) => {
  if (!resposta || resposta === 'nenhuma') {
    return 'falta';
  }
  if (typeof (resposta) === 'object') {
    if (JSON.stringify(resposta) === JSON.stringify(questions[questao - 1].resp)) {
      return 'allTrue';
    }
    return 'notAllTrue';
  }
  if (resposta === questions[questao - 1].resp.toString()) {
    return true;
  }
  return false;
};

const disableAllInputs = () => {
  inputs = window.document.getElementsByTagName('input');
  for (i = 0; i < inputs.length; i++) {
    inputs[i].disabled = !((inputs[i].id === 'fechar' || inputs[i].id === 'help'));
  }
};

const takeSelected = () => {
  let contResp = 0;
  let contCert = 0;
  const resList = [];
  let resposta;
  let res;
  questions.forEach((value, i) => {
    const input = document.getElementsByName(`q${i + 1}`);
    if (value.type === 'default') {
      res = retornaMarcado(input);
    } else if (value.type === 'subj') {
      res = input[0].value.toUpperCase().replace(/\s/g, '');
    } else if (value.type === 'itemsSubj') {
      res = [];
      input.forEach((element, index) => {
        const resp = element.value.toUpperCase().replace(/\s/g, '');
        if (resp === questions[i].resp[index]) {
          toggleClassCerto(element);
          contResp++;
          contCert++;
        } else if (resp !== '') {
          toggleClassErrado(element);
          contResp++;
        }
        resp !== '' && res.push(resp);
      });
      if (res.length === 0) {
        res = 'nenhuma';
      }
    }
    resposta = avaliaResposta(res, i + 1);
    resList.push(resposta);
  });
  resList.forEach((resposta, index) => {
    const questao = document.getElementById(`q${index + 1}`);
    if (resposta === true) {
      toggleClassCerto(questao);
      contResp++;
      contCert++;
    } else if (resposta === 'falta') {
      toggleClassFalta(questao);
    } else if (resposta === 'allTrue') {
      toggleClassCerto(questao);
    } else if (resposta === 'notAllTrue') {
      toggleClassErrado(questao);
    } else {
      toggleClassErrado(questao);
      contResp++;
    }
    window.document.getElementById('acertou').innerHTML = `${contResp}`;
  });
  let text = '';
  if (contResp === 0) {
    const quests = window.document.getElementsByClassName('boxedFalta');
    // for(let i = 0; i<quests.lenght; i++) {
    //    quests[i].style.backgroundColor = 'white';
    // }
    text = 'Você precisa responder ao menos uma questão!';
  } else {
    if (contCert === 0) {
      text = 'Você errou todas as questões que respondeu :/';
    } else if (contCert === contResp) {
      text = 'Você acertou todas as questões que respondeu! Seu desempenho é de 100%!';
    } else {
      text = `Você acertou ${contCert} das ${contResp} questões que respondeu. Seu desempenho é de ${Math.floor((contCert / contResp) * 100)}%!`;
    }
    disableAllInputs();
  }
  toggleHelp('block', text);
};
