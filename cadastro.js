

let senha = document.querySelector('#validarSenha')
let labelSenha = document.querySelector('#labelSenha')


     senha.addEventListener('keyup', ()=> {
     if(senha.value.length <= 7){
         labelSenha.setAttribute('style', 'color:red')
         labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
         
     } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = '<strong>Senha</strong>'
       
    }
 })

// ######## CONFIRMAR SENHA ########
 let confirmSenha= document.querySelector('#confirma')
 let spanConfirma = document.querySelector('#spanConfirma')
 //let validspanConfirmSenha = false

      confirmSenha.addEventListener('keyup', ()=> {
      if(senha.value != confirmSenha.value){
          spanConfirma.setAttribute('style', 'color:red','fontWeight') 
          spanConfirma.innerHTML='Confirmar Senha *As senhas não conferem'
          
      } else {
         spanConfirma.setAttribute('style', 'color: green', )
         spanConfirma.innerHTML = 'Senhas conferem'
      }
  })

//   ##### VALIDANDO CADASTRO ######
const usuarioInput = document.querySelector("#validUsuario");
const senhaInput = document.querySelector("#validarSenha");
const confirmInput = document.querySelector("#confirma");
const emailInput = document.querySelector("#email");
const idInput = document.querySelector("#btnID");

const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector('#msg')
const msgSuccess = document.querySelector('#msgSuccess')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const usuarioValue = usuarioInput.value;
    const senhalValue = senhaInput.value;
    const confirmValue = confirmInput.value;
    const emailValue = emailInput.value;
    const idValue = idInput.value;

    if(usuarioValue && senhalValue && confirmValue && emailValue && idValue && senhalValue == confirmValue) {
   
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

      listaUser.push(
          {
              userCad: validUsuario.value,
              emailCad: email.value,
              senhaCad: senha.value,
              idCad: btnID.value,
          }
         )
   
         localStorage.setItem('listaUser', JSON.stringify(listaUser))
         msgSuccess.classList = "msgSuccess";
         msgSuccess.textContent = "Cadastrando usuário..."  
         errorMessage.innerHTML = "";
         errorMessage.classList = "";
        
        
        setTimeout(()=>{
            window.location.href = "http://127.0.0.1:5501/login.html"
        }, 3000)
      
       
        
    } else {
        errorMessage.textContent = "Por favor, preencha todos os campos corretamente!"
        errorMessage.classList = "error";        
        
 }



})



   let btn = document.querySelector('.fa-eye')
   btn.addEventListener('click', () => {
       let inputSenha = document.querySelector('#senha')
        
       if(inputSenha.getAttribute('type') == 'password'){
           inputSenha.setAttribute('type', 'text')
       } else {
           inputSenha.setAttribute('type', 'password')
       }
   
     })
    
     let btnn = document.querySelector('#eye')
     btnn.addEventListener('click', () => {
         let confirmSenha = document.querySelector('#confirmSenha')
          
         if(confirmSenha.getAttribute('type') == 'password'){
             confirmSenha.setAttribute('type', 'text')
         } else {
             confirmSenha.setAttribute('type', 'password')
         }
     
       })


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
                 width: "450px",
                 padding: "30px",
                 borderRadius: "4%",
                 boxShadow: "3px 3px 1px 1px  #00000030",
                 textAlign: "center",
                 color: "#4b0082",
                  
             })
                 body.container.el.innerHTML = "<h1>Cadastrar<h1>"
                             
             App.helpers.style(body.container.campoUsuario.spanUsuario, {
                 color: "c#7120D7", textShadow: "1px 1px 10px black"
             })
                 body.container.campoUsuario.spanUsuario.innerHTML = "Usuario"
             
         
              App.helpers.style(body.container.campoUsuario.usuario, 
            { 
              padding: "8px 8px",
            border: "1px solid black",
            borderRadius: "5px",
              backgroundColor: "transparent",
              outline: "none",
               minWidth: "100%",
              fontSize: "16px",            
        })

       

        App.helpers.style(body.container.email.enterEmail, {
            padding: "8px 8px",
            borderRadius: "5px",
            border: "1px solid black",
              backgroundColor: "transparent",
              outline: "none",
               minWidth: "100%",
              fontSize: "16px",
             
        })
        body.container.email.enterSpanemail.innerHTML = "Email"   
        App.helpers.style(body.container.email.enterSpanemail, {color:" c#7120D7", textShadow: "1px 1px 10px black"  })                   
          
       
       
//   ##### SENHA #######
        
