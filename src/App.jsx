import css from "./App.module.css";
import AppNavigation from "./components/Navigation/AppNavigation";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <AppNavigation />      
      <AppRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
