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
            input.value = blockData.emailDesigner
            resultArea.value = JSON.stringify(blockData, null, 2);
            displaySuperContent();
        }
    })
}

const saveData = () => {
    blockData.emailDesigner = document.getElementById('contentIdInput').value;
    sdk.setData(blockData, () => {
        displaySuperContent();
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
