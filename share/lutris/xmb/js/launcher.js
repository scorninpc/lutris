
var Lutris = {
	// Configuração
	debug: true,
	config_json: {},
	game_list: [{"id": 11, "name": "Age of Empires II: The Conquerors", "slug": "age-of-empires-ii-the-conquerors", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533513045, "installed": 1, "installed_at": 1533512903, "year": null, "steamid": "", "configpath": "age-of-empires-ii-the-conquerors-1533512902", "has_custom_banner": null, "has_custom_icon": null}, {"id": 4, "name": "Cemu", "slug": "cemu", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533509986, "installed": 1, "installed_at": 1533509624, "year": null, "steamid": "", "configpath": "cemu-1533509623", "has_custom_banner": null, "has_custom_icon": null}, {"id": 1, "name": "Chasm", "slug": "chasm", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533408332, "installed": 1, "installed_at": 1533335917, "year": "", "steamid": "", "configpath": "chasm-1533335917", "has_custom_banner": null, "has_custom_icon": null}, {"id": 3, "name": "Dead Cells", "slug": "dead-cells", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1534470410, "installed": 1, "installed_at": 1533508979, "year": "", "steamid": "", "configpath": "dead-cells-1533508979", "has_custom_banner": null, "has_custom_icon": null}, {"id": 12, "name": "Diablo II", "slug": "diablo-ii", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 0, "installed": 1, "installed_at": 1533513146, "year": "", "steamid": "", "configpath": "diablo-ii-1533513145", "has_custom_banner": null, "has_custom_icon": null}, {"id": 9, "name": "Dungeon", "slug": "dungeon", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533512204, "installed": 1, "installed_at": 1533512004, "year": null, "steamid": "", "configpath": "dungeon-1533512004", "has_custom_banner": null, "has_custom_icon": null}, {"id": 10, "name": "Dungeon Siege III", "slug": "dungeon-siege-iii", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533512826, "installed": 1, "installed_at": 1533512477, "year": "", "steamid": "", "configpath": "dungeon-siege-iii-1533512477", "has_custom_banner": null, "has_custom_icon": null}, {"id": 2, "name": "Far Lone Sails", "slug": "far-lone-sails", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": "2018-07-25T11:26:22.764527Z", "lastplayed": 0, "installed": 1, "installed_at": 1533337401, "year": null, "steamid": 609320, "configpath": "far-lone-sails-1533337401", "has_custom_banner": null, "has_custom_icon": null}, {"id": 7, "name": "FigmentDemo", "slug": "figmentdemo", "installer_slug": null, "parent_slug": null, "platform": "Linux", "runner": "linux", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533510803, "installed": 1, "installed_at": 1533510770, "year": null, "steamid": "", "configpath": "figmentdemo-1533510770", "has_custom_banner": null, "has_custom_icon": null}, {"id": 6, "name": "Gost of a Tale", "slug": "gost-of-a-tale", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533510713, "installed": 1, "installed_at": 1533510461, "year": null, "steamid": "", "configpath": "gost-of-a-tale-1533510461", "has_custom_banner": null, "has_custom_icon": null}, {"id": 5, "name": "Guardian of Andra Fragments of Fate", "slug": "guardian-of-andra-fragments-of-fate", "installer_slug": null, "parent_slug": null, "platform": "Linux", "runner": "linux", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533510364, "installed": 1, "installed_at": 1533510160, "year": null, "steamid": "", "configpath": "guardian-of-andra-fragments-of-fate-1533510160", "has_custom_banner": null, "has_custom_icon": null}, {"id": 8, "name": "Rise of Industry", "slug": "rise-of-industry", "installer_slug": null, "parent_slug": null, "platform": "Linux", "runner": "linux", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1533511745, "installed": 1, "installed_at": 1533510872, "year": null, "steamid": "", "configpath": "rise-of-industry-1533510872", "has_custom_banner": null, "has_custom_icon": null}, {"id": 14, "name": "Steven Universe - Save the Light", "slug": "steven-universe-save-the-light", "installer_slug": null, "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/home/scorninpc/Games", "updated": null, "lastplayed": 1534376703, "installed": 1, "installed_at": 1534370568, "year": "", "steamid": "", "configpath": "steven-universe-save-the-light-1534370567", "has_custom_banner": null, "has_custom_icon": null}, {"id": 13, "name": "Battle.net", "slug": "world-of-warcraft", "installer_slug": "world-of-warcraft-dox-july-2018-update", "parent_slug": null, "platform": "Windows", "runner": "wine", "executable": null, "directory": "/media/backup/opt/Games", "updated": null, "lastplayed": 1534117040, "installed": 1, "installed_at": 1534111998, "year": 2004, "steamid": "", "configpath": "world-of-warcraft-dox-july-2018-update-1534111998", "has_custom_banner": null, "has_custom_icon": null}],
	
	
	// Prepara as variaveis do ambiente
	main_item_width: $('.main_menu .main_item:first .main_title').width(),
	main_item_height: $('.main_menu .main_item:first .main_title').height(),
	submenu_item_height: ($('.main_item.actived li.selected').height() + parseFloat($('.main_item.actived li.selected').css('margin-top').replace('px', ''))),
	xmb_margin_top: $('.main_menu .main_item:first .main_title').width() / 3,

	/**
	 * Separa os jogos por plataforma
	 */
	plataform_orders: function() {

		var games = {};

		// loop between all games
		$.each(Lutris.game_list, function(index, item) {

			// if key not exists with plataform name, create
			if(!games.hasOwnProperty(item.platform)) {
				games[item.platform] = {};
			}
			
			// add the game in the correct plataform
			games[item.platform][item.id] = item;
		});

		Lutris.game_list = games;
	},
	
	/**
	 * Inicializa o launcher
	 */
	init: function() {
		// Ordena as plataformas
		Lutris.plataform_orders();

		// Inicializa o XMB
		Lutris.init_xmb();
		
		// Inicializa o callback do teclado
		document.onkeydown = Lutris.keyboard_event;
	},
	
	/**
	 * Inicializa o XMB
	 */
	init_xmb: function() {
		// Seta o tamanho do main_menu
		$('.main_menu').width(Lutris.main_item_width * $('.main_menu .main_item').length);
		$('.main_menu').css({
			'margin-left': Lutris.main_item_width,
			'margin-top': Lutris.xmb_margin_top
		});
		
		// Seta o tamanho do submenu
		var height_submenu_window = $(window).height() - Lutris.main_item_height - Lutris.xmb_margin_top;
		var b = parseInt(height_submenu_window / Lutris.submenu_item_height) * Lutris.submenu_item_height
		$('.sub_menu').css({
				height: b
		});
		
		// Popula o XMB
		Lutris.populate_xmb();
		
		// Exibe o XMB
		$('.xmb_bar').animate({
			'opacity':1
		});
	},
	
	/**
	 * Popula o XMB
	 */
	populate_xmb: function() {
		// Limpa o XMB
		$('.main_menu').html('');

		console.log(Lutris.game_list);

		// Percorre as configurações
		var plataform_index = 0;
		$.each(Lutris.game_list, function(fake_index, item) {

			var firstElement = item[Object.keys(item)[0]];

			var main_item_html = $('' +
				'<li class="main_item ' + firstElement.platform.toLowerCase() + ' ' + ((plataform_index == 0) ? 'actived' : '') + '">' + 
				'	<div class="main_title">' + 
				'		<img src="icons/' + firstElement.platform.toLowerCase() + '.png">' + 
				'		' + firstElement.platform +
				'	</div>' + 
				'	<div class="sub_menu">' + 
				'		<ul class="sub_menu_ul">' + 
				'		</ul>' + 
				'	</div>' + 
				'</li>' + 
				'');


			var game_index = 0;
			$.each(item, function(fake_index, game_item) {
				var game_item_html = $('' + 
					'	<li class="sub_item ' +  ((game_index == 0) ? 'selected' : '')+ '">' + 
					'		<div><a href="rungame://game_id=' + game_item.id + '">' + game_item.name + '</a></div>' + 
					'	</li>' + 
					'');

				main_item_html.find('.sub_menu_ul').append(game_item_html);

				game_index++;
			});
			
			$('.main_menu').append(main_item_html);
			
			plataform_index++;
		});
	},
	
	/**
	 * Aciona os eventos do joystick
	 */
	joystick_event: function(event) {
		if(event.button == "y" && event.value == 1) {
			Lutris.navigation("down");
		}
		else if(event.button == "y" && event.value == -1) {
			Lutris.navigation("up");
		}
		else if(event.button == "x" && event.value == 1) {
			Lutris.navigation("right");
		}
		else if(event.button == "x" && event.value == -1) {
			Lutris.navigation("left");
		}
	},
	
	/**
	 * Aciona os eventos do teclado
	 */
	keyboard_event: function(e) {
		var event = window.event ? window.event : e;
		
		if(event.keyCode == 40) {
			Lutris.navigation("down");
		}
		else if(event.keyCode == 38) {
			Lutris.navigation("up");
		}
		else if(event.keyCode == 39) {
			Lutris.navigation("right");
		}
		else if(event.keyCode == 37) {
			Lutris.navigation("left");
		}
	},
	
	/**
	 * Controla a navegação no XMB
	 */
	navigation: function(type) {
		if(type == "up") {
			var next = $('.main_item.actived .sub_item.selected').prev();
			if(next.length == 0) {
				next = $('.main_item.actived .sub_item:last');
			}
			
			$('.main_item.actived .sub_item.selected').removeClass('selected');
			next.addClass('selected');
			
			// Anima o menu
			var margin_top = 0;
			if(next.index() >= 2) {
				margin_top = (next.index() * Lutris.submenu_item_height) - (Lutris.submenu_item_height * 2);
			}
			$('.main_item.actived .sub_menu_ul').stop(true, true).animate({
				'margin-top': margin_top * -1
			});
		}
		else if(type == "down") {
			var next = $('.main_item.actived .sub_item.selected').next();
			if(next.length == 0) {
				next = $('.main_item.actived .sub_item:first');
			}
			
			// Anima o menu
			var margin_top = 0;
			if(next.index() >= 2) {
				margin_top = (next.index() * Lutris.submenu_item_height) - (Lutris.submenu_item_height * 2);
			}
			$('.main_item.actived .sub_menu_ul').stop(true, true).animate({
				'margin-top': margin_top * -1
			});
			
			// Troca as classes
			$('.main_item.actived .sub_item.selected').removeClass('selected');
			next.addClass('selected');
		}
		else if(type == "left") {
			var next = $('.main_item.actived').prev();
			if(next.length == 0) {
				next = $('.main_item:last');
			}
			
			// Anima o menu
			$('.main_menu').stop(true, true).animate({
				'margin-left': ((next.index() * Lutris.main_item_width) * -1)  + Lutris.main_item_width
			});
			
			// Troca as classes
			$('.main_item.actived').removeClass('actived');
			next.addClass('actived');
		}
		else if(type == "right") {
			var next = $('.main_item.actived').next();
			if(next.length == 0) {
				next = $('.main_item:first');
			}
			
			// Anima o menu
			$('.main_menu').stop(true, true).animate({
				'margin-left': ((next.index() * Lutris.main_item_width) * -1)  + Lutris.main_item_width
			});
			
			// Troca as classes
			$('.main_item.actived').removeClass('actived');
			next.addClass('actived');
			
			
		}
	}
	
};

// Inicializa os eventos do joystick (quem faz a chamada é o python)
function joystick_event(event)
{
	if(Lutris.debug) {
		document.getElementById('button').innerHTML = event.button;
		document.getElementById('event').innerHTML = event.event;
		document.getElementById('value').innerHTML = event.value;
	}
	
	Lutris.joystick_event(event);
}

// Inicializa a aplicação pelo python
var LauncherInit = function() {
	Lutris.init();
	
	if(Lutris.debug) {
		$('body').prepend(''+
			'<div class="events_area">'+
			'	<div>Resolution: ' + $(window).width() + 'x' + $(window).height() + '</div>'+
			'	<div>Button: <span id="button"></span></div>'+
			'	<div>Event: <span id="event"></span></div>'+
			'	<div>Value: <span id="value"></span></div>'+
			'</div>'+
		'');
	}
};



LauncherInit();