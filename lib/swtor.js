/**
  * SWTORData.com API Version 2.2 wrapper by Derek Martinez.
  * http://swtordata.com/api
  */
'use strict';

let request = require('request');
let querystring = require('querystring');

function SwtorDataAPI(key, defaults) {
	this.key = key;
	this._baseUrl = "http://swtordata.com/api/v2_2/";
	this._defaults = {
		perpage: defaults.perpage || 50,
		sortorder: defaults.sortorder || 'display_name_asc'
	}
};
SwtorDataAPI.prototype.getById = function(endpoint, id, callback) {
	let opts = this._formatRequest(endpoint + '/' + id, {});
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getItems = function (input, callback) {
	var params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || this._defaults.sortorder,
		item_bind: input.item_bind || '',
		item_quality: input.item_quality || '',
		moredetailed: input.moredetailed || '',
		item_slots: input.item_slots || '',
		minimum_level_gte: input.minimum_level_gte || null,
		minimum_level_lt: input.minimum_level_lt || null
	};
	let opts = this._formatRequest('items', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));	
	});
};
SwtorDataAPI.prototype.getCraftings = function(input, callback) {
	var params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || "",
		sortorder: input.sortorder || this._defaults.sortorder,
		crafting_profession: input.crafting_profession || ''
	};
	let opts = this._formatRequest('craftings', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getAbilities = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || this._defaults.sortorder,
		targetrule: input.targetrule || 'Any',
		range_min: input.range_min || 0,
		range_max: input.range_max || 90,
		cooldown_min: input.cooldown_min || 0,
		cooldown_max: input.cooldown_max || 360
	};
	let opts = this._formatRequest('abilities', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getMissions = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('missions', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getNPCs = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || this._defaults.sortorder,
		moredetailed: input.moredetailed || null
	};
	let opts = this._formatRequest('npcs', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getCodexes = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('decorations', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getDecorations = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('decorations', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getReputations = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('reputations', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getStrongholds = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('strongholds', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getAchievements = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('achievements', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getCollections = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('collections', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getTitles = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('titles', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype.getLegacyTitles = function (input, callback) {
	let params = {
		page: input.page || 1,
		perpage: input.perpage || this._defaults.perpage,
		query: input.query || '',
		sortorder: input.sortorder || 'display_name_asc'
	};
	let opts = this._formatRequest('legacytitles', querystring.stringify(params));
	request(opts, function (error, response, body) {
		if (error) {
			return callback(error, null);
		}
		if (response.statusCode !== 200) {
			return callback(response.statusCode, null);
		}
		return callback(null, JSON.parse(body));
	});
};
SwtorDataAPI.prototype._formatRequest = function(path, data) {
	return {
		url: this._baseUrl + path + "?" + data,
		headers: {
			"X-Api-Key": this.key
		}
	};
};

module.exports = SwtorDataAPI;