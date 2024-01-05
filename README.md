# Module-14-Challenge_belly-button-challenge

Built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels, as follows:

* Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

* Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  * Used sample_values as the values for the bar chart.
  * Used otu_ids as the labels for the bar chart.
  * Used otu_labels as the hovertext for the chart.

* Created a bubble chart that displays each sample.
  * Used otu_ids for the x values.
  * Used sample_values for the y values.
  * Used sample_values for the marker size.
  * Used otu_ids for the marker colors.
  * Used otu_labels for the text values.

* Displayed the sample metadata, i.e., an individual's demographic information.

* Updates all the plots when a new sample is selected.

* Deployed app to a free static page hosting service
