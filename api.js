$(document).ready(function() {
	var GW = new API();

	GW.getGuild();
});

function API() {
	this.HomeWorld = { id: "1008", name: "Jade Quarry" };

	// API template
	// $.get("", function(data) {
	// 	console.log(data);
	// });

	this.getWorlds = function() {
		// Get worlds: Global
		$.get("https://api.guildwars2.com/v1/world_names.json", function(data) {
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
			console.log("Parameter required.");
		}
	}
}