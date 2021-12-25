/* $( document ).ready(function() {
    $('#before-load').css('display', 'none');
}); */

/* $('#menumain').ImagesLoaded( 
    { background: true }, 
    function() {
        $('#before-load').css('display', 'none');
}); */

/* $('#pics').imagesLoaded( { background: true }, function() {
    console.log('#container background image loaded');
}); */


window.addEventListener('load', function () {
    $('#before-load').css('display', 'none');
})

document.addEventListener("DOMContentLoaded", function(event) {
    // - Code to execute when all DOM content is loaded. 
    // - including fonts, images, etc.
    //$('#before-load').css('display', 'none');
});


var cursize = 1;
// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('[contenteditable]');
    }
});

$(document).on('keypress', 'div.ed,input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        function doAll(){
            var $canfocus = $(':focusable');
            var index = $canfocus.index(document.activeElement) + 2;
            console.log('index: ' + index);
            showResBut();
            if (index >= $canfocus.length) {
                var main = document.getElementById("main");
                var newvow = document.createElement("div");
                //newvow.setAttribute("tabindex", index);
                newvow.classList.add("vow");
                newvow.classList.add("this-height");
                newvow.id = 'vow' + index;
                main.appendChild(newvow);
                var newline = document.createElement("div");
                newline.classList.add("ed");
                newline.classList.add("this-height");
                newline.id = 'line' + index;
                var curLinId = 'line' + index;

                function setsizealready(){
                    $('#ed-edheader').removeClass('edheader-def');
                    if(cursize == 1) {
                        
                        
                        $('.this-height').css('height','5vh');
                        $('.this-height').css('line-height','5vh');
                        if($('#menumain').hasClass('ar')){
                            newline.classList.add("edheader-5-ar");
                            newvow.classList.add("edheader-5-ar");
                        }else if($('#menumain').hasClass('gre') || $('#menumain').hasClass('sal')){
                            newline.classList.add("edheader-5-gre-sal");
                            newvow.classList.add("edheader-5-gre-sal");
                        }else if($('#menumain').hasClass('ros')){
                            newline.classList.add("edheader-5-ros");
                            newvow.classList.add("edheader-5-ros");
                        }else if($('#menumain').hasClass('b52') || $('#menumain').hasClass('laz')){
                            newline.classList.add("edheader-5-b52-laz");
                            newvow.classList.add("edheader-5-b52-laz");
                        }else if($('#menumain').hasClass('nin')){
                            newline.classList.add("edheader-5-nin");
                            newvow.classList.add("edheader-5-nin");
                        }
                        console.log('cursize: ' + cursize);
                    }else if(cursize == 2) {
                        //newline.classList.add("this-height");
                        $('.this-height').css('height','4vh');
                        $('.this-height').css('line-height','4vh');
                        if($('#menumain').hasClass('ar')){
                            newline.classList.add("edheader-4-ar");
                            newvow.classList.add("edheader-4-ar");
                        }else if($('#menumain').hasClass('gre') || $('#menumain').hasClass('sal')){
                            newline.classList.add("edheader-4-gre-sal");
                            newvow.classList.add("edheader-4-gre-sal");
                        }else if($('#menumain').hasClass('ros')){
                            newline.classList.add("edheader-4-ros");
                            newvow.classList.add("edheader-4-ros");
                        }else if($('#menumain').hasClass('b52') || $('#menumain').hasClass('laz')){
                            newline.classList.add("edheader-4-b52-laz");
                            newvow.classList.add("edheader-4-b52-laz");
                        }else if($('#menumain').hasClass('nin')){
                            newline.classList.add("edheader-4-nin");
                            newvow.classList.add("edheader-4-nin");
                        }
                        console.log('cursize: ' + cursize);
                    }else if(cursize == 3) {
                        //newline.classList.add("this-height");
                        $('.this-height').css('height','3vh');
                        $('.this-height').css('line-height','3vh');
                        if($('#menumain').hasClass('ar')){
                            newline.classList.add("edheader-3-ar");
                            newvow.classList.add("edheader-3-ar");
                        }else if($('#menumain').hasClass('gre') || $('#menumain').hasClass('sal')){
                            newline.classList.add("edheader-3-gre-sal");
                            newvow.classList.add("edheader-3-gre-sal");
                        }else if($('#menumain').hasClass('ros')){
                            newline.classList.add("edheader-3-ros");
                            newvow.classList.add("edheader-3-ros");
                        }else if($('#menumain').hasClass('b52') || $('#menumain').hasClass('laz')){
                            newline.classList.add("edheader-3-b52-laz");
                            newvow.classList.add("edheader-3-b52-laz");
                        }else if($('#menumain').hasClass('nin')){
                            newline.classList.add("edheader-3-nin");
                            newvow.classList.add("edheader-3-nin");
                        }
                        console.log('cursize: ' + cursize);
                    }
                }

                setsizealready();
                
                newline.setAttribute("contenteditable", "true");
                newline.setAttribute("tabindex", index);
                
                main.appendChild(newline);

                function getVowels(str) {
                    var m = str.match(/[aeiouауоыиэяюёе]/gi);
                    return m === null ? 0 : m.length;
                }

                newline.addEventListener("paste", function(e) {
                    e.preventDefault();
                    var text = e.clipboardData.getData("text/plain");
                    var mtext = text.split("\n");
                    
                    function addtext(item){
                        doAll();
                        
                        //newline.innerHTML = item;
                        //newvow.innerHTML = getVowels(item);

                        index = index + 1;
                        var newIndex = index + 1;
                        var newNewIndex = newIndex + 1;

                        var curLine = document.getElementById('line' + index);
                        var curVow = document.getElementById('vow' + index);
                        
                        curLine.innerHTML = item;
                        curVow.innerHTML = getVowels(item);

                        console.log('curLine ID: ' + curLine.id);
                        console.log('newNewInexNow: ' + newNewIndex);
                        console.log('curLinId: ' + curLine.id);                
                    }
                    mtext.forEach(addtext);
                    console.log(text.split("\n"));

                });

                newline.oninput = function() {
                    var nlv = this.textContent;
                    newvow.innerHTML = getVowels(this.textContent);
                }            
                index = $canfocus.index(document.activeElement) + 1;
            }
            $canfocus.eq(index).focus();
        }
        doAll();
    }
});

