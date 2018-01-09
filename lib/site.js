/**
 * Dear future developer, once you have been given the task of recoding this please increment the below counter by 1.
 *
 * tried = 1;
 */


/**
 * # Main class
 * The Pikcells class handles the homepage of www.pikcells.com, and also various global properties such as isMobile.
 * ## Getters
 * Class properties are fetched functionless, simply by calling `this.property`.
 * ## Setters
 * Class properties are set functionless, simply by calling `this.property = value`, without the _ preceding each property.
*/
class Pikcells
{
	/**
	 * @method constructor
	 * @memberof Pikcells
	 * @description Sets up the classes main properties and then proceeds to set the sites active user agent and website listeners.
	 * @summary First function to be called when class is Initialised
	 * @author Nathan Leadill
	 */
	constructor() {
		/**
		 * Boolean stating if the active device is a mobile device
		 * @type {Boolean}
		 */
		this._isMobile          = false;
		/**
		 * Variable stating the width of the window
		 * @type {Number}
		 */
		this._homepageWidth     = $(window).width();
		/**
		 * Variable stating the height of the window minus the height of the header
		 * @type {Number}
		 */
		this._homepageHeight    = $(window).height() - $('.site-header').innerHeight() - 8;
		/**
		 * Variable stating the width of the window
		 * @type {Number}
		 */
		this._projectWidth      = $(window).width();
		/**
		 * Variable stating 3/4 of the window height
		 * @type {Number}
		 */
		this._projectHeight     = $(window).height() / 4 * 3;

		this.loadUserAgent();
		this.setupListeners();
	}

	// GETTERS

	/**
	 * @method getisMobile
	 * @memberof Pikcells
	 * @description Returns if the website is running on a mobile
	 * @author Nathan Leadill
	 * @return {Boolean} The isMobile value
	 */
	get isMobile () {
		return this._isMobile;
	}

	/**
	 * @method gethomepageWidth
	 * @memberof Pikcells
	 * @description Returns the value of the local variable homepageWidth
	 * @author Nathan Leadill
	 * @return {Integer} this.homepageWidth
	 */
	get homepageWidth () {
		return this._homepageWidth;
	}

	/**
	 * @method gethomepageHeight
	 * @memberof Pikcells
	 * @description Returns the value of the local variable homepageHeight
	 * @author Nathan Leadill
	 * @return {Integer} this.homepageHeight
	 */
	get homepageHeight () {
		return this._homepageHeight;
	}

	/**
	 * @method getprojectWidth
	 * @memberof Pikcells
	 * @description Returns the value of the local variable projectWidth
	 * @author Nathan Leadill
	 * @return {Integer} this.projectWidth
	 */
	get projectWidth () {
		return this._projectWidth;
	}

	/**
	 * @method getprojectHeight
	 * @memberof Pikcells
	 * @description Returns the value of the local variable projectHeight
	 * @author Nathan Leadill
	 * @return {Integer} this.projectHeight
	 */
	get projectHeight () {
		return this._projectHeight;
	}

	// SETTERS

	/**
	 * @method setIsMobile
	 * @memberof Pikcells
	 * @description Sets whether the website is running on a mobile
	 * @author Nathan Leadill
	 * @param {Boolean} isMob Is the device a mobile device or not?
	 *
	 * @example
	 * this.projectHeight = value;
	 */
	set isMobile (isMob) {
		this._isMobile = isMob;
	}

	/**
	 * @method sethomepageWidth
	 * @memberof Pikcells
	 * @description Sets the local homepageWidth variable
	 * @author Nathan Leadill
	 * @param {Integer} hw The width of the homepage(browser)
	 *
	 * @example
	 * this.homepageWidth = value;
	 */
	set homepageWidth (hw) {
		this._homepageWidth = hw;
	}

	/**
	 * @method sethomepageHeight
	 * @memberof Pikcells
	 * @description Sets the local homepageHeight variable
	 * @author Nathan Leadill
	 * @param {Integer} hh The height of the homepage(browser)
	 *
	 * @example
	 * this.homepageHeight = value;
	 */
	set homepageHeight (hh) {
		this._homepageHeight = hh;
	}

	/**
	 * @method setprojectWidth
	 * @memberof Pikcells
	 * @description Sets the local projectWidth variable
	 * @author Nathan Leadill
	 * @param {Integer} pw
	 *
	 * @example
	 * this.projectWidth = value;
	 */
	set projectWidth (pw) {
		this._projectWidth = pw;
	}

	/**
	 * @method setprojectHeight
	 * @memberof Pikcells
	 * @description Sets the local projectHeight variable
	 * @author Nathan Leadill
	 * @param {Integer} ph
	 *
	 * @example
	 * this.projectHeight = value;
	 */
	set projectHeight (ph) {
		this._projectHeight = ph;
	}

	// METHODS

	/**
	 * @method loadUserAgent
	 * @memberof Pikcells
	 * @description Sets the isMobile property by using the navigator.userAgent property from the browser and performing a string match operation on the value.
	 * @summary Sets the isMobile depending on a regex check on the navigator.userAgent variable
	 * @author Nathan Leadill
	 *
	 * @playground
	 * // The UA is set to an iPhone you can edit this yourself to try it out.
	 * const UA = '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';
	 * if(UA.match(/Android/) || UA.match(/iPhone/) || UA.match(/BlackBerry/) || UA.match(/iPod/) || UA.match(/Windows Phone/) || UA.match(/webOS/)) {
	 * 	console.log('You are on mobile');
	 * }
	 *
	 */
	loadUserAgent () {
		let UA = navigator.userAgent;
		if(UA.match(/Android/) || UA.match(/iPhone/) || UA.match(/BlackBerry/) || UA.match(/iPod/) || UA.match(/Windows Phone/) || UA.match(/iPad/) || UA.match(/webOS/)) {
			this.isMobile = true;
		}
	}

