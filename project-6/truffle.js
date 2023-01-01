const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    goerli: {
      provider: () => new HDWalletProvider("carbon begin two panic heavy female reason mind arena royal strategy patrol", "https://goerli.infura.io/v3/43fd44b142c54ae19415901bd12e3439"),
      network_id: '5',
      gas: 4465030,        // goerli has a lower block limit than mainnet
      gasPrice: 10992342
    }
  },


compilers: {
  solc: {
    version: "^0.4.25",
  }
}
};