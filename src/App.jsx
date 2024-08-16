import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import Ticket from "./layout/ticket";
import CarouselComponent from "./layout/carousel";
import Forex from "./layout/forex";
import Banner from "./layout/banner";
import LoginForm from "./layout/login";

function Home() {
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-6 p-6">
      <div className="col-span-1 md:col-span-1 h-full flex">
        <Ticket className="flex-1" />
      </div>
      <div className="col-span-1 md:col-span-3 h-full flex">
        <CarouselComponent className="flex-1" />
      </div>
      <div className="col-span-1 md:col-span-2 h-full">
        <Forex />
      </div>
    </main>
  );
}

function App() {
  return (
    // <LoginForm />
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Banner />
    </div>
  );
}

export default App;