	/**
	 * @method setupListeners
	 * @memberof Pikcells
	 * @description Sets up listeners for the browser window, so we can resize the grid, and some other listeners for the newsletter modal @todo this could be done better.
	 * @summary Sets up listeners for the class
	 * @author Nathan Leadill
	 */
	setupListeners () {
		// Sets up listener for if the window is resized
		$(window).resize(() => {
			let width = 0;
			if($(window).width() < 600) width = $('.project-gallery').width() / 2;
			else if($(window).width() > 600 && $(window).width() < 1024) width = $('.project-gallery').width() / 5;
			else width = $('.project-gallery').width() / 8;

			this.ProjectHeight  = $(window).height() / 4 * 3;
			this.ProjectWidth   = $(window).width();

			this.HomepageHeight = $(window).height() - $(".site-header").innerHeight();
			this.HomepageWidth  = $(window).width();

		});

		$('select').click(function ()  {
			$(this).parent('.select-box').toggleClass('open');
		});

		$('select').change(function() {
			const selection = $(this).find('option:selected').text();
			const labelFor  = $(this).attr('id');
			let label       = $('[for="' + labelFor + '"]');
			label.find('.label-desc').html(selection);
		});

		$(document).mouseup((e) => {
			let container = $('.select-box');
			if(container.has(e.target).length === 0) container.removeClass('open');
		});

		$('cancel-button').click(function () {
			$.colorbox.close();
			return false;
		});
	}

	/**
	 * @method stringLinks
	 * @memberof Pikcells
	 * @description If the website is on a mobile, we want to add text to links.
	 * @author Nathan Leadill
	 *
	 * @example
	 * // A Button with the text ">" i.e. to change the active project back by one, will be changed to "Next"
	 */
	stringLinks () {
		if(this.isMobile) {
			$('a[rel="next"]').text('Next');
			$('a[rel="prev"]').text('Previous');
		}
	}

}
/** Handles JavaScript for the Portfolio Page */
class Portfolio
{
	/**
	 * @method constructor
	 * @memberof Portfolio
	 * @description Creates the isotope grid containing each of the portfolio items.
	 * @author Nathan Leadill
	 */
	constructor () {
		let container = $('.panel__grid');
		container.imagesLoaded(() => {
			container.isotope('layout');
		});
		container.isotope({
			animationEngine: 'css',
			resizable: false,
			transformsEnabled: false,
			masonary: {
				columnWidth: 3,
				itemSelector: '.panel',
			}
		});
		this.setupListeners();
	}

	/**
	 * @method setupListeners
	 * @memberof Portfolio
	 * @description Sets up listeners for the class
	 * @author Nathan Leadill
	 */
	setupListeners () {
		$('.sub__nav a').click(function (e) {
			const selector = $(e.target).parent().attr('data-filter');
			$('.sub__nav').find('a.active').removeClass('active');
			$(this).addClass('active');
			// Could add a set timeout, but i personally hate them for performence issues sooo.
			$('.panel__grid').isotope(
			{
				filter: selector
			});
			return false;
		});

		$('.filter__nav').change(function (e) {
			const selector = $(e.target).val();
			$('.sub__nav').find('a.active').removeClass('active');
			$(this).addClass('active');
			$('.panel__grid').isotope({
				filter: selector
			});
			return false;
		});

		$('.project-image').on('click touch', function () {
			const portfolioLink = $(this).find('a').attr('href');
			window.location = portfolioLink;
		});
	}
}


/** Handles JavaScript for Studio Page */
class Studio
{
	/**
	 * @method constructor
	 * @memberof Studio
	 * @description Creates and instance of the pikcells class, then initialises the find us map at the bottom of the page, creates the iamge slider at the top of the page, move the page to ensure we are at the top, create the grid of client logos, sets up the page listeners and finally adds support for mobile image swipe in the case of the device being a mobile.
	 * @summary First function to be called when class is Initialised
	 * @author Nathan Leadill
	 */
	constructor () {
		/** Local instance of the Pikcells Class
		 *  @type {Pikcells}
		 */
		this.pikcells = new Pikcells();
		this.initMap();
		this.initStudioSlider();
		this.initSectionPosition();
		this.clientsGrid();
		this.setupListeners();
		if(this.pikcells.isMobile) this.imageSwipe();
	}

	/**
	 * @method setupListeners
	 * @memberof Studio
	 * @description Sets up listeners
	 * @author Nathan Leadill
	 */
	setupListeners () {
		var self = this;

		// If the share button is clicked show the websites that are available to share.
		$('.application-share').click(function (e) {
			e.preventDefault();
			$(this).parent().find('.application').hide();
			$(this).parent().find('.share').show();
		});

		$('.share .undo').click(function (e) {
			console.log('share');
			e.preventDefault();
			$(this).parent().parent().prev().show();
			$(this).parent().parent().hide();
		});

		$('.job__post a').each(function() {
			$(this).wrapInner('<span></span>');
		});

		// If a filter is clicked, scroll to the relevant section
		$('.filter-nav a').click(function () {
			const target = $(this).attr('href');

			self.scrollToSection(target);
			history.pushState(null, null, target);
			return false;
		});

		// If the hash is changed ie scroll
		$(window).on('hashchange', (e) => {
			e.preventDefault();
			this.scrollToSection(window.location.hash);
			return false;
		});
	}

