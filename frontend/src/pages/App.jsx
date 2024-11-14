import "../styles/App.css";
import { AddModal } from "../components/AddModal";
import { useState } from "react";
import { NoteDashboard } from "../components/NoteDashboard";

function App() {
	const [addModalVisible, setAddModalVisible] = useState(false);

const dummyData = [{
		id:1,
		title:'zakupy',
		text:'ser,pomidory'
	},
	{
		id:2,
		title:'do zrobienia',
		text:'napisać program'
	},
]

const [data, setData] = useState(dummyData)
console.log(data);

	return (
		<>
			{addModalVisible && <AddModal setAddModalVisible={setAddModalVisible} data={data} setData={setData} />}
			<NoteDashboard setAddModalVisible={setAddModalVisible} data={data} setData={setData} />
		</>
	);
}

export default App;
