import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Router } from "./router/Router"
import { DataContextProvider } from "./context/context"
import 'bootstrap/dist/css/bootstrap.css';

const router =createBrowserRouter(Router)
function App() {


  return (
 <>
 <DataContextProvider>
 <RouterProvider router={router}/>
 </DataContextProvider>
 </>
  )
}

export default App
