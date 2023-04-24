//-----------------------------------------------------------------
//-	Where are movies mostly filmed? (bar chart)

//console.log(locations)

// Sort the data by Greek search results descending
//let sortedByFilming_location = locations.sort((a, b) => b.Filming_location - a.Filming_location);

// Slice the first 10 objects for plotting
//slicedData = sortedByFilming_location.slice(0, 94);

// Reverse the array to accommodate Plotly's defaults
//reversedData = slicedData.reverse();


//Where are movies mostly filmed? (bar chart)
// --------------------------------------------------------------
let trace1 = {
    x: locations.map(row => row.Filming_location),
    y: locations.map(row => row.Count),
    type: "bar",
    orientation: "v"
  };

// Data trace array
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Movies number Vs. filming locations",
  margin: {
    l: 200,
    r: 200,
    t: 100,
    b: 100
},
height: 600
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("chart", traceData, layout, {responsive: true});

//----------------------------------------------------------------
//-	Which country made the most movie? (bar chart) 

let trace2 = {
    x: production.map(row => row.Country_of_origin),
    y: production.map(row => row.Title),
    type: "bar",
    orientation: "v"
  };

// Data trace array
let traceData2 = [trace2];

// Apply the group barmode to the layout
let layout2 = {
  title: "Movies number Vs. Country of origin",
  margin: {
    l: 200,
    r: 200,
    t: 100,
    b: 100
},
height: 600
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("chart2", traceData2, layout2, {responsive: true});



//-----------------------------------------------------------------
//Runtime for movies

console.log(avgruntm);

let trace3 = {
    x: avgruntm.map(row => row.Year),
    y: avgruntm.map(row => row.Avg_Runtime),
    type: "line",
    name: "Runtime"
  };



// Data trace array
let traceData3 = [trace3];

// Apply the group barmode to the layout
let layout3 = {
  title: "Average Runtime trending",
  margin: {
    l: 200,
    r: 200,
    t: 100,
    b: 100
},
height: 600,
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("chart3", traceData3, layout3);


//-----------------------------------------------------------------
//Runtime for movies

console.log(avgdata);

let trace4 = {
    x: avgdata.map(row => row.Year),
    y: avgdata.map(row => row.Avg_Budget),
    type: "line",
    name:"Avg Budget"
  };

  let trace5 = {
    x: avgdata.map(row => row.Year),
    y: avgdata.map(row => row.Avg_Income),
    type: "line",
    name:"Avg Income"
  };

// Data trace array
let traceData4 = [trace4, trace5];

// Apply the group barmode to the layout
let layout4 = {
  title: "Average Budget and Income from 2003 to 2022",
  margin: {
    l: 200,
    r: 200,
    t: 100,
    b: 100
},
height: 600
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("chart4", traceData4, layout4);

