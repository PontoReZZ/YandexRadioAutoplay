if (window.location.toString().match(/https\:\/\/radio.yandex.ru/ig)) {

	var icon_autoplay = document.createElement('span');
	icon_autoplay.className = 'icon autoplay';
	icon_autoplay.title = 'Автовоспроизведение';
	document.getElementsByClassName('head__right')[0].prepend(icon_autoplay);

	function change_track() {
		try {
			playing = document.querySelector('.progress__shape.progress__shape_play > path').getAttribute('d').split(' ')[6].split(',')[0];
			void(playing == '34.020' && document.querySelector('[title="Играть [P]"]').click())
		} catch(err) {}
	}

	window.onload = autoplay_checking; 
	document.querySelector('.autoplay').onclick = autoplay_checking;
	function autoplay_checking() {
		document.querySelector('.autoplay').classList.toggle('autoplay_enabled');
		autoplay_enabled_el = document.querySelector('.autoplay').getAttribute('class').split(' ')[2];
		autoplay_enabled_el == 'autoplay_enabled' ? autoplay_enabled = setInterval(change_track, 1000) : clearInterval(autoplay_enabled)
	}

}