	/**
	 * @method initMap
	 * @memberof Studio
	 * @description Sets out the options and style for the 'find us' map at the bottom of the studio page, aswell as setting the location of the pointer, and creating the DOM.
	 * @summary Initialise the DOM for the map
	 * @author Nathan Leadill
	 */
	initMap () {
		let styles = [
			{
				"featureType": "landscape",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 65
				},
				{
					"visibility": "on"
				}]
			},
			{
				"featureType": "poi",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 51
				},
				{
					"visibility": "simplified"
				}]
			},
			{
				"featureType": "road.highway",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}]
			},
			{
				"featureType": "road.arterial",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 30
				},
				{
					"visibility": "on"
				}]
			},
			{
				"featureType": "road.local",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 40
				},
				{
					"visibility": "on"
				}]
			},
			{
				"featureType": "transit",
				"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}]
			},
			{
				"featureType": "administrative.province",
				"stylers": [
				{
					"visibility": "off"
				}]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
				{
					"visibility": "on"
				},
				{
					"lightness": -25
				},
				{
					"saturation": -100
				}]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				{
					"hue": "#ffff00"
				},
				{
					"lightness": -25
				},
				{
					"saturation": -97
				}]
			}
		];

		const PikcellsLocation  = new google.maps.LatLng(53.655067, -1.825347);
		const StyledMap         = new google.maps.StyledMapType(styles, {
			name: "Styled Map"
		});
		const MapOptions        = {
			zoom: 14,
			center: PikcellsLocation,
			zoomControl: true,
			scaleControl: false,
			scrollwheel: false,
			panControl: false,
			disableDefaultUI: true,
			draggable: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};

		let PikcellsMap     = new google.maps.Map(document.getElementById('map-canvas'), MapOptions);
		let Marker  = new google.maps.Marker({
			position: PikcellsLocation,
			map: PikcellsMap,
			title: 'Pikcells',
			icon: "http://pikcells.com/wp-content/themes/pikcells/img/map-icon.png"
		});
		PikcellsMap.mapTypes.set('map_style', StyledMap);
		PikcellsMap.setMapTypeId('map_style');
		Marker.setMap(PikcellsMap);
	}

	/**
	 * @method initStudioSlider
	 * @memberof Studio
	 * @description Sets the css for each of the images in the studio slider and make sure they're all the correct sizes.
	 * @summary Handles the creation and rendering of the image slider at the top of the page
	 * @author Nathan Leadill
	 */
	initStudioSlider () {
		var self = this;
		$('.studio-slider').height(this.pikcells.projectHeight);
		$('.studio-slider li').each(function () {
			$(this).find('div').css({
				width: 100 + '%',
				height: self.pikcells.projectHeight
			});

			const origImage = $(this).find('img').attr('src');
			$(this).find('img').remove();
			$(this).backstretch(origImage);
		});

		$('.studio-slider').rhinoslider({
			effect: 'fade',
			showControls: 'always',
			controlsMousewheel: false,
			showBullets: 'always',
			changeBullets: 'before',
			autoPlay: true,
			showTime: 8000
		});

		if($('li.panel').length == 1) {
			$('.rhino-bullets, .rhino-btn').hide();
		}
	}

	/**
	 * @method showPersonDetails
	 * @memberof Studio
	 * @description Show details of user
	 * @author Nathan Leadill
	 */
	showPersonDetails () {
		$('.hover-hidden-details').hover(function () {
			$(this).toggleClass('visible');
			$(this).find('.hidden-frame').show();
		}, function () {
			$(this).find('.hidden-frame').hide();
			$(this).toggleClass('visible');
		});
	}

	/**
	 * @method initSectionPosition
	 * @memberof Studio
	 * @description Checks if there was a hash on in the url if there is automatically scroll the page to the specific section.
	 * @summary init position of page at about section
	 * @author Nathan Leadill
	 */
	initSectionPosition () {
		const targetName = typeof window.location.hash != 'undefined' ? window.location.hash : '';
		if(targetName.length > 0) {
			this.scrollToSection(targetName);
		}
	}

	/**
	 * @method scrollToSection
	 * @memberof Studio
	 * @description Scrolls the page to the respective section
	 * @author Nathan Leadill
	 * @param {String} target 'data-name' of the section we wish to scroll the page to
	 *
	 * @example
	 * // Create a new instance of the Studio class
	 * let studio = new Studio();
	 * // Call the function (replace sectionName with your required target as shown below)
	 * studio.scrollToSection(sectionName);
	 * // Scroll the page to the clients section
	 * studio.scrollToSection('clients');
	 */
	scrollToSection (target) {
		target = target.slice(1, target.length);

		let targetHeader = $('.page-content h3[data-name="' + target + '"]').length !== 0 ?
			$('.page-content h3[data-name="' + target + '"]') : $('.page-banner h3');

		const targetHeaderOffset  = targetHeader.offset().top;
		const compensatePos       = targetHeader.outerHeight() + $('.filter-nav').outerHeight();

		const scrollToPos         = targetHeaderOffset - compensatePos - 100;
		$('html, body').stop().animate({
			scrollTop: scrollToPos
		}, 1200, 'easeOutExpo');
	}

	/**
	 * @method clientsGrid
	 * @memberof Studio
	 * @description Creates the isotope DOM grid for the client logos.
	 * @author Nathan Leadill
	 */
	clientsGrid () {
		let container = $('.client-grid .panel__grid');
		container.imagesLoaded(() => {
			container.isotope({
				animationEngine: 'css',
				resizable: false,
				transformsEnabled: false
			});
		});
	}

	/**
	 * @method imageSwipe
	 * @memberof Studio
	 * @description Handle mobile swipes on the studio image slider.
	 * @author Nathan Leadill
	 */
	imageSwipe () {
		$('.rhino-container').swipe({
			excludedElements: 'button, input, select, textarea, .noSwipe',
			swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
				$('.projects-slider').data('rhinoslider').prev();
			},
			swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
				$('.projects-slider').data('rhinoslider').next();
			}
		});
	}
}
/** Handles the JavaScript for Culture page */
class Culture
{
	/**
	 * @method constructor
	 * @memberof Culture
	 * @description Called upon the class instantiation
	 * @author Nathan Leadill
	 */
	constructor () {
		/**
		 * Local instnace of the Pikcells class.
		 * @type {Pikcells}
		 */
		this.pikcells = new Pikcells();
		/** @type {String} */
		this.culture  = "";

		$('.panel__grid').imagesLoaded(() => {
			this.culture = $('.panel__grid').isotope({
				itemSelector: '.panel',
				transformsEnabled: false,
				masonary: {
					columnWidth: 3,
					itemSelector: '.panel'
				}
			});
		});
		this.setupListeners();
	}

