<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
                <title>Smart mirror control panel</title>
	        <link rel="shortcut icon" href="mirror.png" type="image/png" />
		

		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content="">
		<meta name="description" content="">

		<!-- animate -->
		<link rel="stylesheet" href="css/animate.min.css">
		<!-- bootstrap -->
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- font-awesome -->
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<!-- google font -->
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700,800' rel='stylesheet' type='text/css'>
		<!-- custom -->
		<link rel="stylesheet" href="css/style.css">

	</head>
	<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">

		<!-- start navigation -->
		<div class="navbar navbar-fixed-top navbar-default" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
					<a href="#" class="navbar-brand"><img src="images/logo.png" class="img-responsive" alt="logo"></a>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#home" class="smoothScroll">HOME</a></li>
						<li><a href="#about" class="smoothScroll">ABOUT</a></li>
						<li><a href="#team" class="smoothScroll">TEAM</a></li>
						
					</ul>
				</div>
			</div>
		</div>
		<!-- end navigation -->

		<!-- start home -->
		<section id="home" class="text-center">
		  <div class="templatemo_headerimage">
		    <div class="flexslider">
		      <ul class="slides">
		        <li>
		        	<img src="images/slider/1.jpg" alt="Slide 1">
		        	<div class="slider-caption">
					    <div class="templatemo_homewrapper">
					      <h1 class="wow fadeInDown" data-wow-delay="2000">Smart Mirror</h1>
					      <h3 class="wow fadeInDown" data-wow-delay="2000">
							<span>Control Panel</span>
						</h3>
						<!--<a href="#service" class="smoothScroll btn btn-default wow fadeInDown" data-wow-delay="2000">Our Work</a>-->
					    <span>
                                          	<?php
	                                     $val_array = array(0,0);
	                                   //this php script generate the first page in function of the file
	for ( $i= 0; $i<8; $i+=7) {
		//set the pin's mode to output and read them
		system("gpio mode ".$i." out");
		exec ("gpio read ".$i, $val_array[$i], $return );
	}
	
	
	//for loop to read the value
	$i =0;
	for ($i = 0; $i < 8; $i+=7) {
		//if off
		if ($val_array[$i][0] == 0 ) {
                 echo ("<img id='button_".$i."' src='data/img/red/red_".$i.".png' onclick='change_pin (".$i.");'/>");
		}
		//if on
		if ($val_array[$i][0] == 1 ) {
			echo ("<img id='button_".$i."' src='data/img/green/green_".$i.".png' onclick='change_pin (".$i.");'/>");
		}	 
	}
	?>
	 </span>
                                             </div>
				  	</div>
		        </li>
		 
		      </ul>
		    </div>
		  </div>				
		</section>
		<!-- end home -->

	

		<!-- start about -->
		<div id="about">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0.9s">
						<h3>About Smart Mirror</h3>
						<h4>Smart, Light and Adaptive</h4>
					<p>Imagine that a guest is about to depart from your house. They stop to check their appearance in an antique looking mirror mounted near the front door. Suddenly, they appear to see additional information such as Date and time,weather,news etc besides their reflection,how cool is that?.</p>
					<p>The idea is that we first mount a flat-screen liquid crystal display (LCD) or LED .Next, we acquire a piece of special glass that acts as a two-way mirror. If we place this special glass over a black surface it will appear to be a normal mirror; if there's a light source behind the glass, however, then that light will pass through. So the idea is to take the glass, mount it in an antique picture frame, and hang it on the wall covering our LCD/LED screen.We will be Attaching a credit sized single board computer probably raspberry pi 3 with the lcd/led screen,and running our smart mirror application on it.Our team will be using a Usb microphone with the Raspberry pi-3 to interact with it.
Smart mirror will be the future of how we customize ourselves.,like if ever i wanted to buy myself new clothes in a mall instead of trying it on myself i can virtually see it on smart mirror,here the smart mirror uses Augmented reality technology to virtually show me how will i look on that dress.
Smart mirrors will have wide area of applications in shopping malls,hospitals,schools etc.</p>


					</div>
					
				</div>
			</div>
		</div>
		<!-- end about -->

		<!-- start team -->
		<div id="team">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="wow bounce">Meet the team</h2>
					</div>
					<div class="col-md-4 col-sm-4 wow fadeIn" data-wow-delay="0.3s">
						<img src="images/team1.jpg" class="img-responsive" alt="team img">
						<h4>Member 1</h4>
						<h3>Anand</h3>
						<p>Simplicity of life is the key</p>
						 
					</div>
					<div class="col-md-4 col-sm-4 wow fadeIn" data-wow-delay="0.6s">
						<img src="images/dur.JPG" class="img-responsive" alt="team img">
						<h4>Member 2</h4>
						<h3>Durgesh</h3>
						<p>An elegant device to make lives easier</p>
						 
					</div>
					<div class="col-md-4 col-sm-4 wow fadeIn" data-wow-delay="0.9s">
						<img src="images/tej.JPG" class="img-responsive" alt="team img">
						<h4>Member 3</h4>
						<h3>Tejashri</h3>
						<p>information access has never been easier</p>
						 
					</div>
					<div class="col-md-4 col-sm-4 wow fadeIn" data-wow-delay="0.9s">
						<img src="images/sum.JPG" class="img-responsive" alt="team img">
						<h4>Member 4</h4>
						<h3>Sumati</h3>
						<p>Building smart IOT devices is the future of technology</p>
						 
					</div>






</div>
			</div>
		</div>
		<!-- end team -->

		

		


		<!-- start footer -->
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-sm-7">
						<p>A Team Effort By The Students Of PVG Nasik 2017</p>
						<small>Designed by <a rel="nofollow" href="" target="_parent">Group id:12</a></small>
					</div>
					<div class="col-md-4 col-sm-5">
						
					</div>
				</div>
			</div>
		</footer>
		<!-- end footer -->


		<!-- jQuery -->
		<script src="js/jquery.js"></script>
		<!-- bootstrap -->
		<script src="js/bootstrap.min.js"></script>
		<!-- isotope -->
		<script src="js/isotope.js"></script>
		<!-- images loaded -->
   		<script src="js/imagesloaded.min.js"></script>
   		<!-- wow -->
		<script src="js/wow.min.js"></script>
		<!-- smoothScroll -->
		<script src="js/smoothscroll.js"></script>
		<!-- jquery flexslider -->
		<script src="js/jquery.flexslider.js"></script>
		<!-- custom -->
		<script src="js/custom.js"></script>
		<!--gpio script-->
		<script src="script.js"></script>

	</body>
</html>