jQuery(function($){
    $(".ed").focusout(function(){
        var element = $(this);        
        if (!element.text().replace(" ", "").length) {
            element.empty();
        }
    });
});

function setBackground(){
    var numrand = Math.floor(Math.random() * 23) + 1;
    console.log('numrand: ' + numrand);
    $('#menumain').css('background-image', 'url(img/' + numrand + '.png)');
    $('#resmain').css('background-image', 'url(img/' + numrand + '.png)');
}

$( document ).ready( setBackground );

function openit(){
    $('#menumain').css({
        'left': '0',
    });
    console.log('opened');
    setBackground();
}

function closeit(){
    $('#menumain').css({
        'left': '-100vw',
    });
    console.log('closed'); 
}

function remClasses(){
    $('#stixnote').removeClass();
    //$('#closebutt').removeClass();
    if($('.ed').hasClass('edheader-5-ar')){
        $('.ed').removeClass('edheader-5-ar');
    }else if($('.ed').hasClass('edheader-5-gre-sal')){
        $('.ed').removeClass('edheader-5-gre-sal');
    }else if($('.ed').hasClass('edheader-5-ros')){
        $('.ed').removeClass('edheader-5-ros');
    }else if($('.ed').hasClass('edheader-5-b52-laz')){
        $('.ed').removeClass('edheader-5-b52-laz');
    }else if($('.ed').hasClass('edheader-5-nin')){
        $('.ed').removeClass('edheader-5-nin');
    }else if($('.ed').hasClass('edheader-4-ar')){
        $('.ed').removeClass('edheader-4-ar');
    }else if($('.ed').hasClass('edheader-4-gre-sal')){
        $('.ed').removeClass('edheader-4-gre-sal');
    }else if($('.ed').hasClass('edheader-4-ros')){
        $('.ed').removeClass('edheader-4-ros');
    }else if($('.ed').hasClass('edheader-4-b52-laz')){
        $('.ed').removeClass('edheader-4-b52-laz');
    }else if($('.ed').hasClass('edheader-4-nin')){
        $('.ed').removeClass('edheader-4-nin');
    }else if($('.ed').hasClass('edheader-3-ar')){
        $('.ed').removeClass('edheader-3-ar');
    }else if($('.ed').hasClass('edheader-3-gre-sal')){
        $('.ed').removeClass('edheader-3-gre-sal');
    }else if($('.ed').hasClass('edheader-3-ros')){
        $('.ed').removeClass('edheader-3-ros');
    }else if($('.ed').hasClass('edheader-3-b52-laz')){
        $('.ed').removeClass('edheader-3-b52-laz');
    }else if($('.ed').hasClass('edheader-3-nin')){
        $('.ed').removeClass('edheader-3-nin');
    }
    if($('.vow').hasClass('edheader-5-ar')){
        $('.vow').removeClass('edheader-5-ar');
    }else if($('.vow').hasClass('edheader-5-gre-sal')){
        $('.vow').removeClass('edheader-5-gre-sal');
    }else if($('.vow').hasClass('edheader-5-ros')){
        $('.vow').removeClass('edheader-5-ros');
    }else if($('.vow').hasClass('edheader-5-b52-laz')){
        $('.vow').removeClass('edheader-5-b52-laz');
    }else if($('.vow').hasClass('edheader-5-nin')){
        $('.vow').removeClass('edheader-5-nin');
    }else if($('.vow').hasClass('edheader-4-ar')){
        $('.vow').removeClass('edheader-4-ar');
    }else if($('.vow').hasClass('edheader-4-gre-sal')){
        $('.vow').removeClass('edheader-4-gre-sal');
    }else if($('.vow').hasClass('edheader-4-ros')){
        $('.vow').removeClass('edheader-4-ros');
    }else if($('.vow').hasClass('edheader-4-b52-laz')){
        $('.vow').removeClass('edheader-4-b52-laz');
    }else if($('.vow').hasClass('edheader-4-nin')){
        $('.vow').removeClass('edheader-4-nin');
    }else if($('.vow').hasClass('edheader-3-ar')){
        $('.vow').removeClass('edheader-3-ar');
    }else if($('.vow').hasClass('edheader-3-gre-sal')){
        $('.vow').removeClass('edheader-3-gre-sal');
    }else if($('.vow').hasClass('edheader-3-ros')){
        $('.vow').removeClass('edheader-3-ros');
    }else if($('.vow').hasClass('edheader-3-b52-laz')){
        $('.vow').removeClass('edheader-3-b52-laz');
    }else if($('.vow').hasClass('edheader-3-nin')){
        $('.vow').removeClass('edheader-3-nin');
    }

    if($('#closebutt').hasClass('b-5-ar')){
        $('#closebutt').removeClass('b-5-ar');
    }else if($('#closebutt').hasClass('b-5-gre')){
        $('#closebutt').removeClass('b-5-gre');
    }else if($('#closebutt').hasClass('b-5-sal')){
        $('#closebutt').removeClass('b-5-sal');
    }else if($('#closebutt').hasClass('b-5-ros')){
        $('#closebutt').removeClass('b-5-ros');
    }else if($('#closebutt').hasClass('b-5-b52')){
        $('#closebutt').removeClass('b-5-b52');
    }else if($('#closebutt').hasClass('b-5-laz')){
        $('#closebutt').removeClass('b-5-laz');
    }else if($('#closebutt').hasClass('b-5-nin')){
        $('#closebutt').removeClass('b-5-nin');
    }else if($('#closebutt').hasClass('b-4-ar')){
        $('#closebutt').removeClass('b-4-ar');
    }else if($('#closebutt').hasClass('b-4-gre')){
        $('#closebutt').removeClass('b-4-gre');
    }else if($('#closebutt').hasClass('b-4-sal')){
        $('#closebutt').removeClass('b-4-sal');
    }else if($('#closebutt').hasClass('b-4-ros')){
        $('#closebutt').removeClass('b-4-ros');
    }else if($('#closebutt').hasClass('b-4-b52')){
        $('#closebutt').removeClass('b-4-b52');
    }else if($('#closebutt').hasClass('b-4-laz')){
        $('#closebutt').removeClass('b-4-laz');
    }else if($('#closebutt').hasClass('b-4-nin')){
        $('#closebutt').removeClass('b-4-nin');
    }else if($('#closebutt').hasClass('b-3-ar')){
        $('#closebutt').removeClass('b-3-ar');
    }else if($('#closebutt').hasClass('b-3-gre')){
        $('#closebutt').removeClass('b-3-gre');
    }else if($('#closebutt').hasClass('b-3-sal')){
        $('#closebutt').removeClass('b-3-sal');
    }else if($('#closebutt').hasClass('b-3-ros')){
        $('#closebutt').removeClass('b-3-ros');
    }else if($('#closebutt').hasClass('b-3-b52')){
        $('#closebutt').removeClass('b-3-b52');
    }else if($('#closebutt').hasClass('b-3-laz')){
        $('#closebutt').removeClass('b-3-laz');
    }else if($('#closebutt').hasClass('b-3-nin')){
        $('#closebutt').removeClass('b-3-nin');
    }

    if($('#settbut').hasClass('b-5-ar')){
        $('#settbut').removeClass('b-5-ar');
    }else if($('#settbut').hasClass('b-5-gre')){
        $('#settbut').removeClass('b-5-gre');
    }else if($('#settbut').hasClass('b-5-sal')){
        $('#settbut').removeClass('b-5-sal');
    }else if($('#settbut').hasClass('b-5-ros')){
        $('#settbut').removeClass('b-5-ros');
    }else if($('#settbut').hasClass('b-5-b52')){
        $('#settbut').removeClass('b-5-b52');
    }else if($('#settbut').hasClass('b-5-laz')){
        $('#settbut').removeClass('b-5-laz');
    }else if($('#settbut').hasClass('b-5-nin')){
        $('#settbut').removeClass('b-5-nin');
    }else if($('#settbut').hasClass('b-4-ar')){
        $('#settbut').removeClass('b-4-ar');
    }else if($('#settbut').hasClass('b-4-gre')){
        $('#settbut').removeClass('b-4-gre');
    }else if($('#settbut').hasClass('b-4-sal')){
        $('#settbut').removeClass('b-4-sal');
    }else if($('#settbut').hasClass('b-4-ros')){
        $('#settbut').removeClass('b-4-ros');
    }else if($('#settbut').hasClass('b-4-b52')){
        $('#settbut').removeClass('b-4-b52');
    }else if($('#settbut').hasClass('b-4-laz')){
        $('#settbut').removeClass('b-4-laz');
    }else if($('#settbut').hasClass('b-4-nin')){
        $('#settbut').removeClass('b-4-nin');
    }else if($('#settbut').hasClass('b-3-ar')){
        $('#settbut').removeClass('b-3-ar');
    }else if($('#settbut').hasClass('b-3-gre')){
        $('#settbut').removeClass('b-3-gre');
    }else if($('#settbut').hasClass('b-3-sal')){
        $('#settbut').removeClass('b-3-sal');
    }else if($('#settbut').hasClass('b-3-ros')){
        $('#settbut').removeClass('b-3-ros');
    }else if($('#settbut').hasClass('b-3-b52')){
        $('#settbut').removeClass('b-3-b52');
    }else if($('#settbut').hasClass('b-3-laz')){
        $('#settbut').removeClass('b-3-laz');
    }else if($('#settbut').hasClass('b-3-nin')){
        $('#settbut').removeClass('b-3-nin');
    }
}