	/**
	 * @method setupListeners
	 * @memberof Culture
	 * @description Creates listeners for the page.
	 *
	 * # Listeners
	 * - $(window).resize
	 * - $('.js-trigger-load').click
	 * - $('.culture-grid .culture a').click
	 * - $('.sub__nav a').click
	 *
	 * @author Nathan Leadill
	 */
	setupListeners () {
		var self = this;

		$(window).resize(() => {
			$('.panel__grid').isotope('layout');
			this.repositionMoreButton();
		});


		$('.js-trigger-load').click((e) => {
			e.preventDefault();
			this.loadContent();
		});

		$('.culture-grid .culture a').hover(function() {
			$(this).parent().find('a').addClass('active');
		}, function () {
			$(this).parent().find('a').removeClass('active');
		});

		$('.sub__nav a').click(function() {
			const selector = $(this).attr('data-filter');

			$('.sub_nav a').removeClass('active');
			$(this).addClass('active');
			$('.sub__nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.panel__grid').isotope({
				filter: selector
			});
			self.repositionMoreButton();
			return false;
		});
	}

	/**
	 * @method loadContent
	 * @memberof Culture
	 * @description Makes an AJAX GET request to the backend requesting social media posts.
	 * @author Nathan Leadill
	 */
	loadContent () {
		const self = this;

		$('.load-more').find('a').hide();
		$('.load-more').find('.loading-icon').show();

		$.ajax({
			type: 'GET',
			url: '/wp-admin/admin-ajax.php',
			data: 'action=load_more&post_date=' + $('.panel:last').data('postDate') + '&max_id=' + $('.panel.tweet:last').data('postId'),
			error: function(xhr, err) {
				console.log('Sample of error data: ', err);

			},
			success: function(data, status) {
				var self = this;
				$('.panel__grid').imagesLoaded(function () {
					// Parsed HTML returned from the ajax request
					const rawHtml = $($.parseHTML(data));
					if(rawHtml.length === 0) {
						$('.epsilon.load-more').stop().animate({
							opacity: 0
						}, 400, function () {
							$(this).addClass('noMore');
						});
					} else {
						$('epsilon.load-more').removeClass('noMore').css({
							opacity: 1
						});
					}
					let htmlData = [];
					// Looping through each of the posts in the HTML
					rawHtml.each(function(i, elt) {
						const itemId    = typeof $(elt).attr('data-post-id') != 'undefined' ? $(elt).attr('data-post-id') : 0;
						const foundItem = $('.culture-grid').find('.panel[data-post-id="' + itemId + '"]').length > 0;

						if(!foundItem) htmlData.push(elt);
					});

					$(htmlData).find('a').each(function(i, el) {
						const isEmpty = !$.trim($(el).html());
						const item    = $(el).parents('.panel');
						const itemId  = typeof item.attr('data-post-id') != 'undefined' ? item.attr('data-post-id') : 0;
						const added   = $(".culture-grid").find('.panel[data-post-id="' + itemId + '"]').length > 0;

						if(isEmpty) $(this).addClass('displayNone');

						if(added) item.remove();
					});
					$('.panel__grid--culture').isotope('insert', rawHtml);
					$('.panel__grid').imagesLoaded(function() {
						$('.panel__grid--culture').isotope('layout');
					});
					self.repositionMoreButton();
				});
				$('.load-more').find('.loading-icon').hide();
				$('.load-more').find('a').show();
			}
		});
	}

	/**
	 * @method repositionMoreButton
	 * @memberof Culture
	 * @description Respositions the load more button
	 * @author Nathan Leadill
	 */
	repositionMoreButton () {
		$('.load-more').css({
			'transition': 'margin-top 800ms cubic-bezier(0.19, 1, 0.22, 1)'
		});
		setTimeout(function () {
			$('.load-more').css({
				'margin-top': function () {
					const headerHeight    = parseInt($('.push-footer').css('padding-top'));
					const footerHeight    = $('.site-footer').outerHeight();
					const viewportHeight  = $(window).height() - (headerHeight + footerHeight);
					const gridHeight      = $('.culture-grid').height();
					const topMargin       = gridHeight > viewportHeight ? 0 : viewportHeight - gridHeight;
					return topMargin;
				}
			});
		}, 100);
	}
}
/** Handles JavaScript for the Lab page */
class Lab
{
	/**
	 * @method constructor
	 * @memberof Lab
	 * @description Sets up the isotope grid containing all the lab items.
	 * @author Nathan Leadill
	 */
	constructor() {
		let lab = $('.panel__grid').isotope({
			itemSelector: '.panel',
			transformsEnabled: false,
			masonary: {
				columnWidth: 3,
				itemSelector: '.panel'
			}
		});
		this.setupListeners();
	}

