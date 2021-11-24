
const meta = {
  description: 'Exploring code in non fungible tokens.  Question 0 is whether HTML will display correctly and completely.',
  mimeType: 'text/html',
  name: 'cnft/q0',
  version: 'zora-20200101'
};


/*
const bids = constructBidShares(
  50,
  50,
  0
);
*/
const mintABI = {
  "abi": [{
    "inputs": [{
      "components": [{
        "internalType": "string",
        "name": "tokenURI",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "metadataURI",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "contentHash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "metadataHash",
        "type": "bytes32"
      }
      ],
      "internalType": "struct IMedia.MediaData",
      "name": "data",
      "type": "tuple"
    },
    {
      "components": [{
        "components": [{
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "internalType": "struct Decimal.D256",
        "name": "prevOwner",
        "type": "tuple"
      },
      {
        "components": [{
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "internalType": "struct Decimal.D256",
        "name": "creator",
        "type": "tuple"
      },
      {
        "components": [{
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }],
        "internalType": "struct Decimal.D256",
        "name": "owner",
        "type": "tuple"
      }
      ],
      "internalType": "struct IMarket.BidShares",
      "name": "bidShares",
      "type": "tuple"
    }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]
};

function test() {
  var call = new ethers.utils.Interface(mintABI.abi);
}