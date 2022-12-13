import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";

function App() {
  return (
    <div className="">

      <div className=''>
        <RouterProvider router={router}> </RouterProvider>
      </div>

    </div>
  );
}

export default App;
