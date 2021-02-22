function passaSeguentJPC(objRebut){
  debugger;
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
    
    amagaElement(idObjPregAct);
    mostraElement(idObjPregSeg);

  }


  function mostraElement(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleJPC");
    document.getElementById(idRebut).classList.remove("elementOcultJPC");
  }
  
  function amagaElement(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleJPC");
    document.getElementById(idRebut).classList.add("elementOcultJPC");
  }