App.helpers.style(body.container.campoSenha.spanSenha, 
    {
        color: "c#7120D7",
        marginLeft: "10px",
        textShadow: "1px 1px 10px black"
              
    })
    body.container.campoSenha.spanSenha.innerHTML = "Senha"
    body.container.campoSenha.spanSenha.id = "labelSenha"
   
   
    App.helpers.style(body.container.campoSenha.el, { 
       position: "relative"
    })
         

             App.helpers.style(body.container.campoSenha.senha, 
      {      
             paddingLeft: "20px",
             padding: "8px 8px" ,
             display: "inline-block",           
             minWidth: "100%",
             border: "1px solid black",
             backgroundColor: "transparent",
            outline: "none",    
            fontSize: "16px",
            borderRadius: "5px",
            
            })

            // body.container.campoSenha.senha.id = "validacao"
            body.container.campoSenha.senha.id = "senha"
            body.container.campoSenha.senha.type = "password"
     
              
         
           App.helpers.style(body.container.confirmSenha.confirmSenha2,{
            padding: "8px 8px" ,
            display: "inline-block",   
            borderRadius: "5px",        
            minWidth: "100%",
            border: "1px solid black",
            backgroundColor: "transparent",
           outline: "none",    
           fontSize: "16px",
           
           
           }) 

           App.helpers.style(body.container.confirmSenha.el, { position: "relative"})
           App.helpers.style(body.container.confirmSenha.eyee, {
            position: "absolute",
            top: "30px",
            right: "20px",
            color: "black",
            cursor: "pointer"
   
        })

           body.container.confirmSenha.confirmSenha2.id = "confirmSenha"
           body.container.confirmSenha.confirmSenha2.type = "password"
            body.container.confirmSenha.spanComfirmsenha.innerHTML = "Confirme Senha"
            
         
         
            App.helpers.style(body.container.confirmSenha.spanComfirmsenha, {color: "c#7120D7", textShadow: "1px 1px 10px black",
            marginRight: "15px"  })                
           
            App.helpers.style(body.container.id.idBttun,{
                 padding: "8px 8px" ,
                display: "inline-block",           
                minWidth: "100%",
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "transparent",
               outline: "none",    
               fontSize: "16px",
              
            })
            body.container.id.IdGame.innerHTML = "ID da sua conta no jogo"
            App.helpers.style(body.container.id.IdGame, {color: "c#7120D7", textShadow: "1px 1px 10px black",})




  App.helpers.style(body.container.button.buttonEntrar,{ 
      padding: "5px",
   height: "35px",
    width: "150px",
    marginTop: "15px",  
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#7120D7",
    
  

})
     App.helpers.style(body.container.campoSenha.eye, {
         position: "absolute",
         top: "30px",
         right: "20px",
         color: "black",
         cursor: "pointer"

     })
                                                             

     body.container.el.appendChild(body.container.msgSuccess)
     body.container.el.appendChild(body.container.msgError)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.spanSenha)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.senha)
        body.container.campoSenha.el.appendChild(body.container.campoSenha.eye)

        body.container.campoUsuario.el.appendChild(body.container.campoUsuario.spanUsuario)
        body.container.campoUsuario.el.appendChild(body.container.campoUsuario.usuario)
     
        body.container.confirmSenha.el.appendChild(body.container.confirmSenha.eyee)
        body.container.confirmSenha.el.appendChild(body.container.confirmSenha.spanComfirmsenha)
        body.container.confirmSenha.el.appendChild(body.container.confirmSenha.confirmSenha2)
    
     body.container.email.el.appendChild(body.container.email.enterSpanemail)
      body.container.email.el.appendChild(body.container.email.enterEmail)
      
      
      
        body.container.el.appendChild(body.container.campoUsuario.el)
        body.container.el.appendChild(body.container.email.el)
       
        body.container.el.appendChild(body.container.campoSenha.el)
        body.container.el.appendChild(body.container.confirmSenha.el)
     
       
        body.container.el.appendChild(body.container.id.IdGame)
        body.container.el.appendChild(body.container.id.idBttun)
        body.container.el.appendChild(body.container.id.el)

        body.container.button.el.appendChild(body.container.button.buttonEntrar)
        body.container.el.appendChild(body.container.button.el)
       
     
       
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
                msgError:document.getElementById("msg"),
                msgSuccess:document.getElementById("msgSuccess"),
                campoUsuario: {
                   el:document.createElement("div"),
                    usuario: document.getElementById("validUsuario"),
                    spanUsuario: document.getElementById("labelUsuario"),
                    
                },

                email:{
                    el:document.createElement("div"),
                    enterEmail:document.getElementById("email"),
                    enterSpanemail:document.getElementById("spanEmail"),
                },
                campoSenha: {
                    el:document.createElement("div"),
                    senha: document.getElementById("validarSenha"),
                    spanSenha: document.getElementById("labelSenha"),
                    eye:document.getElementById("fa-eye"),
                },
                    confirmSenha: {  
                            el:document.createElement("div"),
                            confirmSenha2:document.getElementById("confirma"),
                            spanComfirmsenha: document.getElementById("spanConfirma"),
                            eyee:document.getElementById("eye"),
                     },

                     id:{
                         el:document.createElement("div"),
                         idBttun:document.getElementById("btnID"),
                         IdGame: document.createElement("span"),

                     },

                
                button: {
                    el:document.createElement("div"),
                    buttonEntrar:document.getElementById("submit-button")
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