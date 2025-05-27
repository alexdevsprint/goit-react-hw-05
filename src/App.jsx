import css from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <Navigation />      
      <AppRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
