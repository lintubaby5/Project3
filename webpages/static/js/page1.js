let title = data.map(item => `${item.Title}`);
let rating = data.map(item => `${item.Rating}`);
let year = data.map(item => `${item.Year}`);
let month = data.map(item => `${item.Month}`);
let certificate = data.map(item => `${item.Certificate}`);
let runtime = data.map(item => `${item.Runtime}`);
let directors = data.map(item => `${item.Directors}`);
let stars = data.map(item => `${item.Stars}`);
let genre = data.map(item => `${item.Genre}`);
let filming_location = data.map(item => `${item.Filming_location}`);
let budget = data.map(item => `${item.Budget}`);
let income = data.map(item => `${item.Income}`);
let country_of_origin = data.map(item => `${item.Country_of_origin}`);

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    var uniqueyear = year.filter(onlyUnique);
            // Set a variable for the sample names
        for(i=0;i<uniqueyear.length;i++){

            // Log the value of id for each iteration of the loop
            console.log(uniqueyear[i]);

            dropdownMenu.append("option").text(uniqueyear[i]).property("value",uniqueyear[i]);
    }
    let sample_one=2022;
    createBarChart(sample_one);
    createBarChartGenre(sample_one);
    createBarChartGenreprof(sample_one)
}

function createBarChart(sample) {
    
            // Filter based on the value of the sample
            let value = data.filter(result => result.Year == sample);
            // Set top ten items to display in descending order
            let Budget = value.map(item => `${item.Budget}`);
            let Income = value.map(item => `${item.Income}`);
            var uniquemonth = month.filter(onlyUnique);
            yticks1=[];
            yticks2=[];
            totalBud=0;
            totalInc=0;
            let xticks = value.map(item => `${item.Month}`);
            for(j=0;j<uniquemonth.length;j++){
            for(i=0;i<xticks.length;i++){
                if(xticks[i]==uniquemonth[j]){
                    totalBud=totalBud+parseFloat(Budget[i]);
                    totalInc=totalInc+parseFloat(Income[i]);
                }
            }
            yticks1.push(totalBud)
            yticks2.push(totalInc)
            totalBud=0;
            totalInc=0;
        }
            
            // Set up the trace for the bar chart
            let trace1 = {
                x: uniquemonth,
                y: yticks1,
                text: yticks1,
                name: "Budget",
                type: "bar",
                orientation: "v"
            };
            let trace2 = {
                x: uniquemonth,
                y: yticks2,
                text: yticks2,
                name: "Income",
                type: "bar",
                orientation: "v"
            };
    
            // Setup the layout
            let layout = {
                title: "Monthly Distribution of Income and Budget of Movies"
            };
            let trace=[trace1,trace2]
            // Call Plotly to plot the bar chart
            Plotly.newPlot("bar", trace, layout)
        ;
    };
function createBarChartGenre(sample) {
    let value = data.filter(result => result.Year == sample);

    let top100ratedmovies = value.sort(function(a, b) {
        return parseFloat(b.Rating) - parseFloat(a.Rating);
      }).slice(0, 20);
      let genretop100=top100ratedmovies.map(item => `${item.Genre}`);
      let genreplot=[]
      for(i=0;i<genretop100.length;i++){
        var array= genretop100[i].split(',')
        array.forEach((item) => {
        genreplot.push(item)})
      }
    var genreunique = genreplot.filter(onlyUnique);
    genreplotvalue=[]
    total=0
    for(j=0;j<genreunique.length;j++){
    for(i=0;i<genreplot.length;i++){
        if(genreplot[i]==genreunique[j]){
            total=total+1
        }
    }
    genreplotvalue.push(total)
    total=0
}
    //     // Set up the trace for the bar chart
        let trace1 = {
            x: genreunique,
            y: genreplotvalue,
            text: genreplotvalue,
            type: "bar",
            orientation: "v"
        };


   // Setup the layout
         let layout = {
             title: "20 Most Rated Movies by Genre"
         };
     let trace=[trace1]
 // Call Plotly to plot the bar chart
       Plotly.newPlot("bar2", trace, layout);
};

function createBarChartGenreprof(sample) {
    let value = data.filter(result => result.Year == sample);

    let top100profitmovies = value.sort(function(a, b) {
        return parseFloat(b.Income) - parseFloat(a.Income);
      }).slice(0, 20);
      let genretop100profit=top100profitmovies.map(item => `${item.Genre}`);
      let genreplotprofit=[]
      for(i=0;i<genretop100profit.length;i++){
        var array= genretop100profit[i].split(',')
        array.forEach((item) => {
            genreplotprofit.push(item)})
      }
    var genreuniqueprofit = genreplotprofit.filter(onlyUnique);
    genreplotvalueprof=[]
    total=0
    for(j=0;j<genreuniqueprofit.length;j++){
    for(i=0;i<genreplotprofit.length;i++){
        if(genreplotprofit[i]==genreuniqueprofit[j]){
            total=total+1
        }
    }
    genreplotvalueprof.push(total)
    total=0
}
console.log(genreplotvalueprof)
    //     // Set up the trace for the bar chart
        let trace1 = {
            x: genreuniqueprofit,
            y: genreplotvalueprof,
            text: genreplotvalueprof,
            type: "bar",
            orientation: "v"
        };


   // Setup the layout
         let layout = {
             title: "20 Most Profitable movies by Genre"
         };
     let trace=[trace1]
 // Call Plotly to plot the bar chart
       Plotly.newPlot("bar3", trace, layout);
};

function imagedropdown(imgid,newimg){
    document.getElementById(imgid).src="webpages/images/"+newimg+".jpg"
}

function optionChanged(value) { 

        // Log the new value
        console.log(value); 
    
        // Call all functions 
        createBarChart(value);
        createBarChartGenre(value);
        createBarChartGenreprof(value)
        imagedropdown("year",value)
    };
init();