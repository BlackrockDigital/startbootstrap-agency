/* When DOM is loaded*/
$(document).ready(
		function() {
			// jQuery for page scrolling feature - requires jQuery Easing plugin
			$('a.page-scroll').bind('click', function(event) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 1500, 'easeInOutExpo');
		        event.preventDefault();
		    });

			// Highlight the top nav as scrolling occurs
			$('body').scrollspy({
			    target: '.navbar-fixed-top'
			})

			// Closes the Responsive Menu on Menu Item Click
			$('.navbar-collapse ul li a').click(function() {
			    $('.navbar-toggle:visible').click();
			});

			// modal : load link passed in url
			// ex : if fragment is indexed in google, reload the entire page with modal opened
			var url = $.url();
			var modal = $('#modal')
			.on('hidden.bs.modal', function (event) {
				$(this).find('.modal-body').empty();
				}
			);

			function createmodal(popup,title,href)
			{
				if($.trim(title))
				{
					popup.find('.modal-title').text(title);
				}
				if($.trim( href) )
				{
					popup.find('.modal-body').load(href +" #modal-target");
				}
			}

			if(url.param('modal-url'))
			{
				// use parameters in url
				modal.on('show.bs.modal', function (event) {
					createmodal($(this),
											url.param('modal-title'),
											url.param('modal-url'));
				}).modal('show');
			}
			else
			{
				// modal : default behaviour (on link clicked)
				modal.on('show.bs.modal', function (event) {
					  createmodal($(this),
												$(event.relatedTarget).attr('title'),
												$(event.relatedTarget).attr('href'));
					}).modal('hide');
			}

			// init wow.js
			new WOW( {
					mobile: false
			}).init();

			// preload
			var preload = $('.preloader');

			// init typed.js
			$(".intro-lead-in-type").typed({
				strings: [
					"<b>3</b> ventes évènementielles par an",
					"partenariat avec votre CE.",
					"livraisons des végétaux toute l'année.",
					"des végétaux différents tous les mois."
				],
				typeSpeed: 50,
				showCursor: false,
				loop: true,
				startDelay : 1000
			});
		}
	);