function changeFont(){
    remClasses();

    if($('#menumain').hasClass('ar')){
        $('#menumain').removeClass('ar');
        $('#menumain').addClass('gre');
        $('#wrapper').removeClass('ar');
        $('#wrapper').addClass('gre');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-gre-sal');
            $('.vow').addClass('edheader-5-gre-sal');
            $('#stixnote').addClass('st-5-gre');
            $('#closebutt').addClass('b-5-gre');
            $('#settbut').addClass('b-5-gre');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-gre-sal');
            $('.vow').addClass('edheader-4-gre-sal');
            $('#stixnote').addClass('st-4-gre');
            $('#closebutt').addClass('b-4-gre');
            $('#settbut').addClass('b-4-gre');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-gre-sal');
            $('.vow').addClass('edheader-3-gre-sal');
            $('#stixnote').addClass('st-3-gre');
            $('#closebutt').addClass('b-3-gre');
            $('#settbut').addClass('b-3-gre');
        }
    }else if($('#menumain').hasClass('gre')){
        $('#menumain').removeClass('gre');
        $('#menumain').addClass('sal');
        $('#wrapper').removeClass('gre');
        $('#wrapper').addClass('sal');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-gre-sal');
            $('.vow').addClass('edheader-5-gre-sal');
            $('#stixnote').addClass('st-5-sal');
            $('#closebutt').addClass('b-5-sal');
            $('#settbut').addClass('b-5-sal');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-gre-sal');
            $('.vow').addClass('edheader-4-gre-sal');
            $('#stixnote').addClass('st-4-sal');
            $('#closebutt').addClass('b-4-sal');
            $('#settbut').addClass('b-4-sal');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-gre-sal');
            $('.vow').addClass('edheader-3-gre-sal');
            $('#stixnote').addClass('st-3-sal');
            $('#closebutt').addClass('b-3-sal');
            $('#settbut').addClass('b-3-sal');
        }
    }else if($('#menumain').hasClass('sal')){
        $('#menumain').removeClass('sal');
        $('#menumain').addClass('b52');
        $('#wrapper').removeClass('sal');
        $('#wrapper').addClass('b52');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-b52-laz');
            $('.vow').addClass('edheader-5-b52-laz');
            $('#stixnote').addClass('st-5-b52');
            $('#closebutt').addClass('b-5-b52');
            $('#settbut').addClass('b-5-b52');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-b52-laz');
            $('.vow').addClass('edheader-4-b52-laz');
            $('#stixnote').addClass('st-4-b52');
            $('#closebutt').addClass('b-4-b52');
            $('#settbut').addClass('b-4-b52');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-b52-laz');
            $('.vow').addClass('edheader-3-b52-laz');
            $('#stixnote').addClass('st-3-b52');
            $('#closebutt').addClass('b-3-b52');
            $('#settbut').addClass('b-3-b52');
        }
    }else if($('#menumain').hasClass('b52')){
        $('#menumain').removeClass('b52');
        $('#menumain').addClass('ros');
        $('#wrapper').removeClass('b52');
        $('#wrapper').addClass('ros');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-ros');
            $('.vow').addClass('edheader-5-ros');
            $('#stixnote').addClass('st-5-ros');
            $('#closebutt').addClass('b-5-ros');
            $('#settbut').addClass('b-5-ros');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-ros');
            $('.vow').addClass('edheader-4-ros');
            $('#stixnote').addClass('st-4-ros');
            $('#closebutt').addClass('b-4-ros');
            $('#settbut').addClass('b-4-ros');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-ros');
            $('.vow').addClass('edheader-3-ros');
            $('#stixnote').addClass('st-3-ros');
            $('#closebutt').addClass('b-3-ros');
            $('#settbut').addClass('b-3-ros');
        }
    }else if($('#menumain').hasClass('ros')){
        $('#menumain').removeClass('ros');
        $('#menumain').addClass('nin');
        $('#wrapper').removeClass('ros');
        $('#wrapper').addClass('nin');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-nin');
            $('.vow').addClass('edheader-5-nin');
            $('#stixnote').addClass('st-5-nin');
            $('#closebutt').addClass('b-5-nin');
            $('#settbut').addClass('b-5-nin');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-nin');
            $('.vow').addClass('edheader-4-nin');
            $('#stixnote').addClass('st-4-nin');
            $('#closebutt').addClass('b-4-nin');
            $('#settbut').addClass('b-4-nin');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-nin');
            $('.vow').addClass('edheader-3-nin');
            $('#stixnote').addClass('st-3-nin');
            $('#closebutt').addClass('b-3-nin');
            $('#settbut').addClass('b-3-nin');
        }
    }else if($('#menumain').hasClass('nin')){
        $('#menumain').removeClass('nin');
        $('#menumain').addClass('laz');
        $('#wrapper').removeClass('nin');
        $('#wrapper').addClass('laz');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-b52-laz');
            $('.vow').addClass('edheader-5-b52-laz');
            $('#stixnote').addClass('st-5-laz');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-b52-laz');
            $('.vow').addClass('edheader-4-b52-laz');
            $('#stixnote').addClass('st-4-laz');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-b52-laz');
            $('.vow').addClass('edheader-3-b52-laz');
            $('#stixnote').addClass('st-3-laz');
        }
    }else if($('#menumain').hasClass('laz')){
        $('#menumain').removeClass('laz');
        $('#menumain').addClass('ar');
        $('#wrapper').removeClass('laz');
        $('#wrapper').addClass('ar');
        if(cursize == 1){
            $('.ed').addClass('edheader-5-ar');
            $('.vow').addClass('edheader-5-ar');
            $('#stixnote').addClass('st-5-ar');
        }else if(cursize == 2){
            $('.ed').addClass('edheader-4-ar');
            $('.vow').addClass('edheader-4-ar');
            $('#stixnote').addClass('st-5-ar');
        }else if(cursize == 3){
            $('.ed').addClass('edheader-3-ar');
            $('.vow').addClass('edheader-3-ar');
            $('#stixnote').addClass('st-5-ar');
        }
    }
}

