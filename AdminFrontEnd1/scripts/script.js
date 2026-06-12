let sdk = new window.sfdc.BlockSDK({
tabs: [{
    key : "1",
    name : "Segment",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd2/"
},{
    key : "2",
    name : "Email Designer",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd3/"
},{
    key : "3",
    name : "Send Email",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd4/"
},{
    key : "4",
    name : "Report",
    url : "https://manh-hai-bui.github.io/ccbTest/AdminFrontEnd5/"
}]
,blockEditorWidth: 423
});

const input = document.querySelector('#contentIdInput');
const button = document.querySelector('#sendButton');
const resultArea = document.querySelector('.result');

// Settings Data that will be transfered to marketing cloud
let blockData = {
    marketingAction: '',
    segment: '',
    emailDesigner: '',
    sendEmail: '',
    report: ''
};

/* Marketing Cloud Communication  */

const displaySuperContent = () => {
    sdk.setSuperContent(`<b>Current data:</b> <br> 
        marketingAction: ${blockData.marketingAction}<br>
        segment: ${blockData.segment}<br>
        emailDesigner: ${blockData.emailDesigner}<br>
        sendEmail: ${blockData.sendEmail}<br>
        report: ${blockData.report}
    `);
}

const getData = () => {
    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            blockData = data;
            console.log('getdata() -> data', data);
            input.value = blockData.marketingAction;
            resultArea.value = JSON.stringify(blockData, null, 2); // Optional to displa current settings data 
            displaySuperContent();
        }
    })
}

const saveData = () => {
    blockData.marketingAction = document.getElementById('contentIdInput').value;
    sdk.setData(blockData, () => {
        displaySuperContent();
        resultArea.value = JSON.stringify(blockData, null, 2); // Optional to displa current settings data 
    })
}

/* UI Event listener */

input.addEventListener('input', () => {
    saveData();
})

button.addEventListener('click', () => {
    saveData();
})

/* Initialize */

getData();
