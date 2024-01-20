import React from "react";
import Layout from "../component/Layouts/Layout.jsx";
import "./Dashboard.css";
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex bg-[#141627] flex-col w-[60vw] align-middle justify-center">
        <form action="" className="w-fit h-10vh mt-4 ml-4 flex align-middle">
          <FaSearch className="text-[#a0a3bd] text-2xl mt-[1.2em]" />
          <input
            className="p-4 my-4 w-[30vw] search_input rounded-lg bg-[#1c1f37] text-center"
            type="text"
            placeholder="Search for your favourite destination"
          />
          <button className="text-[#141627] search_btn rounded-lg bg-[#D1F366] w-fit h-fit mt-[1em] px-7 py-4">
            Search
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
