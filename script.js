let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let Div=document.createElement("div")
Div.setAttribute("class","main2 dark")
Div.setAttribute("id","Main1")
let a=""
let f=""
let s=[]
function Data(){
 if(test.length==0){
  alert("you have cleard all the history")
 }else{
  let Button=document.createElement("button")
Button.setAttribute("id","back")
Button.setAttribute("onclick","back()")
Button.setAttribute("class"," fa fa-arrow-left")
Div.append(Button)
  for (let i=0;i<test.length;i++){
    document.getElementById("Cal").style.display="none"
    let h1=document.createElement("h1")
    h1.textContent=test[i]
    Div.append(h1)
    document.body.append(Div)
  }
}
}
function back(){
  document.getElementById("Cal").style.display="block"
  Div.innerHTML=""
  Div.remove()
}
buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      a+=","
      a=""
      test=""
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
     
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
      f=eval(display.innerText)
      a+="="+eval(display.innerText)+","+f
      test=a.split(",");
      test.pop();
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
    
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
      a+=item.id
    }
    
  };
});
console.log(a)
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};