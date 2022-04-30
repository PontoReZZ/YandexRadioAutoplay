if (window.location.toString().match(/https\:\/\/radio.yandex.ru/ig)) {

	function change_track() {
		try {
			playing = document.querySelector('.progress__shape.progress__shape_bg > path').getAttribute('d').split(' ')[5];
			void(playing == '1,0' && document.querySelector('[title="Играть [P]"]').click());
		} catch(err) {};
	};
	setInterval(change_track, 1000);

}