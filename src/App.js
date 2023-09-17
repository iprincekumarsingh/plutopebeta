import "./App.css";
import { Footer } from "./sections/Footer/Footer";
import { Landsec1 } from "./sections/Section1/Landsec1";
import { Landsec2 } from "./sections/Section2/Landsec2";

function App() {
	return (
		<div className="App">
			<Landsec1></Landsec1>
			<Landsec2></Landsec2>
			<Footer></Footer>
		</div>
	);
}

export default App;
