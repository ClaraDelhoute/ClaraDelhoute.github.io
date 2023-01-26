
function updateTextInput(val,type)
{
  
  if(type=="sonPrincipal")
  {
    document.getElementById("textInput").value=val; 
  }
  else if(type=="volumeEffetSonore")
    {
    document.getElementById("textInputEffet").value=val; 
    }
  else if(type=="volumeMusique")
        {
    document.getElementById("textInputMusique").value=val;
        }
}


