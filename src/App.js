import logo from './logo.svg';
import './App.css';
import FirstC from './FirstCom';
import { SecondC } from './FirstCom';
import  FirstCC, {SecondCC, ThirdCC} from './ClassComonentDemo';
import App3 from './App2';
import { App4 } from './App4';
import { App5 } from './App5';
import { App6 } from './App6';
import { App7 } from './App7';

function App() {
  return (
    <div className="App">
      {/* <App3/> */}
      {/* <App4/> */}
      {/* <App5/> */}
      {/* <App6/> */}
<App7/>
     {/* hello
     <FirstC name="deepak" address="new delhi"/>
     <FirstC name="ajay" address="new delhi"/>
     <SecondC/>
     <FirstCC/>
     <SecondCC name="Lalit Kumar"/>
     <ThirdCC/> */}
     </div>
  );
}

export default App;
