import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router";
import { allRoutes } from "./routes/routesconfig";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useEffect } from "react";
// App component
function App() {
  // const router = createBrowserRouter(allRoutes);
  useEffect(()=>{
    console.log('App')
  },[])
  return (
    // <RouterProvider router={router}>
    <BrowserRouter>
      <ProtectedRoute />
    </BrowserRouter>

    // </RouterProvider>
  );
}

export default App;
