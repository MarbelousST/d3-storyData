  	  if (document.getElementById('radio1').checked) {
  	      Unit = ' years';
  	      Label = 'Life Expectancy: ';
  	      InputFileName = 'LifeExp-VeryHigh.csv';
  	  }
  	  if (document.getElementById('radio2').checked) {
  	      Unit = ' years';
  	      Label = 'Schooling: ';
  	      InputFileName = 'School-VeryHigh.csv';
  	  }
  	  if (document.getElementById('radio3').checked) {
  	      Label = 'GNI per capita: ';
  	      Unit = ' PPP$';
  	      InputFileName = 'GNI-VeryHigh.csv';
  	  }

  	  document.getElementById('radio1').checked = true;

  	  //Action when radiobutton status is changed
  	  function change() {
  	      //update status and filename
  	      document.getElementById('sort').checked = false;
  	      if (document.getElementById('radio1').checked) {
  	          Unit = ' years';
  	          Label = 'Life Expectancy: ';
  	          InputFileName = 'LifeExp-VeryHigh.csv';
  	      }
  	      if (document.getElementById('radio2').checked) {
  	          Unit = ' years';
  	          Label = 'Schooling: ';
  	          InputFileName = 'School-VeryHigh.csv';
  	      }
  	      if (document.getElementById('radio3').checked) {
  	          Label = 'GNI per capita: ';
  	          Unit = ' PPP$';
  	          InputFileName = 'GNI-VeryHigh.csv';
  	      }
  	      //if(document.getElementById('radio4').checked){

  	      //InputFileName='HDI-Low.csv';}


  	      //change dataset
  	      d3.selectAll("svg").remove();
  	      svg = d3.select("body").append("svg")
  	          .attr("width", width + margin.left + margin.right)
  	          .attr("height", height + margin.top + margin.bottom)
  	          .append("g")
  	          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  	      d3.csv(InputFileName, function(error, data) {
  	          data.forEach(function(d) {
  	              d.Value = +d.Value;
  	          });

  	          Dataset = data;
  	          x.domain(data.map(function(d) { return d.Country; }));
  	          y.domain([0, d3.max(data, function(d) { return d.Value; })]);
  	          svg.append("g")
  	              .attr("class", "x axis")
  	              .attr("transform", "translate(0," + height + ")")
  	              .call(xAxis)
  	              .selectAll("text")
  	              .style("text-anchor", "end")
  	              .attr("dx", "-.5em")
  	              .attr("dy", "-.9em")
  	              .attr("transform", function(d) {
  	                  return "rotate(-90)"
  	              });

  	          svg.append("g")
  	              .attr("class", "y axis")
  	              .call(yAxis)
  	              .append("text")
  	              .attr("transform", "rotate(-90)")
  	              .attr("y", 6)
  	              .attr("dy", ".71em")
  	              .style("text-anchor", "end")
  	              .text("Value");

  	          svg.selectAll(".bar")
  	              .data(data)
  	              .enter().append("rect")
  	              .attr("class", "bar")
  	              .attr("x", function(d) { return x(d.Country); })
  	              .attr("width", x.rangeBand())
  	              .attr("y", function(d) { return y(d.Value); })
  	              .attr("height", function(d) { return height - y(d.Value); })
  	              .on("mouseover", function(d) {


  	                  var xPosition = parseFloat(d3.select(this).attr("x"));
  	                  var yPosition = parseFloat(d3.select(this).attr("y"));

  	                  d3.select("#tooltip")
  	                      .style("left", xPosition + "px")
  	                      .style("top", yPosition + "px")
  	                      .select("#value")
  	                      .text(Label + d.Value + Unit);
  	                  d3.select("#tooltip")
  	                      .style("left", xPosition + "px")
  	                      .style("top", yPosition + "px")
  	                      .select("#rank")
  	                      .text("HDI Rank: " + d.Rank)
  	                  d3.select("#tooltip")
  	                      .style("left", xPosition + "px")
  	                      .style("top", yPosition + "px")
  	                      .select("#country")
  	                      .text("Country: " + d.Country)

  	                  //Show the tooltip
  	                  d3.select("#tooltip").classed("hidden", false);

  	              })
  	              .on("mouseout", function() {

  	                  //Hide the tooltip
  	                  d3.select("#tooltip").classed("hidden", true);


  	              })

  	      });

  	  };