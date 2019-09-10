function password_is_ok(a){
    try{
        if(a.length == 0){
            
             console.log("you can't leave this field empty");
             return false;

        }else if(a.length >= 8){
    
            for(var i=0;i< a.length; i++){
            
                let Upper = a[i] === a[i].toUpperCase() 
                &&  a[i] !== a[i].toLowerCase();
        
                if(Upper){
    
                    for(var m=0;m <a.length; m++){
        
                        let Lower = a[m] !== a[m].toUpperCase() 
                 &&  a[m] === a[m].toLowerCase();
        
                        if(Lower){
                        
                        if(/[0123456789]/.test(a)){
                            return true;
                        }else{
                            
                            console.log("your password should have at least 1 number");
                            return false;
                          }
                        }   
                    }
                }
            }
            return false;
        }else{
            
            console.log("your password should be 8 characters or more");
            return false;
        }
    }
        catch(err){           
         console.log("something went wrong "+err);
            }
    }
