var outerWidth = 500;
var outerHeight = 250;
var margin = { left: 90, top: 30, right: 30, bottom: 30 };
var barPadding = 0.5;



function updateCurrentChart() {
	


	var xColumn = "name";

	//var yColumn = "population";
	var yColumn = "allocation"


	// Define innerWidth and innerHeight
	var innerWidth  = outerWidth  - margin.left - margin.right;
	var innerHeight = outerHeight - margin.top  - margin.bottom;


	// Create a canvas
	var svg = d3.select("body").append("svg")
	.attr("width",  outerWidth)
	.attr("height", outerHeight);
	var graph = svg.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



	// ordinal - Scale the number in ordinal
	// rangeBands - Tell you the withdth of each bar chart
	var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);

	// linear - from high to low to scale
	var yScale = d3.scale.linear().range([innerHeight, 0]); // high to low

	//console.log(xScale.range());


	function render(){

       data = [{
        name: "stock",
        allocation: state['stock']
       },
       {
        name: "bond",
        allocation: state['bond']
       }];

	console.log("Return max: " + d3.max(data, function (d){ 
	  console.log("Find Max: " + d[yColumn]);
	return d[yColumn]; })); // max similar to map ...

	// .domain is like a parameter. map the domain to xScale
	xScale.domain(data.map( function (d){
	   console.log("Map xColumn: " + (d[xColumn]));

	   return d[xColumn];
	}));


	yScale.domain([0, d3.max(data, function (d) {
	 return d[yColumn]; 
	})]);


	console.log("xScale Range Band: " + xScale.rangeBand());
	var bars = graph.selectAll("rect").data(data);
	bars.enter().append("rect") 
	  .attr("width", xScale.rangeBand());

	bars
	  .attr("x", function (d){
	    console.log(xScale(d[xColumn]));
	    return xScale(d[xColumn]);
	  })
	  .attr("y", function (d){
		console.log(yScale(d[yColumn]));
	      return yScale(d[yColumn]);

	  })
	  .attr("height", function (d){
	    return innerHeight - yScale(d[yColumn]);

	  });
	bars.exit().remove();
	}

	render();

	return;
}

function presentFinalChart() {
	// D3.js here

	console.log(state['stock']);
	console.log(state['bond']);
	return;
	
}