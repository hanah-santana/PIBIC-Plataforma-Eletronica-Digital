customElements.define('nav-bar', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
      <style>
          *{
              margin: 0;
              padding: 0;
          }
          .menu{
              position: fixed;
              top: 0px;
              width: 100%;
              height: 49px;
              background-color: #039487;
              font-family: Arial, Helvetica, sans-serif;
              line-height: 19px;
              z-index: 2;

          }
          .menu ul{
              list-style: none;
              position: relative;
          }
          .menu ul li{
              width: 150px;
              float: left;
          }
          .menu a{
              padding: 15px;
              display: block;
              text-decoration: none;
              text-align: center;
              background-color: #039487;
              color:white;
          }
          .menu ul li svg{
            margin-bottom: -1px;
            margin-right: 4px;
          }
          .menu ul ul{
              position: absolute;
              visibility: hidden;
          }
          .menu ul li:hover ul{
              visibility: visible;
          }
          .menu a:hover{
              background-color: #07ad9e;
              
          }
          .menu ul ul li{
              float: none;
              border-top: solid 1px #dddddd;
          }

          label[for="btn-menu"]{
            padding-left: 16px;
            padding-top: 14px;
            padding-bottom: 2px;
            background-color: #039487;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            text-align: left;
            font-size: 24px;
            cursor: pointer;
            width: 100%;
            height:35px;
            display: none;
            position: fixed;
            top: 0px;
          }
          #btn-menu{
              display: none;
          }
          
          @media(max-width: 700px){
              label[for="btn-menu"]{
              display: block;
              }
              #btn-menu:checked ~ .menu{
                  margin-left: 0;
                  margin-top: 50px;
              }
              .menu{
                position: fixed;
                top: 0px;
                margin-left: -100%;
                transition: all .3s
              }
              .menu ul li{
                  width: 100%;
                  float: none;
              }
              .menu ul ul{
                  position: static;
                  overflow: hidden;
                  max-height: 0;
                  transition: all .3s;
              }
              .menu ul li:hover ul{
                  height: auto;
                  max-height: 200px;
              }
              .menu ul ul li{
                  border-bottom: solid 1px #dddddd;
                  border-top: hidden;
              }
              .menu a{
                  text-align: left;
              }
              .menu .sub{
                  text-indent: 30px;
              }
              .menu li:hover .line{
                  border-bottom: solid 1px #dddddd;
              }

          }

      </style>
      <input type="checkbox" id="btn-menu">
      <label for="btn-menu">&#9776;</label>

      <nav class="menu">
        <ul>
          
          <li>
            <a href="/index.html"> <svg class="bi bi-house" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
          </svg> Home</a>
          </li>
          <li>
              <a class="line" href="#"> <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0115 2.82z" clip-rule="evenodd"/>
            </svg> Conteúdo</a>
              <ul>
                  <li>
                      <a class="sub" href="/SistemasNumericos/index.html">Sistemas Numéricos</a>
                  </li>
                  <li>
                      <a class="sub" href="/PortasLogicas/index.html">Portas Lógicas</a>
                  </li>
              </ul>
          </li>
          <li>
              <a class="line" href="#"> <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
            </svg> Exercícios</a>
              <ul>
                  <li><a class="sub" href="/ExerciciosSistemas/index.html">Sistemas de Numeração</a></li>
                  <li><a class="sub" href="/ExerciciosPortas/index.html">Portas Lógicas</a></li>
              </ul>
          </li>
          <li>
              <a class="line" href="#"> <svg class="bi bi-tools" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" clip-rule="evenodd"/>
            </svg> Ferramentas</a>
              <ul>
                  <li><a class="sub" href="/Conversor/index.html">Conversor de Bases</a></li>
                  <li><a class="sub" href="/Calculadora/index.html">Calculadora multibases</a></li>
                  <li><a class="sub" href="/PortasInterativas/index.html">Portas Lógicas</a></li>
              </ul>
          </li>
          
          </ul>
      </nav>
        <slot></slot>
      `;
    }
  });