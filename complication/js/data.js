
/**
 *
 * DATA SOURCE:  http://www.fec.gov/data/index.jsp/
 *
 */

/**
 * Daisy Chain Data Fetches to ensure all data is loaded prior to updates (async calls)
 */

// var dataDispatch=d3.dispatch("end");
var dataCalls=[];
var numCalls=0;

function fetchData(id) {
	linkGroup = undefined ;

	cns=[],
	    cands=[],
	    pacs=[],
	    pacsHouse=[],
	    pacsSentate=[],
	    contr=[],
	    h_dems=[],
	    h_reps=[],
	    h_others=[],
	    house=[];
	    s_dems=[],
	    s_reps=[],
	    s_others=[],
	    senate=[],
	    total_hDems=0,
	    total_sDems=0,
	    total_hReps=0,
	    total_sReps=0,
	    total_hOthers=0,
	    total_sOthers=0,
	    contributions=[],
	    c_senate=[];
	    c_house=[];
	    pacs=[],
	    pacsById={},
	    chordsById={},
	    nodesById={},
	    chordCount=20,
	    pText=null,
	    pChords=null,
	    nodes=[],
	    renderLinks=[],
	    colorByName={},
	    totalContributions=0,
	    delay=2;
	    
    dataCalls=[];
//    dataDispatch.on("end",onDataFetched)
    /*
    var parameters = window.location.search;
    var id = '10002';
    if( parameters && parameters.length > 0 ){
    		parameters = parameters.substring(1);
    		parameters = parameters.split('&');
    		for( var idx=parameters.length-1;idx+1;idx--){
    			var key = parameters[idx].split('=')[0];
    			if( 'id' == key ){
    				id = parameters[idx].split('=')[1];
    			}
    		}
    }
    */
//    addStream("/checkup/data/disease/complication/node_group_"+id+".csv", onFetchCandidatesHouse);
    //addStream("/checkup/data/disease/complication/node_group_screen_10002.csv", onFetchCandidatesSenate);
//    addStream("/checkup/data/disease/complication/Candidates_Senate.csv", onFetchCandidatesSenate);
//   addStream("/checkup/data/disease/complication/link_relation_"+id+".csv", onFetchContributionsHouse);
    //addStream("/checkup/data/disease/complication/link_relation_screen_10002.csv", onFetchContributionsSenate);
//    addStream("/checkup/data/disease/complication/Contributions_Senate.csv", onFetchContributionsSenate);
//   addStream("/checkup/data/disease/complication/arc_disease_"+id+".csv", onFetchPacsHouse);
   // addStream("/checkup/data/disease/complication/arc_disease_screen_10002.csv", onFetchPacsSenate);
//    addStream("/checkup/data/disease/complication/Pacs_Senate.csv", onFetchPacsSenate);
//    startFetch();
console.log('fdafdas');
        d3.json("./data/data.json",function(data){
            onFetchPacsHouse(data.arcs);
            onFetchCandidatesHouse(data.nodes);
            onFetchContributionsHouse(data.links);
            main();
        });
  
//    $.getJSON(ctx+'/analysis/overview/diseaseComp.json',{},function(data){
//    	onFetchPacsHouse(data.arcs);
//    	onFetchCandidatesHouse(data.nodes);
//    	onFetchContributionsHouse(data.links);
//    	main();
//    });
}


function onFetchCandidatesSenate(csv) {

     for (var i=0; i < csv.length; i++) {
        var r=csv[i];
         r.value=Number(r.Amount);
        cns[r.CAND_ID]=r;

            senate.push(r);
            if (r.PTY=="REP") {
                s_reps.push(r);
                total_sReps+= r.value;
            }
            else if (r.PTY=="DEM") {
                s_dems.push(r)
                total_sDems+= r.value;
            }
            else {
                s_others.push(r);
                total_sOthers+= r.value;
            }

     }

    log("onFetchCandidatesSenate()");
    endFetch();
}

function onFetchCandidatesHouse(csv) {
    for (var i=0; i < csv.length; i++) {
        var r=csv[i];
        r.value=Number(r.Amount);
        cns[r.CAND_ID]=r;
        house.push(r);
        if (r.PTY=="REP") {
            h_reps.push(r);
            total_hReps+= r.value;
        }
        else if (r.PTY=="DEM") {
            h_dems.push(r)
            total_hDems+= r.value;
        }
        else {
            h_others.push(r);
            total_hOthers+= r.value;
        }
    }
    log("onFetchCandidatesHouse()");
    endFetch();
}

function onFetchContributionsSenate(csv) {

    var i=0;
    csv.forEach(function (d) {
        d.Key="S"+(i++);
        contributions.push(d);
        c_senate.push(d);
    });

    log("onFetchContributionsSenate()");
    endFetch();

}

function onFetchContributionsHouse(csv) {
    var i=0;
    csv.forEach(function (d) {
        d.Key="H"+(i++);
        contributions.push(d);
        c_house.push(d);
    });
    console.log("c_housce", c_house);

    log("onFetchContributionsHouse()");
    endFetch();

}

function onFetchPacsHouse(csv) {
    pacsHouse=csv;
    for (var i=0; i < pacsHouse.length; i++) {
        pacsById["house_" + pacsHouse[i].CMTE_ID]=pacsHouse[i];
    }

    log("onFetchPacsHouse()");
    endFetch();


}

function onFetchPacsSenate(csv) {

    pacsSenate=csv;
    for (var i=0; i < pacsSenate.length; i++) {
        pacsById["senate_" + pacsSenate[i].CMTE_ID]=pacsSenate[i];
    }

    log("onFetchPacsSenate()");
    endFetch();

}


function addStream(file,func) {
    var o={};
    o.file=file;
    o.function=func;
    dataCalls.push(o);
}

function startFetch() {
    numCalls=dataCalls.length;
    dataCalls.forEach(function (d) {
        d3.csv(d.file, d.function);
    })
}

function endFetch() {
    numCalls--;
    if (numCalls==0) {
       // dataDispatch.end();
        main();
    }
}
