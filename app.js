$(appReady);

function appReady(){
  var characterArr = []
  //Get character id and attack array from first row
$('.DrMario, .Mario, .Luigi, .Bowser, .Peach, .Yoshi, .DonkeyKong, .CaptainFlacon, .Ganon, .fox').click(function() {
  $.get('https://cors-anywhere.herokuapp.com/http://www.smashlounge.com/api/attack/char/'+this.id).then(function(response){
    console.log(response);
    characterArr.splice(0)
    characterArr.push(response);
    console.log(characterArr)
    ;
  });
})

//click on Jab 1 and get jab frames
$(".jab1").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.jab["0"].total_frames+ "  Active Frames: " + characterArr[0].attacks.jab[0].hit_start + "-" +characterArr[0].attacks.jab[0].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  $(".gifattack").attr("src", "https://smashboards.com/proxy.php?image=http%3A%2F%2Fi882.photobucket.com%2Falbums%2Fac30%2FX1-12%2FFoxJab.gif%3Ft%3D1282910671&hash=26b37c01a59c854fece263e44035a494")
  // $(".activeframes").append("<p>Active Frames: " + foxArr.hit_start + "-" +foxArr.hit_end+ "<p>" )
  }
)

$(".jab2").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.jab["1"].total_frames+ "  Active Frames: " + characterArr[0].attacks.jab[1].active_start + "-" +characterArr[0].attacks.jab[1].active_end);
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  // $(".gifattack").attr("src", "https://smashboards.com/proxy.php?image=http%3A%2F%2Fi882.photobucket.com%2Falbums%2Fac30%2FX1-12%2FFoxJab.gif%3Ft%3D1282910671&hash=26b37c01a59c854fece263e44035a494")
  // $(".activeframes").append("<p>Active Frames: " + foxArr.hit_start + "-" +foxArr.hit_end+ "<p>" )
  }
)

$(".jab3").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.jab["2"].total_frames+ "  Active Frames: " + characterArr[0].attacks.jab[2].hit_start + "-" +characterArr[0].attacks.jab[2].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for" + $(this).text())
})
//Tilt functions
$(".ftilt").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.tilt[2].total_frames+ "  Active Frames: " + characterArr["0"].attacks.tilt[2].hit_start + "-" +characterArr["0"].attacks.tilt[2].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  }
)

$(".uptilt").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.tilt[3].total_frames+ "  Active Frames: " + characterArr["0"].attacks.tilt[4].hit_start + "-" +characterArr["0"].attacks.tilt[4].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  }
)

$(".dtilt").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.tilt[2].total_frames+ "  Active Frames: " + characterArr["0"].attacks.tilt[3].hit_start + "-" +characterArr["0"].attacks.tilt[3].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  }
)
// Aerial attack functions. Changes depends on times hit
$(".upair").click(function(){
  //Fox = 6
  if (characterArr["0"].id == 6) {
    $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.aerial[1].total_frames+ "<p> <p>  Active Frames:<p>  <p>First Hit: "  + characterArr["0"].attacks.aerial[1].hit_start + "-" +characterArr["0"].attacks.aerial[1].hit_end
    + "<p> <p>Second hit: " +characterArr["0"].attacks.aerial[1].hit_second_start + "-" + characterArr["0"].attacks.aerial[1].hit_second_end +"<p>");
    $(".card-title").empty().append("Frame Data for " + $(this).text())
  } else {
    $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.aerial[1].total_frames+ "  Active Frames: "  + characterArr["0"].attacks.aerial[1].hit_start + "-" +characterArr["0"].attacks.aerial[1].hit_end + "<p>")
    $(".card-title").empty().append("Frame Data for " + $(this).text())
  }
})

$(".nair").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.aerial["0"].total_frames+ "  Active Frames: " + characterArr["0"].attacks.aerial[0].hit_start + "-" +characterArr["0"].attacks.aerial[0].hit_end + "<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text()+":")
  }
)

$(".bair").click(function(){
  $(".totalframes").empty().append("<p>Total Frames: " + characterArr["0"].attacks.aerial[4].total_frames+ "  Active Frames: " + characterArr["0"].attacks.aerial[4].hit_start + "-" +characterArr["0"].attacks.aerial[4].hit_end +"<p>");
  $(".card-title").empty().append("Frame Data for " + $(this).text())
  }
)


//This bracket is appReadybracket!
}


  //click fox, get fox attack data, put into var.
//   var foxArr = []
//   $(".fox").click(function() {
//
//     $.get('https://cors-anywhere.herokuapp.com/http://www.smashlounge.com/api/attack/char/6')
//       .then(function(response){
//         console.log(response);
//           foxArr.push(response);
//          console.log(foxArr);
//     })
//   })
//   $(".jab1").click(function(){
//     $(".totalframes").empty().append("Total Frames: " + foxArr["0"].attacks.jab["0"].total_frames+ "  Active Frames: " + foxArr[0].attacks.jab[0].hit_start + "-" +foxArr[0].attacks.jab[0].hit_end + "<p>");
//     $(".card-title").empty().append("Frame Data for Jab 1")
//     $(".gifattack").attr("src", "https://smashboards.com/proxy.php?image=http%3A%2F%2Fi882.photobucket.com%2Falbums%2Fac30%2FX1-12%2FFoxJab.gif%3Ft%3D1282910671&hash=26b37c01a59c854fece263e44035a494")
//     // $(".activeframes").append("<p>Active Frames: " + foxArr.hit_start + "-" +foxArr.hit_end+ "<p>" )
//     }
//   )
// }

// Gets character's attack info based on id  6= "fox"
  // $.get('https://cors-anywhere.herokuapp.com/http://www.smashlounge.com/api/attack/char/6')

// Identifies the attack class aerial
  // .then(function(response){
  //   console.log(response)
  //   console.log(response.attacks.arial);
  //    var toString = '';
  //    console.log(toString);
  //   // for (var property in response.attacks.arial) {
  //   //   toString += property + ': ' + response.attacks.arial[property]+'; ';
  //   // }
  //   $('.what').append(toString)
  // })


    // var toString = JSON.stringify(response.attacks.aerial['0'], null, 4)
    //     $('.what').append(toString);
    // });

    // console.log(response);
    // $('.what').append(toString)
    // console.log(response[1].gifs["0"].url);
    // $('.what').append(response["0"].gifs["0"]);



// $.getJSON('https://cors-anywhere.herokuapp.com/https://smashboards.com/threads/complete-fox-hitboxes-and-frame-data.285177/')
//   .then(function(response) {
//     console.log(response#post-11061109 > div > div.messageInfo.primaryContent > div.messageContent > article > blockquote > img:nth-child(11));
//   });
