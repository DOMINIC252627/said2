const IMAGE_WIDTH= 500;
const DELAY= 3000;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $imageContainer = document.querySelector('.image-container');
const $images = document.querySelectorAll('.img');
let currentImg = 1;
let Timeout;
function updateImg(){
    if(currentImg> $images.length){
        currentImg=1;
    } else if(currentImg<1){
        currentImg=$images.length;
    }
    $imageContainer.computedStyleMap.transform= translateX(-$((currentImg-1)*IMAGE_WIDTH ));
    timeout = setTimeout(
        ()=>{
            currentImg++;
            updateImg();
        },
        DELAY,
    );
}
$prev.addEventListener(
    'click',
    ()=>{
        clearTimeout(timeout);
        currenImg--;
        updateImg();
    },
);
$next.addEventListener(
    'click',
    ()=>{
        clearTimeout(timeout);
        currenImg++;
        updateImg();
    },
);
updateImg();