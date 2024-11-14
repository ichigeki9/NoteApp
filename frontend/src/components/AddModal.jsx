export function AddModal(){

    return(
        <div className="Layout w-full h-screen flex justify-center items-center absolute bg-[rgba(0,0,0,0.6)] z-10">
        
        <div className=" flex justify-start items-center flex-col border w-[30rem] h-[30rem] p-5 bg-slate-300 relative">
        <button className=" absolute z-20 top-0 right-0 text-2xl text-black m-8 border border-black p-2">X</button>
            <h1 className="text-4xl mb-16">login</h1>

        <form className="inputBox border w-72 h-64 flex justify-center items-start flex-col p-5 bg-slate-400">

        <div className="mb-5 ">
        <label className="pr-5" htmlFor="title">title:</label>
        <input type="text" id="title" name="title" />
        </div>
       
       <div className="mb-5 ">
        <label className="pr-5" htmlFor="text">text:</label>
        <input type="text" id="text" name="text" />
       </div>

        <button className="border px-5 py-2">Dodaj</button>

        </form>

        </div>

        </div>
    )
}