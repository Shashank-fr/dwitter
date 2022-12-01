// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";


contract Dwitter{
    struct User {
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;
    }

    struct Dweet {
        address author;
        string content;
        uint timeStamp;
        uint likes;
    }

    Dweet[] public dweets;

    mapping(address => string) public usernames; //Mapping ethereum address to username.
    mapping(string => User) public users; //Reverse mapping to map username to user to make sure usernames don't repeat.

    function signup(string memory _username, string memory _name, string memory _bio, string memory _avatar) public{
        require(bytes(usernames[msg.sender]).length == 0, "User already exists");
        require(users[_username].wallet == address(0), "Username is taken, Please try another one"); //address(0) is the null address and also the default address.

        users[_username] = User({
            wallet: msg.sender,
            name: _name,
            username: _username,
            bio: _bio,
            avatar: _avatar
        });
        usernames[msg.sender] = _username;
        
    }

    function getUser(address _wallet) public view returns (User memory){
        return users[usernames[_wallet]];
    }

    function postDweet(string memory _content) public {
        require(bytes(usernames[msg.sender]).length > 0, "You must sign up to post a dweet.");
        require(bytes(_content).length >0, "You must write something to dweet.");
        require(bytes(_content).length <= 140, "Your dweet is too long.");

        Dweet memory dweet = Dweet({
            author: msg.sender, content: _content, timeStamp: block.timestamp, likes:0
        });
        dweets.push(dweet);
    
    }

    function getDweets() public view returns (Dweet[] memory) {
        return dweets;
    }

}