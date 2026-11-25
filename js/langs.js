/*
 * *************************************************************************************
 * @class Langs
 * *************************************************************************************
*/
Langs = newClass(null, {
	id: '',
	parent: undefined,
	div: undefined,
	flags: [],

	constructor: function(id, parent) {
		var t = this;
		t.id = id;
		t.parent = parent;
        t.parent.append('<div class="langs"></div>');
        t.div = $('.langs');
		t.flags = [];
   	},

    addLang: function(id, name, title, content, active) {
        var t = this;
        t.flags[id] = $('<div active="' + (active == true ? 'true' : 'false') +'" id="' + id + '" class="flag-right noselect" title="' + title +'">' + name + '</div>');
        t.div.append(t.flags[id]);

		t.flags[id].on('click', function(e) {
			t.div.find('div[active="true"]').attr('active', 'false');
			$(e.target).attr('active', 'true');
			gEvent.fireEvent(null, t.id, 'langSwitch', { 'id': $(e.target).attr('id'), 'name': $(e.target).text() });
		});
    },

	setActive: function(id) {
		var t = this;
		t.div.find('div[active="true"]').attr('active', 'false');
		t.flags[id].attr('active', 'true');
	}

});