	/**
	 * @method setupListeners
	 * @memberof Lab
	 * @description Creates listeners for window.resize and $('.sub__link').click
	 * @author Nathan Leadill
	 */
	setupListeners () {
		$(window).resize(function () {
			$('.panel__grid').isotope('layout');
		});
		// RECODE
		$('.sub__link').click(function() {
			$('.sub__nav a').removeClass('active');
			$(this).addClass('active');
			const selector = $(this).attr('data-filter');
			$('.sub__nav').find(".active").removeClass("active");
			$(this).addClass('active');
			$(".panel__grid").isotope({
				filter: selector
			});
		});
	}
}
/** Handles JavaScript for A Portfolio page */
class SinglePortfolio
{
	/**
	* @method constructor
	* @memberof SinglePortfolio
	* @description Creates local instance of Pikcells class and then calls the required functions to setup the portfolio page.
	* @author Nathan Leadill
	*/
	constructor () {
		let width = $('.thumb__gallery li:first-child').width();
		/**
		 * Local instance of the Pikcells class.
		 * @type {Pikcells}
		 */
		this.pikcells = new Pikcells();
		/**
		 * Class Boolean to check if there is a video.
		 * @type {Boolean}
		 */
		this.isVideo = false;
		this.isPlaying = false;
		this.initProjectSlider();
		this.initAnimatedImages();
		if(!this.pikcells.isMobile) this.setupPortfolio();
		this.setupListeners();
		$('.thumb__gallery li').each(function() {
			$(this).height(width);
			$(this).find('img').height(width).width(width);
		});


	}

	/**
	 * @method getisVideo
	 * @memberof SinglePortfolio
	 * @description Return the isVideo value
	 * @author Nathan Leadill
	 * @return {Boolean} is the item a video
	 */
	get isVideo () {
		return this._isVideo;
	}

	/**
	 * @method activeDesignDevelopment
	 * @memberof SinglePortfolio
	 * @description Return the activeDesignDevelopment value
	 * @author Nathan Leadill
	 * @return {Boolean} is the item a video
	 */
	get activeDesignDevelopment () {
		return this._activeDesignDevelopment;
	}
	/**
	 * @method setisVideo
	 * @memberof SinglePortfolio
	 * @description Sets the isVideo value
	 * @author Nathan Leadill
	 */
	set isVideo(isVid) {
		this._isVideo = isVid;
	}

	/**
	 * @method activeDesignDevelopment
	 * @memberof SinglePortfolio
	 * @description Sets the activeDesignDevelopment value
	 * @author Nathan Leadill
	 * @return {Boolean} is the item a video
	 */
	set activeDesignDevelopment (id) {
		this._activeDesignDevelopment = id;
	}


