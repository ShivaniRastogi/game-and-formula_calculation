var C=50,H=30,D=[],Q=[];



var val= prompt("enter value of D:");

var d= val.split(",");

for(var i=0;i<d.length;i++)
{    
    
    D=parseInt(d[i]);
   
    Q[i]=parseInt(Math.sqrt((2*C*D)/H));  
}
  
document.write(String(Q));


