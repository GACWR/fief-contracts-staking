/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Mock, ERC20MockInterface } from "../ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimalsValue",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002435380380620024358339810160408190526200003491620005cc565b8282818181600590805190602001906200005092919062000473565b5080516200006690600690602084019062000473565b50506007805460ff19169055506200008060003362000134565b6200009b600080516020620024158339815191523362000134565b620000b6600080516020620023f58339815191523362000134565b50506007805461ff00191661010060ff841602179055620000e860008051602062002415833981519152600062000144565b62000104600080516020620023f5833981519152600062000144565b6200012b336200011683600a620006b1565b62000125906298968062000770565b6200018f565b505050620007fb565b62000140828262000286565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6001600160a01b038216620001eb5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b620001f960008383620002c9565b80600460008282546200020d91906200064d565b90915550506001600160a01b038216600090815260026020526040812080548392906200023c9084906200064d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6200029d8282620002e160201b62000ade1760201c565b6000828152600160209081526040909120620002c491839062000b7c62000381821b17901c565b505050565b620002c4838383620003a160201b62000b911760201c565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000140576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200033d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000398836001600160a01b03841662000421565b90505b92915050565b620003b9838383620002c460201b620006511760201c565b60075460ff1615620002c45760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608401620001e2565b60008181526001830160205260408120546200046a575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200039b565b5060006200039b565b828054620004819062000792565b90600052602060002090601f016020900481019282620004a55760008555620004f0565b82601f10620004c057805160ff1916838001178555620004f0565b82800160010185558215620004f0579182015b82811115620004f0578251825591602001919060010190620004d3565b50620004fe92915062000502565b5090565b5b80821115620004fe576000815560010162000503565b600082601f8301126200052a578081fd5b81516001600160401b0380821115620005475762000547620007e5565b604051601f8301601f19908116603f01168101908282118183101715620005725762000572620007e5565b816040528381526020925086838588010111156200058e578485fd5b8491505b83821015620005b1578582018301518183018401529082019062000592565b83821115620005c257848385830101525b9695505050505050565b600080600060608486031215620005e1578283fd5b83516001600160401b0380821115620005f8578485fd5b620006068783880162000519565b945060208601519150808211156200061c578384fd5b506200062b8682870162000519565b925050604084015160ff8116811462000642578182fd5b809150509250925092565b60008219821115620006635762000663620007cf565b500190565b600181815b80851115620006a95781600019048211156200068d576200068d620007cf565b808516156200069b57918102915b93841c93908002906200066d565b509250929050565b60006200039860ff841683600082620006cd575060016200039b565b81620006dc575060006200039b565b8160018114620006f55760028114620007005762000720565b60019150506200039b565b60ff841115620007145762000714620007cf565b50506001821b6200039b565b5060208310610133831016604e8410600b841016171562000745575081810a6200039b565b62000751838362000668565b8060001904821115620007685762000768620007cf565b029392505050565b60008160001904831182151516156200078d576200078d620007cf565b500290565b600181811c90821680620007a757607f821691505b60208210811415620007c957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b611bea806200080b6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103e1578063d547741f14610408578063dd62ed3e1461041b578063e63ab1e91461045457600080fd5b8063a457c2d7146103a8578063a9059cbb146103bb578063ca15c873146103ce57600080fd5b80639010d07c116100d35780639010d07c1461033657806391d148541461036157806395d89b4114610398578063a217fddf146103a057600080fd5b806370a08231146102f257806379cc67901461031b5780638456cb591461032e57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102b957806340c10f19146102c157806342966c68146102d45780635c975abb146102e757600080fd5b8063313ce5671461027657806336568abe1461029357806339509351146102a657600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d73660046119f6565b61047b565b60405190151581526020015b60405180910390f35b6101f96104bf565b6040516101e89190611a9f565b6101dc610214366004611972565b610551565b6004545b6040519081526020016101e8565b6101dc610239366004611937565b610567565b61021d61024c36600461199b565b60009081526020819052604090206001015490565b61027461026f3660046119b3565b61062b565b005b600754610100900460ff1660405160ff90911681526020016101e8565b6102746102a13660046119b3565b610656565b6101dc6102b4366004611972565b6106e2565b61027461071e565b6102746102cf366004611972565b6107c4565b6102746102e236600461199b565b61086a565b60075460ff166101dc565b61021d6103003660046118eb565b6001600160a01b031660009081526002602052604090205490565b610274610329366004611972565b610877565b610274610911565b6103496103443660046119d5565b6109b5565b6040516001600160a01b0390911681526020016101e8565b6101dc61036f3660046119b3565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101f96109d4565b61021d600081565b6101dc6103b6366004611972565b6109e3565b6101dc6103c9366004611972565b610a94565b61021d6103dc36600461199b565b610aa1565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102746104163660046119b3565b610ab8565b61021d610429366004611905565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b031982167f5a05180f0000000000000000000000000000000000000000000000000000000014806104b957506104b982610c0a565b92915050565b6060600580546104ce90611b63565b80601f01602080910402602001604051908101604052809291908181526020018280546104fa90611b63565b80156105475780601f1061051c57610100808354040283529160200191610547565b820191906000526020600020905b81548152906001019060200180831161052a57829003601f168201915b5050505050905090565b600061055e338484610c71565b50600192915050565b6000610574848484610dc9565b6001600160a01b0384166000908152600360209081526040808320338452909152902054828110156106135760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106208533858403610c71565b506001949350505050565b6000828152602081905260409020600101546106478133610fed565b610651838361106b565b505050565b6001600160a01b03811633146106d45760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c660000000000000000000000000000000000606482015260840161060a565b6106de828261108d565b5050565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909161055e918590610719908690611ad2565b610c71565b6107487f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361036f565b6107ba5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e706175736500000000000000606482015260840161060a565b6107c26110af565b565b6107ee7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361036f565b6108605760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e7400000000000000000000606482015260840161060a565b6106de828261114b565b6108743382611236565b50565b60006108838333610429565b9050818110156108fa5760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161060a565b6109078333848403610c71565b6106518383611236565b61093b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361036f565b6109ad5760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f207061757365000000000000000000606482015260840161060a565b6107c26113c7565b60008281526001602052604081206109cd908361144f565b9392505050565b6060600680546104ce90611b63565b3360009081526003602090815260408083206001600160a01b038616845290915281205482811015610a7d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161060a565b610a8a3385858403610c71565b5060019392505050565b600061055e338484610dc9565b60008181526001602052604081206104b99061145b565b600082815260208190526040902060010154610ad48133610fed565b610651838361108d565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166106de576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610b383390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109cd836001600160a01b038416611465565b60075460ff16156106515760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c652070617573656400000000000000000000000000000000000000000000606482015260840161060a565b60006001600160e01b031982167f7965db0b0000000000000000000000000000000000000000000000000000000014806104b957507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146104b9565b6001600160a01b038316610cec5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b038216610d685760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610e455760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b038216610ec15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161060a565b610ecc8383836114b4565b6001600160a01b03831660009081526002602052604090205481811015610f5b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610f92908490611ad2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610fde91815260200190565b60405180910390a35b50505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166106de57611029816001600160a01b031660146114bf565b6110348360206114bf565b604051602001611045929190611a1e565b60408051601f198184030181529082905262461bcd60e51b825261060a91600401611a9f565b6110758282610ade565b60008281526001602052604090206106519082610b7c565b61109782826116e6565b60008281526001602052604090206106519082611765565b60075460ff166111015760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161060a565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166111a15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161060a565b6111ad600083836114b4565b80600460008282546111bf9190611ad2565b90915550506001600160a01b038216600090815260026020526040812080548392906111ec908490611ad2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166112b25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161060a565b6112be826000836114b4565b6001600160a01b0382166000908152600260205260409020548181101561134d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161060a565b6001600160a01b038316600090815260026020526040812083830390556004805484929061137c908490611b09565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561141a5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161060a565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861112e3390565b60006109cd838361177a565b60006104b9825490565b60008181526001830160205260408120546114ac575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104b9565b5060006104b9565b610651838383610b91565b606060006114ce836002611aea565b6114d9906002611ad2565b67ffffffffffffffff8111156114ff57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611529576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061156e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115c757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006115eb846002611aea565b6115f6906001611ad2565b90505b6001811115611697577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061164557634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061166957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361169081611b4c565b90506115f9565b5083156109cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161060a565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156106de576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109cd836001600160a01b0384166117b2565b600082600001828154811061179f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b600081815260018301602052604081205480156118c55760006117d6600183611b09565b85549091506000906117ea90600190611b09565b905081811461186b57600086600001828154811061181857634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061184957634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061188a57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104b9565b60009150506104b9565b80356001600160a01b03811681146118e657600080fd5b919050565b6000602082840312156118fc578081fd5b6109cd826118cf565b60008060408385031215611917578081fd5b611920836118cf565b915061192e602084016118cf565b90509250929050565b60008060006060848603121561194b578081fd5b611954846118cf565b9250611962602085016118cf565b9150604084013590509250925092565b60008060408385031215611984578182fd5b61198d836118cf565b946020939093013593505050565b6000602082840312156119ac578081fd5b5035919050565b600080604083850312156119c5578182fd5b8235915061192e602084016118cf565b600080604083850312156119e7578182fd5b50508035926020909101359150565b600060208284031215611a07578081fd5b81356001600160e01b0319811681146109cd578182fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611a56816017850160208801611b20565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611a93816028840160208801611b20565b01602801949350505050565b6020815260008251806020840152611abe816040850160208701611b20565b601f01601f19169190910160400192915050565b60008219821115611ae557611ae5611b9e565b500190565b6000816000190483118215151615611b0457611b04611b9e565b500290565b600082821015611b1b57611b1b611b9e565b500390565b60005b83811015611b3b578181015183820152602001611b23565b83811115610fe75750506000910152565b600081611b5b57611b5b611b9e565b506000190190565b600181811c90821680611b7757607f821691505b60208210811415611b9857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220fc7acbc3accac01585de3f4d6efc63306fca11b563cb537eaa8aafa5ee2d642d64736f6c6343000804003365d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  deploy(
    name: string,
    symbol: string,
    decimalsValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      name,
      symbol,
      decimalsValue,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimalsValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      decimalsValue,
      overrides || {}
    );
  }
  attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";
  public readonly contractName: "ERC20Mock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}