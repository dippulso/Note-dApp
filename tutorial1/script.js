const contractAddress = "0xFdc9283C1Bd6Ec0FeE299cE2fC9176Fb8Fe1B3E6"; //Сюда адрес контракта
const contractABI = [{"inputs":[{"internalType":"string","name":"_note","type":"string"}],"name":"writeNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNote","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
let contract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, 80001); //MATIC chain_id

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    console.log(signer);
    contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    );
    });
});

async function getNote() {
    console.log(await contract.getNote());
}

async function setNote() {
    const note = document.getElementById("inputNote").value;
    await  contract.writeNote(note);
}
