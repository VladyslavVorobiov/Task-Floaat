export default function handlerOnPageOurTeam(){
    const pageOurTeam = document.querySelector(".section-our-team");
    const footerPageOurTeam = pageOurTeam.querySelector('footer');

    footerPageOurTeam.addEventListener('mouseenter', listenerMouseOverFooterPageOurTeam);
    footerPageOurTeam.addEventListener('mouseleave', listenerMouseOutFooterPageOurTeam);

    function listenerMouseOverFooterPageOurTeam (){
        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');
        footerArrow.style.transform = 'rotate(45deg)';
        footerArrow.style.transitionDuration = '0.5s';
        footerArrow.style.transitionProperty = 'transform';
        
        //changeBackgroundFooter("0vw");
    }

    function listenerMouseOutFooterPageOurTeam (){
        const footerArrow = footerPageOurTeam.querySelector('.img-arrow');
        footerArrow.style.transform = 'rotate(0deg)';
        footerArrow.style.transitionDuration = '0.5s';
        footerArrow.style.transitionProperty = 'transform';
        
        //changeBackgroundFooter("100vw");
    }   

    function changeBackgroundFooter(width){
        const containerBackgroundFooter = pageOurTeam.querySelector('.container-background-footer');

        TweenLite.to(containerBackgroundFooter, 1, {
            left: width,
        });
    }
}