let i;
function Change() {
    let j = 3, a = 4;
    document.getElementById("maintext").innerHTML = "Whoa!"+j
    document.getElementById("buttontext").innerHTML = "You pressed me!"
    document.getElementById("top").innerHTML = "Click the button at the botom to change the ttext below!"
    newText = "<u>Updated Wow!</u>"

}
let k = false;
let b = new Date();
b.setTime(30*24*60*60*1000)
document.cookie = "clicks=99; expires="+b.toUTCString()+"; path=/";
alert(document.cookie)
let newText= "<b>Well... </b>"
function SwitchVar(){
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
    }
    //prompt("Hi, enter absolutely anything, I really don't care")
}