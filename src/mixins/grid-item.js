var postcss = require('postcss');

module.exports = function (mixin, prop, count) {
	var rule, i, val;
	count = count || 12;

	for(i = count; i > 0; i--) {
		rule = postcss.rule({ selector: '&-' + i });
		val = i / count * 100;
		rule.append({
			prop: prop,
			value: parseFloat(val.toFixed(5)) + '%'
		});
		mixin.parent.insertBefore(mixin, rule);
	}
};
