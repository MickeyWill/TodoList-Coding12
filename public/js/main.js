var ul = document.getElementById('list all');
var input = document.getElementById('input-task');
var msgErreur = document.getElementsByTagName('span')[0];
var add = document.getElementById('add-task');

add.setAttribute("type", "button");

// AJOUTER UNE TÂCHE

add.addEventListener('click', () => {
  if (input.value != '') {
    var newLi = document.createElement('li');
    ul.appendChild(newLi)[0];
    var divicones = document.createElement('div');

    newLi.innerText = input.value;
    input.value = "";
    
    newLi.style.display = 'flex';
    newLi.style.alignItems = 'center';
    newLi.style.padding = '25px';
    newLi.style.fontWeight = 'bold';
    newLi.style.backgroundColor = "lightgray";
    newLi.style.justifyContent = 'space-between'
    msgErreur.classList.add("display-none");
    
    newLi.appendChild(divicones)

    // ICONES 'CHECKED'
    var icones1 = document.createElement('i');
    icones1.setAttribute('class', 'far fa-2x fa-check-circle');
    divicones.appendChild(icones1);
    icones1.style.margin = '10px';
    icones1.style.color = 'blue';

    icones1.addEventListener('click', () => {
      if (newLi.style.backgroundColor === 'green'){
        newLi.style.backgroundColor = 'lightgray';
      } else {
        newLi.style.backgroundColor = 'green';
      }

    })
    
    // ICONES 'EDIT'
    var icones2 = document.createElement('i');
    icones2.setAttribute('class', 'far fa-2x fa-edit');
    divicones.appendChild(icones2);
    icones2.style.margin = '10px';
    icones2.style.color = 'yellow';

    icones2.addEventListener('click', () => {
      var newInput = document.createElement('input');
      newInput.value = newLi.innerText; 
      newLi.innerText=''
      newLi.appendChild(newInput)

      divicones.style.display = 'none';
      
      var icones4 = document.createElement('i');
      icones4.setAttribute('class', 'far fa-2x mr-5 fa-save text-warning');
      newLi.appendChild(icones4);
      
      icones4.addEventListener('click', () => {
        newLi.innerText = newInput.value;
        newLi.appendChild(divicones);
        divicones.style.display = 'block';
      })
    })
    
    // ICONES 'DELETE'
    var icones3 = document.createElement('i');
    icones3.setAttribute('class', 'far fa-2x fa-trash-alt');
    divicones.appendChild(icones3);
    icones3.style.margin = '10px';
    icones3.style.color = 'red';

    icones3.addEventListener('click', () => {
      newLi.remove();
    })

  } else {
    msgErreur.classList.remove("display-none");
  } 

  // FILTRES
  
  var tout = document.getElementsByClassName('btn')[3];
  var afaire = document.getElementsByClassName('btn')[2];
  var fini = document.getElementsByClassName('btn')[1];
  
  tout.addEventListener('click', () => {
    switch (newLi.style.backgroundColor){
      case 'lightgray':
        ul.appendChild(newLi)
        break;
      case 'green':
        ul.appendChild(newLi)
        break;
      default:

        break;

    }
  })
  
  afaire.addEventListener('click', () => {
    switch (newLi.style.backgroundColor){
      case 'green':
        ul.removeChild(newLi);
        break;
      default: 
        ul.appendChild(newLi);
        break;
    }
  })
  
  fini.addEventListener('click', () => {
    switch (newLi.style.backgroundColor){
      case 'lightgray':
        ul.removeChild(newLi)
        break;
      default:
        ul.appendChild(newLi)
      break;
    }  
  })

})

