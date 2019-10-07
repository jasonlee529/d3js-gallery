function chord(url){
    var data = [],
    arc = {};
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
    console.log(msg);
    msg.forEach(function(n) {
        arc[n.source] = arc[n.source] ? arc[n.source] + 1 : 1;
        arc[n.target] = arc[n.target] ? arc[n.target] + 1 : 1;
        var arr = [];
        arr[0] = n.source;
        arr[1] = n.target;
        arr[2] = n.weight;
        data.push(arr);
        var arr = [];
        arr[0] = n.target;
        arr[1] = n.source;
        arr[2] = n.weight;
        data.push(arr);
    })
    draw(data, arc);
})

function draw(data, arc) {
    console.log(data);
    console.log(arc);

    var colors = {
        "疾病": "#da4480",
        "症状": "#5ab449"
            // ,"Bournemouth":    "#7f5acd"
            // ,"Chelsea":        "#aab740"
            // ,"Crystal Palace": "#ce58c0"
            // ,"Everton":        "#50a26e"
            // ,"Leicester City": "#d1434b"
            // ,"Liverpool":      "#45c0bc"
            // ,"Manchester City":"#ce5929"
            // ,"Manchester Utd": "#4e7bda"
            // ,"Newcastle Utd":  "#d49d3c"
            // ,"Norwich City":   "#6660a3"
            // ,"Southampton":    "#7b853c"
            // ,"Stoke City":     "#b58dde"
            // ,"Sunderland":     "#97622e"
            // ,"Swansea City":   "#609dd6"
            // ,"Tottenham":      "#e29074"
            // ,"Watford":        "#9c4b88"
            // ,"West Bromwich":  "#ab505f"
            // ,"West Ham Utd":   "#dc85b6"
    };

    var sortOrder = [
        "疾病", "症状"
    ];
    for (var key in arc) {
        sortOrder.push(key);
        colors[key] = colorArr[arc[key] % colorArr.length];
    }
    colors["疾病"] = "#da4480";
    colors["症状"] = "#5ab449";
    console.log(colors);

    function sort(a, b) {
        return d3.ascending(sortOrder.indexOf(a), sortOrder.indexOf(b));
    }

    var ch = viz.chord().data(data)
        .sort(sort)
        .label(function(d) {
            console.log(d);
            return d.source;
        })
        .innerRadius(430)
        .outerRadius(450)
        .startAngle(0)
        // .duration(1000)
        .chordOpacity(0.3);

    var width = 1200,
        height = 1100;

    var svg = d3.select("body").append("svg").attr("height", height).attr("width", width);

    svg.append("g").attr("transform", "translate(600,550)").call(ch);

    // adjust height of frame in bl.ocks.org
    d3.select(self.frameElement).style("height", height + "px").style("width", width + "px");
}
}