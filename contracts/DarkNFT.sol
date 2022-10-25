// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DarkNFT is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 private totalMinted;

    constructor() ERC721("DarkNFT", "DNT") {}

    function mintDarkNFT(address to, string memory uri) external {
        require(
            totalMinted < 1000,
            "Only 1000 token can be mninted"
        );
        require(balanceOf(to) < 1, "Only one NFT per person is allowed");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        totalMinted = _tokenIdCounter.current();
    }

    function getTotalNumber() public view returns (uint256) {
        return totalMinted;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
