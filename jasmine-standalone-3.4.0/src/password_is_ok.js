function password_is_ok(a){
    try{
        var specialcharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var check_them = specialcharacters.test(a)
        var check_Number = /[0123456789]/.test(a);
       
        if(a.length == 0){
            
             console.log("you can't leave this field empty");
             return false;

        }else if(a.length >= 8){
    
            for(var i=0;i< a.length; i++){
            
                let Upper = a[i] === a[i].toUpperCase() 
                &&  a[i] !== a[i].toLowerCase();
        
                if(Upper){
    
                    return true;
                    
                }
            }
            return false;
        }else if(a.length >= 8){
            for(var i=0;i< a.length; i++){
            
                let Lower = a[i] !== a[i].toUpperCase() 
                &&  a[i] === a[i].toLowerCase();
        
                if(Lower){
    
                    return true;

                }
            }
            return false;
        }else if(a.length >= 8){
    
            if(check_Number){
                return true;
            }
            return false;
        }else if(a.length >= 8){
    
            if(check_them){
                return true;
            }
            
            return false;
        }else{

                console.log("your password should be 8 characters or more and must have at least  special character/Number/Lower,Upper case");
                return false;
        }
    }
        catch(err){           
         console.log("something went wrong "+err);
            }
    }

    password_is_ok("Lwandile1")