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
    Segment: '',
    EmailDesigner: '',
    SendEmail: '',
    Report: ''
};

/* Marketing Cloud Communication  */

const getData = () => {
    sdk.getData((data) => {
        if (Object.keys(data).length > 0) {
            blockData = data;
            console.log('getdata() -> data', data);
            input.value = blockData.marketingAction;
            resultArea.value = JSON.stringify(blockData, null, 2);
        }
    })
}

const saveData = () => {
    blockData.marketingAction = document.getElementById('contentIdInput').value;
    sdk.setData(blockData, () => {
        displaySuperContent();
    })
}

const displaySuperContent = () => {
    sdk.setSuperContent(`<b>Current data:</b> <br> 
        marketingAction: ${blockData.marketingAction}<br>
        Segment: ${blockData.Segment}<br>
        EmailDesigner: ${blockData.EmailDesigner}<br>
        SendEmail: ${blockData.SendEmail}<br>
        Report: ${blockData.Report}
    `);
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
displaySuperContent();