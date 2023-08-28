

// require('@nomiclabs/hardhat-waffle')

// module.exports={
//   solidity: '0.8.0',
//   network:{
//     goerli:{
//       url:'https://eth-goerli.g.alchemy.com/v2/_g8drdpCvlaS4jBJCcthlLd8Dzi8wIlK',
//       accounts:['8e2c368f69099488f21f10bc68a48f93b648502c4b33efab071041312b315dd6']
//     }
//   }
// }
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/r_Bl8P01b-sfe33LylTcxL2bBU_HJkow',
      accounts: ['8e2c368f69099488f21f10bc68a48f93b648502c4b33efab071041312b315dd6']
    }
  }
};
