// Set samples JSON url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data){
    console.log(data);
});

// Function to initialize dashboard
function init() {
    let dropDown = d3.select("#selDataset");
    d3.json(url).then((data) => {
        let names = data.names;
        names.forEach((name) => {
            dropDown.append("option").text(name).property("value",name);
        });
        
        let firstIndividual = names[0];
        barChart(firstIndividual);
        bubbleChart(firstIndividual);
        metaData(firstIndividual);
    });

};

// Initialize dashboard
init();

// Function to create Bar Chart
function barChart(individual) {
    d3.json(url).then((data) => {
        let sampleData = data.samples;
        let filteredData = sampleData.filter(obj => obj.id == individual);
        let selectedIndividual = filteredData[0];

        let otu_ids = selectedIndividual.otu_ids;
        let otu_labels = selectedIndividual.otu_labels;
        let sample_values = selectedIndividual.sample_values;

        let trace1 = {
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }

        Plotly.newPlot("bar",[trace1]);
    });
};

// Function to create Bubble Chart
function bubbleChart(individual) {
    d3.json(url).then((data) => {
        let sampleData = data.samples;
        let filteredData = sampleData.filter(obj => obj.id == individual);
        let selectedIndividual = filteredData[0];

        let otu_ids = selectedIndividual.otu_ids;
        let otu_labels = selectedIndividual.otu_labels;
        let sample_values = selectedIndividual.sample_values;

        let trace2 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids
            }
        }

        let layout = {
            xaxis: {title: "OTU ID"}
        };

        Plotly.newPlot("bubble",[trace2],layout)
    });
};

// Function to display metadata
function metaData(individual) {
    d3.json(url).then((data) => {
        let metaData = data.metadata;
        let filteredData = metaData.filter(obj => obj.id == individual);
        let selectedIndividual = filteredData[0];

        d3.select("#sample-metadata").html("");
        Object.entries(selectedIndividual).forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

// Function to update dashboard when Individual changed
function optionChanged(individual) {
    barChart(individual);
    bubbleChart(individual);
    metaData(individual);
};