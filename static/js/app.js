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
}

//
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button


// Build the table when the page loads

//
//
// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this).select("input");


    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);

  
    // 5. If a filter value was entered then add that filterId and value
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else{
      delete filters[filterId];
    }
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = ["datetime", "city", "state", "country", "shape"];
    let filteredData = d3.select("").property("value");
    let filteredData = tableData;
    //var date = filters[filteredData]
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    //redo
    
   Object.entries(filters).forEach(([key,value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
    buildTable(filterData);
    // 10. Finally, rebuild the table using the filtered data
    //call built table, pass filtered data
  }
  
  // 2. Attach an event to listen for changes to each filter
  //see line 113
  
  
  // Build the table when the page loads
  buildTable(tableData);
 d3.selectAll("#filter-btn").on("click", handleClick);
  //d3.selectAll("input").on("change", updateFilters);
  