	/**
	* @method setupPortfolio
	* @memberof SinglePortfolio
	* @borrows setupListeners as setupPortfolio
	* @description Sets up the portfolio page, sizig and images etc...
	* @author Nathan Leadill
	*/
	setupPortfolio () {
		let self = this;
		const maxWidth    = $(window).height() * 70 / 100;
		const maxHeight   = $(window).width() * 70 / 100;
		let iframeHeight  = 550;
		let iframeWidth   = 550;
		let resizeImg     = true;
		$('a[data-gal^="prettyPhoto"]').each(function() {
			const hrefVal = $(this).attr('href');
			let ratio   = 0;

			let firstImgHeight  = parseInt($(this).attr('data-imgheight'));
			let firstImgWidth   = parseInt($(this).attr('data-imgwidth'));

			// Check if the current image width is greater than the maximum width.
			if(firstImgWidth > maxWidth) {
				ratio = maxWidth / firstImgWidth; // Setting ratio for scaling image
				firstImgWidth = maxWidth;
				firstImgHeight = firstImgHeight * ratio; // Reset height to match image
				if($(this).hasClass('forAnimated')) {
					firstImgWidth = firstImgWidth * ratio; // Reset width to match image
				}
			}
			// Check if the current image height is greater than the maximum height.
			if(firstImgHeight > maxHeight) {
				ratio = maxHeight / firstImgHeight; // Setting ratio for scaling image
				firstImgHeight = maxHeight; // Reset height to match image
				firstImgWidth = firstImgWidth * ratio; // Reset width to match image
			}

			iframeHeight = firstImgHeight;
			iframeWidth  = firstImgWidth;
			// If the class is design and development and its animated, set the relevant iframe properties
			if($(this).hasClass('forAnimated')) {
				iframeHeight = $(window).height();
				iframeWidth  = $(window).width();
				resizeImg    = false;
			}

			$(this).attr('href', hrefVal).attr({
				'data-imgheight': iframeHeight,
				'data-imgwidth': iframeWidth
			});
		});

		$("a[rel='prettyPhoto[project]']").prettyPhoto({
			social_tools: '',
			overlay_gallery: false,
			deeplinking: false,
			changepicturecallback: function() {
				$('.pp_loaderIcon').hide();
				if($('#pp_full_res').find('iframe').length !== 0) {
					$('.pp_details').css('opacity', 0);
				} else {
					$('.pp_details').css('opacity', 1);
				}

				if($('.pp_details').find('.pp_description').text().length === 0) {
					$('.pp_details').css('opacity', 0);
				}

				$(".pp_nav").width($(window).width());
				$(".pp_details").removeClass('hide');

				if ($(".pp_description").text().length < 1) {
					$(".pp_content").height($(".pp_content").height() - 36);
				}
			}
		});

		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			hook: 'data-gal',
			social_tools: '',
			overlay_gallery: false,
			default_width: $(window).width(),
			default_height: $(window).height(),
			deeplinking: false,
			allow_resize: true,
			animation_speed: 200,
			changepicturecallback: function() {
				$('.pp_loaderIcon').hide();

				if($('#pp_full_res').find('iframe').length !== 0) {
					$('.pp_details').css('opacity', 0);
				} else {
					$('.pp_details').css('opacity', 1);
				}

				if($('.pp_details').find('.pp_description').text().length === 0) {
					$('.pp_details').css('opacity', 0);
				}

				$(".pp_nav").width($(window).width());
				self.initAnimatedImages();

				$(".pp_details").removeClass('hide');
				if ($(".pp_description").text().length < 1) {
					$(".pp_content").height($(".pp_content").height() - 36);
				}
			}
		});
	}

	/**
	* @method setupListeners
	* @memberof SinglePortfolio
	* @description Sets up listeners
	* @author Nathan Leadill
	*/
	setupListeners () {
		var self = this;
		// When the window is resized
		$('window').resize(() => {
			this.initProjectSlider();
		});
		// Clicking one of the photos in the small gallery
		$('a[data-gal^="prettyPhoto"]').click(function(e, elt) {
			e.preventDefault();
			self.imgWidth = parseInt($(this).attr('data-imgwidth'));
			self.imgHeight= parseInt($(this).attr('data-imgheight'));
		});



		$('.thumb__gallery li').on('click tap', function(e)
		{
			let index = $('.thumb__gallery li').index(this);
			$('.thumb__gallery').find('.active').removeClass('active');
			$('.thumb__gallery li').eq(index).addClass('active');
			$('.carousel').carousel(index);
			let iframe = $('.carousel iframe')[0];
			let player = $f(iframe);
			player.api('pause');
		});
		window.addEventListener("beforeunload", function (event) {
			event.preventDefault();
			event.stopPropagation();
			console.log(event);
		});

		$('#myCarousel').on('slide.bs.carousel', function (e) {
			const t = $('#myCarousel .active').index();
			$('.thumb__gallery li').removeClass('active');
			$('.thumb__gallery li').eq(t + 1).addClass('active');
		});

		$('#myCarousel').on('swipeleft', function (e) {
			$('#myCarousel').carousel('next');
			const t = $('#myCarousel .active').index();
			$('.thumb__gallery li').removeClass('active');
			$(".thumb__gallery li").blur();
			$('.thumb__gallery li').eq(t).addClass('active');
		});

		$('#myCarousel').on('swiperight', function (e) {
			$('#myCarousel').carousel('prev');
			const t = $('#myCarousel .active').index();
			$('.thumb__gallery li').removeClass('active');
			$(".thumb__gallery li").blur();
			$('.thumb__gallery li').eq(t).addClass('active');
		});

		$(window).on('hashchange', (e) => {
			e.preventDefault();
			this.scrollToSection(window.location.hash);
			return false;
		});

		if(!this.pikcells.isMobile)
		{
			$('.carousel-inner .item').click(function(e) {
				$('#modal-carousel').remove();
				let image = $(e.target).data('image');
				let light = new Lightbox([image], 'carousel');
				light.setupImages();
				$('body').append(light.html);
				$('#modal-carousel').modal();
				self.modalClose();
			});
		}




		$('.forAnimated').on('click tap', (e) => {
			e.preventDefault();
			console.log('test');
			let t = e.target;
			$(t).uniqueId();
			const id = $(t)[0].id;
			const images = $(t).data('images').split(',');
			// $('#modal-' + this.id).remove();
			let light = new Lightbox(images, id);
			light.setupImages();
			$('.bs-example-modal-lg').remove();
			if(!$('#modal-' + id).length > 0) {
				$('body').append(light.html);
			}
			$('#modal-' + id).modal();
			light.startCycle();
			this.activeDesignDevelopment = id;
			$('.modal').on('click tap', (e) => {
				$('#modal-' + this.activeDesignDevelopment).modal('hide');
			});
		});


		$('.project-details h1').click(function () {
			$(this).parents('.main-content').find('.rhino-active').find('.project-image').trigger('click');
		});
	}
	/**
	* @method modalClose
	* @memberof SinglePortfolio
	* @description Handles closing the modal when clicked.
	* @author Nathan Leadill
	*/
	modalClose () {
		$('.modal').on('click tap', function(e){$('#modal-carousel').modal('hide');});
	}

	/**
	* @method initProjectSlider
	* @memberof SinglePortfolio
	* @description Initialise the image slider at the top of the page and insert its images.
	* @author Nathan Leadill
	*/
	initProjectSlider () {
		let self = this;
		$('.carousel .item').first().addClass('active');
		$('.carousel').carousel();
		this.detectVideo();
	}


	/**
	 * @method      initAnimatedImages
	 * @memberof SinglePortfolio
	 * @description Intialises the portfolio slider setting all the relevant options and settings.
	 * @author Nathan Leadill
	 */
	initAnimatedImages () {
		$('.slides').slidesjs({
			width: 700,
			autoHeight: true,
			navigation: {
				active: false,
				effect: 'fade'
			},
			play: {
				active: false,
				effect: 'fade',
				interval: 1500,
				auto: true,
				swap: false
			},
			effect: {
				fade: {
					speed: 1500,
					crossfade: true
				}
			},
			pagination: {
				active: false,
				effect: 'fade'
			},
			complete: function (number) {
				$('.slidejs-slide').css('width', '');
			},
			callback: {
				loaded: function (number) {
					slideJsExtra(number - 1);
				},
				start: function (number) {
					slideJsExtra(number);
				}
			}
		});
		if(this.pikcells.isMobile)
		{
			$('.project-gallery .process-image .process-title').remove();

		}
		$('.project-gallery .animated-images a').css('width', $('.project-gallery .animated-images').width());
		$('.project-gallery').isotope({
			animationEngine: 'css',
			resizable: false,
			transformsEnabled: false,
			masonary: {
				columnWidth: 3,
				itemSelector: '.panel',
			}
		});
	}

	/**
	* @method detectVideo
	* @memberof SinglePortfolio
	* @description Detects if there is a video present in the portfolio slider, if one is present we add listeners for the video player so we can stop the image cycle when the video is played and restart it again when it is stopped.
	* @author Nathan Leadill
	*/
	detectVideo () {
		let iframe, player, self = this;
		$(iframe).attr('width', '50%');
		if($('.carousel iframe').length > 0) {
			$('header.project-details').fadeIn(500);
			iframe = $('.carousel iframe')[0];
			player = $f(iframe);
			player.addEvent('ready',() => {
				player.addEvent('play', this.onPlay.bind(self));
				player.addEvent('pause', this.onPause.bind(self));
			});
		}
	}

	/**
	* @method doGalleryChange
	* @memberof SinglePortfolio
	* @description When an indicator is clicked this function gets the index of the clicked item and sets the active image accordingly.
	* @author Nathan Leadill
	*/
	doGalleryChange () {

	}

	/**
	* @method onPlay
	* @memberof SinglePortfolio
	* @description Handles the onPlay event for videos in the portfolio slider
	* @author Nathan Leadill
	*/
	onPlay () {
		$('header.project-details').fadeOut(500);
		$('.carousel').carousel('pause');
	}

	/**
	* @method onPause
	* @memberof SinglePortfolio
	* @description Handles the onPause event for videos in the portfolio slider
	* @author Nathan Leadill
	*/
	onPause () {
		$('header.project-details').fadeOut(500);
		$('.carousel').carousel('cycle');
	}
}
/** Handles JavaScript for SingleLab page */
class SingleLab
{
	/**
	* @method constructor
	* @memberof SingleLab
	* @description Called upon the class instantiation, simple instantiates the SingleBlog class.
	* @author Nathan Leadill
	*/
	constructor () {
		/**
		 * Local instance of the SingleBlog class
		 * @type {SingleBlog}
		 */
		this.blog = new SingleBlog();
		$('.shortcode_iframe').next().next().remove();
	}
}
/** Handles JavaScript for SingleBlog page */
class SingleBlog
{
	/**
	* @method constructor
	* @memberof SingleBlog
	* @description Called upon the class instantiation
	* @author Nathan Leadill
	*/
	constructor () {
		/**
		 * Local instance of the Pikcells class
		 * @type {Pikcells}
		 */
		this.pikcells = new Pikcells();
		/**
		 * jQuery object of the frame.
		 * @type {[type]}
		 */
		let frame = $('.blog-content iframe');
		console.log(frame);
		if(frame.length > 0) {
			$(frame).attr('height', '780');
			$(frame).attr('width', '1080');
			$(frame).css('position', 'relative');
			$(frame).css('left', '-9vw');
		}
		if($('body').hasClass('blogsingle')) {
			$('.site__nav a.nav__link:nth-child(4)').addClass('active');
		}
	}
	/**
	 * @method stringLinks
	 * @memberof SingleBlog
	 * @description When on mobile we want to convert links allowing the user to move back and forward into previous and next because of the screen size.
	 * @author Nathan Leadill
	 */
	stringLinks () {
		if(this.pikcells.isMobile) {
			$('a[rel="next"]').text("Previous");
			$('a[rel="prev"]').text("Next");
		}
	}
}

