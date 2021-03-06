'use strict';

if (!String.prototype.hu_substring) {
	String.prototype.hu_substring = function (val) {
		if (typeof this !== 'string') {
			return '';
		}

		let s = this.trim();

		if (!s || !s.length) {
			return '';
		}

		if (s.length <= val) {
			return s;
		}

		return s.substring(0, val) + '...';
	};
}

if (!String.prototype.hu_striptags) {
	String.prototype.hu_striptags = function () {
		let s = this.trim();

		const div = document.createElement('div');
		div.innerHTML = s;

		return div.innerText;
	};
}

if (!String.prototype.hu_nl2br) {
	String.prototype.hu_nl2br = function () {
		let s = this.trim();

		return s
			.replace('\r\n', '</br>')
			.replace('\n', '</br>');
	};
}


if (!String.prototype.hu_re) {
	String.prototype.hu_re = function (obj) {
		if (!obj) {
			return this.trim();
		}

		return Object.entries(obj).reduce(function (d, pair) {
			const [key, value] = pair;
			return d.replace(`%(${key})s`, value)
				.replace(`{${key}}`, value);
		}, this.trim());
	};
}

if (!String.prototype.hu_ext_url) {
	String.prototype.hu_ext_url = function () {
		let host = 'https://headup.space';
		let path = this.trim();
		return `${host}${path}`;
	};
}


