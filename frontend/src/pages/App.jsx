import "../styles/App.css";
import { NoteBox } from "../components/noteBox";
import { AddModal } from "../components/AddModal";

function App() {

	return (
    <>
		<AddModal />
		<div className="bg-slate-500 w-full h-screen flex justify-start items-center flex-col p-10">
			<h1 className="text-cyan-400 font-bold text-5xl uppercase">Notatki</h1>
			<button className="flex justify-center items-center border w-10 h-10 text-3xl mt-5">
				+
			</button>

			<div className="noteContainer flex justify-start items-start flex-wrap  w-full  p-5 gap-9">
				<NoteBox title="Zakupy" body="kupić mleko i ser" />
			</div>
		</div>

	</>

	);
}

export default App;
