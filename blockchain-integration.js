const Web3 = require('web3');
const contractABI = [/* Smart Contract ABI */];
const contractAddress = '0xYourContractAddress';

const web3 = new Web3('https://your-blockchain-node');

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Record halal certification
const recordCertification = async (productId, certifierId) => {
    try {
        const receipt = await contract.methods.recordCertification(productId, certifierId).send({ from: '0xYourAddress' });
        console.log('Transaction successful:', receipt);
    } catch (error) {
        console.error('Blockchain error:', error);
    }
};
