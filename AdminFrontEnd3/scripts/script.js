let sdk = new window.sfdc.BlockSDK({
tabs: []
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
            input.value = blockData.EmailDesigner
            resultArea.value = JSON.stringify(blockData, null, 2);
        }
    })
}

const saveData = () => {
    blockData.EmailDesigner = document.getElementById('contentIdInput').value;
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