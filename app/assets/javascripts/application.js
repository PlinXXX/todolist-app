// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require activestorage
//= require_tree .

$(document).ready(function() {
  $('[data-js-hide-link]').click(function(event){
    event.preventDefault(); 
    alert('You clicked the Hide link');	
  });
// 2.1 Tabulations
	function Tabulation() {
		// let liListContainer = document.getElementsByClassName('container')[1];
		// console.log(liListContainer);
		// let cards = liListContainer.querySelectorAll('.card');
		// console.log(cards);

		$list = $('.container li');
		$cards = $('.card');

			$list.eq(0).on('click', () => {
				$cards.eq(0).toggle();
			});

			$list.eq(4).on('click', () => {
				$cards.eq(1).toggle();
			});			

			$list.eq(8).on('click', () => {
				$cards.eq(2).toggle();
			});
	}		
	Tabulation();
// 2.2 Le minimum vital du JavaScript de front

 	// 2.2.1 Le dropdown qui fait plaisir
 	function dropDown() {
		$navButton = $('.navbar-toggler');
		$navButton.on('click', () => {
			$('#navbarTogglerDemo03').toggle('collapse');
		});
	}
	dropDown();

	// 2.2.2 Modales de connexion/inscription
	function modales() {
		$loginForm = $('#login');
		console.log($loginForm);
		$signupForm = $('#signup');
		console.log($signupForm);
		$signUpButton = $('.btn.btn-success').eq(0);
		console.log($signUpButton);

		$signUpButton.on('click', () => {
			$signupForm.toggle('collapse');
		})
	}
	modales();

});	