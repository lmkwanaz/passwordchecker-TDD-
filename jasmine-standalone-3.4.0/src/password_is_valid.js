
function password_is_valid(a){

    let StrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

   let CheckValidPassword = StrongPassword.test(a);
    try{
        if(CheckValidPassword == false)
            throw new Error (" your password should be a Strong password with one LowerCase,UpperCase and Number, `9` characters above");        
        }
    catch(err){
        console.log("you have an "+err);
    }
    return CheckValidPassword;
}
