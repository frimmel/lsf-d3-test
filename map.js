(function () {
    "use strict";

    var w = 700;
    var h = 400;

    var projection = d3.geo.mercator()
        .center([-91, 32.5])
        .scale(1275)
        .translate([w / 2, h / 2]);

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select("body").append("svg").attr({width:w, height: h});

    d3.json("states.json", function (json) {
        svg.append("path")
            .datum(json)
            .attr("d", path);
    });

    d3.json("aoi.json", function (json) {
        svg.append("path")
            .datum(json)
            .attr("d", path)
            .attr("class", "aoi");
    });
}());
