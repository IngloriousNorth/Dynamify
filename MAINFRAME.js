//MAINFRAME as ES module
```
import quotations from '../script/controllers/quotations.js';
import flash from '../script/controllers/flash_card.js';
import realTimeSearch from '../script/controllers/realtime_search.js';
import quotationGraph from '../script/models/quotation_graph.js';
import homeV from '../script/views/home.js'
import menuV from '../script/views/menu.js'//the bug is here
import home from '../script/models/home.js'
import menu from '../script/models/menu.js'

const MVC = {
    Model: {
        quotationGraph: quotationGraph,
        home : home,
        menu : menu

    },
    View: {
        homeV : homeV,
        menuV : menuV//what's up with the menu?
    },
    Controller: {
        quotations : quotations,
        flash: flash,
        search: realTimeSearch,
    }
};

export default MVC;
```

//MAINFRAME... with Browserify
const MVC = {
    Model: {
        graph: require("../model/graph"),
        hero: require("../model/hero"),
        recommendation: require("../model/recommendation"),
    },
    Hook: {
        node: require("../hook/node"),
        recommendation: require("../hook/recommendation"),
        search: require("../hook/search")
    },
    Controller: {
        recommendation: require("../controller/recommendation"),
        search: require("../controller/search"),
    }
};

//now on event:
MVC.Hook.graph.showDiv();

//page change
MVC.Controller.search.promptUser();

//if using TEMPEST router: in helm config:
```
    {
        page: "Category",
        fn: function() {           
            MVC.Controller[TEMPEST.pageREC()].List();//calls List whenever #Category accessed
    }
```
                    

export default MVC;
