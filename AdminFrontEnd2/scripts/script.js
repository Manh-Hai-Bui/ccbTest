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
            let blockData = data;
            input.value = blockData.Segment
            resultArea = JSON.stringify(blockData, null, 2);
        }
    })
}

const saveData = () => {
    blockData.Segment = document.getElementById('contentIdInput').value;
    sdk.setData(blockData, () => {
        displaySuperContent();
    })
}

const displaySuperContent = () => {
    sdk.setSuperContent(`Current data: <br> 
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