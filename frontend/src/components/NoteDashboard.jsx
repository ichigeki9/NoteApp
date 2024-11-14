/* eslint-disable react/prop-types */
import { NoteBox } from "./noteBox";

export function NoteDashboard(props) {
	const list = props.data.map((obj) => {
		return <NoteBox key={obj.id} title={obj.title} body={obj.text} />;
	});

	return (
		<div className="bg-slate-500 w-full h-screen flex justify-start items-center flex-col p-10">
			<h1 className="text-cyan-400 font-bold text-5xl uppercase">Notatki</h1>
			<button
				className="flex justify-center items-center border w-10 h-10 text-3xl mt-5"
				onClick={() => props.setAddModalVisible(true)}>
				+
			</button>
			<div className="noteContainer flex justify-start items-start flex-wrap  w-full  p-5 gap-9">
				{list}
			</div>
		</div>
	);
}
