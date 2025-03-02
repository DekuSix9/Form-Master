import { useState } from "react";

const StateFulForm = () => {
        const [password,setpassword]=useState(null);
        const [error,seterror]=useState('');

      const handleSubmit=(e)=>{
        e.preventDefault();
        if(password.length<6){
            seterror('password must be 6 charachter or longer')
        }
        else{
            seterror('')
        }
        console.log(password)
      }
 const handleEmail=(e)=>{
    setpassword(e.target.value)
 }

      

    return (
        <div className=" flex flex-col justify-center items-center h-screen text-center ">
           <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" className=" border-2 border-amber-400 "></input><br/>
            <label>Email:</label>
            <input  type="email" name="email" className=" border-2 border-amber-400 mt-2 "></input><br/>
            <label>Password:</label>
            <input onChange={handleEmail} type="password" name="password" className=" border-2 border-amber-400 mt-2 "></input><br/>
            <input type="submit" value="submit" className=" border-2 border-amber-400 mr-4 w-16 mt-2"></input>
             {
              error && <p>{error}</p>
             }
            </form> 
        </div>
    );
};

export default StateFulForm;