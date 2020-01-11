import handlerToRotateImagesOnFirstPage from './rotateImgFirstPage.js';
import handlerToChangeOnPageWeDo from './changeOnPageWeDo.js';

window.addEventListener("load", mainScript);

function mainScript(){
    handlerToRotateImagesOnFirstPage();
    handlerToChangeOnPageWeDo();
}
