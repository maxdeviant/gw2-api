App.factory('API', function() {
	var baseURL = "https://api.guildwars2.com/v1/";

	function GET(url) {
		var result;

		$.ajax({
			url: url,
			async: false,
			success: function(data) {
				result = data;
			}
		});

		return result;
	}

	var API = function(){};

	API.getWorlds = function() {
		// Get worlds: Global
		return GET(baseURL + "world_names.json");
	}

	API.getBuild = function() {
		// Get build
		return GET(baseURL + "build.json");
	}

	API.Maps = function(){};

	API.Maps.getContinents = function() {
		// Get continents
		return GET(baseURL + "continents.json");
	}

	API.Maps.getMaps = function(map_id) {
		// Get map
		if (map_id) {
			return GET(baseURL + "maps.json?map_id=" + map_id);
		// Get maps: Global
		} else {
			return GET(baseURL + "maps.json");
		}
	}

	API.Maps.getFloor = function(continent_id, floor) {
		// Get map floor
		if (continent_id && floor) {
			return GET(baseURL + "map_floor.json?continent_id=" + continent_id + "&floor=");
		// Error: Missing parameter
		} else {
			console.log("Parameters required: continent_id, floor");
		}
	}

	API.Events = function(){};

	API.Events.getEvents = function(world_id, map_id, event_id) {
		// Get event
		if (world_id && map_id && event_id) {
			return GET(baseURL + "events.json?world_id=" + world_id + "&map_id=" + map_id + "&event_id=" + event_id);
		// Get events: Map
		} else if (world_id && map_id && !event_id) {
			return GET(baseURL + "events.json?world_id=" + world_id + "&map_id=" + map_id);
		// Get events: World
		} else if (world_id && !map_id && !event_id) {
			return GET(baseURL + "events.json?world_id=" + world_id);
		// Get events: Global
		} else {
			return GET(baseURL + "events.json");
		}
	}

	API.Events.getEventNames = function() {
		// Get event names: Global
		return GET(baseURL + "event_names.json");
	}

	API.Events.getEventDetails = function(event_id) {
		// Get event details
		if (event_id) {
			return GET(baseURL + "event_details.json?event_id=" + event_id);
		// Get event details: Global
		} else {
			return GET(baseURL + "event_details.json");
		}
	}

	API.Guilds = function(){};

	API.Guilds.getGuild = function(guild) {
		// Get guild: ID
		if (guild && guild.indexOf('-') > 1) {
			return GET(baseURL + "guild_details.json?guild_id=" + guild);
		// Get guild: Name
		} else if (guild) {
			return GET(baseURL + "guild_details.json?guild_name=" + guild);
		// Error: Missing parameter
		} else {
			console.log("Parameter required: guild_name or guild_id");
		}
	}

	API.Items = function(){};

	API.Items.getItems = function() {
		// Get items: Global
		return GET(baseURL + "items.json");
	}

	API.Items.getItemDetails = function(item_id) {
		// Get item details
		if (item_id) {
			return GET(baseURL + "item_details.json?item_id=" + item_id);
		// Error: Missing parameter
		} else {
			console.log("Parameter required: item_id");
		}
	}

	API.Items.getRecipes = function() {
		// Get recipes: Global
		return GET(baseURL + "recipes.json");
	}

	API.Items.getRecipeDetails = function(recipe_id) {
		// Get recipe details
		if (recipe_id) {
			return GET(baseURL + "recipe_details.json?recipe_id=" + recipe_id);
		// Error: Missing parameter
		} else {
			console.log("Parameter required: recipe_id");
		}
	}

	API.WvW = function(){};

	API.WvW.getMatches = function() {
		// Get matches: Global
		return GET(baseURL + "wvw/matches.json");
	}

	API.WvW.getMatchDetails = function(match_id) {
		// Get match details
		if (match_id) {
			return GET(baseURL + "wvw/match_details.json?match_id=" + match_id);
		// Error: Missing parameter
		} else {
			console.log("Parameter required: match_id");
		}
	}

	API.WvW.getObjectiveNames = function() {
		// Get objective names
		return GET(baseURL + "wvw/objective_names.json");
	}

	API.Assets = function(){};

	API.Assets.getColors = function() {
		return GET(baseURL + "colors.json");
	}

	API.Assets.getFiles = function() {
		return GET(baseURL + "files.json");
	}

	API.Services = function(){};

	API.Services.drawTile = function(continent_id, floor, zoom, x, y) {
		// Draw tile
		if (continent_id && floor && zoom && x && y) {
			// TODO
		// Error: Missing parameters
		} else {
			console.log("Parameter required: continent_id, floor, zoom, x, y");
		}
	}

	API.Services.render = function(signature, file_id, format) {
		// Render file
		if (signature && file_id && format) {
			// TODO
		// Render file: Guess at format
		} else if (signature && file_id && !format) {
			// TODO
		// Error: Missing parameters
		} else {
			console.log("Parameter required: signature, file_id, [format]");
		}
	}

	return API;
});

