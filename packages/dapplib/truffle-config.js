require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot chef repeat pizza erosion coral light army genuine'; 
let testAccounts = [
"0x97acac78fabac02ca140d87eb5450e740ac473acb2d522989a923180e0b81254",
"0x01e1730db8738ebefc6ea18d1538b82a70de2842861c1963fd74a74474b9e19a",
"0xc86a14c075d12132c42f056f1c953bedd4ca2a6c8abc175b13e6d2830d438beb",
"0xde222a928faa8801788cec16936a6b48c38ec16031de0af362a79329d9524753",
"0xff45507e12269045c0d6ab895acabd056b99db4a651b3b666e390167bdaeaa26",
"0x667b6b0ed2aabddd6ac7cf460c61c43cd4c7564a01f31cf76f05d726ce1f74c2",
"0x0c79fe18a269953d743b15684cc72b0357274ef2efb462601d65fcf09e7b147a",
"0x46358c5ba9ced43e26ed69b146384930f33bd5b523d8c688cb9f62ee56b458d9",
"0x0df1b6876ce84a4d532ca8d48b27d274db3064f54a16f3e9dd9bc624dfea6e3d",
"0x3c7617c327c7a12e865c74501f629206a08265b8799cf68f6e77c7118ae169ad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


