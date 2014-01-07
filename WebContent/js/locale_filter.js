locale.filter('i18n', function($gloriaLocale) {
	return function(key, p) {

		var dictionary = $gloriaLocale.getDictionary();

		var keyParts = key.split('.');
		var value = undefined;
		keyParts.forEach(function(key) {
			if (value == undefined) {
				value = dictionary[key];
			} else {
				value = value[key];
			}
		});

		if (typeof value != 'undefined' && value != '') {

			var result = (typeof p === "undefined") ? value : value.replace(
					'@{}@', p);

		/*	if (typeof result == 'string') {
				result = result.replace('�', '\u00f3');
				result = result.replace('�', '\u00e1');
				result = result.replace('�', '\u00e9');
				result = result.replace('�', '\u00ed');				
				result = result.replace('�', '\u00fa');

				result = result.replace('�', '\u00c1');
				result = result.replace('�', '\u00c9');
				result = result.replace('�', '\u00cd');
				result = result.replace('�', '\u00d3');
				result = result.replace('�', '\u00da');

				result = result.replace('�', '\u00f1');
				result = result.replace('�', '\u00d1');
			}*/

			return result;
		}
	};
});