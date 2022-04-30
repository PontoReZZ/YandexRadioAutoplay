if (window.location.toString().match(/https\:\/\/radio.yandex.ru/ig)) {

	function change_track() {
		try {
			playing = document.querySelector('.progress__shape.progress__shape_play > path').getAttribute('d').split(' ')[6].split(',')[0];
			void(playing == '34.020' && document.querySelector('[title="Играть [P]"]').click());
		} catch(err) {};
	};
	setInterval(change_track, 1000);

}