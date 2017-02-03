var outerWidth = 300;
var outerHeight = 250;
var margin = { left: 90, top: 30, right: 30, bottom: 30 };
var barPadding = 0;

//http://jsbin.com/sutikuqeti/edit?html,output

function updateCurrentChart() {


	$("svg").remove();

    var color = ["green","yellow", "blue"];
    
    var outerWidth = 360;
    var outerHeight = 250;
    
    var margin =  { left: 10, top: 10, right: 10, bottom: 10 }; 
    
    var innerWidth = outerWidth - margin.left - margin.right; 
    var innerHeight = outerHeight - margin.top - margin.bottom;
    
    var svg = d3.select(".chart").append("svg")
              .attr("width", outerWidth)
              .attr("height", outerHeight);
    
    var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var xScale = d3.scale.linear()
                 .range([0, innerWidth])
                 .domain([1, 100]); 
    
    var yScale = d3.scale.linear()
                 .range([0, innerHeight]);
    
    var render = function(data) {  // Taking data in the render function 
      	var bar = g.selectAll("rect")
                .data(data);

		bar.enter()
		.append("rect")
		.attr("width", function(d) { 
			return (xScale(d.value))
			})
		.attr("height", 50)
		.attr("x", function(d) { 
			return (d.type == "stock") ? 0 : xScale(100-d.value) // If key == stock start from 0 else start from stock's scale
			})
		.attr("fill", function(d) {
			return (d.type == "stock") ? "#FF8983" : "#C6FBFF"
			}); // different color
			
		bar.enter()			// Need to use enter() in order to pass the data to text
		.append("text")	
		.attr("x", function(d) {return (d.type == "stock") ? xScale(d.value)/2 : xScale(100-d.value) + (xScale(d.value)/2) })
		.attr("y", "30")
		.attr("text-anchor", "middle")
		.text(function(d){return (d.type == "stock") ? "Stock: " + d.value +"%" : "Bond: " + d.value + "%" });
    
      	bar.exit().remove();
    }


	render(state);

	return;
}

function presentFinalChart() {
	// D3.js Pie here

	console.log(state['stock']);
	console.log(state['bond']);
	return;
	
}