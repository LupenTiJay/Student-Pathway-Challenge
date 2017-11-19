 function renderGraphs(graphJSON, ids){
 	var graphs =  graphJSON;
        var ids = ids;

        for(var i in graphs) {
            Plotly.plot(ids[i], // the ID of the div, created above
                        graphs[i].data,
                        graphs[i].layout || {});
        }

    }