function changeSize(){
    remClasses();
    
    if($('#menumain').hasClass('fesmall')){
        $('#menumain').removeClass('fesmall');
        $('#menumain').addClass('fbig');
        $('#wrapper').removeClass('fesmall');
        $('#wrapper').addClass('fbig');
        $('#wrapper').removeClass('wrapper-esmall');
        $('#wrapper').addClass('wrapper-big');
        $('.this-height').css('height','5vh');
        $('.this-height').css('line-height','5vh');
        if($('#menumain').hasClass('ar')){
            $('.ed').addClass('edheader-5-ar');
            $('.vow').addClass('edheader-5-ar');
            $('#stixnote').addClass('st-5-ar');
        }else if($('#menumain').hasClass('gre')){
            $('.ed').addClass('edheader-5-gre-sal');
            $('.vow').addClass('edheader-5-gre-sal');
            $('#stixnote').addClass('st-5-gre');
            $('#closebutt').addClass('b-5-gre');
            $('#settbut').addClass('b-5-gre');
        }else if($('#menumain').hasClass('sal')){
            $('.ed').addClass('edheader-5-gre-sal');
            $('.vow').addClass('edheader-5-gre-sal');
            $('#stixnote').addClass('st-5-sal');
            $('#closebutt').addClass('b-5-sal');
            $('#settbut').addClass('b-5-sal');
        }else if($('#menumain').hasClass('ros')){
            $('.ed').addClass('edheader-5-ros');
            $('.vow').addClass('edheader-5-ros');
            $('#stixnote').addClass('st-5-ros');
            $('#closebutt').addClass('b-5-ros');
            $('#settbut').addClass('b-5-ros');
        }else if($('#menumain').hasClass('laz')){
            $('.ed').addClass('edheader-5-b52-laz');
            $('.vow').addClass('edheader-5-b52-laz');
            $('#stixnote').addClass('st-5-laz');
        }else if($('#menumain').hasClass('b52')){
            $('.ed').addClass('edheader-5-b52-laz');
            $('.vow').addClass('edheader-5-b52-laz');
            $('#stixnote').addClass('st-5-b52');
            $('#closebutt').addClass('b-5-b52');
            $('#settbut').addClass('b-5-b52');
        }else if($('#menumain').hasClass('nin')){
            $('.ed').addClass('edheader-5-nin');
            $('.vow').addClass('edheader-5-nin');
            $('#stixnote').addClass('st-5-nin');
            $('#closebutt').addClass('b-5-nin');
            $('#settbut').addClass('b-5-nin');
        }
        if($('#settbut').hasClass('settbut-esmall')){
            $('#settbut').removeClass('settbut-esmall');
            $('#settbut').addClass('settbut-def');
        }
        if($('#closebutt').hasClass('settbut-esmall')){
            $('#closebutt').removeClass('settbut-esmall');
            $('#closebutt').addClass('settbut-def');
        }
        cursize = 1;
        console.log('cursize: ' + cursize);   

    }else if($('#menumain').hasClass('fbig')){
        $('#menumain').removeClass('fbig');
        $('#menumain').addClass('fsmall');
        $('#wrapper').removeClass('fbig');
        $('#wrapper').addClass('fsmall');
        $('#wrapper').removeClass('wrapper-big');
        $('#wrapper').addClass('wrapper-small');
        $('.this-height').css('height','4vh');
        $('.this-height').css('line-height','4vh');
        if($('#menumain').hasClass('ar')){
            $('.ed').addClass('edheader-4-ar');
            $('.vow').addClass('edheader-4-ar');
            $('#stixnote').addClass('st-4-ar');
        }else if($('#menumain').hasClass('gre')){
            $('.ed').addClass('edheader-4-gre-sal');
            $('.vow').addClass('edheader-4-gre-sal');
            $('#stixnote').addClass('st-4-gre');
            $('#closebutt').addClass('b-4-gre');
            $('#settbut').addClass('b-4-gre');
        }else if($('#menumain').hasClass('sal')){
            $('.ed').addClass('edheader-4-gre-sal');
            $('.vow').addClass('edheader-4-gre-sal');
            $('#stixnote').addClass('st-4-sal');
            $('#closebutt').addClass('b-4-sal');
            $('#settbut').addClass('b-4-sal');
        }else if($('#menumain').hasClass('ros')){
            $('.ed').addClass('edheader-4-ros');
            $('.vow').addClass('edheader-4-ros');
            $('#stixnote').addClass('st-4-ros');
            $('#closebutt').addClass('b-4-ros');
            $('#settbut').addClass('b-4-ros');
        }else if($('#menumain').hasClass('b52')){
            $('.ed').addClass('edheader-4-b52-laz');
            $('.vow').addClass('edheader-4-b52-laz');
            $('#stixnote').addClass('st-4-b52');
            $('#closebutt').addClass('b-4-b52');
            $('#settbut').addClass('b-4-b52');
        }else if($('#menumain').hasClass('laz')){
            $('.ed').addClass('edheader-4-b52-laz');
            $('.vow').addClass('edheader-4-b52-laz');
            $('#stixnote').addClass('st-4-laz');
        }else if($('#menumain').hasClass('nin')){
            $('.ed').addClass('edheader-4-nin');
            $('.vow').addClass('edheader-4-nin');
            $('#stixnote').addClass('st-4-nin');
            $('#closebutt').addClass('b-4-nin');
            $('#settbut').addClass('b-4-nin');
        }
        if($('#settbut').hasClass('settbut-def')){
            $('#settbut').removeClass('settbut-def');
            $('#settbut').addClass('settbut-small');
        }
        if($('#closebutt').hasClass('settbut-def')){
            $('#closebutt').removeClass('settbut-def');
            $('#closebutt').addClass('settbut-small');
        }        
        cursize = 2;
        console.log('cursize: ' + cursize);   
        
    }else if($('#menumain').hasClass('fsmall')){
        $('#menumain').removeClass('fsmall');
        $('#menumain').addClass('fesmall');
        $('#wrapper').removeClass('fsmall');
        $('#wrapper').addClass('fesmall');
        $('#wrapper').removeClass('wrapper-small');
        $('#wrapper').addClass('wrapper-esmall');
        $('.this-height').css('height','3vh');
        $('.this-height').css('line-height','3vh');
        if($('#menumain').hasClass('ar')){
            $('.ed').addClass('edheader-3-ar');
            $('.vow').addClass('edheader-3-ar');
            $('#stixnote').addClass('st-3-ar');
        }else if($('#menumain').hasClass('gre')){
            $('.ed').addClass('edheader-3-gre-sal');
            $('.vow').addClass('edheader-3-gre-sal');
            $('#stixnote').addClass('st-3-gre');
            $('#closebutt').addClass('b-3-gre');
            $('#settbut').addClass('b-3-gre');
        }else if($('#menumain').hasClass('sal')){
            $('.ed').addClass('edheader-3-gre-sal');
            $('.vow').addClass('edheader-3-gre-sal');
            $('#stixnote').addClass('st-3-sal');
            $('#closebutt').addClass('b-3-sal');
            $('#settbut').addClass('b-3-sal');
        }else if($('#menumain').hasClass('ros')){
            $('.ed').addClass('edheader-3-ros');
            $('.vow').addClass('edheader-3-ros');
            $('#stixnote').addClass('st-3-ros');
            $('#closebutt').addClass('b-3-ros');
            $('#settbut').addClass('b-3-ros');
        }else if($('#menumain').hasClass('b52')){
            $('.ed').addClass('edheader-3-b52-laz');
            $('.vow').addClass('edheader-3-b52-laz');
            $('#stixnote').addClass('st-3-b52');
            $('#closebutt').addClass('b-3-b52');
            $('#settbut').addClass('b-3-b52');
        }else if($('#menumain').hasClass('laz')){
            $('.ed').addClass('edheader-3-b52-laz');
            $('.vow').addClass('edheader-3-b52-laz');
            $('#stixnote').addClass('st-3-laz');
        }else if($('#menumain').hasClass('nin')){
            $('.ed').addClass('edheader-3-nin');
            $('.vow').addClass('edheader-3-nin');
            $('#stixnote').addClass('st-3-nin');
            $('#closebutt').addClass('b-3-nin');
            $('#settbut').addClass('b-3-nin');
        }
        if($('#settbut').hasClass('settbut-small')){
            $('#settbut').removeClass('settbut-small');
            $('#settbut').addClass('settbut-esmall');
        }
        if($('#closebutt').hasClass('settbut-small')){
            $('#closebutt').removeClass('settbut-small');
            $('#closebutt').addClass('settbut-esmall');
        }        
        cursize = 3;
        console.log('cursize: ' + cursize);        
    }
}
var cblack = '#030303';
var cred = '#990000';
var cblue = '#330099';
var cgreen = '#006600';

