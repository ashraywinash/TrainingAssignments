import React from "react";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import RootLayout from "./components/RootLayout/RootLayout";
import Assignment1 from "./components/Assignment1/asssignment1";
import Assignment2 from "./components/Assignment2/assignment";
import Assignment3 from "./components/Assignment3/assignment";
import Assignment4 from "./components/Assignment4/assignment";
import Assignment5 from "./components/Assignment5/assignment";


function App() {

  let Router = createBrowserRouter([
    {

      path:'/TrainingAssignments',
      element:<RootLayout />,
    },
    {
      path:'/TrainingAssignments/Assignment1',
      element:<Assignment1 />
    },
    {
      path:'/TrainingAssignments/Assignment2',
      element:<Assignment2 />,
    },
    {
      path:'/TrainingAssignments/Assignment3',
      element:<Assignment3 />
    },
    {
      path:'/TrainingAssignments/Assignment4',
      element:<Assignment4 />
    },
    {
      path:'/TrainingAssignments/Assignment5',
      element:<Assignment5 />
    }
  ])

  return (
      <RouterProvider router={Router}/>
  );

}

export default App;
