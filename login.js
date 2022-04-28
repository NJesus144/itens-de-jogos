





       
      let btn = document.querySelector('.fa-eye')
      btn.addEventListener('click', () => {
          let inputSenha = document.querySelector('#userSenha')
           
          if(inputSenha.getAttribute('type') == 'password'){
              inputSenha.setAttribute('type', 'text')
          } else {
              inputSenha.setAttribute('type', 'password')
          }
      
        })


function entrar(){
  let usuario = document.querySelector('#userInput')
  let spanUsuario = document.querySelector('#spanUsuario')
 
  let senha = document.querySelector('#userSenha')
  let spanSenha = document.querySelector('#spanSenha')

  

  let listaUser = []

  let userValid = {
       nome: '',
       user: '',
       senha: '',
  }
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) =>{
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
        userValid = {
            
            user: item.userCad,
            senha: item.senhaCad,
            ID: item.idCad,
        }

      }
  })
    if(usuario.value == userValid.user && senha.value == userValid.senha && usuario.value !== '' && senha.value !== ''){
        window.location.href = 'http://127.0.0.1:5501/project2.html'
    
     localStorage.setItem('userLogado', JSON.stringify(userValid))
    }else {
        spanUsuario.setAttribute('style', 'color: red')
        spanSenha.setAttribute('style', 'color: red')
        spanSenha.setAttribute('style', 'color: red')
        msgError.classList = 'msgError'
        msgError.innerHTML = 'Usuário ou senha inválido!'
        usuario.focus()
    }

}



  const App = {
    init () {
        console.log("Iniciando Sistema...")
        this.controllers.createComponents()
      
        console.log("Sistema iniciado...")
    },
    state: {},

    controllers: {
           

    
        createComponents() {
            console.log(" Criando Componentes...")
           

            const body = App.elements.body
          
            App.helpers.style(body.el, { 
                fontFamily: 'sans-serif',
                display: "flex",
               justifyContent: "center",
               width: "100%",
               marginTop: "150px",
            })
                       
          
             App.helpers.style(body.container.el, { 
                 backgroundColor: "#ffffff80",
                 padding: "60px 40px 50px " ,
                 
                 borderRadius: "4%",
                 boxShadow: "3px 3px 1px 1px  #00000030",
                 textAlign: "center",
                 color: "#078077",
               
             })
                             
             App.helpers.style(body.container.campoUsuario.spanUsuario, {
                 color: "#FF4500", textShadow: "2px 2px 6px black",
             })
                 
            
           App.helpers.style(body.container.campoUsuario.usuario, 
            { 
                 padding: "8px 8px" ,
             display: "inline-block",
             borderRadius: "5px",           
             border: "1px solid black",
             backgroundColor: "transparent",
            outline: "none",    
            fontSize: "16px",
            minWidth: "100%",
         
        })
                                 
          
       
       

        
App.helpers.style(body.container.campoSenha.spanSenha, 
    {
        color: "#FF4500",
        textShadow: "2px 2px 6px black",
                  
    })
    body.container.campoSenha.spanSenha.innerHTML = "Senha"
   
    App.helpers.style(body.container.campoSenha.el, { 
        position: "relative"  })
         

             App.helpers.style(body.container.campoSenha.senha, {                
            padding: "8px 8px" ,
             display: "inline-block",
             borderRadius: "5px",           
             border: "1px solid black",
             backgroundColor: "transparent",
            outline: "none",    
            fontSize: "16px",
            minWidth: "100%",
            })
                   
            body.container.campoSenha.senha.type = "password"
                        

            App.helpers.style(body.container.campoSenha.eye, {
                position: "absolute",
                top: "29px",
                right: "10px",
                color: "black",
                cursor: "pointer"
       
            })   
                   

  App.helpers.style(body.container.button.buttonEntrar,{ 
      padding: "5px",
   height: "30px",
    width: "80px",
    backgroundColor: "#7120D7",
    marginTop: "15px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#FCB045",
    cursor: "pointer",
})
var btn3 = document.querySelector("#button")

btn3.addEventListener("mouseover", function(){
   this.style.backgroundColor = "#FCB045";
   this.style.color = "#800080";
    this.style.transition = "all .3s ease-out";

});
btn3.addEventListener("mouseout", function(){
    this.style.backgroundColor = "#7120D7";
    this.style.color = "#FCB045";
 });

    body.container.button.buttonEntrar.innerHTML = "Entrar"

          body.container.criarConta.criar.innerHTML = "<p>Não tem uma conta? <a href='http://127.0.0.1:5500/cadastro.html'>Cadastre-se</a></p>"
         body.container.criarConta.criar.style.color= "black"

             body.container.el.appendChild(body.container.msgError)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.eye)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.spanSenha)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.senha)
       
        body.container.campoUsuario.el.appendChild(body.container.campoUsuario.spanUsuario)
        body.container.campoUsuario.el.appendChild(body.container.campoUsuario.usuario)
        body.container.el.appendChild(body.container.campoUsuario.el)
        body.container.el.appendChild(body.container.campoSenha.el)
        body.container.button.el.appendChild(body.container.button.buttonEntrar)
       
        body.container.el.appendChild(body.container.button.el)
       body.container.el.appendChild(body.container.criarConta.criar)
        body.el.appendChild(body.container.el)
        App.elements.app.appendChild(body.el)
        
         console.log(" Componentes Criados...")
        },
        
       
    
   
    },

    elements: {        
        app:document.getElementById("app"),

        body:{
            el:document.createElement("div"),
            container:{
                el:document.createElement("div"),
                card:document.createElement("div"),
                msgError:document.getElementById("msgError"),
                campoUsuario: {
                   el:document.createElement("div"),
                   
                    usuario: document.getElementById("userInput"),
                    spanUsuario: document.getElementById("spanUsuario"),
                },
                campoSenha: {
                    el:document.createElement("div"),
                    senha: document.getElementById("userSenha"),
                    spanSenha: document.getElementById("spanSenha"),
                    eye:document.getElementById("fa-eye"),
                },
                button: {
                    el:document.createElement("div"),
                    buttonEntrar:document.getElementById("button")
                },
                criarConta: {
                    criar:document.createElement("div"),          
                },
            

            },
            
        },
        
       
    },
  
        helpers: {
            zeroPadding(value) {
               return value.toString().padStart(2, "0")
             }, 
             style(el, rules) {
               for( let prop in rules) {
                 console.log("[]...", prop, rules[prop])
                 el.style[prop] = rules[prop]
               }
             },
             
          

           },



    
}


App.init()
