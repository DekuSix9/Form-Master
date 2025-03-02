import { useEffect, useRef } from "react";

const RefForm = () => {

   const nameRef=useRef(null)
  
   useEffect(() => {
    console.log(nameRef.current); 
    nameRef.current.focus();
}, []);

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)

    }
    return (
        <div>
             <div className=" flex flex-col justify-center items-center h-screen text-center ">
           <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input ref={nameRef} type="text" name="name" className=" border-2 border-amber-400 "></input><br/>
            <label>Email:</label>
            <input  type="email" name="email" className=" border-2 border-amber-400 mt-2 "></input><br/>
            <label>Password:</label>
            <input  type="password" name="password" className=" border-2 border-amber-400 mt-2 "></input><br/>
            <input type="submit" value="submit" className=" border-2 border-amber-400 mr-4 w-16 mt-2"></input>
            
            </form> 
        </div>
        </div>
    );
};

export default RefForm;