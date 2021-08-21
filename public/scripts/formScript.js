// ------------ Geral -------------- //
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


function sendForm(){
    //saveCourse();
    //request(listCourses);
}


function request(data){
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    fetch("/teste", options);
}


// ------------ Courses -------------- //
const listCourses = []
const listProjects = []

function addCourse(){
    if(document.querySelector('.warningCourse')){
        document.querySelector('.warningCourse').remove();
    }
    let nameCourse = document.querySelector("input[name='course']").value;
    let institutionCourse = document.querySelector("input[name='institution']").value;
    let timeCourse = document.querySelector("input[name='time']").value;

    if(nameCourse != "" && institutionCourse != "" && timeCourse != ""){
        let newDivCourse = `
        <div id="course">
            <h4 class="nameCourse">${nameCourse}</h4>
            <p class="institutionCourse">${institutionCourse}</p>
            <span class="timeCourse">${timeCourse}</span>
            <hr>
        </div>`;

        document.querySelector('#allCourse').insertAdjacentHTML('beforeend', newDivCourse);

        closeModal();

        document.querySelector("input[name='course']").value = ""
        document.querySelector("input[name='institution']").value = ""
        document.querySelector("input[name='time']").value = ""   
    }else{
        alert('Preencha todos os campos para conseguir salvar');
    }
}

// -- Modal -- 
let modal = document.querySelector('.modalCourse');
let modalProject = document.querySelector('.modalProject');

function showModalCourse(){
    modal.classList.add('active');
}

function showModalProject(){
    modalProject.classList.add('active');
}

function closeModal(){
    modal.classList.remove('active');
}

function closeModalProject(){
    modalProject.classList.remove('active');
}

// ------------ Projects -------------- //
let skillsProject = []

function addSkill(){
    let input = document.querySelector("input[name='skillsProject']");

    if(input.value != ''){
        skillsProject.push(input.value);

        if(document.querySelector('.spanHidden')){
            document.querySelector('.spanHidden').classList.remove('spanHidden');
        }

        createCard(input.value);
        input.value=""
    }else{
        alert('Por favor, digite a habilidade.');
    }
    
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

let allImages = []
function addProject(){
    if(document.querySelector('.warningProjects')){
        document.querySelector('.warningProjects').remove();
    }

    let nameProject = document.querySelector("input[name='nameProject']");
    let durationProject = document.querySelector("input[name='durationProject']");

    if(nameProject.value != "" && durationProject.value != ""){

        let obj = {
            name: nameProject.value,
            skills: skillsProject,
            duration: durationProject.value,
            image: 'por_enquanto_nada.png'
        }

        listProjects.push(obj);

        let newDivProject = `
        <div id="project">
            <h4 class="nameProject">${nameProject.value}</h4>
            <span class="timeProject">${durationProject.value}</span>
            <hr>
        </div>`;

        document.querySelector('#allProjects').insertAdjacentHTML('beforeend', newDivProject);

        closeModalProject();
        
        nameProject.value = "";
        durationProject.value = "";
        allImages.push(document.querySelector(`input[name="imgProject"]`).value)
        console.log(listProjects);

        obj = {};
        skillsProject = [];
        document.getElementById('allSkills').innerHTML = '';

        //document.querySelector("span[data-js='spanWarning'").classList.add('spanHidden');
        document.querySelector(`input[name="imgProject"]`).value = allImages
    }else{
        alert('Preencha todos os campos para conseguir salvar');
    }
}