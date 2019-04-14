pragma solidity 0.5.1;

contract Badge {
    event LogCreation(string, address, string, uint);
    event LogVerification(address, string, uint);
    event LogInvalidation(address, uint);

    address creator;
    string public hash;
    uint public creationTime;
    bool public valid;

    constructor(string memory _hash) public {
        creator = msg.sender;
        hash = _hash;
        creationTime = now;
        valid = true;

        emit LogCreation("Badge created by issuer: ", msg.sender, hash, creationTime);
    }

    function verify(string memory _hash) public returns (bool, string memory) {
        emit LogVerification(msg.sender, _hash, now);

        if(keccak256(abi.encodePacked(hash)) == keccak256(abi.encodePacked(_hash))) {
            if(valid) {
                return (true, "The specified hash is equal to the stored hash.");
            } else {
                return (false, "The hashes match, but the badge has been invalidated by its creator.");
            }
        }
        return (false, "The specified hash is not equal to the stored hash.");
    }

    function invalidate() public returns (bool, string memory) {
        emit LogInvalidation(msg.sender, now);

        if(msg.sender == creator) {
            valid = false;
            return (true, "The badge has been invalidated by its creator.");
        }
        return (false, "Invalidate can only be invoked by the creator of the badge.");
    }
}
