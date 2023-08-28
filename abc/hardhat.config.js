// https://eth-mainnet.g.alchemy.com/v2/OtGwWKl7QCh-Ylm1jKoF4jeGEYKLyeYF

require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity: '0.8.0',
  network:{
    goerli:{
      url:'https://eth-mainnet.g.alchemy.com/v2/OtGwWKl7QCh-Ylm1jKoF4jeGEYKLyeYF',
      accounts:['8e2c368f69099488f21f10bc68a48f93b648502c4b33efab071041312b315dd6']
    }
  }
}
