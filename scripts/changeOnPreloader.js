export default function preloaderPageEffects(){

    const preloaderPage = document.querySelector(".preloader");
    const imagePreloader = document.querySelector(".image-preloader");

    setTimeout( () => imagePreloader.src = "./img/icons/Headphone_JD.png", 300);
    setTimeout( () => imagePreloader.src = "./img/icons/star_big.png", 600);
    setTimeout( hidePreloader , 800);

    function hidePreloader(){
        TweenLite.to(preloaderPage, 1, {
            height:"0"
        });
    }
}