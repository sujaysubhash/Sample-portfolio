function validateName(){
    let name=document.getElementById("name").value;
    let regex=/^[a-z ]+$/i//start and end with alphabets , allows spacing, allows multiple occurance, case insensitive.
    if(regex.test(name)){
        document.getElementById("nameMessage").innerHTML= "Verified";
        document.getElementById("nameMessage").style.color= "green";
        return true;//returning true if the name is verified . the value of the function become true.
    }else{
        document.getElementById("nameMessage").innerHTML= "Not verified";
        document.getElementById("nameMessage").style.color= "red";
        return false;
    }
}

function validateNumber(){
    let num=document.getElementById("number").value;
    let regex2=/^[0-9]{10}$/ //start and end with numbers, Muliple occurance is allowed,numbers does not exceed {10}digits.
    if(regex2.test(num)){
        document.getElementById("numberMessage").innerHTML= "Verified";
        document.getElementById("numberMessage").style.color= "green";
        return true;//returning true if the name is verified . the value of the function become true.
    }else{
        document.getElementById("numberMessage").innerHTML= "Not verified";
        document.getElementById("numberMessage").style.color= "red";
        return false;
    }
}

function validateEmail(){
    let email=document.getElementById("email").value;
    //usderid123@gmail.com
    let regex3=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //(1st group) start with alpha and numbers including dot.It should include an @ rates.(2nd group)a-z , and include a . sign,(3rd group) it should include a to z min of 2 and max of 3.
    if(regex3.test(email)){
        document.getElementById("emailMessage").innerHTML= "Verified";
        document.getElementById("emailMessage").style.color= "green";
        return true;//returning true if the name is verified . the value of the function become true.
    }else{
        document.getElementById("emailMessage").innerHTML= "Not verified";
        document.getElementById("emailMessage").style.color= "red";
        return false;
    }
}
function validateAll(){
    validateName();//the value will be true or false inside the validateName function
    validateNumber();
    validateEmail();
            //Each function returns the value true or false.

    if(validateName() && validateNumber() && validateEmail()){// logical && returns true if all the conditions are true.
        return true;
        //if all these functions(validateName,number,email) returns true, if condition works 
        //therefore, if condition returns true to the validateAll function.
    }else{
        return false;
        //if any of the functions returns the value flase, the validateAll function will return false.
    }

}  

//the validate function's are defined first and called inside the validateAll function