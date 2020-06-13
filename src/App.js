import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { userMenu, mainMenu } from "./config";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar
          expandMenuOn="md"
          mobileMenu={mainMenu}
          expandedMenu={mainMenu}
          userMenu={userMenu}
        />
        <main>
          <div className="container mx-auto px-5 py-10 py-32 text-center">
            <h1 className="text-4xl text-black">
              React Responsive Application Navbar
            </h1>
            <h2 className="text-gray-700">
              Originally designed and ported from{" "}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://tailwindui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindUI
              </a>{" "}
              and built with{" "}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
            </h2>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
