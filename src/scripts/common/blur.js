var blur =(function(){
    var wrapper = document.querySelector('.contacts-form'),
        form = document.querySelector('.blur');
        return {
           set: function(){
               var  windowWidth = document.querySelector('.section-content_testimonials').offsetWidth,
                    windowHeight = document.querySelector('.section-content_testimonials').offsetHeight,
                    posLeft = -wrapper.offsetLeft,
                    posTop =  -wrapper.offsetTop,
                    imgWidth = 2000,
                    imgHeight = 1358;
                var imageRatio =imgWidth/imgHeight;
                var coverRatio = windowWidth/windowHeight;
                var coverWidth, coverHeight, scale;
                    if (imageRatio >= coverRatio) {
                        coverHeight = windowHeight;
                        scale = (coverHeight / imgHeight);
                        coverWidth =imgWidth * scale;
                    } else {
                        coverWidth = windowWidth;
                        scale = (coverWidth / imgWidth);
                        coverHeight = imgHeight * scale;
                    }
          
                        var blurCss = form.style;
               blurCss.backgroundSize = coverWidth + 'px' + " " + coverHeight + 'px';
               blurCss.backgroundPosition = posLeft + 'px' + " " + posTop + 'px';
            }, 
        };

}());

function init(){
    if(document.querySelector('.blur') != null){
        blur.set();
        window.onresize = function(){
            blur.set();
        };
    }  
}



module.exports = init;