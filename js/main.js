// GLOBAL VARIABLES
var counter = 0;
var score = 0;
var timer = 30;
// var won = false;

// TIMER FUNCTION

var stopGame;
var timerCountdown;

function startTimer(){
  $('#timer').html('Timer: ' + timer);
  stopGame = setTimeout(function(){
    stop();
  }, 31000);
  // }, 5000);
  timerCountdown = setInterval(function(){
    $('#timer').html('Timer: ' + timer--);
  }, 1000);
}

//     stop();
//   }, 61000);
//   // }, 5000);
//   setInterval(function(){
//     $('#timer').html('Timer: ' + timer--);
//   }, 1000);
// }

// VIEW

function showScreen(id){
  $(id).show();
}

function hideScreen(id){
  $(id).on('click', function(evt){
    $(this).hide();
  });
}

function changeScoreDisplay(){
  $('#score').html('Score: ' + score);
}

// STOP GAME
function stop(){
  console.log(stopGame);
  clearTimeout(stopGame);
  console.log(timerCountdown);
  clearInterval(timerCountdown);
  console.log(regenerateID);
  clearInterval(regenerateID);
  if (score < 26) {
    window.alert('you lost!');
    $('#game').hide();
    $('#lose').show();
  } else {
    window.alert('you won!');
    $('#game').hide();
    $('#win').show();
  }
}

// DIV CONTROLLER

function init() {
  $('#splash').show();
  $('#start').on('click', function(evt){
    hideScreen('#splash');
    showScreen('#story');
  });
  $('#arrow-1').on('click', function(evt){
    hideScreen('#story');
    showScreen('#story-2');
  });
  $('#arrow-2').on('click', function(evt){
    hideScreen('#story-2');
    showScreen('#instructions');
  });
  $('#ready-to-play').on('click', function(evt){
    hideScreen('#instructions');
    showScreen('#game');
    startTimer();
    // makeNewSpiders();
    // deploySpiders();
    replaceSpiders();
    // addClass();
  });
  $('.replay-yes').on('click', function(evt){
    hideScreen('#win');
    hideScreen('#lose');
    showScreen('#game');
    startTimer();
    // clearInterval(replaceSpiders);
    // replaceSpiders();
    score = 0;
    changeScoreDisplay();
    replaceSpiders();
    // won = false;
    timer = 30;
  });
}

// CONTROLLER
// up score when correct spider is hit
function correctHit(){
  score++;
  console.log(score);
}

// down score when wrong spider is hit
function wrongHit(){
  if (score > 0){
    score--;
    console.log(score);
  } else {
    return;
  }
}

// function checkWinner(){
//   if (score >= 8){
//     $('#game').hide();
//     window.alert('you won!');
//     showScreen('#win');
//     won = true;
//   }
// }

// to deploy spiders/ get spiders to come back
// var $newSpiders = $('<img class="true" src="images/tinydomestichouse.png">');
// var $badSpiders = $('<img class="false" src="images/tinyhobo.png">');
// var $spiderColumn = $('.spider-column');

// get random number
function getRandom(){
  return Math.round(Math.random());
}

function getRandom3(){
  return Math.floor(Math.random() * 3);
}

// deploy randomspiders
// $('.spider-column').each(function(ind, column){
//   if ($(column).html().trim() == ""){
//     $(this).html('<img class="true" src="images/tinydomestichouse.png">');
//   }

// function makeNewSpiders (){
//   $('.spider-column').each(function(){
//     var result = getRandom();
//     if(result == 1){
//       $(this).append('<img class="true" src="images/tinydomestichouse.png">');
//     } else {
//       $(this).append('<img class="false" src="images/tinyhobo.png">');
//     }
//     console.log('makeNewSpiders works');
//   });
// }

//   $spiderColumn.append($newSpiders);
//   // when you deploy again, need to turn class back into .spider-column
//   // $('.empty').addClass('.spider-column').removeClass('.empty');
//   console.log('makeNewSpiders works');
// }


// deploySpiders -- if column is empty after trimming white space
// append good or bad spider at random
// unless good spiders < 3

// function deploySpiders(){
//   setInterval (function() {
//     console.log('deploySpiders works');
//     $('.spider-column').each(function(ind, column){
//       if ($(column).html().trim() == ""){
//         var result = getRandom();
//         if($('.true').length < 2){
//           $(this).append('<img class="true spider" src="images/tinydomestichouse.png">');
//         } else if (result == 1){
//           $(this).append('<img class="true spider" src="images/tinydomestichouse.png">');
//         } else {
//           $(this).append('<img class="false spider" src="images/tinyhobo.png">');
//         }
//         // $(this).html('<img class="true" src="images/tinydomestichouse.png">');
//       }
//     });f
//   }, 5000);
// }

var regenerateID;

function replaceSpiders(){
  regenerateID = setInterval(function(){
    $('.spider-column').each(function(ind, column){
      $(this).html('');
      var result = getRandom();
      var resultID = getRandom3();
      if (result == 1){
        $(this).append('<img class="true spider p' + resultID + '" src="images/black-widow-100.png">');
      } else {
        $(this).append('<img class="false spider p' + resultID + '" src="images/jumping-spider.png">');
      }
    });
  }, 6000);
}

//

// function checkForEmptycolumn(){
//   $('.spider-column').each(function(ind, column){
//     // debugger;
//     if ($(column).html().trim() == ""){
//       console.log('hello!');
//     }
//   });
// }

// function addClass(){
//   $('img').addClass('true');
//   console.log('addClass works');
// }

    // $('td').filter('.empty').html('<img class="true" src="images/tinydomestichouse.png">');
    // $('td').addClass('.spider-column').removeClass('.empty');

//     setInterval(makeNewSpiders, 5000);
//   }
// }

//$('.col').html();

// find out which ones don't have a spider
// append a new spider to it

// to check whether or not the spider is correct

var $gameboard = $('#gameboard');

// $('.true').on('click', checkWinner);
$('document').ready(function(){
  $gameboard.on('click', '.false', function() {
    $(this).remove();
    wrongHit();
    changeScoreDisplay();
  });
});

// $('.gameboard').on('click', '.true', correctHit);

// to remove spiders who were hit
$('document').ready(function(){
  $gameboard.on('click', '.true', function() {
    $(this).remove();
    // $(this).closest('td').removeClass('spider-column').addClass('empty');
    correctHit();
    changeScoreDisplay();
  });
});
// change class of 'td' to empty
// $gameboard.on('click', '.true', function(){
//   $(this).closest('td').removeClass('spider-column').addClass('empty');
//   console.log('empty now');
// });


// CANVAS
// get canvas and make drawing surface
// var canvas = document.querySelector('.canvas-class');
// var context = canvas.getContext('2d');
// var imageSpiderTrue = new Image();

// imageSpiderTrue.onload = function() {
//   context.drawImage(imageSpiderTrue, 150, 150);
// };

// imageSpiderTrue.src = 'images/tinydomestichouse.png';

// context.font = '40pt Calibri';
// context.fillText('Hello World!', 150, 100);

// context.translate(canvas.width / 2, canvas.height / 2);



//1st goal
// look over stuff we did and duplicate it
// 2nd goal
// put some images into screen
// 3rd goal: learn canvas
// html5canvastutorials.com
// 4th goal
//
