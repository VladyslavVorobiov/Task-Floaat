export default function handlerToRotateImagesOnFirstPage(){

    const sectionFirstPage = document.querySelector('.section-firstPage');
    const textCreative = document.querySelector('.creative');
    const imageForYou = document.querySelector('.image-for-you');

    const maxAngle = 35;
    const currentWidthDevice = document.documentElement.clientWidth;
    const currentHeightDevice = document.documentElement.clientHeight;
    const coordinatesMiddleTextCreative = getCoordsMiddle(textCreative);
    const middleDiagonal = getDistanceBetweenPoints({x:0, y:0},{x:currentWidthDevice/2, y:currentHeightDevice/2});
    let amountOfRotation = {
        x:0,
        y:0.5,
        z:0,
        angle:0
    };

    sectionFirstPage.addEventListener('mouseenter', hintBrowser);
    sectionFirstPage.addEventListener('mouseleave', removeHint);
    sectionFirstPage.addEventListener('mousemove', listenerToRotateImagesOnFirstPage);

    function listenerToRotateImagesOnFirstPage(event){
        const coordinatesMouse = {
            x: event.clientX,
            y: event.clientY
        };
        
        const distanceMouseTextCreative = getDistanceBetweenPoints(coordinatesMiddleTextCreative, coordinatesMouse);
        
        if((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){
            amountOfRotation.angle = maxAngle * distanceMouseTextCreative / middleDiagonal;
            amountOfRotation.x = -0.5;
        }
        else if((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y <= currentHeightDevice/2)){
            amountOfRotation.angle = -1 * maxAngle * distanceMouseTextCreative / middleDiagonal;
            amountOfRotation.x = 0.5;
        }
        else if ((coordinatesMouse.x <= currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){
            amountOfRotation.angle =  maxAngle * distanceMouseTextCreative / middleDiagonal;
            amountOfRotation.x = 0.5;
        }
        else if ((coordinatesMouse.x > currentWidthDevice/2) && (coordinatesMouse.y > currentHeightDevice/2)){
            amountOfRotation.angle = -1 * maxAngle * distanceMouseTextCreative / middleDiagonal;
            amountOfRotation.x = -0.5;
        }
       
        textCreative.style.transform = `perspective(${currentWidthDevice*10}px) ` + elementRotate3d(amountOfRotation);
        textCreative.style.transitionDuration = '0.5s';
        textCreative.style.transitionProperty = 'transform';
        imageForYou.style.transform =  `perspective(${currentWidthDevice*10}px) ` + elementRotate3d(amountOfRotation);
        imageForYou.style.transitionDuration = '0.5s';
        imageForYou.style.transitionProperty = 'transform';
    }
    function hintBrowser() {
        // The optimizable properties that are going to change
        // in the animation's keyframes block
        this.style.willChange = 'transform, opacity';
    }
      
    function removeHint() {
        this.style.willChange = 'auto';
    }
    
    function elementRotate3d(amountOfRotation){
        return `rotate3d(${amountOfRotation.x}, ${amountOfRotation.y}, ${amountOfRotation.z}, ${amountOfRotation.angle}deg)`;
    }
    
    function getCoordsMiddle(elem) {
        let box = elem.getBoundingClientRect();
    
        return {
          y: box.top + pageYOffset + box.height/2,
          x: box.left + pageXOffset + box.width/2
        };
    }
    
    function getDistanceBetweenPoints(p1, p2){
        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
    }
}