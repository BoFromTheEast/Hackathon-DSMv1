import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function Appointment() {
  const [selectedMonth, setSelectedMonth] = useState(""); // Initialize state for selected month
  const [selectedDay, setSelectedDay] = useState(""); // State for selected day
  const [selectedYear, setSelectedYear] = useState("") //state for selected year

  const handleYearChange = (event) =>{
    setSelectedYear(event.target.value);
  };
  // Function to handle change in selected month
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // Update selectedMonth state when the dropdown value changes
    setSelectedDay(""); // Reset selectedDay when the month changes
    const days =[]
    for(let i = daysInMonth; i>0;i--){
      days.push(i)
    }
    return days;
  };

  const generateDays = () =>{
    if(selectedMonth == "") return [];
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  }
  const handleDayChange = (event) =>{
    setSelectedDay(event.target.value)
  }

  const generateYears = () => {
    const years = []
    for(let i = 2030; i >0; i--){
      years.push(i)
    }np
    return years;
  };
  return (
    <>
      <h1>
        Mason Sommers
      </h1>
      <label for="month">Choose a month</label> 

      <select name="month" id="month" value={selectedMonth} onChange={handleMonthChange}>

        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <label name="year">Choose a year</label>
      <select name="year" id ="year" value={selectedYear} onChange={handleYearChange}>
      {generateYears().map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <label name="day">Choose a day</label>
      <select name="day" id="day" value={selectedDay} onChange={handleDayChange}>
      {generateDays().map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
    </>
  );
}

export default Appointment;
