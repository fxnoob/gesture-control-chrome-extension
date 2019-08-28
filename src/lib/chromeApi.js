class ChromeApi {

    constructor() {}

    traverseTabs = (callback) => {
        chrome.tabs.query({}, (tabs) => {
            callback(tabs)
        });
    }

    shiftToLeftTab = () => {
        this.traverseTabs(tabs => {
            let data = []
            let activeTabIndex = -1;
            for (let i = 0; i < tabs.length; i++) {
                if(tabs[i].active) {
                    activeTabIndex = i
                    break;
                }
            }
            if(activeTabIndex === 0) {
                chrome.tabs.update(tabs[tabs.length-2].id, {highlighted: true});
            } else {
                chrome.tabs.update(tabs[activeTabIndex-1].id, {highlighted: true});
            }
        })
    }

    shiftToRightTab = () => {
        console.log("In right")
        this.traverseTabs(tabs => {
            let activeTabIndex = -1;
            for (let i = 0; i < tabs.length; i++) {
                if(tabs[i].active) {
                    activeTabIndex = i
                    break;
                }
            }
            if(activeTabIndex === tabs.length-1) {
                chrome.tabs.update(tabs[0].id, {highlighted: true});
            } else {
                chrome.tabs.update(tabs[activeTabIndex+1].id, {highlighted: true});
            }
        })
    }
}

export default ChromeApi;
