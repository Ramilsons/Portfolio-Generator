function nextPageForm(){
    let allForms = document.querySelectorAll('.form')

    for(let i = 0; i < allForms.length; i++){

        if(allForms[i].classList[1] == 'active'){
            allForms[i+1].classList.add('active')
            allForms[i].classList.remove('active')
            
            break
        }

    }
}


function previousPageForm(){

    let allForms = document.querySelectorAll('.form')

    for(let i = 0; i < allForms.length; i++){

        if(allForms[i].classList[1] == 'active'){
            allForms[i-1].classList.add('active')
            allForms[i].classList.remove('active')

            break
        }

    }
}