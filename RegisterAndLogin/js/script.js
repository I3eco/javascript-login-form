'use strict'
// variables:
var mainDivTags = {
        leftDiv: document.createElement('div'),
        form: document.createElement('form'),
        login: document.createElement('p'),
        nameText: document.createElement('p'),
        name: document.createElement('input'),
        namePassword: document.createElement('p'),
        password: document.createElement('input'),
        btnSubmit: document.createElement('div'),
        rightDiv: document.createElement('div'),
        btnRegister: document.createElement('div')
};
var secondDivTags = {
        form: document.createElement('form'),
        nameText: document.createElement('p'),
        name: document.createElement('input'),
        namePassword: document.createElement('p'),
        password: document.createElement('input'),
        nameEmail: document.createElement('p'),
        email: document.createElement('input'),
        nameSex:  document.createElement('p'),
        male: document.createElement('span'),
        sexMale: document.createElement('input'),
        female: document.createElement('span'),
        sexFemale: document.createElement('input'),
        btnConfirm: document.createElement('div'),
        btnClose: document.createElement('div')
    };
var loginPerson = {
        name: "",
        password: ""
    };
var createPerson = {
        name: "",
        password: "",
        email: "",
        sex: ""
    };
var jsonPerson, mainDiv, secondDiv, thirdDiv;

//functions:
function sexCheck() {
    if(secondDivTags.sexMale.checked){
        return secondDivTags.sexMale.value;
    }
    else if (secondDivTags.sexFemale.checked){
        return secondDivTags.sexFemale.value;
    }
}

//create main Div containers and set IDs:
mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main');
secondDiv = document.createElement('div');
secondDiv.setAttribute('id', 'second');

//set Attributes of HTML tags:
mainDivTags.name.setAttribute('type', 'text');
mainDivTags.password.setAttribute('type', 'password');
mainDivTags.name.setAttribute('placeholder', 'Name');
mainDivTags.password.setAttribute('placeholder', 'Password');
mainDivTags.form.setAttribute('id', 'main-form');
mainDivTags.leftDiv.setAttribute('class', 'inline left-div');
mainDivTags.rightDiv.setAttribute('class', 'inline right-div');
mainDivTags.btnSubmit.setAttribute('class','btn');
mainDivTags.btnRegister.setAttribute('class','btn');
secondDivTags.form.setAttribute('id', 'second-form');
secondDiv.setAttribute('class', 'hide');
secondDivTags.name.setAttribute('type', 'text');
secondDivTags.name.setAttribute('placeholder', "Name");
secondDivTags.password.setAttribute('type', 'password');
secondDivTags.password.setAttribute('placeholder', "Password");
secondDivTags.email.setAttribute('type', 'email');
secondDivTags.email.setAttribute('placeholder', 'Email');
secondDivTags.sexMale.setAttribute('type', 'radio');
secondDivTags.sexMale.setAttribute('value', 'male');
secondDivTags.sexMale.setAttribute('name', 'sex');
secondDivTags.sexFemale.setAttribute('type', 'radio');
secondDivTags.sexFemale.setAttribute('value', 'female');
secondDivTags.sexFemale.setAttribute('name', 'sex');
secondDivTags.sexMale.checked = true;
secondDivTags.btnConfirm.setAttribute('class', 'btn');
secondDivTags.btnClose.setAttribute('class', 'btn close');
mainDivTags.login.setAttribute('class', 'login');
mainDivTags.btnRegister.setAttribute('class', 'btn floating');


//append Tags to parents:
document.body.appendChild(mainDiv);
document.body.appendChild(secondDiv);
mainDiv.appendChild(mainDivTags.leftDiv);
mainDiv.appendChild(mainDivTags.rightDiv);
mainDivTags.leftDiv.appendChild(mainDivTags.login)
mainDivTags.leftDiv.appendChild(mainDivTags.form);
for(var p in mainDivTags) {
    if(p.localeCompare("leftDiv") != 0
        && p.localeCompare("form") != 0
        && p.localeCompare("login") != 0
        && p.localeCompare("rightDiv") != 0
        && p.localeCompare("btnRegister") != 0){
        mainDivTags.form.appendChild(mainDivTags[p]);
    }
    else if (p.localeCompare("btnRegister") === 0) {
        mainDivTags.rightDiv.appendChild(mainDivTags[p]);
    }
}
secondDiv.appendChild(secondDivTags.form);
for(var p in secondDivTags){
    if(p != 'form'){
        secondDivTags.form.appendChild(secondDivTags[p]);
    }
}

//add innerText to tags:
mainDivTags.login.innerText = "Login:";
mainDivTags.nameText.innerText = "Name: ";
mainDivTags.namePassword.innerText = "Password: ";
mainDivTags.btnSubmit.innerText = "Submit";
mainDivTags.btnRegister.innerText = "Register";
secondDivTags.male.innerText = "Male";
secondDivTags.female.innerText = "Female";
secondDivTags.nameText.innerText = "Enter your full name:";
secondDivTags.nameEmail.innerText = "Please enter your email:";
secondDivTags.namePassword.innerText = "Create your password:";
secondDivTags.nameSex.innerText = "Choose your sex:";
secondDivTags.btnConfirm.innerText = "Confirm";
secondDivTags.btnClose.innerText = "X";

//events:
mainDivTags.btnSubmit.addEventListener('click', function(){
    if(mainDivTags.name.value != "" && mainDivTags.password.value != ""){
        loginPerson.name = mainDivTags.name.value;
        loginPerson.password = mainDivTags.password.value;
        jsonPerson = JSON.stringify(loginPerson);
        mainDivTags.name.value = "";
        mainDivTags.password.value = "";
        if (loginPerson.name.localeCompare(createPerson.name) === 0
            && loginPerson.password.localeCompare(createPerson.password) === 0) {
            thirdDiv = document.createElement('div');
            thirdDiv.setAttribute('id', 'third');
            mainDivTags.rightDiv.appendChild(thirdDiv);
            thirdDiv.innerText = "Your personal content";
        }
        else {
            alert("Incorrect data!!! Try to register");
        }
    }
    else {
        alert('Please enter your data');
    }
});
mainDivTags.btnRegister.addEventListener('click', function(){
    mainDiv.setAttribute('class', 'hide');
    secondDiv.removeAttribute('class');
});
secondDivTags.btnConfirm.addEventListener('click',function() {
    if(secondDivTags.name.value != ""
        && secondDivTags.password.value != ""
        && secondDivTags.email.value != ""){
        createPerson.name = secondDivTags.name.value;
        createPerson.password = secondDivTags.password.value;
        createPerson.email = secondDivTags.email.value;
        createPerson.sex = sexCheck();
        jsonPerson = JSON.stringify(createPerson);
        secondDiv.setAttribute('class', 'hide');
        mainDiv.removeAttribute('class');
        secondDivTags.name.value = "";
        secondDivTags.password.value = "";
        secondDivTags.email.value = "";
        secondDivTags.sexMale.checked = true;
    }
    else {
        alert('Please enter your data');
    }
});
secondDivTags.btnClose.addEventListener('click', function(){
    secondDiv.setAttribute('class', 'hide');
    mainDiv.removeAttribute('class');
});
