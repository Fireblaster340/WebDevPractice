
function Change() {
    document.getElementById("maintext").innerHTML = "Whoa!"
    document.getElementById("buttontext").innerHTML = "You pressed me!"
    document.getElementById("top").innerHTML = "Click the button at the botom to change the ttext below!"
    newText = "<u>Updated Wow!</u>"

}

    //prompt("Hi, enter absolutely anything, I really don't care")

let k = false;
let b = new Date();
b.setTime(b.getTime()+(30*24*60*60*1000))
function IncrementCookie(){
    document.cookie = document.cookie = "clicks="+(clicks+1)+"; expires="+b.toUTCString()+"; path=/";
    clicks= Number(clicks)+1
   

}
if (document.cookie.includes("clicks=")==false){
    document.cookie = "clicks=0; expires="+b.toUTCString()+"; path=/";
}
let clicks = Number(document.cookie.match(/\d+/))
console.log(document.cookie.match(/\d+/))
let newText= "<b>Well... </b>"

function Reset(){
    document.cookie = "clicks=0; expires="+b.toUTCString()+"; path=/"
}
function SwitchVar(){
    IncrementCookie()
    alert(document.cookie)
    /*if (confirm("Are you sure?") == false) {
        return 0;
    }
        */
    if (k==true ) {
        document.getElementById("buttonsubmit").innerHTML = newText
        k=false
    } else {
        document.getElementById("buttonsubmit").innerHTML = "<em>Whooa</em>"
        k=true
}}
