//Flexpa Login System using Create-React-App
import { FlexpaLogin } from "@flexpa/login"

function App() 
{
  
  return (
  <div className = "App">
    <FlexpaLogin sandbox>
      <header>
        <div className="text-3xl font-bold">Health Plan Verified</div>
      </header>
    </FlexpaLogin>
  </div>
  );

}

export default App;