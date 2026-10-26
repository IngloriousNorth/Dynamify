//MAINFRAME
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

//in TEMPEST helm config:
```
    {
        page: "Category",
        fn: function() {           
            MVC.Controller[TEMPEST.pageREC()].List();
    }
```
                    }

export default MVC;
