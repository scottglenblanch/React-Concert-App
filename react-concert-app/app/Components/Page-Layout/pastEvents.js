"use client";
import NavBar from "../Elements/NavBar.jsx";
import LeftPastEventList from "./LeftPastEventList.jsx";
import RightDisplayedPastEventDiv from "../Elements/RightDisplayedPastEventDiv.jsx";
import Footer from "../Elements/Footer.jsx";
import PastEventProvider from "../Data/PastEventProvider.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <PastEventProvider>
      <div>
        <NavBar />
        <div className="flex">
          <LeftPastEventList />
          <RightDisplayedPastEventDiv />
        </div>
        <Footer />
      </div>
    </PastEventProvider>
  );
}