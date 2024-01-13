// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);


/*function togglepp(){
        if (document.getElementById('dcu') && document.getElementById('uid') && document.getElementById('server') && document.getElementById('code')) {
                document.getElementById('pp1').classList.toggle('openpp');
        }
        else 
                null;
}

let isQuestionnaire1Filled = document.getElementById('dcu').value.trim() !== '';
let isQuestionnaire2Filled = document.getElementById('uid').value.trim() !== '';
let isQuestionnaire3Filled = document.getElementById('server').value.trim() !== '';
let isQuestionnaire4Filled = document.getElementById('code').value.trim() !== '';


if (isQuestionnaire1Filled && isQuestionnaire2Filled && isQuestionnaire3Filled && isQuestionnaire4Filled) {

    document.getElementById('pp1').classList.toggle('openpp');
} else {
    // Code to handle the case when not all questionnaires are filled
    null;
}*/


document.getElementById('form-submit-pp1').addEventListener('click', function(event) {
    event.preventDefault();
    toggleFormSubmissionsPP1();
});

function toggleFormSubmissionsPP1() {
    let isQuestionnaire1Filled = document.getElementById('dcu').value.trim() !== '';
    let isQuestionnaire2Filled = document.getElementById('uid').value.trim() !== '';
    let isQuestionnaire3Filled = document.getElementById('server').value.trim() !== '';
    let isQuestionnaire4Filled = document.getElementById('code').value.trim() !== '';

    if (isQuestionnaire1Filled && isQuestionnaire2Filled && isQuestionnaire3Filled && isQuestionnaire4Filled) {
        document.getElementById('pp1').classList.toggle('openpp');
    } else {
        alert('Please fill out all the required questions before submitting.');
    }
}