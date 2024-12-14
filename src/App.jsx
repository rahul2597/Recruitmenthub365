import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
// import FormSubmit from "./components/FormSubmit";

function App() {
  return (
    <BrowserRouter>
    <div className="bg-black h-screen w-full">
    <Navbar />
    <AppRoutes />
    {/* <FormSubmit/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

