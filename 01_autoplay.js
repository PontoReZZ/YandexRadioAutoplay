if (window.location.toString().match(/https\:\/\/radio.yandex.ru/ig)) {

	chrome.storage.sync.get(['key'], function(result) {
		if (result.key == '1') {
			document.querySelector('.autoplay').className = 'icon autoplay autoplay_enabled'
		} else if (result.key == '0') {
			document.querySelector('.autoplay').className = 'icon autoplay'
		} else {
			window.onload = autoplay_checking
		}
	})

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

	document.querySelector('.autoplay').onclick = autoplay_checking;
	function autoplay_checking() {
		document.querySelector('.autoplay').classList.toggle('autoplay_enabled');
		autoplay_enabled_el = document.querySelector('.autoplay').getAttribute('class').split(' ')[2];
		if (autoplay_enabled_el == 'autoplay_enabled') {
			autoplay_enabled = setInterval(change_track, 1000);
			is_auto = '1'
		} else {
			try {
				clearInterval(autoplay_enabled);
			} catch(err) {}
			is_auto = '0'
		}
		
		chrome.storage.sync.set({key: is_auto}, function() {
		});

	}

}