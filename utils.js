const debounce = (func) => {
   let timeoutID;
   return (...args) => {
      if(timeoutID){
         clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(()=>{
         func.apply(null, args);
      }, 1000);
   };
};

