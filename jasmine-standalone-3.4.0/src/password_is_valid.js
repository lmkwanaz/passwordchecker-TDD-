function password_is_valid(a){
try{
    if(a.length == 0){
        // console.log("you can't leave this field empty");
        throw "you can't leave this field empty"; 
        // return false;
    }else if(a.length > 8){

        for(var i=0;i< a.length; i++){
        
            let Upper = a[i] === a[i].toUpperCase() 
            &&  a[i] !== a[i].toLowerCase();
    
            if(Upper){
                //console.log("Upper");

                for(var m=0;m <a.length; m++){
    
                    let Lower = a[m] !== a[m].toUpperCase() 
             &&  a[m] === a[m].toLowerCase();
    
                    if(Lower){
                      // console.log("Lower");

                    //    console.log(/[0123456789]/.test(a));
                    if(/[0123456789]/.test(a)){
                        return true;
                    }else{
                        throw "your password should have at least 1 number";
                        // console.log("your password should have at least 1 number");
                        // return false;
                      }
                    }
                }
            }
        }
    }else{
        throw "your password should be more than 8 characters";
        // console.log("your password should be more than 8 characters");
        // return false;
    }
}
    catch(err){
        throw "something went wrong";
    // console.log("something went wrong "+err);
        }
}


// function password_is_valid(a){
//     try{
//         if(a.length == 0){
//             // console.log("you can't leave this field empty");
//             throw "you can't leave this field empty"; 
//             // return false;
//         }
//     }catch (err){
//         throw "something went wrong2";
//     }
// }

// password_is_valid("Lwandie");
