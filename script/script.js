function skillBar(level) {
  console.log("clicked"+level);
  var bar = document.getElementById("0_skillBar");
  var beginner = document.getElementById("1_skillBar");
  var intermediate = document.getElementById("2_skillBar");
  var advanced = document.getElementById("3_skillBar");
  bar.style.display = "none"
  beginner.style.display = "none"
  intermediate.style.display = "none"
  advanced.style.display = "none"
  switch(level){
    case 0:
    bar.style.display = "none"
    beginner.style.display = "none"
    intermediate.style.display = "none"
    advanced.style.display = "none"
    bar.style.display = "block";
    break;
    case 1:
    bar.style.display = "none"
    beginner.style.display = "none"
    intermediate.style.display = "none"
    advanced.style.display = "none"
    beginner.style.display = "block";
    break;
    case 2:
    bar.style.display = "none"
    beginner.style.display = "none"
    intermediate.style.display = "none"
    advanced.style.display = "none"
    intermediate.style.display = "block";
    break;
    case 3:
    bar.style.display = "none"
    beginner.style.display = "none"
    intermediate.style.display = "none"
    advanced.style.display = "none"
    advanced.style.display = "block";
    break;
    }
  }

  function hideBar() {
    var bar = document.getElementById("0_skillBar");
    var beginner = document.getElementById("1_skillBar");
    var intermediate = document.getElementById("2_skillBar");
    var advanced = document.getElementById("3_skillBar");
    bar.style.display = "block"
    beginner.style.display = "none"
    intermediate.style.display = "none"
    advanced.style.display = "none"

  }