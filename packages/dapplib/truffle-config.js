require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift repeat saddle honey hover civil army gasp'; 
let testAccounts = [
"0xc2a897112509c9910b4eb929b09d013ffac1ca80c2748e15579f51e14994e87a",
"0x6aeb7532ff63543619617ca01e6f92e5e92fc7235fa68c5d913edc0b79a7d056",
"0xbbaa6fee0c96e42195d8a714221d8e9f2499ad67bab2eb6191b0bf077b3b73e1",
"0x746374a97e087368c0552ab172db45fcf88295423283376b300cf758788d885f",
"0x0d80e79ef32b8ae17ba81bdf8250201c7b04a90ece0871b9f1aa9fcea115a8cf",
"0xc57327369b8fb6c7f5e8fab2ad989e932d3e2892b1afe0bfdf5a29520519966d",
"0x712a951dd2bea480425a5a0a576f24587586b22046359fad4f5548c1cb28318a",
"0x4b9a113391932889181a4629a30dc41db55573b6b60bb3e5271c20743e4e1724",
"0x1b72ad052e37eb75b3a75a9ee6c49142a0df90db0825376c6beeb4388792e875",
"0x68649950f619b50f9493f8c457373ba0d000c9e0c6029fce7e22b2c441907918"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

