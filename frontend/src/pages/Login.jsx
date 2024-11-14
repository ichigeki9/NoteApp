
export function Login(){

    return(
        <div className="Layout w-full h-screen flex justify-center items-center bg-slate-500">
        
        <div className=" flex justify-start items-center flex-col border w-96 h-96 p-5 ">
            

            <h1 className="text-4xl mb-16">login</h1>

        <form className="inputBox border flex justify-center items-start flex-col p-5">

        <div className="mb-5 ">
        <label className="pr-5" htmlFor="login">login:</label>
        <input type="text" id="login" name="login" />
        </div>
       
       <div className="mb-5 ">
        <label className="pr-5" htmlFor="password">password:</label>
        <input type="text" id="password" name="password" />
       </div>

        <button className="border px-5 py-2">Zaloguj</button>

        </form>

        </div>

        </div>
    )

}