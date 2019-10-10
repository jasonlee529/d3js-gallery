function chord(url) {
    var data = [],
        arc = {},
        arcs = [];
    var sortOrder = [];
    var colorArr = ["#da4480",
        "#5ab449",
        "#7f5acd",
        "#aab740",
        "#ce58c0",
        "#50a26e",
        "#d1434b",
        "#45c0bc",
        "#ce5929",
        "#4e7bda",
        "#d49d3c",
        "#6660a3",
        "#7b853c",
        "#b58dde",
        "#97622e",
        "#609dd6",
        "#e29074",
        "#9c4b88",
        "#ab505f",
        "#dc85b6"
    ];
    colorArr = colorArr.concat(d3.schemeCategory20c);
    d3.csv(url, function(msg) {
        msg.forEach(function(n) {
            n.weight = +n.weight;
            if (arc[n.source]) {
                arc[n.source]['weight'] = arc[n.source]['weight'] + n.weight;
            } else {
                arc[n.source] = { name: n.source, type: n.source_type, weight: n.weight };
            }
            if (arc[n.target]) {
                arc[n.target]['weight'] = arc[n.target]['weight'] + n.weight;
            } else {
                arc[n.target] = { name: n.target, type: n.target_type, weight: n.weight };
            }
            var arr = [];
            arr[0] = n.source;
            arr[1] = n.target;
            arr[2] = n.weight;
            arr[3] = n.source_type;
            data.push(arr);
            var arr = [];
            arr[0] = n.target;
            arr[1] = n.source;
            arr[2] = n.weight;
            arr[3] = n.target_type;
            data.push(arr);
        })
        draw(data, arc);
    })

    function draw(data, arc) {
        var colors = {
            "疾病": "#da4480",
            "症状": "#5ab449"
        };
        for (var key in arc) {
            sortOrder.push(arc[key]);
            colors[key] = colorArr[arc[key] % colorArr.length];
        }
        sortOrder.sort(function(a, b) {
            if (a.type < b.type) {
                return -1;
            } else if (a.type == b.type) {
                return b.weight - a.weight;
            } else {
                return 1;
            }
        })
        colors["疾病"] = "#da4480";
        colors["症状"] = "#5ab449";

        function sort(a, b) {
            var a1 = arc[a];
            var b1 = arc[b];
            return d3.ascending(sortOrder.indexOf(a1), sortOrder.indexOf(b1));
        }

        var ch = viz.chord().data(data)
            .sort(sort)
            .label(function(d) {
                console.log(d.value);
                return d.source;
            }).labelPadding(1.05)
            .innerRadius(430)
            .outerRadius(450)
            .startAngle(Math.PI)
            // .duration(1000)
            .chordOpacity(0.3)
            // .fill(function(d) {
            //     var obj = arc[d];
            //     if (obj.type == 0) {
            //         return "#da4480";
            //     } else {
            //         return "#5ab449";
            //     }
            // });

        var width = 1200,
            height = 1100;

        var svg = d3.select("body").append("svg").attr("height", height).attr("width", width);

        svg.append("g").attr("transform", "translate(600,550)").call(ch);

        // adjust height of frame in bl.ocks.org
        d3.select(self.frameElement).style("height", height + 100 + "px").style("width", width + "px");
    }
}