function changeColor(){
    var curcol = $('body').css("color");

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    var hexCurcol = rgb2hex(curcol);

    if(hexCurcol == cblack){
        $('body').css('color', cred);
    }else if(hexCurcol == cred){
        $('body').css('color', cblue);
    }else if(hexCurcol == cblue){
        $('body').css('color', cgreen);
    }else if(hexCurcol == cgreen){
        $('body').css('color', cblack);
    }
    console.log('cblack: ' + cblack);
    console.log('curcol: ' + curcol);
    console.log('hexCurcol: ' + hexCurcol);
}

function showResBut(){
    $('#res-but').removeClass('no-result');
}

function gatherLines(){
    $('.ed').each(function(i,elem) {
        var thistext;
        if($(this).text()){
            thistext = $(this).text();
        }else{
            thistext = "<br/>"
        }
        $("#rescont").append("<p>" + thistext + "</p>"); 
    });
}

function showRes(){
    setBackground();
    $('#resmain').removeClass('no-result');
    $('#resmain').addClass("is-result");
    gatherLines();
    $('#wrapper').removeClass('wrap-rel');
    $('#wrapper').addClass('wrap-fix');
    
}

function closeRes(){
    $('#resmain').removeClass('is-result');
    $('#resmain').addClass("no-result");
    $("#rescont").html('');
    $('#wrapper').removeClass('wrap-fix');
    $('#wrapper').addClass('wrap-rel');
}

/* $(window).load(function() {
    $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
}); */

/* $(window).load(function() {
    $('#before-load').css('display', 'none');
}); */
