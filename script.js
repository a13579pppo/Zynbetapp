function navigate(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Tonkeeper connection
const connectButton = document.getElementById('connect-button');
const walletAddress = document.getElementById('wallet-address');
connectButton?.addEventListener('click', async () => {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: window.location.origin + '/tonconnect-manifest.json',
    });

    await tonConnectUI.connectWallet();
    const connectedWallet = await tonConnectUI.wallet;
    if (connectedWallet?.account?.address) {
        walletAddress.innerText = 'Connected: ' + connectedWallet.account.address;
    } else {
        walletAddress.innerText = 'Failed to connect.';
    }
});