const MVC = {
    Controller : {
        torrents : require("../controller/torrents.js"),
        Category : require("../controller/Category.js"),
        graph : require("../controller/graph.js"),

    },
    Hook : {
        Category : require("../hook/Category.js")
    }
} 
export default MVC;

//from /src/controller
import MHC from './src/MHC'
MHC.Hook.Category.crossWard(()=>{})
