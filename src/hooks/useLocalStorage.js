

export function useLocalStorage(key){
    function setItem (data){
        try{
            localStorage.setItem(key,JSON.stringify(data))
        }catch(err){
            console.log("local storage not working");
        }
    }

    function getItem(){
        try{
           return JSON.parse(localStorage.getItem(key)) || null;
        }catch(err){
            console.log("local storage not working");
        }
    }
    function removeItem(){
        try{
            localStorage.removeItem(key)
         }catch(err){
             console.log("local storage not working");
         }
    }
    
    return {setItem, getItem, removeItem};
}