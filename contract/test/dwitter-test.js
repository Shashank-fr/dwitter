const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
    it("Test dwitter signup flow", async function () {
        const Dwitter = await ethers.getContractFactory("Dwitter");
        const [user1, user2] = await ethers.getSigners(); //getSigners method returns an array of all user accounts, which are the dummy accounts we get while running local host
        const dwitter = await Dwitter.deploy();
        await dwitter.deployed();

        await dwitter.signup("Shashank", "Shashank Vaidya", "Some bio", "Some URL");
        console.log("Signingup user for Shashank... ");

        const user = await dwitter.users("Shashank");
        expect(user.name).to.equal("Shashank Vaidya");
        expect(user.bio).to.equal("Some bio");
        expect(user.avatar).to.equal("Some URL");
        console.log("Test signup successful");

        const userFromAddress = await dwitter.getUser(user1.address);
        expect(userFromAddress.username).to.equal("Shashank");
        expect(userFromAddress.name).to.equal("Shashank Vaidya");
        expect(userFromAddress.bio).to.equal("Some bio");
        expect(userFromAddress.avatar).to.equal("Some URL");
        console.log("Test signup successful");

        expect(await dwitter.usernames(user1.address)).to.equal("Shashank");

        await expect(dwitter.signup("","","","")).to.be.revertedWith(
            "User already exists"
        );
        console.log("Test user already exists error...");

        await expect(
            dwitter
            .connect(user2)
            .signup("Shashank","aayush","some bio","xyz avatar")
        ).to.be.revertedWith("Username is taken, Please try another one");
        console.log("Username is taken error...");

        await dwitter.postDweet("Hello world");
        expect( (await dwitter.dweets(0)). content).to.equal("Hello world");
        console.log("test post dweet is successful");

        const dweets =await dwitter.getDweets();
        expect( (await dweets[0]). content).to.equal("Hello world");
        console.log("test get dweets is successful");

    });
});