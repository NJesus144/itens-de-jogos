// FUNCA ONLCIK QUE TE DIRECIONA PARA O LOGIN CASO NÃO ESTEJA LOGADO
function login() {
  window.location.href = "http://127.0.0.1:5501/login.html";
}
// ARMAZENEI OS DADOS DO USUARIO CADASTRADO EM VARIAVEIS
let storageKey = JSON.parse(localStorage.getItem("storageKey"));
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let userCad = JSON.parse(localStorage.getItem("listaUser.userCad"));

// FAÇO UM IF PARA CONFIRMAR SE O USUARIO ESTA LOGADO OU NÃO, CASO ESTEJA,
//O BOTÃO DE 'ENTRAR' ENTRA EM DISPLAY NONE E A DIV OLA SUBSTITUI O BOTAO 'ENTRAR' COM A MENSAGEM DE 'OLÁ' + O 'USUARIO LOGADO'.
// NO ELSE CASO O USUARIO NÃO ESTEJA LOGADO O LINK PARA 'ENTRAR' VOLTA E O BOTAO 'SAIR' RECEBE DISPLAY NONE PARA FICAR ESCONDIDO.
let ola = document.querySelector("#ola"); //<-- DIV
let logado = document.querySelector("#login"); //<--- LINK PARA O LOGIN
let deslogar = document.querySelector("#sair"); //<--- LINK PARA SAIR
if (userLogado != userCad) {
  logado.setAttribute("style", "display: none");
  ola.innerHTML = "Olá " + userLogado.user;
} else {
  logado.innerHTML = "Entrar";
  deslogar.setAttribute("style", "display: none");
}

// FUNÇÃO SAIR QUE REMOVE O USUARIO LOGADO
function sair() {
  let deslogar = document.querySelector("#sair");
  localStorage.removeItem("userLogado");

  document.getElementById("app");
  logado.innerHTML = "Entrar";
  deslogar.setAttribute("style", "display: none");
  window.location.reload();
}

//ESSA FUNÇÃO TIVE DIFICULDADE PARA ENTENDER, ENCONTREI NA INTERNET E ELA ME DEU O RESULTADO QUE EU QUERIA.
//ELA DEIXA ATIVO O BOTÃO DO FILTRO QUE EU CLICAR.
function sup(clicado) {
  const clicaveis = document.querySelectorAll(".main-btn");
  clicaveis.forEach((el) => el.classList.toggle("active", el === clicado));
}

//FUNÇÃO PARA CANCELAR A COMPRA
function cancelar() {
  let cancelar = document.querySelector("#cancel");
  if (cancelar) {
    App.controllers.hidePopupCompra();
  }
}

//LINK PARA CADASTRO
function cadastrar() {
  window.location.href = "http://127.0.0.1:5501/cadastro.html";
}

