

# Dark NFT

This app is made on top of Next.Js with following functonility. 
    
- SignIn with metamask.
- session storage within the app.
- Alert before one minute of session end.


## Smart contract functionalities
- ERC-721 solidity smart contract to mint nft .
- One NFT mint per wallet address.
- Total supply of 1000.

## How to run the App
 clone the App first

 ```
 $ git clone https://github.com/mohitchandel/dark-erc721.git
 ```

 Now enter to the app directory

 ```
 $ cd darl-erc721
 ```

 Install the dependencies
 ```
 $ yarn
 ```

 And run the app
 ```
 $ yarn run dev
 ```

 Hardhat Commands
 ```
$ npx hardhat help //get the help

$ npx hardhat test // run the tests

$ npx hardhat run scripts/deploy.js //deploy smart contract
 ```

 ### Additional Info

Contract Deploed on Polygon mumbai testnet
Contract address - [0xEfE24B1A8F1AC83a2a98E5C283153c05124623e3](https://polygonscan.com/address/0xEfE24B1A8F1AC83a2a98E5C283153c05124623e3)

Technologies Used :
- Rainbowkit
- React.Js
- solidity
- Hardhat
- siwe
- wagmi
- next-auth