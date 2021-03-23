// eslint-disable-next-line no-unused-vars
function toggleHelp(prop, text) {
  window.document.getElementById('popUpText').innerText = text;
  window.document.getElementsByName('pop').forEach((e) => {
    e.style.display = prop;
  });
}
