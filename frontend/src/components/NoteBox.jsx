/* eslint-disable react/prop-types */


export function NoteBox(props){

    return(
        <div className="noteBox flex justify-start items-center flex-col border-2 border-red-600 w-48 h-48 p-2 relative">

					<h2 className="text-2xl text-cyan-300">{props.title}</h2>
					<p className="text-white">{props.body}</p>
          <div className="buttonBox flex justify-around w-full h-7 absolute bottom-0">
            <button className="border-solid border-2 border-sky-500 w-full cursor-pointer text-xs">Wykonane</button>
            <button className="border-solid border-2 border-sky-500 w-full cursor-pointer text-xs">Edytuj</button>
            <button className="border-solid border-2 border-sky-500 w-full cursor-pointer text-xs">Usuń</button>
          </div>

				</div>
    )
}