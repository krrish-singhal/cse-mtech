import React from "react";

import Header from "../components/Header.jsx";
import Overview from "../components/Overview.jsx";
import Highlights from "../components/Highlights.jsx";
import COE from "../components/COE.jsx";
import Clubs from "../components/Clubs.jsx";
import Faculty from "../components/Faculty.jsx";
import Publications from "../components/Publications.jsx";
import ProgramDetails from "../components/ProgramDetails.jsx";
import Infrastructure from "../components/Infrastructure.jsx";
import Placement from "../components/Placement.jsx";
import Testimonials from "../components/Testimonials.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Overview />
        <Highlights />
        <COE />
        <Clubs />
        <Faculty />
        <Publications />
        <ProgramDetails />
        <Infrastructure />
        <Placement />
        <Testimonials />
      </main>
     
    </div>
  );
}
