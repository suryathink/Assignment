import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDisabledExample from './Components/DisabledButtons'; 
import CustomSelect from "./Components/CustomSelect"
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
    <Navbar/>
      {/* <CustomSelect/> */}
     <FormDisabledExample/>
    </div>
  );
}

export default App;
