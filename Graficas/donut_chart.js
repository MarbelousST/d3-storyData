var width = 300;
var height = 300;
var radius = Math.min(width, height) / 2;
var color = d3.scale.category10();
var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

document.getElementById('radio0').checked = true;

change();

d3.selectAll("input").on("change", change);

function change() {
    if (document.getElementById('radio0').checked) {
        d3.selectAll("svg").remove();
        as_total();
    }
    if (document.getElementById('radio1').checked) {
        d3.selectAll("svg").remove();
        asp_EC();
    }
    if (document.getElementById('radio2').checked) {
        d3.selectAll("svg").remove();
        asp_DI();
    }
    if (document.getElementById('radio3').checked) {
        d3.selectAll("svg").remove();
        asp_SI();
    }
}

function as_total() {
    var pie = d3.layout.pie()
        //.sort(null)
        .value(function(d) {
            return d.aspirantes_totales;
        });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    /********* CSV  **************/
    d3.csv("este.csv", type, function(error, data) {
        if (error) throw error;
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        /******** fin *********/
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
}

function asp_EC() {
    var pie = d3.layout.pie()
        //.sort(null)
        .value(function(d) {
            return d.as_EC;
        });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    /********* CSV  **************/
    d3.csv("este.csv", type, function(error, data) {
        if (error) throw error;
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        /******** fin *********/
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
                    .text(`${d.data.as_EC}`)
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
}

function asp_DI() {
    var pie = d3.layout.pie()
        //.sort(null)
        .value(function(d) {
            return d.as_DI;
        });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    /********* CSV  **************/
    d3.csv("este.csv", type, function(error, data) {
        if (error) throw error;
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        /******** fin *********/
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
                    .text(`${d.data.as_DI}`)
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
}

function asp_SI() {
    var pie = d3.layout.pie()
        //.sort(null)
        .value(function(d) {
            return d.as_SI;
        });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    /********* CSV  **************/
    d3.csv("este.csv", type, function(error, data) {
        if (error) throw error;
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        /******** fin *********/
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
                    .text(`${d.data.as_SI}`)
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
}

function type(d) {
    d.aspirantes_totales = +d.aspirantes_totales;
    d.as_DI = +d.as_DI;
    d.as_SI = +d.as_SI;
    d.as_EC = +d.as_EC;
    return d;
};