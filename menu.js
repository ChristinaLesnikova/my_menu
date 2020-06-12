'use strict';

let botStart = false;

(function(){
	let my__style = '<!--Стили-->\
		<style>\
			#chris-menu {\
				top: 20px;\
				left: 1000px;\
				width: 175px;\
				height: 300px;\
				background-color: thistle;\
				display: none;\
			}\
			.menu-button {\
				left: 25px;\
				border-radius: 5px;\
			}\
			.b-setting {\
				top: 50px;\
			}\
			.b-start {\
				top: 100px;\
			}\
			.b-stop {\
				top: 150px;\
			}\
			.gav-gav-gav {\
				position: absolute;\
				background-image: url(https://vk.com/sticker/1-18172-128);\
				background-size: 100%;\
				width: 85px;\
				height: 85px;\
				top: 205px;\
				left: 70px;\
			}\
			#win-settings {\
				position: absolute;\
				top: 20px;\
				left: 440px;\
				width: 550px;\
				background-color: orchid;\
				opacity: 0.9;\
				display: none;\
			}\
			.board-layout {\
				background-color: orchid;\
				color: floralwhite;\
				font-family: cursive;\
				font-size: 15px;\
				display: grid;\
				grid-template-rows: max-content auto;\
				grid-gap: 10px;\
				padding: 10px;\
				height: auto;\
				max-height: 800px;\
				overflow-y: auto;\
				overflow-x: hidden;\
				margin-top: 25px;\
			}\
			.list-layout {\
				display: grid;\
				grid-gap: 10px;\
			}\
			.board-text {\
				font-weight: bold;\
				font-size: 20px;\
				margin-top: -15px;\
			}\
			.board-lists {\
				display: grid;\
				grid-auto-columns: 130px;\
				grid-auto-flow: column;\
				grid-gap: 4px;\
				height: auto;\
			}\
			.board-list {\
				background-color: darkmagenta;\
				border-radius: 3px;\
				display: grid;\
				grid-auto-rows: max-content;\
				grid-gap: 5px;\
				padding: 10px;\
			}\
			.list-title {\
				font-size: 10px;\
			}\
			.card {\
				background-color: orchid;\
				border-radius: 3px;\
				box-shadow: 0 1px 0 rgba(9,30,66,.25);\
				padding: 2px;\
				cursor: pointer;\
				color: darkred;\
				width: 107px;\
				font-size: 9px;\
				font-weight: bold;\
			}\
			.icon-heart {\
				background-image: url(https://vk.com/emoji/e/f09f9296.png);\
				background-repeat: no-repeat;\
				margin-top: 3px;\
			}\
			.io-io {\
				position: absolute;\
				-webkit-transform: rotate(-10deg);\
				margin-left: -40px;\
				margin-top: 22px;\
				font-weight: bold;\
				color: lightgoldenrodyellow;\
				display: none;\
			}\
			.quest-color {\
				width:90px;\
				color: darkred;\
				border-radius: 3px;\
				width: 174px;\
			}\
			.quest-bronze {\
				background-color: #cd7f32;\
			}\
			.quest-gold {\
				background-color: #ffd700;\
			}\
			.quest-brilliant {\
				background-color: cyan;\
			}\
		</style>\
	';

	let questDiv = '';
	for (var key in __dqs) {
		questDiv += '<div id="card' + key + '" class="card" draggable="true" ondragstart="dragStart(event)">' + __dqs[key].title + '</div>';
	}

	let my__tags = '<!--Скрипты-->\
		<div id="chris-menu" class="popup-move popupShadowNew ui-draggable ui-draggable-handle">\
			<a href="#" hidefocus="true" class="popupClose"></a>\
			<button class="bossButton menu-button cssGreenButton2 b-setting" hidefocus="true">Настройки</button>\
			<button class="bossButton menu-button cssGreenButton2 b-start" hidefocus="true">Старт</button>\
			<button class="bossButton menu-button cssGreenButton2 b-stop" hidefocus="true">Стоп</button>\
			<div class="gav-gav-gav"><div class="io-io">ИО-ИО</div></div>\
		</div>\
		<div id="win-settings" class="popup-move popupShadowNew ui-draggable ui-draggable-handle">\
			<a href="#" hidefocus="true" class="popupClose"></a>\
			<div class="board-layout">\
				<div class="left">\
					<div class="board-text">Настройки квестов</div>\
					<select class="quest-color quest-bronze">\
						<option value="1" selected>Играть</option>\
						<option value="2">Играть с досрочками</option>\
						<option value="3">Игнорировать</option>\
					</select>\
					<select class="quest-color quest-gold">\
						<option value="1" selected>Играть</option>\
						<option value="2">Играть с досрочками</option>\
						<option value="3">Игнорировать</option>\
					</select>\
					<select class="quest-color quest-brilliant">\
						<option value="1" selected>Играть</option>\
						<option value="2">Играть с досрочками</option>\
						<option value="3">Игнорировать</option>\
					</select>\
				</div>\
				<div id="boardlists" class="board-lists">\
					<div id="list1" class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">\
						<div class="list-title">Все задания</div>'
					+ questDiv +
					'</div>\
					<div id="list2" class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">\
						<div class="list-title">Под замену</div>\
					</div>\
					<div id="list3" class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">\
						<div class="list-title">Без суика</div>\
					</div>\
					<div id="list4" class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">\
						<div class="list-title">С суиком</div>\
					</div>\
				</div>\
			</div>\
		</div>\
	';
	$('.footerPanel').append('<li class="icon-heart"></li>');
	
	$('#popup_container').append(my__style + my__tags);
	$('#chris-menu').draggable();
	
	$(".icon-heart").click(e => {
		$('html, body').animate({scrollTop: 0}, 300);
		$("#chris-menu").css("display") == 'block' ? $("#chris-menu").hide(500) : $("#chris-menu").show(500);
	});

	$("#chris-menu .popupClose").click(e => {
		$('html, body').animate({scrollTop: 0}, 300);
		$("#win-settings").hide(500);
		$("#chris-menu").hide(500);
	});

	$("#win-settings .popupClose").click(e => {
		$('html, body').animate({scrollTop: 0}, 300);
		$("#win-settings").hide(500);
	});
	
	$(".b-setting").click(e => {
		$("#win-settings").css("display") == 'block' ? $("#win-settings").hide(500) : $("#win-settings").show(500);
	});

	$(".b-start").click(e => {
		$("#chris-menu .popupClose").click();
		botStart = true;
	});
	
	$(".b-stop").click(e => {
		botStart = false;
	});
	
	setInterval(() => {
		if ($('.gav-gav-gav').height() == 85){
			$('.gav-gav-gav').height(69);
			$('.gav-gav-gav').css('background-image', 'url("https://vk.com/sticker/1-18164-128")');
			$(".io-io").show(50);
		} else {
			$('.gav-gav-gav').height(85);
			$('.gav-gav-gav').css('background-image', 'url("https://vk.com/sticker/1-18172-128")');
			$(".io-io").hide(50);
		}
	}, 2000);
	
	setInterval(() => {
		if (botStart) {
			switch(gam_state) {
				case 'play':
					let randomNum = random($('#upl_list li').length);
					
					if (!gam_data["v_mode"]) {
						//console.info('ночь');
						if (!say){
							//talk('Закрыли пасти, ваш рот должен быть занят!');
							say = true;
						}
						vote($('#upl_list li').eq(randomNum).attr("id").replace(/\D+/g, ""));				
					} else {
						//console.info('день');
						vote($('#upl_list li').eq(randomNum).attr("id").replace(/\D+/g, ""));
						if ($('.popupGameVote').length){
							//alert('Судить - Да или Нет');
						}
					}
					
					if ($('.my.idead').length){
						exit();
					}
					break;
				case 'fin':
					exit();
					break;
				default:
					$('.players:contains("/' + players + '")').each((i, div) => {
						let entryId = $(div).attr("onclick").replace(/\D+/g, "");
						if ($("#gml_" + entryId + " .r" + league + "_h").length && $("#gml_" + entryId + " .coins").text() == 20) {
							_GM_action("gml", "join", entryId, event);
						}
					});
			}
		}
	}, 3000);
})();

const allowDrop = (e) => {
	e.preventDefault();
};

const dragStart = (e) => {
	e.dataTransfer.setData("text/plain", e.target.id);
};

const dropIt = (e) => {
	e.preventDefault();
	
	let sourceId = e.dataTransfer.getData("text/plain");
	let sourceIdEl = document.getElementById(sourceId);
	let sourceIdParentEl = sourceIdEl.parentElement;
	let targetEl = document.getElementById(e.target.id)

	if (targetEl){
		let targetParentEl = targetEl.parentElement;
		if (targetParentEl.id !== sourceIdParentEl.id){
			if (targetEl.className === sourceIdEl.className ){
				targetParentEl.appendChild(sourceIdEl);
			} else {
				targetEl.appendChild(sourceIdEl);
			}
		} else {
			let holder = targetEl;
			let holderText = holder.textContent;
			targetEl.textContent = sourceIdEl.textContent;
			sourceIdEl.textContent = holderText;
			holderText = '';
		}
	}
};