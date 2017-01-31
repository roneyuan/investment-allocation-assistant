var outerWidth = 300;
var outerHeight = 250;
var margin = { left: 90, top: 30, right: 30, bottom: 30 };
var barPadding = 0;



function updateCurrentChart() {
	
	// Delete previous chart
	$("svg").remove();


/*modified from Mike Bostock at http://bl.ocks.org/3943967 */
/*
var data = [
{"key":"", "data1":state['stock'], "data2":state['bond']}

];
 
var n = 2, // number of layers
    m = data.length, // number of samples per layer
    stack = d3.layout.stack(),
    labels = data.map(function(d) {return d.key;}),
    
    //go through each layer (pop1, pop2 etc, that's the range(n) part)
    //then go through each object in data and pull out that objects's population data
    //and put it into an array where x is the index and y is the number
    layers = stack(d3.range(n).map(function(d) { 
                var a = [];
      			for (var i = 0; i < m; ++i) {
        			a[i] = {x: i, y: data[i]['data' + (d+1)]};  
      			}
  				return a;
             })),
    
	//the largest single layer
    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
    //the largest stack
    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

var margin = {top: 40, right: 10, bottom: 20, left: 50},
    width = 377 - margin.left - margin.right,
    height = 533 - margin.top - margin.bottom;

var y = d3.scale.ordinal()
    .domain(d3.range(m))
    .rangeRoundBands([2, height-500], .08);// does not need ordinal, but still define y, such as 0 or 1

var x = d3.scale.linear()
    .domain([0, yStackMax])
    .range([0, width]);

var color = d3.scale.linear()
    .domain([0, n - 1])
    .range(["#aad", "#556"]);

var svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var layer = svg.selectAll(".layer")
    .data(layers)
  .enter().append("g")
    .attr("class", "layer")
    .style("fill", function(d, i) { return color(i); });

layer.selectAll("rect")
    .data(function(d) { return d; })
  	.enter().append("rect")
    .attr("y", function(d) { return y(d.x); })
	.attr("x", function(d) { return x(d.y0); })
    .attr("height", y.rangeBand())
    .attr("width", function(d) { return x(d.y); });

var yAxis = d3.svg.axis()
    .scale(y)
    .tickSize(1)
    .tickPadding(6)
	.tickValues(labels)
    .orient("left");

svg.append("g")
    .attr("class", "y axis")
    //.call(yAxis);

*/

	var xColumn = "name";

	//var yColumn = "population";
	var yColumn = "allocation"


	// Define innerWidth and innerHeight
	var innerWidth  = outerWidth  - margin.left - margin.right;
	var innerHeight = outerHeight - margin.top  - margin.bottom;


	// Create a canvas
	var svg = d3.select(".chart").append("svg")
	.attr("width",  outerWidth)
	.attr("height", outerHeight);
	var graph = svg.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



	// ordinal - Scale the number in ordinal
	// rangeBands - Tell you the withdth of each bar chart
	//var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);


	var xScale = d3.scale.linear().range([0, innerWidth]) 
		// .domain is like a parameter. map the domain to xScale


	// linear - from high to low to scale
	var yScale = d3.scale.linear().range([innerHeight, 0]); // high to low

	//console.log(xScale.range());


	function render() {

       data = [{
        name: "stock",
        allocation: state['stock']
       },
       {
        name: "bond",
        allocation: state['bond']
       }];

/*
	console.log("Return max: " + d3.max(data, function (d){ // Doesn't need it in quiz app 
	 // console.log("Find Max: " + d[yColumn]);
	return d[yColumn]; })); // max similar to map ...
*/
	xScale.domain(data.map( function (d){ // Modify here <==========================
	  // console.log("Map xColumn: " + (d[xColumn]));

	   return d[xColumn];
	}));
	
	/*
	yScale.domain([0, d3.max(data, function (d) { // Doesn't need it for quiz app
		console.log("Map yColumn: " + (d[yColumn]));
	 return d[yColumn]; 
	})]);
	*/

	console.log("xScale Range: " + xScale.range()); 

	var bars = graph.selectAll("rect").data(data);
	bars.enter().append("rect") 
	  .attr("width", 180); // doesnt need rangeBand for this quiz app

	bars
	  .attr("x", function (d){
	    console.log(xScale(d[xColumn]));
	    return 80;
	  })
	  .attr("y", function (d){
		console.log(yScale(d[yColumn]));
	      return 280;

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
	// D3.js Pie here

	console.log(state['stock']);
	console.log(state['bond']);
	return;
	
}