(function () {
    "use strict";

    //Width and height
    var w = 700;
    var h = 500;

    var projection = d3.geo.mercator()
        .center([-90, 33])
        .scale(1000)
        .translate([w / 2, h / 2]);

    var path = d3.geo.path()
        .projection(projection);

    //Create SVG element
    var svg = d3.select("body").append("svg").attr({width:w, height: h});

    //Load in GeoJSON data
    d3.json("states.json", function (json) {

        console.log(json);
        var pathdata = {
            "geometry": json
        }

        //Bind data and create one path per GeoJSON feature
        svg.append("path")
            .datum(json)
            .attr("d", path);
    });
    //Load in GeoJSON data
    d3.json("aoi.json", function (json) {

        console.log(json);
        var pathdata = {
            "geometry": json
        }

        //Bind data and create one path per GeoJSON feature
        svg.append("path")
            .datum(json)
            .attr("d", path);
    });
}());
