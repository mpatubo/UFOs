// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};


  // 7. Use this function to filter the table when data is entered.
  // function filterTable() {
  
  //   // 8. Set the filtered data to the tableData.
  //    filteredData = ["datetime", "city", "state", "country", "shape"];
  //   // var filteredData = filters[filteredData]
  //   let filteredData = d3.select("").property(value);
  //   let filteredData = tableData;
  //   var date = filters[filteredData]
  
  //   // 9. Loop through all of the filters and keep any data that
  //   // matches the filter values
  //   //redo
    
  //  Object.entries(filters).forEach(([key,value]) => {
  //     filteredData = filteredData.filter(row => row[key] === value);
  //   });
  //   buildTable(filterData);
  //   // 10. Finally, rebuild the table using the filtered data
  //   //call built table, pass filtered data
  // }

  // 2. Attach an event to listen for changes to each filter
  //see line 113
  
  
  // Build the table when the page loads
  
  //d3.selectAll("input").on("change", updateFilters);
  
  // data.forEach((dataRow) => {
  //   let row = tbody.append("tr");
  //   Object.values(dataRow).forEach((val) => {
  //     let cell = row.append("td");
  //     cell.text(val);
  //     }
  //   );
  // });


  //////

  // function buildTable(data) {
  //   // First, clear out any existing data
  //   tbody.html("");
  
  //   // Next, loop through each object in the data
  //   // and append a row and cells for each value in the row
  //   data.forEach((dataRow) => {
  //     // Append a row to the table body
  //     let row = tbody.append("tr");
  
  //     // Loop through each field in the dataRow and add
  //     // each value as a table cell (td)
  //     Object.values(dataRow).forEach((val) => {
  //       let cell = row.append("td");
  //       cell.text(val);
  //       }
  //     );
  //   });
  // }

  /////////


  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let filteredData = tableData;
    let city = d3.select("#state").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }

    if (city) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.city === city.toLowerCase());
      console.log(city)
    }
  
    if (state) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.state === state.toLowerCase());
      console.log(state)
    }

     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);

  //

  

  // //build table data

  // function buildTable(data) {
  //   // First, clear out any existing data
  //   tbody.html("");
  
  //   // Next, loop through each object in the data
  //   // and append a row and cells for each value in the row
  //   data.forEach((dataRow) => {
  //     // Append a row to the table body
  //     let row = tbody.append("tr");
  
  //     // Loop through each field in the dataRow and add
  //     // each value as a table cell (td)
  //     Object.values(dataRow).forEach((val) => {
  //       let cell = row.append("td");
  //       cell.text(val);
  //       }
  //     );
  //   });
  // }