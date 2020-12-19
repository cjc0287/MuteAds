var spotifyUrl = "open.spotify.com";
var addTitleText = "Advertisement";

function checkTabs(tabId, changeInfo, tab) {
	if(tab.url.includes(spotifyUrl) && tab.audible){
		console.log("Inspect Spotify tab change.", tab.title);
		if(tab.title.includes(addTitleText)){
			if(!tab.mutedInfo.muted){
				chrome.tabs.update(tab.id, {muted: true});
				console.log("SOUND OFF");
			}
		}
		else{
		    if(tab.mutedInfo.muted){
    			chrome.tabs.update(tab.id, {muted: false});
    			console.log("SOUND ON");
		    }
		}
	}
};

async function start() {
	chrome.tabs.onUpdated.addListener(checkTabs);		
}
start();