function nextPageForm(){
    let allForms = document.querySelectorAll('.form');

    for(let i = 0; i < allForms.length; i++){

        if(allForms[i].classList[1] == 'active'){
            allForms[i+1].classList.add('active');
            allForms[i].classList.remove('active');
            
            break;
        }

    }
}


function previousPageForm(){

    let allForms = document.querySelectorAll('.form');

    for(let i = 0; i < allForms.length; i++){

        if(allForms[i].classList[1] == 'active'){
            allForms[i-1].classList.add('active');
            allForms[i].classList.remove('active');

            break; 
        }

    }
}


function addSkill(){
    let input = document.querySelector("input[name='skillsProject']");


    if(document.querySelector('.spanHidden')){
        document.querySelector('.spanHidden').classList.remove('spanHidden');
    }

    createCard(input.value);
}


function createCard(text){
    let sectionAllSkills = document.getElementById('allSkills');

    let cardSkill = document.createElement('p');
    cardSkill.setAttribute('class', 'cardSkill');
    cardSkill.setAttribute('role', 'button');
    cardSkill.textContent = text;

    sectionAllSkills.insertAdjacentElement('beforeend', cardSkill);
    cardSkill.setAttribute('onclick', 'removeSkill(event)');
}


function removeSkill(e){
    document.getElementById('allSkills').removeChild(e.target);
}

let listCourses = ['a', 'b'];

function addInputsEducation(){
    let numberOfCourses = document.querySelector('#allCourse').children.length;
 
    let newDivCourse = `<div id="course${numberOfCourses+1}">
        <input type="text" name="course${numberOfCourses+1}" placeholder="Nome do curso" >
        <input type="text" name="institution${numberOfCourses+1}" placeholder="Instituição" >
        <input type="text" name="time${numberOfCourses+1}" placeholder="Duração" >
    </div>`;

    if(document.querySelector(`input[name="course${numberOfCourses}"]`).value != "" && document.querySelector(`input[name="institution${numberOfCourses}"]`).value != "" && document.querySelector(`input[name="time${numberOfCourses}"]`).value != "" ){
        
        saveCourse();

        document.querySelector('#allCourse').insertAdjacentHTML('beforeend', newDivCourse);

        console.log(listCourses);
    }else{
        alert('Preencha todos os campos!');
    }
}

function saveCourse(){
    let numberOfCourses = document.querySelector('#allCourse').children.length;

    listCourses.push({
        "nameCourse": document.querySelector(`input[name="course${numberOfCourses}"]`).value,
        "institutionCourse": document.querySelector(`input[name="institution${numberOfCourses}"]`).value,
        "timeCourse": document.querySelector(`input[name="time${numberOfCourses}"]`).value
    });
}
  

function sendForm(){
    saveCourse()
}

let aaa = 3

export default aaa;
