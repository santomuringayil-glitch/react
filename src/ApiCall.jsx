import React, { useState } from "react"; // Added useState here
import axios from "axios";

function ApiCall() {
  // 1. Initialize state to hold the API data
  const [data, setData] = useState(null);

  async function fetchdata() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/test/json");
      console.log(response.data);
      setData(response.data); // Now setData is defined!
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>API Call Component</h1>
      <button onClick={fetchdata}>Fetch Data</button>

      {/* 2. Display the data if it exists */}
      {data && (
        <div style={{ marginTop: "20px" }}>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Course: {data.course}</p>
        </div>
      )}
    </div>
  );
}

export default ApiCall;