/**
 * Custom Lightbox Plugin Written for Pikcells.com by Nathan Leadill
 * @author Nathan Leadill
 *
 * @example
 * // Create an instance of the lightbox class.
 * let light = new Lightbox(images, id);
 * // Call the setup images function to fetch the images and place them into the DOM.
 * light.setupImages();
 * // Transfer the lightbox from virtual dom to the real dom.
 * $('body').append(light.html);
 * // Open the lightbox.
 * $('#modal-' + id).modal();
 * // Start the image cycle.
 * light.startCycle();;
 */
class Lightbox
{
	/**
	* @method constructor
	* @memberof Lightbox
	* @description Called upon the class instantiation
	* @author Nathan Leadil
	* @param {Array} images Array of image urls
	* @param {Number} id Id of the design and development item
	*/
	constructor (images, id) {

		id = id || '0';
		/**
		 * Number of images in the image array
		 * @type {Number}
		 */
		this.imageCount = 0;
		/**
		 * Delay in the carousel before the next image shows
		 * @type {Number}
		 */
		this.delay = 3000;
		/**
		 * Array of images
		 * @type {Array}
		 */
		this.images = images;
		/**
		 * Lightbox HTML. Initialises with default template html for us to insert html into.
		 * @type {String}
		 * @default
		 */
		this.html = '<div class="modal fade bs-example-modal-lg carousel-modal-dad" tabindex="-1" role="dialog" id="modal-' + id + '">\
									<div class="modal-dialog modal-lg">\
										<div class="modal-content">\
											<div id="modalCarousel" class="carousel slide carousel-fade modal-carousel" data-ride="carousel">\
												<ol class="carousel-indicators"></ol>\
												<div class="carousel-inner"></div>\
											</div>\
										</div>\
									</div>\
								</div>';
	}
	// http://notes.io/zDUX
	/**
	 * @method setupImages
	 * @memberof Lightbox
	 * @description Takes the this.images array and for each image, it generates a carousel image and indicator for the lightbox. Appending each item to the html variable. Once the loop has completed we update the class parameter this.html to reflect the functions local html variable.
	 * @author Nathan Leadill
	 */
	setupImages () {
		const images = this.images;
		let html  = $.parseHTML(this.html);
		const length = this.images.length;
		let count = 0;
		images.forEach((image) => {
			const indicator = count == 0  ? 'active' : '';
			if(length > 1)
			{
				$('.carousel-indicators', html).append('<li data-target="#modalCarousel" data-slide-to="' + count + '" class="' + indicator + '"></li>');
				$('#modalCarousel').append('<a class="glyphicon glyphicon-chevron-left left changeCarousel-left" data-slide="prev" href="#modalCarousel"></a><a class="glyphicon glyphicon-chevron-right right changeCarousel-right" data-slide="next" href="#modalCarousel"></a>');
			}
			const classes = count == 0 ? 'item active' : 'item';
			const inner = image.indexOf('.mp4') != -1 ? '<video src="' + image + '" controls></video>' : '<img src="' + image + '">';
			$('.carousel-inner', html).append('<div class=" ' + classes + '">' + inner);
			count++;
		});
		this.html = html;
		this.imageCount = count;
	}
	/**
	 * @method startCycle
	 * @memberof Lightbox
	 * @description Starts the cycle for moving the carousel onto the next image
	 * @author Nathan Leadill
	 */
	startCycle () {
		this.imageCycle = setInterval(function () {
			$('.carousel').carousel('next');
		}, this.delay);
	}
	/**
	 * @method getimageCount
	 * @memberof Lightbox
	 * @description Returns the number of images in the images array.
	 * @author Nathan Leadill
	 * @return {Number} Number of images in the array
	 */
	get imageCount () {
		return this._imageCount;
	}
	/**
	 * @method getdelay
	 * @memberof Lightbox
	 * @description The amount of milliseconds to wait before switching the image on the lightbox.
	 * @author Nathan Leadill
	 * @return {Integer} Delay Value
	 */
	get delay () {
		return this._delay;
	}
	/**
	 * @method getimages
	 * @memberof Lightbox
	 * @description Returns the array of image urls
	 * @author Nathan Leadill
	 * @return {Array} Array of ImageURLs
	 *
	 * @example
	 * this.images;
	 * // Returns
	 * ['image1.png', 'image2.png', 'image3.png'];
	 */
	get images () {
		return this._images;
	}
	/**
	 * @method gethtml
	 * @memberof Lightbox
	 * @description Returns the lightbox html
	 * @author Nathan Leadill
	 * @return {String} Lightbox HTML
	 */
	get html () {
		return this._html;
	}

