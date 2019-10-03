// Simple WebExtension (Chrome & Firefox Tested) to make it easier to Save Page, Image or Link Urls or to Check if they have been saved previously
// uses Archive.org's Wayback Machine, Archive.is and Webcite
// Cathal McNally
// February 2017
// ver 1.2.2

// changelog
// ver 1.0    Initial version
// ver 1.1    Fixed a url error for settings page
// ver 1.2    Right clicking on an image or a Link will now also send the url for backup.
// ver 1.2.1  Fixed a silly file Casing bug for Firefox.
// ver 1.2.2  [Oct 2019] This update removes the archival service webCite as it no longer accepts public url's

(function(){
	// Get settings saved in local storage
	var archive_org = localStorage["thearchiver_archiveorg"];
	var archive_is = localStorage["thearchiver_archiveis"];
	var firstRun = localStorage["thearchiver_firstRun"];
	
	// Dirty but it works
	// Check if firstRun doesnt exist, If so populate variables
	if(firstRun == undefined){
		// No need to check each, archive.org will do
		if (archive_org == undefined){
			archive_org = "true";
			archive_is = "true";
			
			// turn firstRun off
			firstRun = 0;
			
			// lets set the local Storage so the options Dialog is setup correctly on first run
			localStorage["thearchiver_archiveorg"] = archive_org;
			localStorage["thearchiver_archiveis"] = archive_is;
		}
	}
	
	// Depending on the options you have set send the currently opened page to an Archival Service
	function saveIt(info){
		var linkClicked = "";
		if (info.linkUrl){
			linkClicked = info.linkUrl;
		} else if (info.mediaType === "image"){
			linkClicked = info.srcUrl;
		} else{
			linkClicked = info.pageUrl;
		} 
		// Save with the Wayback Machine
		if(archive_org == "true"){
			chrome.tabs.create({ 
				url: "http://web.archive.org/save/" + linkClicked,
				active: false,
			});
		}
		
		// Save with Archive.is
		if(archive_is == "true"){
			chrome.tabs.create({ 
				url: "https://archive.is/?run=1&url=" + linkClicked,
				active: false,
			});
		}
	}

	// Check if any of the Archival services have saved the page already
	function checkIt(info){
		var linkClicked = "";
		if (info.linkUrl){
			linkClicked = info.linkUrl;
		} else if (info.mediaType === "image"){
			linkClicked = info.srcUrl;
		}else{
			linkClicked = info.pageUrl;
		}
		// Check the Wayback Machine
		if(archive_org == "true"){
			chrome.tabs.create({
				url: "http://web.archive.org/web/" + linkClicked,
				active: false,
			});
		}
		
		// Check Archive.is
		if(archive_is == "true"){
			chrome.tabs.create({
				url: "http://archive.is/" + linkClicked,
				active: false,
			});
		}
	}

	// Open settings
	function goToSettings(){
		chrome.tabs.create({ 
		url: "/options/options.html",
	  });
	}
	
	// Create context menus
	chrome.contextMenus.create({
	  "title": "Save It",
	  "contexts": ["page", "link", "image"],
	  "onclick": saveIt}
	);

	chrome.contextMenus.create({
	  "title": "Check It",
	  "contexts": ["page", "link", "image"],
	  "onclick": checkIt}
	);

	chrome.contextMenus.create({
	  "title": "Settings",
	  "contexts": ["page", "link", "image"],
	  "onclick": goToSettings}
	);
}());