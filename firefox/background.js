var spotifyUrl = "open.spotify.com";
//var addTitleText = "Advertisement";
var addTitleText = "Camouflage";

function checkTabs(tabId, changeInfo, tab) {
	console.log("Wat?");
	if(tab.url.includes(spotifyUrl)){
		console.log("Inspect Spotify tab change.", tab.title);
		if(tab.title.includes(addTitleText)){
			if(!tab.mutedInfo.muted){
				browser.tabs.update(tab.id, {muted: true});
				console.log("SOUND OFF");
			}
		}
		else{
		    if(tab.mutedInfo.muted){
    			browser.tabs.update(tab.id, {muted: false});
    			console.log("SOUND ON");
		    }
		}
	}
};

async function start() {
	browser.tabs.onUpdated.addListener(checkTabs);		
}
start();