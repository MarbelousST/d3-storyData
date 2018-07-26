var width = 960;
var height = 500;
var radius = Math.min(width, height) / 2;
var color = d3.scale.category10();
var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    //.sort(null)
    .value(function(d) {
        return d.aspirantes_totales;
    });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.csv("este.csv", type, function(error, data) {
    if (error) throw error;
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = g.selectAll('path')
        .data(pie(data))
        .enter()
        .append("g")
        .on("mouseover", function(d) {
            let g = d3.select(this)
                .style("cursor", "pointer")
                .style("fill", "#34495E")
                .append("g")
                .attr("class", "text-group");

            g.append("text")
                .attr("class", "name-text")
                .text(`${d.data.generacion}`)
                .attr('text-anchor', 'middle')
                .attr('dy', '-1.2em');

            g.append("text")
                .attr("class", "value-text")
                .text(`${d.data.aspirantes_totales}`)
                .attr('text-anchor', 'middle')
                .attr('dy', '.6em');
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .style("cursor", "none")
                .style("fill", color(d.data.generacion))
                .select(".text-group").remove()
        })
        .append('path')
        .attr('d', arc)
        .attr("fill", (d, i) => color(i))
        .on("mouseover", function(d) {
            d3.select(this)
                .style("cursor", "pointer")
                .style("fill", "#34495E");
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .style("cursor", "none")
                .style("fill",
                    color(this._current));
        })
        .each(function(d, i) {
            this._current = i;
        });
});

function type(d) {
    d.autos = +d.aspirantes_totales;
    return d;
};