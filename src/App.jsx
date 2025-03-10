// import { BrowserRouter } from "react-router";
import { BrowserRouter } from "react-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProtectedRoute } from "./routes/ProtectedRoute";

// App component
function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProtectedRoute /> {/* Ensure this contains <Routes> inside */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