	/**
	 * @method setupImages
	 * @memberof Lightbox
	 * @description Sets imageCount property
	 * @author Nathan Leadill
	 * @param {Number} imageCount Number of images in the array
	 */
	set imageCount (imageCount) {
		this._imageCount = imageCount
	}
	/**
	 * @method setupImages
	 * @memberof Lightbox
	 * @description Sets delay property
	 * @author Nathan Leadill
	 * @param {Number} delay Delay for carousel
	 */
	set delay (delay) {
		this._delay = delay;
	}
	/**
	 * @method setupImages
	 * @memberof Lightbox
	 * @description Sets the local images property containing the array of image urls.
	 * @author Nathan Leadill
	 * @param {Array} images Array of image URLs
	 *
	 * @example
	 * this.images = ['image1.png', 'image2.png', 'image3.png'];
	 */
	set images (images) {
		this._images = images;
		this.imageCount = images.length;
	}
	/**
	 * @method setupImages
	 * @memberof Lightbox
	 * @description Sets the html property
	 * @author Nathan Leadill
	 * @param {String} html Sets html
	 */
	set html (html) {
		this._html = html;
	}
}



$(function() {
	// When the script is loaded, we use an abstract method to get the title of the page, if its not a default page
	// We check if its a blog post, lab post or portfolio page so we can set the correct page to be active and
	// instantiate the correct class.

	let page  = window.addthis_share.title;
	switch (page) {
		case 'Pikcells':
			const pikcells  = new Pikcells();
			break;
		case 'Portfolio':
			const portfolio = new Portfolio();
			break;
		case 'Studio':
			const studio    = new Studio();
			break;
		case 'Lab':
			const lab       = new Lab();
			break;
		case 'Culture':
			const culture   = new Culture();
			break;
		default:
			if(window.pageType) {
				let localPage = window.pageType;
				if(localPage === 'portfolio') {
					const single = new SinglePortfolio();
				}
				else if(localPage === 'blog') {
					const blog = new SingleBlog();
				}
				else if(localPage === 'lab') {
					const slab  = new SingleLab();
				}
			}
			break;
	}
})
