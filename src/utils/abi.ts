export const contractAbi =[
  {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "BackendAddressUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
          }
      ],
      "name": "Initialized",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "oldOwner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          },
          {
              "components": [
                  {
                      "internalType": "string[]",
                      "name": "shareIds",
                      "type": "string[]"
                  }
              ],
              "indexed": false,
              "internalType": "struct Records.Shares",
              "name": "shareIds",
              "type": "tuple"
          }
      ],
      "name": "ShareIdsUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          },
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "amount",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "assetId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "createdAt",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerAgreementId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "agentId",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "shareCount",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerIds",
                      "type": "string[]"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerAgreementIds",
                      "type": "string[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string",
                              "name": "hashPin",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "collectionName",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "id",
                              "type": "string"
                          }
                      ],
                      "internalType": "struct Records.Hash[]",
                      "name": "hashPins",
                      "type": "tuple[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string[]",
                              "name": "shareIds",
                              "type": "string[]"
                          }
                      ],
                      "internalType": "struct Records.Shares[]",
                      "name": "shareIds",
                      "type": "tuple[]"
                  }
              ],
              "indexed": false,
              "internalType": "struct Records.Transaction",
              "name": "transactionData",
              "type": "tuple"
          }
      ],
      "name": "TransactionUpdated",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "backend",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          }
      ],
      "name": "getShareIds",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string[]",
                      "name": "shareIds",
                      "type": "string[]"
                  }
              ],
              "internalType": "struct Records.Shares[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          }
      ],
      "name": "getTransactionData",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "amount",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "assetId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "createdAt",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerAgreementId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "agentId",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "shareCount",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerIds",
                      "type": "string[]"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerAgreementIds",
                      "type": "string[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string",
                              "name": "hashPin",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "collectionName",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "id",
                              "type": "string"
                          }
                      ],
                      "internalType": "struct Records.Hash[]",
                      "name": "hashPins",
                      "type": "tuple[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string[]",
                              "name": "shareIds",
                              "type": "string[]"
                          }
                      ],
                      "internalType": "struct Records.Shares[]",
                      "name": "shareIds",
                      "type": "tuple[]"
                  }
              ],
              "internalType": "struct Records.Transaction",
              "name": "_transactionData",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "string[]",
                      "name": "shareIds",
                      "type": "string[]"
                  }
              ],
              "internalType": "struct Records.Shares[]",
              "name": "_shareIds",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_backend",
              "type": "address"
          }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "name": "transactionData",
      "outputs": [
          {
              "internalType": "string",
              "name": "amount",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "assetId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "buyerId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "createdAt",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "buyerAgreementId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "agentId",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "shareCount",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newAddress",
              "type": "address"
          }
      ],
      "name": "updateBackendAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          },
          {
              "components": [
                  {
                      "internalType": "string[]",
                      "name": "shareIds",
                      "type": "string[]"
                  }
              ],
              "internalType": "struct Records.Shares",
              "name": "shares",
              "type": "tuple"
          }
      ],
      "name": "updateShareIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
          },
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "amount",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "assetId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "createdAt",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "buyerAgreementId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "agentId",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "shareCount",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerIds",
                      "type": "string[]"
                  },
                  {
                      "internalType": "string[]",
                      "name": "sellerAgreementIds",
                      "type": "string[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string",
                              "name": "hashPin",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "collectionName",
                              "type": "string"
                          },
                          {
                              "internalType": "string",
                              "name": "id",
                              "type": "string"
                          }
                      ],
                      "internalType": "struct Records.Hash[]",
                      "name": "hashPins",
                      "type": "tuple[]"
                  },
                  {
                      "components": [
                          {
                              "internalType": "string[]",
                              "name": "shareIds",
                              "type": "string[]"
                          }
                      ],
                      "internalType": "struct Records.Shares[]",
                      "name": "shareIds",
                      "type": "tuple[]"
                  }
              ],
              "internalType": "struct Records.Transaction",
              "name": "transaction",
              "type": "tuple"
          }
      ],
      "name": "updateTransactionData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
]

export const oldContractAbi = [
    {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "BackendAddressUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "version",
          "type": "uint64"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string[]",
              "name": "shareIds",
              "type": "string[]"
            }
          ],
          "indexed": false,
          "internalType": "struct RecordsV3.Shares",
          "name": "shareIds",
          "type": "tuple"
        }
      ],
      "name": "ShareIdsUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "amount",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "assetId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "createdAt",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerAgreementId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "shareCount",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "sellerIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "sellerAgreementIds",
              "type": "string[]"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hashPin",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "collectionName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                }
              ],
              "internalType": "struct RecordsV3.Hash[]",
              "name": "hashPins",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "string[]",
                  "name": "shareIds",
                  "type": "string[]"
                }
              ],
              "internalType": "struct RecordsV3.Shares[]",
              "name": "shareIds",
              "type": "tuple[]"
            }
          ],
          "indexed": false,
          "internalType": "struct RecordsV3.Transaction",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "TransactionUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "backend",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        }
      ],
      "name": "getShareIds",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string[]",
              "name": "shareIds",
              "type": "string[]"
            }
          ],
          "internalType": "struct RecordsV3.Shares[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        }
      ],
      "name": "getTransactionData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "amount",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "assetId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "createdAt",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerAgreementId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "shareCount",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "sellerIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "sellerAgreementIds",
              "type": "string[]"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hashPin",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "collectionName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                }
              ],
              "internalType": "struct RecordsV3.Hash[]",
              "name": "hashPins",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "string[]",
                  "name": "shareIds",
                  "type": "string[]"
                }
              ],
              "internalType": "struct RecordsV3.Shares[]",
              "name": "shareIds",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct RecordsV3.Transaction",
          "name": "_transactionData",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string[]",
              "name": "shareIds",
              "type": "string[]"
            }
          ],
          "internalType": "struct RecordsV3.Shares[]",
          "name": "_shareIds",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_backend",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "transactionData",
      "outputs": [
        {
          "internalType": "string",
          "name": "amount",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "assetId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "buyerId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "createdAt",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "buyerAgreementId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "agentId",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "shareCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "updateBackendAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string[]",
              "name": "shareIds",
              "type": "string[]"
            }
          ],
          "internalType": "struct RecordsV3.Shares",
          "name": "shares",
          "type": "tuple"
        }
      ],
      "name": "updateShareIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "amount",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "assetId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "createdAt",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "buyerAgreementId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "agentId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "shareCount",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "sellerIds",
              "type": "string[]"
            },
            {
              "internalType": "string[]",
              "name": "sellerAgreementIds",
              "type": "string[]"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "hashPin",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "collectionName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "id",
                  "type": "string"
                }
              ],
              "internalType": "struct RecordsV3.Hash[]",
              "name": "hashPins",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "string[]",
                  "name": "shareIds",
                  "type": "string[]"
                }
              ],
              "internalType": "struct RecordsV3.Shares[]",
              "name": "shareIds",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct RecordsV3.Transaction",
          "name": "transaction",
          "type": "tuple"
        }
      ],
      "name": "updateTransactionData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]