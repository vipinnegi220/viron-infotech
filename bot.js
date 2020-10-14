function fun1() {

  
var x=document.getElementById("va1").value;

 
var para=document.createElement('div');
var text = document.createTextNode(x);
para.appendChild(text);
para.value=text;
para.setAttribute("class","reply");

document.getElementById("print").appendChild(para);

document.getElementById("va1").value="";
if(para.textContent=="hello")
{
  

 
  var para1=document.createElement('div');
  var text1 = document.createTextNode("hii");
  para1.appendChild(text1);
  para1.value=text1;
  para1.setAttribute("class","querry");
  
  document.getElementById("print").appendChild(para1);
}
}