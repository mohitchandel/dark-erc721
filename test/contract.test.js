const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Dark NFT", function () {
  let admin;
  let contract;

  /* This is a function that runs before each test case. */
  beforeEach(async function () {
    // getting admin address
    [admin, donator] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("DarkNFT");
    contract = await NFTContract.deploy();
    await contract.deployed();
  });

  describe("Buy NFT", function () {
    /* This is a test case to check for donating funds. */
    it("User Should able to mint NFT", async function () {
      await contract.mintDarkNFT(admin.address, "some value");
      const owned = await contract.balanceOf(admin.address);
      expect(owned).to.equal(1);
    });

    it("User Should not own more then one NFT", async function () {
      await contract.mintDarkNFT(admin.address, "some value");
      await expect(
        contract.mintDarkNFT(admin.address, "some value")
      ).to.be.revertedWith("Only one NFT per person is allowed");
    });
  });
});
