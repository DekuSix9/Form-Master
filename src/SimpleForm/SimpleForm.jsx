
const SimpleForm = () => {
    const handleform=(e)=>{
        e.preventDefault()
        console.log("Form submitted")
    }
    return (
        <div className=" flex flex-col justify-center items-center h-screen text-center ">
           <form onSubmit={handleform}>
            <input type="text" className=" border-2 border-amber-400 "></input><br/>
            <input type="submit" value="submit" className=" border-2 border-amber-400 mr-4 w-16 mt-2"></input>
        
            </form> 
        </div>
    );
};

export default SimpleForm;