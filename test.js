var userName = document.getElementById("name")
var email = document.getElementById("email" )
var sign_Up = document.getElementById("submit") 
let message = document.querySelector(".message")
let password = document.querySelector("#password")
let conf= document.querySelector("#confirm")
let showmsg = document.getElementById("showmsg")
let ckeckConf = document.getElementById("ckeckConf")


// let m = "Chaabenim318@gmail.com"
let m = "8@l.com"

var regex = /\w@\w.(com | net) /g

let dot = /./g
let word = /[a-z].@/ig

console.log(m.match(dot))
console.log(regex.test(m))

sign_Up.addEventListener( 'click' , check_empty )

// let validtion = regex.match(email.value)

function check_empty () {
        if( userName.value === "" ){
            message.innerHTML = "ekteb 7aja"
        }else if (email.value === "" ) {
            message.innerHTML = "ekteb 7aja"
        } else if ( password.value === "" ) {
            message.innerHTML = "ekteb 7aja"
        }else if (conf.value === "" ) {
            message.innerHTML = "ekteb 7aja"
        }else {
            message.innerHTML = ""
    
            // checkEmail()
            checkConfirm()
        }
    }
    
    
    function checkEmail() {
        
    }
    
    function checkConfirm(){
        if( password.value === conf.value ){
            ckeckConf.innerHTML = "oumourk wadh7a"
        }else{
            ckeckConf.innerHTML = "this is a false confirm"
        }
    }
    