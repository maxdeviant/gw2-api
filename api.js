function API() {
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

	this.getWorlds = function() {
		// Get worlds: Global
		return GET(baseURL + "world_names.json");
	}

	this.getContinents = function() {
		// Get continents
		return GET(baseURL + "continents.json");
	}

	this.getMaps = function(map_id) {
		// Get map
		if (map_id) {
			return GET(baseURL + "maps.json?map_id=" + map_id);
		// Get maps: Global
		} else {
			return GET(baseURL + "maps.json");
		}
	}

	this.getMapFloor = function(continent_id, floor) {
		// Get map floor
		if (continent_id && floor) {
			return GET(baseURL + "map_floor.json?continent_id=" + continent_id + "&floor=");
		// Error
		} else {
			console.log("Parameters required: continent_id, floor");
		}
	}

	this.getEvents = function(world_id, map_id, event_id) {
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

	this.getEventNames = function() {
		// Get event names: Global
		return GET(baseURL + "event_names.json");
	}

	this.getEventDetails = function(event_id) {
		// Get event details
		if (event_id) {
			return GET(baseURL + "event_details.json?event_id=" + event_id);
		// Get event details: Global
		} else {
			return GET(baseURL + "event_details.json");
		}
	}

	this.getGuild = function(guild) {
		// Get guild: ID
		if (guild && guild.indexOf('-') > 1) {
			return GET(baseURL + "guild_details.json?guild_id=" + guild);
		// Get guild: Name
		} else if (guild) {
			return GET(baseURL + "guild_details.json?guild_name=" + guild);
		// Error
		} else {
			console.log("Parameter required: guild_name or guild_id");
		}
	}

	this.getItems = function() {
		// Get items: Global
		return GET(baseURL + "items.json");
	}

	this.getItemDetails = function(item_id) {
		// Get item details
		if (item_id) {
			return GET(baseURL + "item_details.json?item_id=" + item_id);
		// Error
		} else {
			console.log("Parameter required: item_id");
		}
	}

	this.getRecipes = function() {
		// Get recipes: Global
		return GET(baseURL + "recipes.json");
	}

	this.getRecipeDetails = function(recipe_id) {
		// Get recipe details
		if (recipe_id) {
			return GET(baseURL + "recipe_details.json?recipe_id=" + recipe_id);
		// Error
		} else {
			console.log("Parameter required: recipe_id");
		}
	}

	this.getBuild = function() {
		// Get build
		return GET(baseURL + "build.json");
	}
}