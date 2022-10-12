import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./routes/routes";
import AOS from 'aos';
import "aos/dist/aos.css";
import QuizTopics from "./components/QuizTopics/QuizTopics";

function App() {
  
  // Added an animation side effect
  useEffect(() => {
    AOS.init(
      {
        disable: <QuizTopics />
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
