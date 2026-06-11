let sdk = new window.sfdc.BlockSDK({
tabs: [{
    key : "key",
    name : "General",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd1/"
},{
    key : "key",
    name : "Email Designer",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd3/"
},{
    key : "key",
    name : "Send Email",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd4/"
},{
    key : "key",
    name : "Report",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd5/"
}]
,blockEditorWidth: 423
});

// Settings Data that will be transfered to marketing cloud
let blockData = {
    marketingAction: ''
};

/* Marketing Cloud Communication  */

const saveData = () => {
    blockData.marketingAction = document.getElementById('contentIdInput').value;
}

const displaySuperContent = () => {
    sdk.setSuperContent(`Current MA: ${blockData.marketingAction}`);
}

/* UI Event listener */

const input = document.querySelector('#contentIdInput');
input.addEventListener('change', () => {
    saveData();
})

const button = document.querySelector('#sendButton');
input.addEventListener('click', () => {
    saveData();
})

/* Initialize */

saveData();
displaySuperContent();