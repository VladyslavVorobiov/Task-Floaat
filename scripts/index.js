import handlerToRotateImagesOnFirstPage from './rotateImgFirstPage.js';
import handlerToChangeOnPageWeDo from './changeOnPageWeDo.js';
import effectDuringScroll from "./effectDuringScroll.js";
import handlerOnPageOurTeam from "./changeOnPageOurTeam.js";

window.addEventListener("load", mainScript);

function mainScript(){
    handlerToRotateImagesOnFirstPage();
    handlerToChangeOnPageWeDo();
    handlerOnPageOurTeam();

    effectDuringScroll();
}

