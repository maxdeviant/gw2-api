function API() {
	this.HomeWorld = { id: "1008", name: "Jade Quarry" };

	this.getWorlds = function() {
		// Get worlds: Global
		$.get("https://api.guildwars2.com/v1/world_names.json", function(data) {
			console.log(data);
		});
	}

	this.getContinents = function() {
		// Get continents
		$.get("https://api.guildwars2.com/v1/continents.json", function(data) {
			console.log(data);
		});
	}

	this.getMaps = function(map_id) {
		// Get map
		if (map_id) {
			$.get("https://api.guildwars2.com/v1/maps.json?map_id=" + map_id, function(data) {
				console.log(data);
			});
		// Get maps: Global
		} else {
			$.get("https://api.guildwars2.com/v1/maps.json", function(data) {
				console.log(data);
			});
		}
	}

	this.getMapFloor = function(continent_id, floor) {
		// Get map floor
		if (continent_id && floor) {
			$.get("https://api.guildwars2.com/v1/map_floor.json?continent_id=" + continent_id + "&floor=" + floor, function(data) {
				console.log(data);
			});
		// Error
		} else {
			console.log("Parameters required: continent_id, floor");
		}
	}

	this.getEvents = function(world_id, map_id, event_id) {
		// Get event
		if (world_id && map_id && event_id) {
			$.get("https://api.guildwars2.com/v1/events.json?world_id=" + world_id + "&map_id=" + map_id + "&event_id=" + event_id, function(data) {
				console.log(data);
			});
		// Get events: Map
		} else if (world_id && map_id && !event_id) {
			$.get("https://api.guildwars2.com/v1/events.json?world_id=" + world_id + "&map_id=" + map_id, function(data) {
				console.log(data);
			});
		// Get events: World
		} else if (world_id && !map_id && !event_id) {
			$.get("https://api.guildwars2.com/v1/events.json?world_id=" + world_id, function(data) {
				console.log(data);
			});
		// Get events: Global
		} else {
			$.get("https://api.guildwars2.com/v1/events.json", function(data) {
				console.log(data);
			});
		}
	}

	this.getEventNames = function() {
		// Get event names: Global
		$.get("https://api.guildwars2.com/v1/event_names.json", function(data) {
			console.log(data);
		});
	}

	this.getEventDetails = function(event_id) {
		// Get event details
		if (event_id) {
			$.get("https://api.guildwars2.com/v1/event_details.json?event_id=" + event_id, function(data) {
				console.log(data);
			});
		// Get event details: Global
		} else {
			$.get("https://api.guildwars2.com/v1/event_details.json", function(data) {
				console.log(data);
			});
		}
	}

	this.getGuild = function(guild) {
		// Get guild: ID
		if (guild && guild.indexOf('-') > 1) {
			$.get("https://api.guildwars2.com/v1/guild_details.json?guild_id=" + guild, function(data) {
				console.log(data);
			});
		// Get guild: Name
		} else if (guild) {
			$.get("https://api.guildwars2.com/v1/guild_details.json?guild_name=" + guild, function(data) {
				console.log(data);
			});
		// Error
		} else {
			console.log("Parameter required: guild_name or guild_id");
		}
	}

	this.getItems = function() {
		// Get items: Global
		$.get("https://api.guildwars2.com/v1/items.json", function(data) {
			console.log(data);
		});
	}

	this.getItemDetails = function(item_id) {
		// Get item details
		if (item_id) {
			$.get("https://api.guildwars2.com/v1/item_details.json?item_id=" + item_id, function(data) {
				console.log(data);
			});
		// Error
		} else {
			console.log("Parameter required: item_id");
		}
	}

	this.getRecipes = function() {
		// Get recipes: Global
		$.get("https://api.guildwars2.com/v1/recipes.json", function(data) {
			console.log(data);
		});
	}

	this.getRecipeDetails = function(recipe_id) {
		// Get recipe details
		if (recipe_id) {
			$.get("https://api.guildwars2.com/v1/recipe_details.json?recipe_id=" + recipe_id, function(data) {
			console.log(data);
		});
		// Error
		} else {
			console.log("Parameter required: recipe_id");
		}
	}

	this.getBuild = function() {
		// Get build
		$.get("https://api.guildwars2.com/v1/build.json", function(data) {
			console.log(data);
		});
	}
}