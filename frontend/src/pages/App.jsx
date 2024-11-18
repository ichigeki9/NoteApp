import "../styles/App.css";
import { AddModal } from "../components/AddModal";
import { useEffect, useState } from "react";
import { NoteDashboard } from "../components/NoteDashboard";

function App() {
	const [addModalVisible, setAddModalVisible] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:5000/api/notes")
			.then((response) => {
				return response.json();
			})
			.then((resData) => {
				setData(resData);
			});
	}, []);

	console.log(data);

	function handleDelete(id) {
		fetch(`http://127.0.0.1:5000/api/note/${id}`, { method: "DELETE" }).then(
			(res) => {
				if (res.ok) {
					setData((prevVal) => prevVal.filter((item) => item.id != id));
				} else {
					throw new Error("Błąd przy usuwaniu");
				}
			}
		);
	}

	function handleAdd(item) {
		console.log("item :", item);

		fetch("http://127.0.0.1:5000/api/notes", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((res) => {
				if (res.ok) {
					setData((prevVal) => [...prevVal, item]);
				}
			});
	}

	return (
		<>
			{addModalVisible && (
				<AddModal
					handleAdd={handleAdd}
					setAddModalVisible={setAddModalVisible}
					data={data}
					setData={setData}
				/>
			)}
			<NoteDashboard
				handleDelete={handleDelete}
				setAddModalVisible={setAddModalVisible}
				data={data}
				setData={setData}
			/>
		</>
	);
}

export default App;
