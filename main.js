
var i = 0;

var updatedImage = ["Papa.jpeg","Sister.jpeg","Me.jpeg","Mummy.jpeg"];

var updatedName = ["Ajay Agiwal","Aaradhyaa Agiwal","Lakshya Agiwal","Manisha Agiwal"] ;
function update()
{
  document.getElementById("family_member_image").src = updatedImage[i];
  document.getElementById("family_member_name").innerHTML = updatedName[i];
    i++;
    if (i>3){
      i=0;
    }
   
   
         
    
    
   
 
    
}
