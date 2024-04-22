function browserHistory(browserObj, actions) {
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const splitAction = action.split(' ');
        const actionType = splitAction[0];
        const params = splitAction.slice(1);

        if (actionType === 'Clear') {
            // If action is to clear history and cache, empty the browser object
            browserObj['Open Tabs'] = [];
            browserObj['Recently Closed'] = [];
            browserObj['Browser Logs'] = [];
        } else if
            (actionType === 'Close') {
            // If action is to close a tab, remove it from open tabs and move to recently closed
            const site = params.join(' ');
            const openIndex = browserObj['Open Tabs'].indexOf(site);
            if (openIndex !== -1) {
                browserObj['Open Tabs'].splice(openIndex, 1);
                browserObj['Recently Closed'].push(site);
                browserObj['Browser Logs'].push(action);
            }
        } else if (actionType === 'Open') {
            // If action is to open a tab, add it to the open tabs
            const site = params.join(' ');
            if (browserObj['Open Tabs'].indexOf(site) === -1) {
                browserObj['Open Tabs'].push(site);
                browserObj['Browser Logs'].push(action);
            }
        }
    }
    console.log(`${browserObj['Browser Name']}`);
    console.log(`Open Tabs: ${browserObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserObj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserObj['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

)
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)


// As input, you will receive two parameters: an object and a string array.
// The object will be in format: {Browser Name}:{Name of the browser},
// Open tabs:[…], Recently Closed: […], Browser Logs: […]. Your task is to
//  fill in the object based on the actions we will get in the array of strings.
// You can open any site in the world as many times as you like; if you do that
// add it to the open tabs.
// You can close only these tabs you have opened already! If the current action
// contains a valid opened site, you should remove it from "Open Tabs" and put
//  it into "Recently closed", otherwise don't do anything!
// Browser Logs will hold every single Valid action, which you did (Open and Close).
// There is a special case in which you can get an
//  action that says: "Clear History and Cache". That means you should empty the whole object.
// In the end, print the object in the format:
// {Browser name}
// Open Tabs: {[…]} // Joined by comma and space
// Recently Closed: {[…]} // Joined by comma and space
// Browser Logs: {[…]} // Joined by comma and space