const App = {
  init() {
    console.log("Iniciando Sistema...");
    App.controllers.loadLocalData();

    this.controllers.createComponents();
    this.controllers.renderMiticCard();
    this.controllers.renderMiticCard2();
    this.controllers.renderEpic();
    this.controllers.renderLegend();
    this.controllers.renderCommum();
    this.controllers.renderRare();
    this.controllers.createPopupCompra();

    this.controllers.createPopupLogin();
    this.controllers.createPopup();
    console.log("Sistema iniciado...");
  },

  state: {
    storageKey: "buyFlow",
    wallet: {
      balance: 0,
      transactions: [],
    },

    weapons: [
      {
        id: 1,
        rarity: "Épico",
        name: "Dainsleif",
        element: "Fogo",
        attack: 120,
        img: "https://i.pinimg.com/564x/8c/39/9e/8c399e2093f1b98e193d780884d4445c.jpg",
        price: 1500,
      },

      {
        id: 2,
        rarity: "Épico",
        name: "Ventos Cortantes",
        element: "Vento",
        attack: 110,
        img: "https://i.pinimg.com/564x/a9/a0/c5/a9a0c526564381472c4340943ef58aae.jpg",
        price: 1100,
      },

      {
        id: 3,
        rarity: "Épico",
        name: "Arco do Desespero",
        element: "Agua",
        attack: 160,
        img: "https://i.pinimg.com/564x/e5/a5/5c/e5a55c7103c7d473a931c80e9710deb8.jpg",
        price: 1600,
      },
    ],
    myEpics: [],
    lengendary: [
      {
        id: 4,
        rarity: "Lendário",
        name: "Fracasso",
        element: "Gelo",
        attack: 180,
        img: "https://i.pinimg.com/564x/a5/2f/5d/a52f5d19f32b6024be9684c6f3afb327.jpg",
        price: 2500,
      },
      {
        id: 5,
        rarity: "Lendário",
        name: "Reaper",
        element: "Escuridão",
        attack: 190,
        img: "https://i.pinimg.com/564x/8e/83/06/8e8306e61231d8b8e7cadbb404d0010e.jpg",
        price: 2800,
      },

      {
        id: 6,
        rarity: "Lendário",
        name: "Era do dragão",
        element: "Terra",
        attack: 150,
        img: "https://i.pinimg.com/564x/37/91/d6/3791d6f2f4cfef4bc81989bc8bc0d873.jpg",
        price: 2500,
      },
    ],

    rare: [
      {
        id: 7,
        rarity: "Raro",
        name: "Arco",
        element: "Fogo",
        attack: 100,
        img: "https://i.pinimg.com/564x/c3/69/63/c369636175a33c0598a2638605fe27c3.jpg",
        price: 1000,
      },
      {
        id: 8,
        rarity: "Raro",
        name: "sword",
        element: "Fogo",
        attack: 100,
        img: "https://i.pinimg.com/564x/03/2f/44/032f4430159932e500a7942acb3b0997.jpg",
        price: 1000,
      },
      {
        id: 9,
        rarity: "Raro",
        name: "A lâmina",
        element: "Vento",
        attack: 95,
        img: "https://i.pinimg.com/564x/c2/76/13/c276136a52c63d802cb5040440461904.jpg",
        price: 800,
      },
    ],

    commum: [
      {
        id: 10,
        rarity: "Comum",
        name: "Machado da Terra",
        element: "Sem Elemento",
        attack: 30,
        img: "https://i.pinimg.com/564x/0e/65/9f/0e659f1e085776abde7804e1eb68b57e.jpg",
        price: 120,
      },
      {
        id: 11,
        rarity: "Comum",
        name: "Lâmina do Caos",
        element: "Terra",
        attack: 45,
        img: "https://i.pinimg.com/564x/d6/27/a4/d627a4ec718834fd8c12d472ffffb67b.jpg",
        price: 300,
      },
      {
        id: 12,
        rarity: "Comum",
        name: "Podrinho",
        element: "Sem Elemento",
        attack: 25,
        img: "https://i.pinimg.com/564x/65/da/80/65da80518973152057dd8982cb4267e8.jpg",
        price: 100,
      },
    ],

    mitic: [
      {
        id: 13,
        rarity: "Mítico",
        name: "Lâmina do Imperador",
        element: "Fogo",
        attack: 350,
        img: "https://i.pinimg.com/564x/f7/0c/31/f70c31fd9fb2452db90346d46316fdbd.jpg",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4D9JeInQnasXe1bIFt29lqGeJVbXbbqS2_L6Cae8yP-NZljON3V9TP5cMebZya76l7I&usqp=CAU",
        img3: "https://image.shutterstock.com/image-vector/sword-icon-that-sparkles-fire-260nw-1685673634.jpg",
        img4: "https://i.pinimg.com/236x/1e/07/04/1e0704db90f5529d51a7fdcf12a404bc.jpg",
        price: 5000,
      },
    ],

    mitico: [
      {
        id: 14,
        rarity: "Mítico",
        name: "Espada do Imortal",
        element: "Luz",
        attack: 280,
        img: "https://i.pinimg.com/1200x/61/ea/0d/61ea0d5f92d427da5dd8a2ffbffa1e37.jpg",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4D9JeInQnasXe1bIFt29lqGeJVbXbbqS2_L6Cae8yP-NZljON3V9TP5cMebZya76l7I&usqp=CAU",
        price: 3500,
      },
      {
        id: 15,
        rarity: "Mítico",
        name: "Arco Antigo",
        element: "Vento e Terra",
        attack: 250,
        img: "https://i.pinimg.com/564x/7b/e3/cc/7be3cc1bb2dbf8fff91d00530cb6f9da.jpg",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4D9JeInQnasXe1bIFt29lqGeJVbXbbqS2_L6Cae8yP-NZljON3V9TP5cMebZya76l7I&usqp=CAU",
        price: 3000,
      },
    ],
  },
  controllers: {
    loadLocalData() {
      const data = localStorage.getItem(App.state.storageKey);
      if (data) {
        App.state = JSON.parse(data);
      } else {
        App.state.wallet.balance = 20000;
        this.setLocalData();
      }
    },
    setLocalData() {
      localStorage.setItem(App.state.storageKey, JSON.stringify(App.state));
    },
    upadateWalletBalance(balance) {
      App.elements.header.container.menuLeft2.wallet.innerHTML = `Saldo:    ${new Intl.NumberFormat(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      ).format(balance)}`;
    },

    showPopup() {
      //POPUP DESCRIÇÃO DAS SKILLS
      App.elements.popupEspada.backdrop.style.display = "flex";
      App.elements.popupEspada.container.description.innerHTML =
        "Seus golpes causam dano de fogo em area, aplicando queimadura nos inimigos ao seu redor. Queimadura causa 5% de dano baseado na vida máxima dos alvos ao longo de 5seg. Queimadura aculma até 3 vezes. Se espírito do imperador estiver ativo, queimaduras acumulam-se até 6 vezes.";
      App.helpers.style(App.elements.popupEspada.container.description, {
        marginLeft: "115px",
        border: "1px solid red",
        fontSize: "10px",
        width: "130px",
        height: "130px",
        marginTop: "230px",
      });
    },
    showPopup2() {
      //POPUP DESCRIÇÃO DAS SKILLS
      App.elements.popupEspada.backdrop.style.display = "flex";
      App.elements.popupEspada.container.description.innerHTML =
        "Com menos de 30% de vida o espírito do imperador envolve o portador da espada concedendo a ele 100 de força e destreza e 50 de velocidade de ataque. Além disso, dois de cada três ataques terão 100% de chance de crítico. Inimigos com menos de 15% de vida morrerão instantaneamente se receberem um ataque enquanto espírito do imperador estiver ativado.";
      App.helpers.style(App.elements.popupEspada.container.description, {
        marginLeft: "230px",
        border: "1px solid orange",
        fontSize: "10px",
        width: "140px",
        height: "160px",
        marginTop: "200px",
      });
    },
    showPopup3() {
      //POPUP DESCRIÇÃO DAS SKILLS
      App.elements.popupEspada.backdrop.style.display = "flex";
      App.elements.popupEspada.container.description.innerHTML =
        "Seus ataques ignoram 20% da armadura inimiga e seus ataques causam 80% de dano a mais contra escudos. Se espírito do imperador estiver ativo, 30% do dano causado é convertido em escudo até um máximo de 40% da sua vida total. E se apenas o seu escudo exceder 30% da sua vida total espírito do imperador não é desativado.";
      App.helpers.style(App.elements.popupEspada.container.description, {
        marginLeft: "10px",
        border: "1px solid #993399",
        fontSize: "10px",
        width: "135px",
        height: "165px",
        marginTop: "200px",
      });
    },

    hidePopup() {
      App.elements.popupEspada.backdrop.style.display = "none";
    },
    createPopup() {
      const els = App.elements.popupEspada;

      App.helpers.style(els.backdrop, {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "131%",

        display: "none",
      });

      App.helpers.style(els.container.description, {
        background: "white",
        borderRadius: "10px",
        padding: "7px",
        fontFamily: "sans-serif",
        fontWeight: "bold",
      });

      els.backdrop.appendChild(els.container.description);
      App.elements.app.appendChild(els.backdrop);
    },

    hidePopupLogin() {
      App.elements.popup.backdropTela.style.display = "none";
    },

    showPopupLogin() {
      App.elements.popup.backdropTela.style.display = "flex";
    },

    hidePopupCompra() {
      App.elements.popupCompra.backdropCompra.style.display = "none";
    },

    showPopupCompra() {
      App.elements.popupCompra.backdropCompra.style.display = "flex";
    },

    createPopupCompra() {
      const els = App.elements.popupCompra;

      App.helpers.style(els.backdropCompra, {
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.8)",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
      });

      App.helpers.style(els.container.el, {
        width: "400px",
        height: "300px",
        borderRadius: "5px",
        textAlign: "center",
        marginBottom: "250px",
        backgroundImage:
          "radial-gradient(circle at 77.39% 34.18%, #ffffff 0, #f7ffff 16.67%, #edffff 33.33%, #e2eeee 50%, #d7d3d3 66.67%, #ccbcba 83.33%, #c2a8a2 100%)",
      });

      App.helpers.style(els.container.compra.el, {
        border: "1px solid black",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#03022B",
      });

      App.helpers.style(els.container.compra.confirmButtons.el, {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "15px",
        height: "50px",
      });

      App.helpers.style(els.container.compra.text, {
        fontFamily: "sans-serif",
        padding: "20px",
        fontWeight: "bold",
      });

      els.container.compra.text.innerHTML =
        " <br><br> ATENÇÃO!!<br><br> Certifique-se de estar cadastrado e logado com o mesmo ID da conta para qual deseja enviar o item. <br><br> ";

      els.container.el.appendChild(els.container.compra.el);

      els.container.el.appendChild(els.container.compra.text);
      els.container.compra.el.appendChild(els.container.compra.btn);

      els.container.compra.el.appendChild(els.container.compra.msgSuccess);
      els.container.compra.el.appendChild(els.container.compra.msg);
      els.container.compra.confirmButtons.el.appendChild(
        els.container.compra.confirmButtons.confirm
      );
      els.container.compra.confirmButtons.el.appendChild(
        els.container.compra.confirmButtons.cancel
      );

      els.container.el.appendChild(els.container.compra.confirmButtons.el);
      els.backdropCompra.appendChild(els.container.el);
      App.elements.app.appendChild(els.backdropCompra);
    },

    createPopupLogin() {
      const els = App.elements.popup;

      App.helpers.style(els.backdropTela, {
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.8)",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
      });

      els.backdropTela.onclick = (evt) => {
        console.log(".. CLiquei no backdrop", evt.target === els.backdropTela);
        if (evt.target === els.backdropTela) {
          App.controllers.hidePopupLogin();
        }
      };

      App.helpers.style(els.container.el, {
        width: "400px",
        height: "300px",
        backgroundImage:
          "radial-gradient(circle at 77.39% 34.18%, #ffffff 0, #f7ffff 16.67%, #edffff 33.33%, #e2eeee 50%, #d7d3d3 66.67%, #ccbcba 83.33%, #c2a8a2 100%)",
        borderRadius: "5px",
        textAlign: "center",
        marginBottom: "250px",
      });

      App.helpers.style(els.container.close.el, {
        border: "1px solid black",
        padding: "3px",
        display: "flex",
        justifyContent: "flex-end",
      });

      els.container.close.btn.innerHTML = "X";
      App.helpers.style(els.container.close.btn, {
        fontSize: "20px",
        color: "white",
        border: "1px solid black",
        padding: "8px",
        fontFamily: "sans-serif",
        cursor: "pointer",
        backgroundColor: "red",
      });

      els.container.close.btn.onclick = () => {
        App.controllers.hidePopupLogin();
      };
      App.helpers.style(els.container.close.divButtons.el, {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "15px",
      });
      App.helpers.style(els.container.close.divButtons.log, {
        color: "orange",
        padding: "6px",
        borderRadius: "5px",
        boxShadow: "1px 1px 10px #7120D7",
        fontFamily: "sans-serif",
      });
      App.helpers.style(els.container.close.divButtons.cadastro, {
        color: "orange",
        padding: "6px",
        borderRadius: "5px",
        boxShadow: "1px 1px 10px #7120D7",
        fontFamily: "sans-serif",
      });
      App.helpers.style(els.container.close.text, {
        border: "1px solid black",
        fontFamily: "Roboto",
        padding: "20px",
        fontWeight: "bold",
      });

      els.container.close.text.innerHTML =
        "<br><br> Você precisa estar logado para poder comprar.<br><br> Certifique-se de estar logado com o mesmo ID da conta para qual você deseja enviar o item comprado. ";

      els.container.el.appendChild(els.container.close.el);
      els.container.close.el.appendChild(els.container.close.btn);
      els.container.el.appendChild(els.container.close.text);

      els.container.close.divButtons.el.appendChild(
        els.container.close.divButtons.log
      );
      els.container.close.divButtons.el.appendChild(
        els.container.close.divButtons.cadastro
      );

      els.container.el.appendChild(els.container.close.divButtons.el);
      els.backdropTela.appendChild(els.container.el);
      App.elements.app.appendChild(els.backdropTela);
    },

    createCard(weapons, isBuy) {
      const el = document.createElement("div");

      const header = document.createElement("div");
      const img = document.createElement("img");

      const container = document.createElement("div");
      const l1 = document.createElement("div");
      const v1 = document.createElement("div");
      const l2 = document.createElement("div");
      const v2 = document.createElement("div");
      const l3 = document.createElement("div");
      const v3 = document.createElement("div");
      const l4 = document.createElement("div");
      const v4 = document.createElement("div");
      const btn = document.createElement("button");

      el.classList.add("weapons-card");

      container.classList.add("weapons-card-container");

      header.classList.add("weapons-card-header");
      header.innerHTML = weapons.name;

      img.classList.add("weapons-card-img");
      img.src = weapons.img;

      l1.innerHTML = "Raridade:";
      v1.innerHTML = weapons.rarity;
      l1.classList.add("weapons-card-l1");
      v1.classList.add("weapons-card-v1");

      l2.innerHTML = "Elemeto:";
      v2.innerHTML = weapons.element;
      l2.classList.add("weapons-card-l2");
      v2.classList.add("weapons-card-v2");

      l3.innerHTML = "Ataque:";
      v3.innerHTML = weapons.attack;
      l3.classList.add("weapons-card-l3");
      v3.classList.add("weapons-card-v3");

      l4.innerHTML = "Preço:";
      v4.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(weapons.price);
      l4.classList.add("weapons-card-l4");
      v4.classList.add("weapons-card-v4");

      btn.classList.add("weapons-card-btn");
      btn.innerHTML = isBuy ? "Comprar" : "Vender";

      let confirmar = document.querySelector("#confirm");
      let cancelar = document.querySelector("#cancel");

      //
      btn.onclick = () => {
        let userLogado = JSON.parse(localStorage.getItem("userLogado"));
        let logado = document.querySelector("#login");

        // A CARTEIRA DO USUARIO FICA ESCONDIDA  E SÓ APARECE QUANDO O USUARIO ESTÁ LOGADO
        let wallet = document.querySelector("#wallet");
        if (userLogado) {
          wallet.setAttribute("style", "display: flex");
          btn.disabled = isBuy
            ? App.state.wallet.balance < weapons.price
            : false;
        }

        //CASO O USUARIO ESTEJA LOGADO O POPUP DE COMPRA APARECE E PERMITE ELE COMPRAR.
        if ((logado = userLogado)) {
          App.controllers.showPopupCompra();

          App.state.myEpics.push(weapons);

          const arr = App.state.weapons.filter((w) => {
            console.log("[w]...", weapons.id, w.id !== weapons.id, w);
            return w.id !== weapons.id;
          });
          console.log("[-->]...", arr);

          // APÓS CONFIRMAR A COMPRA CASO TENHA  DINHEIRO SUFICIENTE É EXIBIDA UMA MENSAGEM DE SUCESSO.
          confirmar.onclick = () => {
            if (App.state.wallet.balance >= weapons.price) {
              cancelar.setAttribute("style", "display: none");
              confirmar.setAttribute("style", "display: none");
              msgSuccess.textContent = "Preparando pedido...";
              msgSuccess.setAttribute("style", "color: green");

              setTimeout(() => {
                confirmar.classList = "msgSuccess";
                msgSuccess.classList = "msgSuccess";
                msgSuccess.textContent =
                  "Compra realizada com sucesso!! Uma cópia do item foi enviado para seu depósito.  Caso esteja logado com sua conta no jogo, saia e entre novamente.";

                App.state.wallet.balance -= weapons.price;

                App.controllers.upadateWalletBalance(App.state.wallet.balance);
                App.controllers.setLocalData();
                btn.disabled = isBuy
                  ? App.state.wallet.balance < weapons.price
                  : false;
              }, 2000);
              setTimeout(() => {
                App.controllers.hidePopupCompra();
                cancelar.setAttribute("style", "display: flex");
                confirmar.setAttribute("style", "display: flex");

                confirmar.classList = "";
                msgSuccess.classList = "";
                msgSuccess.textContent = "";
                window.location.reload(); //  <----  ESSE CAMARADA TA AQUI SÓ PRA RESETAR O ESTILO DOS BOTÕES DANDO UM RELOAD
                // PQ OS BOTÕES POR ALGUM MOTIVO FICAM SEM ESTILO DEPOIS DE CONFIRMAR A PRIMEIRA COMPRA
              }, 5000);
            }
          };
        } else {
          App.controllers.showPopupLogin();
        }
      };
      btn.disabled = isBuy ? App.state.wallet.balance < weapons.price : false;

      el.appendChild(header);

      el.appendChild(img);
      container.appendChild(l1);
      container.appendChild(v1);
      container.appendChild(l2);
      container.appendChild(v2);
      container.appendChild(l3);
      container.appendChild(v3);
      container.appendChild(l4);
      container.appendChild(v4);
      container.appendChild(btn);
      el.appendChild(container);
      el.appendChild(btn);
      return el;
    },

    createMiticCard(mitic, isBuy) {
      const els = document.createElement("div");

      const header = document.createElement("div");
      const img = document.createElement("img");
      const img2 = document.createElement("img");
      const img3 = document.createElement("img");
      const img4 = document.createElement("img");

      const box = document.createElement("div");
      const l1 = document.createElement("div");
      const v1 = document.createElement("div");
      const l2 = document.createElement("div");
      const v2 = document.createElement("div");
      const l3 = document.createElement("div");
      const v3 = document.createElement("div");
      const l4 = document.createElement("div");
      const v4 = document.createElement("div");
      const btnM = document.createElement("button");

      els.classList.add("mitic-card");

      box.classList.add("mitic-card-container");

      header.classList.add("mitic-card-header");
      header.innerHTML = mitic.name;

      img.classList.add("mitic-card-img");
      img.src = mitic.img;

      img2.classList.add("mitic-card-img2");
      img2.src = mitic.img2;
      img2.onmouseover = () => {
        img2.style.cursor = "pointer";
        img2.style.border = "1px solid #993399";
        console.log("Cliquei para aparecer");
        App.controllers.showPopup3();
      };
      img2.onmouseout = () => {
        console.log("Cliquei para sair");
        img2.style.border = "";
        App.controllers.hidePopup();
      };

      img3.classList.add("mitic-card-img3");
      img3.src = mitic.img3;

      img3.onmouseover = () => {
        img3.style.cursor = "pointer";
        img3.style.border = "1px solid red";
        console.log("Cliquei para aparecer");
        App.controllers.showPopup();
      };
      img3.onmouseout = () => {
        console.log("Cliquei para sair");
        img3.style.border = "";
        App.controllers.hidePopup();
      };

      img4.classList.add("mitic-card-img4");
      img4.src = mitic.img4;
      img4.onmouseover = () => {
        img4.style.cursor = "pointer";
        img4.style.border = "1px solid orange";
        console.log("Cliquei para aparecer");
        App.controllers.showPopup2();
      };

      img4.onmouseout = () => {
        console.log("Cliquei para sair");
        img4.style.border = "";
        App.controllers.hidePopup();
      };

      l1.innerHTML = "Raridade:";
      v1.innerHTML = mitic.rarity;
      l1.classList.add("mitic-card-l1");
      v1.classList.add("mitic-card-v1");

      l2.innerHTML = "Elemeto:";
      v2.innerHTML = mitic.element;
      l2.classList.add("mitic-card-l2");
      v2.classList.add("mitic-card-v2");

      l3.innerHTML = "Ataque:";
      v3.innerHTML = mitic.attack;
      l3.classList.add("mitic-card-l3");
      v3.classList.add("mitic-card-v3");

      l4.innerHTML = "Preço:";
      v4.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(mitic.price);
      l4.classList.add("mitic-card-l4");
      v4.classList.add("mitic-card-v4");

      btnM.classList.add("mitic-card-btn");
      btnM.innerHTML = isBuy ? "Comprar" : "Vender";

      let wallet = document.querySelector("#wallet");
      if (userLogado) {
        wallet.setAttribute("style", "display: flex");
        btnM.disabled = isBuy ? App.state.wallet.balance < mitic.price : false;
      }

      btnM.onclick = () => {
        let confirmar = document.querySelector("#confirm");
        let cancelar = document.querySelector("#cancel");
        const msgSuccess = document.querySelector("#msgSuccess");

        let userLogado = JSON.parse(localStorage.getItem("userLogado"));
        let logado = document.querySelector("#login");

        if ((logado = userLogado)) {
          App.controllers.showPopupCompra();

          confirmar.onclick = () => {
            if (App.state.wallet.balance >= mitic.price) {
              cancelar.setAttribute("style", "display: none");
              confirmar.setAttribute("style", "display: none");
              msgSuccess.textContent = "Preparando pedido...";
              msgSuccess.setAttribute("style", "color: green");
              App.state.wallet.balance -= mitic.price;

              setTimeout(() => {
                confirmar.classList = "msgSuccess";
                msgSuccess.classList = "msgSuccess";
                msgSuccess.textContent =
                  "Compra realizada com sucesso!! Uma cópia do item foi enviado para seu depósito.  Caso esteja logado com sua conta no jogo, saia e entre novamente.";

                App.controllers.upadateWalletBalance(App.state.wallet.balance);
                App.controllers.setLocalData();
                btnM.disabled = isBuy
                  ? App.state.wallet.balance < mitic.price
                  : false;
              }, 2000);
              setTimeout(() => {
                App.controllers.hidePopupCompra();
                cancelar.setAttribute("style", "display: flex");
                confirmar.setAttribute("style", "display: flex");
                confirmar.classList = "";
                msgSuccess.classList = "";
                msgSuccess.textContent = "";
                window.location.reload();
              }, 5000);
            }
          };
        } else {
          App.controllers.showPopupLogin();
        }
      };

      btnM.disabled = isBuy ? App.state.wallet.balance < mitic.price : false;

      els.appendChild(header);
      els.appendChild(img4);
      els.appendChild(img3);

      els.appendChild(img2);
      els.appendChild(img);

      box.appendChild(l1);
      box.appendChild(v1);
      box.appendChild(l2);
      box.appendChild(v2);
      box.appendChild(l3);
      box.appendChild(v3);
      box.appendChild(l4);
      box.appendChild(v4);

      els.appendChild(box);
      els.appendChild(btnM);
      return els;
    },

    editMitic2(mitico, isBuy) {
      const els = document.createElement("div");

      const header = document.createElement("div");
      const img = document.createElement("img");

      const box = document.createElement("div");
      const l1 = document.createElement("div");
      const v1 = document.createElement("div");
      const l2 = document.createElement("div");
      const v2 = document.createElement("div");
      const l3 = document.createElement("div");
      const v3 = document.createElement("div");
      const l4 = document.createElement("div");
      const v4 = document.createElement("div");
      const btn = document.createElement("button");

      els.classList.add("mitic-card");

      box.classList.add("mitic-card-container");

      header.classList.add("mitic-card-header");
      header.innerHTML = mitico.name;

      img.classList.add("mitic-card-img");
      img.src = mitico.img;

      l1.innerHTML = "Raridade:";
      v1.innerHTML = mitico.rarity;
      l1.classList.add("mitic-card-l1");
      v1.classList.add("mitic-card-v1");

      l2.innerHTML = "Elemeto:";
      v2.innerHTML = mitico.element;
      l2.classList.add("mitic-card-l2");
      v2.classList.add("mitic-card-v2");

      l3.innerHTML = "Ataque:";
      v3.innerHTML = mitico.attack;
      l3.classList.add("mitic-card-l3");
      v3.classList.add("mitic-card-v3");

      l4.innerHTML = "Preço:";
      v4.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(mitico.price);
      l4.classList.add("mitic-card-l4");
      v4.classList.add("mitic-card-v4");

      btn.classList.add("mitic-card-btn");
      btn.innerHTML = "Esgotado";
      btn.onclick = () => {};

      els.appendChild(header);
      els.appendChild(img);
      box.appendChild(l1);
      box.appendChild(v1);
      box.appendChild(l2);
      box.appendChild(v2);
      box.appendChild(l3);
      box.appendChild(v3);
      box.appendChild(l4);
      box.appendChild(v4);

      els.appendChild(box);
      els.appendChild(btn);
      return els;
    },
    //RENDER DOS INTES ÉPICOS
    renderEpic() {
      const container = App.elements.body.epic;

      console.log("Rendering cards...");
      console.log(App.state.weapons);

      var showEpic = document.getElementById("epic-btn");

      const legend = document.getElementById("LegendContainer");
      const mitic = document.querySelector("#miticContainer");
      const rare = document.getElementById("rareContainer");
      const commum = document.getElementById("commumContainer");

      const epic = document.getElementById("epicContaniner");

      //BOTÃO QUE MOSTRA SOMENTE OS ITENS ÉPICOS E ESCONDE O RESTANTE, FUNCIONA COMO UM TIPO DE FILTRO.

      showEpic.addEventListener("click", function () {
        if (epic.style.display === "none" || epic.style.display === "flex") {
          epic.style.display = "flex";
          mitic.setAttribute("style", "display: none");
          legend.setAttribute("style", "display: none");
          rare.setAttribute("style", "display: none");
          commum.setAttribute("style", "display: none");
        }
      });

      for (let i = 0; i < App.state.weapons.length; i++) {
        const weapon = App.state.weapons[i];
        console.log(weapon);
        const el = this.createCard(weapon, true);
        console.log(el);

        App.elements.body.container.el.appendChild(
          App.elements.body.container.all
        );
        App.elements.body.el.appendChild(App.elements.body.commum.el);
        App.elements.body.el.appendChild(App.elements.body.rare.el);
        App.elements.body.el.appendChild(App.elements.body.epic);
        App.elements.body.el.appendChild(App.elements.body.legend.el);

        App.elements.body.el.appendChild(App.elements.body.container.el);
        container.appendChild(el);
      }

      console.log("Done");
    },
    //RENDER DO PRIMEIRO ITEM MITICO
    renderMiticCard() {
      const container1 = App.elements.body.container.el;
      console.log("Renderind Mitic...");
      console.log(App.state.mitic);

      container1.style.order = "-1";

      //BOTÃO QUE MOSTRA SOMENTE O PRIMEIRO ITEN MITICO E ESCONDE O RESTANTE, FUNCIONA COMO UM TIPO DE FILTRO.
      var showMitic = document.getElementById("mitic-btn");
      showMitic.addEventListener("click", function () {
        const epic = document.getElementById("epicContaniner");
        const legend = document.getElementById("LegendContainer");
        const rare = document.getElementById("rareContainer");
        const commum = document.getElementById("commumContainer");
        const all = document.getElementById("all");

        const cont = document.querySelector("#miticContainer");

        if (cont.style.display !== "none" || cont.style.display !== "flex") {
          cont.style.display = "flex";

          all.setAttribute("style", "display: flex");
          epic.setAttribute("style", "display: none");
          legend.setAttribute("style", "display: none");
          rare.setAttribute("style", "display: none");
          commum.setAttribute("style", "display: none");
        }
      });

      for (let o = 0; o < App.state.mitic.length; o++) {
        const mitic = App.state.mitic[o];
        console.log(mitic);
        const els = this.createMiticCard(mitic, true);
        console.log(els);

        container1.appendChild(els);
      }
    },
    //RENDER DOS INTES MITICOS
    renderMiticCard2() {
      const container1 = App.elements.body.container;

      container1.allCards = [];

      for (let o = 0; o < App.state.mitico.length; o++) {
        const mitic = App.state.mitico[o];
        console.log(mitic);
        const els = this.editMitic2(mitic, true);
        console.log(els);

        container1.all.appendChild(els);
        container1.allCards.push(els);
      }
    },
    //RENDER DOS INTES LENDARIOS
    renderLegend() {
      const container = App.elements.body.legend.el;

      console.log("Renderind legend...");
      console.log(App.state.lengendary);

      var showLegend = document.getElementById("legendary-btn");
      showLegend.addEventListener("click", function () {
        const epic = document.getElementById("epicContaniner");
        const mitic = document.querySelector("#miticContainer");
        const rare = document.getElementById("rareContainer");
        const commum = document.getElementById("commumContainer");

        const legend = document.getElementById("LegendContainer");
        if (
          legend.style.display !== "none" ||
          legend.style.display !== "flex"
        ) {
          legend.style.display = "flex";
          epic.setAttribute("style", "display: none");
          mitic.setAttribute("style", "display: none");
          rare.setAttribute("style", "display: none");
          commum.setAttribute("style", "display: none");
        }
      });
      for (let o = 0; o < App.state.lengendary.length; o++) {
        const lengendary = App.state.lengendary[o];
        console.log(lengendary);
        const els = this.createCard(lengendary, true);
        console.log(els);

        container.appendChild(els);
      }
    },
    //RENDER DOS INTES RAROS
    renderRare() {
      const container = App.elements.body.rare.el;

      console.log("Renderind rare...");
      console.log(App.state.rare);

      var showRare = document.getElementById("rare-btn");
      const epic = document.getElementById("epicContaniner");
      const legend = document.getElementById("LegendContainer");
      const mitic = document.querySelector("#miticContainer");
      const commum = document.getElementById("commumContainer");

      const rare = document.getElementById("rareContainer");

      showRare.addEventListener("click", function () {
        if (rare.style.display !== "none" || rare.style.display !== "flex") {
          rare.style.display = "flex";
          mitic.setAttribute("style", "display: none");
          legend.setAttribute("style", "display: none");
          epic.setAttribute("style", "display: none");
          commum.setAttribute("style", "display: none");
        }
      });

      for (let o = 0; o < App.state.rare.length; o++) {
        const rare = App.state.rare[o];
        console.log(rare);
        const els = this.createCard(rare, true);
        console.log(els);
        container.appendChild(els);
      }
    },
    //RENDER DOS INTES COMUMS
    renderCommum() {
      const container = App.elements.body.commum.el;

      console.log("Renderind rare...");
      console.log(App.state.commum);

      var showCommum = document.getElementById("commum-btn");
      const epic = document.getElementById("epicContaniner");
      const legend = document.getElementById("LegendContainer");
      const mitic = document.querySelector("#miticContainer");
      const rare = document.getElementById("rareContainer");

      const commum = document.getElementById("commumContainer");

      showCommum.addEventListener("click", function () {
        if (
          commum.style.display !== "none" ||
          commum.style.display !== "flex"
        ) {
          commum.style.display = "flex";
          mitic.setAttribute("style", "display: none");
          legend.setAttribute("style", "display: none");
          epic.setAttribute("style", "display: none");
          rare.setAttribute("style", "display: none");
        }
      });

      for (let o = 0; o < App.state.commum.length; o++) {
        const commum = App.state.commum[o];
        console.log(commum);
        const els = this.createCard(commum, true);
        console.log(els);
        container.appendChild(els);
      }
    },
    createMenuRight() {
      const header = App.elements.header;

      header.container.text.innerHTML = "MarketPlace";

      App.helpers.style(header.el, {
        fontFamily: "Roboto, sans-serif",
        padding: "20px",
        backgroundColor: "#03022b",
        color: "white",
        fontSize: "25px",
      });

      App.controllers.upadateWalletBalance(App.state.wallet.balance);
      header.container.menuLeft2.wallet.style.display = "none";

      App.helpers.style(header.container.el, {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      });

      App.helpers.style(header.container.menuLeft.el, {});
      App.helpers.style(header.container.menuLeft2.el, {
        display: "flex",
      });
      header.container.menuLeft.login.style.cursor = "pointer";
      header.container.menuLeft.login.style.marginRight = "40px";

      header.container.menuLeft2.sair.style.marginRight = "100px";

      header.container.menuLeft.el.appendChild(header.container.menuLeft.ola);
      header.container.menuLeft.el.appendChild(header.container.menuLeft.login);
      header.container.menuLeft2.el.appendChild(
        header.container.menuLeft2.textSaldo
      );

      header.container.menuLeft2.el.appendChild(
        header.container.menuLeft2.wallet
      );
      header.container.menuLeft2.el.appendChild(
        header.container.menuLeft2.sair
      );
      header.container.el.appendChild(header.container.text);

      header.container.el.appendChild(header.container.filters.el);
      header.container.el.appendChild(header.container.menuLeft.el);
      header.container.el.appendChild(header.container.menuLeft2.el);
      header.el.appendChild(header.container.el);
      App.elements.app.appendChild(header.el);
    },

    createBody() {
      const body = App.elements.body;
      App.helpers.style(body.el, {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      });

      var showMitic = document.getElementById("mitic-btn");
      showMitic.addEventListener("click", function () {
        body.el.setAttribute("style", "justifyContent: flex-start");
      });

      // BOTÃO QUE MOSTRA TODOS OS ITENS, E COMO BUGAVA A POSIÇÃO DOS ITENS QUANDO EU CLICAVA PARA VER TODOS,
      //APÓS ALGUMAS TENTATIVAS SEM SUCESSO EU COLOQUEI UM WINDOW.LOCATION.RELOAD(), COM CERTEZA NÃO É A MELHOR DAS OPÇÕES
      // MAS SERVIU DANDO UM RELOAD NA PÁGINA E VONTANDO TODOS OS ITENS PARA SUAS POSIÇÕES DE ORIGEM

      var showAll = document.getElementById("all-btn");
      showAll.addEventListener("click", function () {
        window.location.reload();
      });

      App.elements.app.appendChild(body.el);
    },
    createComponents() {
      console.log(" Criando Componentes...");

      const els = App.elements;

      els.app.style.width = "100vw";
      els.app.style.height = "100vh";
      els.app.style.display = "flex";
      els.app.style.flexDirection = "column";

      this.createMenuRight();
      els.app.appendChild(els.header.el);

      this.createBody();
      els.app.appendChild(els.body.container.el);
      els.app.appendChild(els.body.container.all);

      console.log(" Componentes Criados...");
    },
  },

  elements: {
    app: document.getElementById("app"),

    header: {
      el: document.createElement("div"),
      container: {
        el: document.createElement("div"),
        text: document.createElement("div"),
        menuLeft: {
          el: document.createElement("div"),
          login: document.getElementById("login"),
          ola: document.getElementById("ola"),
        },
        menuLeft2: {
          el: document.createElement("div"),
          sair: document.getElementById("sair"),
          textSaldo: document.createElement("div"),
          wallet: document.getElementById("wallet"),
        },
        filters: {
          el: document.getElementById("filter-btn-box"),
          itensFiltrados: document.createElement("div"),
        },
      },
    },

    body: {
      el: document.createElement("div"),
      epic: document.getElementById("epicContaniner"),
      btn: document.getElementById("btnCompra"),
      container: {
        el: document.getElementById("miticContainer"),

        all: document.getElementById("all"),
        allCards: [],
      },
      legend: {
        el: document.getElementById("LegendContainer"),
      },
      rare: {
        el: document.getElementById("rareContainer"),
      },
      commum: {
        el: document.getElementById("commumContainer"),
      },
    },
    popupEspada: {
      backdrop: document.createElement("div"),
      container: {
        description: document.createElement("div"),
      },
    },
    popupCompra: {
      backdropCompra: document.createElement("div"),
      container: {
        el: document.createElement("div"),
        compra: {
          el: document.createElement("div"),
          btn: document.createElement("div"),
          text: document.createElement("div"),
          msg: document.getElementById("msg"),
          msgSuccess: document.getElementById("msgSuccess"),
          confirmButtons: {
            el: document.createElement("div"),
            confirm: document.getElementById("confirm"),
            cancel: document.getElementById("cancel"),
          },
        },
      },
    },

    popup: {
      backdropTela: document.createElement("div"),
      container: {
        el: document.createElement("div"),
        close: {
          el: document.createElement("div"),
          btn: document.createElement("div"),
          text: document.createElement("div"),
          divButtons: {
            el: document.createElement("div"),
            log: document.getElementById("in"),
            cadastro: document.getElementById("cadastrar"),
          },
        },
      },
    },
  },

  helpers: {
    zeroPadding(value) {
      return value.toString().padStart(2, "0");
    },
    style(el, rules) {
      for (let prop in rules) {
        console.log("[]...", prop, rules[prop]);
        el.style[prop] = rules[prop];
      }
    },
  },
};

App.init();
