<!--My Skills Page-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" >
    <link rel="stylesheet" href="../styles/css/styles.css">
    <link rel="stylesheet" href="../styles/css/skills.css">
    <script src="script/script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
    <meta name="description" content="Hamza Ahmed Digital Resume My Skills" />
    <meta name="keywords" content="HTML5, tags, home, page, Resume, skills" />
    <meta name="author" content="Hamza Ahmed"  />
    <title>Hamza Ahmed: My Skills</title>
  </head>
  <!--Comment-->
  <body>

    <div class="heading">My Skills</div>
    <div class="navigation">
        <a href="index.php" class="button">Home</a> <!--Goes Back to home page-->
        <a href="education.php" class="button button_primary">Education</a> <!--Goes To Education Page-->
        <a href="contact.php" class="button button_secondary">Contact</a> <!--Goes To Contact Page-->
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="logo_grid">
        <img class="skill_logo" onmouseover= "skillBar(3)" onclick= "skillBar(3)" id="ps_logo" src="../styles/images/logos/photoshop.png" alt="Adobe Photoshop" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="ai_logo" src="../styles/images/logos/illustrator.png" alt="Adobe Illustrator" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(1)" onclick= "skillBar(1)" id="ruby_logo" src="../styles/images/logos/ruby.png" alt="Ruby" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="mysql_logo" src="../styles/images/logos/mysql.png" alt="MySql" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="reactjs_logo" src="../styles/images/logos/reactjs.png" alt="ReactJS" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="css_logo" src="../styles/images/logos/css.png" alt="CSS" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(3)" onclick= "skillBar(3)" id="html_logo" src="../styles/images/logos/html.png" alt="HTML" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="php_logo" src="../styles/images/logos/php.png" alt="PHP" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="js_logo" src="../styles/images/logos/javascript.png" alt="JavaScript" style="width:10%">
        <img class="skill_logo" onmouseover= "skillBar(2)" onclick= "skillBar(2)" id="access_logo" src="../styles/images/logos/access.png" alt="Microsoft Access" style="width:10%">
    </div>
    <div> <!--This displays the skill bar-->
        <img id="0_skillBar" class="center" onload="hideBar()" src="../styles/images/skillbar/skill_level.png" alt="Skill Bar" style="width:40%">
        <img id="1_skillBar" class="center" src="../styles/images/skillbar/beginner.png" alt="Skill Level: Beginner" style="width:40%">
        <img id="2_skillBar" class="center" src="../styles/images/skillbar/intermediate.png" alt="Skill Level: Intermediate" style="width:40%">
        <img id="3_skillBar" class="center" src="../styles/images/skillbar/advanced.png" alt="Skill Level: Advanced" style="width:40%">
    </div>

    <div id="textBox">
        <div id="title"></div>
        <div id="content"></div>
    </div>
    
  </body>

</html>