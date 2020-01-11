export default function handlerToChangeOnPageWeDo(){

    const arrayOfCards = document.querySelectorAll('.item-container-cards');
    arrayOfCards.forEach((item) => item.addEventListener('click', listenerItemCardClick) );
    
    function listenerItemCardClick(event){
        const matchCardToText = {
            "image-gear-red-wedo": "Channel Operation and Management",
            "image-stars-small": "Creative Services for Influencers",
            "image-graphik-small": "Graphic Design & Photography",
            "image-lupa-small": "Business Development",
            "image-hlopushka-small": "Lyric Videos & Animation",
            "image-headphone-small": "Brand Campaigns",
        };
        const matchCardToImg = {
            "image-gear-red-wedo": "./img/bigIcons/gear2.png",
            "image-stars-small": "./img/bigIcons/star_big.png",
            "image-graphik-small": "./img/bigIcons/graphik_big.png",
            "image-lupa-small": "./img/bigIcons/Lupa_big.png",
            "image-hlopushka-small": "./img/bigIcons/CLAQUETA_basica.png",
            "image-headphone-small": "./img/bigIcons/Headphone_JD.png",
        };

        const paragraphWeDoActions = document.querySelector('.paragraph-we-do-actions');
        const imgWeDoActions = document.querySelector('.image-we-do-actions');

        paragraphWeDoActions.textContent = matchCardToText[event.target.className];
        imgWeDoActions.src = matchCardToImg[event.target.className];
    }
}