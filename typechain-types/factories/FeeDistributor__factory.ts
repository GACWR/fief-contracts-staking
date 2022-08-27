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
import type {
  FeeDistributor,
  FeeDistributorInterface,
} from "../FeeDistributor";

const _abi = [
  {
    name: "CommitAdmin",
    inputs: [
      {
        type: "address",
        name: "admin",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "ApplyAdmin",
    inputs: [
      {
        type: "address",
        name: "admin",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "ToggleAllowCheckpointToken",
    inputs: [
      {
        type: "bool",
        name: "toggle_flag",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "CheckpointToken",
    inputs: [
      {
        type: "uint256",
        name: "time",
        indexed: false,
      },
      {
        type: "uint256",
        name: "tokens",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Claimed",
    inputs: [
      {
        type: "address",
        name: "recipient",
        indexed: true,
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
      },
      {
        type: "uint256",
        name: "claim_epoch",
        indexed: false,
      },
      {
        type: "uint256",
        name: "max_epoch",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "UpdateFeeCollector",
    inputs: [
      {
        type: "address",
        name: "newFeeCollector",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "UpdateFeePercent",
    inputs: [
      {
        type: "uint256",
        name: "percent",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_voting_escrow",
      },
      {
        type: "uint256",
        name: "_start_time",
      },
      {
        type: "address",
        name: "_token",
      },
      {
        type: "address",
        name: "_admin",
      },
      {
        type: "address",
        name: "_emergency_return",
      },
      {
        type: "uint256",
        name: "_fee_percent",
      },
      {
        type: "address",
        name: "_fee_collector",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    name: "checkpoint_token",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 820723,
  },
  {
    name: "ve_for_at",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_user",
      },
      {
        type: "uint256",
        name: "_timestamp",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 249417,
  },
  {
    name: "checkpoint_total_supply",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 10592405,
  },
  {
    name: "claim",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "claim",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "claim_many",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address[20]",
        name: "_receivers",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 26345371,
  },
  {
    name: "burn",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_coin",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 823450,
  },
  {
    name: "commit_admin",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37898,
  },
  {
    name: "apply_admin",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 39534,
  },
  {
    name: "toggle_allow_checkpoint_token",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 38673,
  },
  {
    name: "kill_me",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: 39587,
  },
  {
    name: "recover_balance",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_coin",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 7778,
  },
  {
    name: "update_fee_percent",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "percent",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 37948,
  },
  {
    name: "update_fee_collector",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 38078,
  },
  {
    name: "start_time",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1601,
  },
  {
    name: "time_cursor",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1631,
  },
  {
    name: "time_cursor_of",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1876,
  },
  {
    name: "user_epoch_of",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1906,
  },
  {
    name: "last_token_time",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1721,
  },
  {
    name: "tokens_per_week",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 1860,
  },
  {
    name: "voting_escrow",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1781,
  },
  {
    name: "token",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1811,
  },
  {
    name: "total_received",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1841,
  },
  {
    name: "token_last_balance",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1871,
  },
  {
    name: "ve_supply",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "arg0",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: 2010,
  },
  {
    name: "admin",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1931,
  },
  {
    name: "future_admin",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1961,
  },
  {
    name: "can_checkpoint_token",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1991,
  },
  {
    name: "emergency_return",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2021,
  },
  {
    name: "is_killed",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2051,
  },
  {
    name: "fee_collector",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2081,
  },
  {
    name: "fee_percent",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 2111,
  },
];

const _bytecode =
  "0x6f7fffffffffffffffffffffffffffffff60405260e06121a66101403960206121a660c03960c05160a01c1561003457600080fd5b602060406121a60160c03960c05160a01c1561004f57600080fd5b602060606121a60160c03960c05160a01c1561006a57600080fd5b602060806121a60160c03960c05160a01c1561008557600080fd5b602060c06121a60160c03960c05160a01c156100a057600080fd5b6101605162093a808082049050905062093a8080820282158284830414176100c757600080fd5b809050905090506102205261022051600055610220516004556102205160015561018051600755610140516006556101a051600b556101c051600e556101e0516011556102005160105561218e56341561000a57600080fd5b600436101561001857612072565b600035601c526f7fffffffffffffffffffffffffffffff604052600015610384575b61014052602061020060246370a0823161018052306101a05261019c6007545afa61006457600080fd5b601f3d1161007157600080fd5b6000506102005161016052610160516009548082101561009057600080fd5b8082039050905061018052610160516009556004546101a052426101a051808210156100bb57600080fd5b808203905090506101c052426004556101a05162093a808082049050905062093a8080820282158284830414176100f157600080fd5b809050905090506101e05260006102005261022060006014818352015b6101e05162093a8081818301101561012557600080fd5b808201905090506102005261020051421015610232576101c0511515610150576101a0514214610153565b60005b1561019e576101e05166038d7ea4c68000811061016f57600080fd5b600560c052602060c0200180546101805181818301101561018f57600080fd5b80820190509050815550610229565b6101e05166038d7ea4c6800081106101b557600080fd5b600560c052602060c02001805461018051426101a051808210156101d857600080fd5b8082039050905080820282158284830414176101f357600080fd5b809050905090506101c051808061020957600080fd5b82049050905081818301101561021e57600080fd5b808201905090508155505b61034856610327565b6101c051151561024a576101a051610200511461024d565b60005b15610298576101e05166038d7ea4c68000811061026957600080fd5b600560c052602060c0200180546101805181818301101561028957600080fd5b80820190509050815550610326565b6101e05166038d7ea4c6800081106102af57600080fd5b600560c052602060c02001805461018051610200516101a051808210156102d557600080fd5b8082039050905080820282158284830414176102f057600080fd5b809050905090506101c051808061030657600080fd5b82049050905081818301101561031b57600080fd5b808201905090508155505b5b610200516101a052610200516101e0525b815160010180835281141561010e575b5050426102205261018051610240527fce749457b74e10f393f2c6b1ce4261b78791376db5a3f501477a809f03f500d66040610220a161014051565b63811a40fe60005114156103eb57600b543314156103a35760016103d3565b600d54156103cf57600454620151808181830110156103c157600080fd5b8082019050905042116103d2565b60005b5b5b6103dd57600080fd5b6006580161003a565b600050005b6000156105a6575b61018052610140526101605260006101a0526020610240600463900cf0cf6101e0526101fc610140515afa61042757600080fd5b601f3d1161043457600080fd5b600050610240516101c0526101e060006080818352015b6101c0516101a05110151561045f57610592565b6101a0516101c05181818301101561047657600080fd5b80820190509050600281818301101561048e57600080fd5b80820190509050600280820490509050610200526102206080610320602463d1febfb96102a052610200516102c0526102bc610140515afa6104cf57600080fd5b607f3d116104dc57600080fd5b61032080808080516103a0525050602081019050808080516103c0525050602081019050808080516103e05250506020810190508080805161040052505050506000506103a0805182528060200151826020015280604001518260400152806060015182606001525050610160516102605111151561056257610200516101a052610581565b6102005160018082101561057557600080fd5b808203905090506101c0525b5b815160010180835281141561044b575b50506101a051600052600051610180515650005b60001561073f575b6101c0526101405261016052610180526101a05260006101e0526101a0516102005261022060006080818352015b610200516101e0511015156105f05761072b565b6101e0516102005181818301101561060757600080fd5b80820190509050600281818301101561061f57600080fd5b8082019050905060028082049050905061024052610260608061038060446328d09d476102e052610160516103005261024051610320526102fc610140515afa61066857600080fd5b607f3d1161067557600080fd5b61038080808080516104005250506020810190508080805161042052505060208101905080808051610440525050602081019050808080516104605250505050600050610400805182528060200151826020015280604001518260400152806060015182606001525050610180516102a0511115156106fb57610240516101e05261071a565b6102405160018082101561070e57600080fd5b80820390509050610200525b5b81516001018083528114156105dc575b50506101e0516000526000516101c0515650005b63ace296fb60005114156109525760043560a01c1561075d57600080fd5b600654610140526020610200602463010ae757610180526004356101a05261019c610140515afa61078d57600080fd5b601f3d1161079a57600080fd5b6000506102005161016052610140516101605161018051610140516101a0526004356101c0526024356101e0526101605161020052610200516101e0516101c0516101a051600658016105ae565b6102605261018052610160526101405261026051610180526101a060806102c060446328d09d476102205260043561024052610180516102605261023c610140515afa61083457600080fd5b607f3d1161084157600080fd5b6102c080808080516103405250506020810190508080805161036052505060208101905080808051610380525050602081019050808080516103a052505050506000506103408051825280602001518260200152806040015182604001528060600151826060015250506101a0516101c0516024356101e051808210156108c757600080fd5b808203905090506040518111156108dd57600080fd5b808202808060008112156108ed57195b607f1c156108fa57600080fd5b9050905090508082038080600081121561091057195b607f1c1561091d57600080fd5b9050905090506000808212156109335780610935565b815b90509050600081121561094757600080fd5b60005260206000f350005b600015610c10575b6101405260065461016052600154610180524262093a808082049050905062093a80808202821582848304141761099057600080fd5b809050905090506101a052610160513b6109a957600080fd5b60006000600463c2c4c5c16101c0526101dc6000610160515af16109cc57600080fd5b6101c060006014818352015b6101a0516101805111156109ef57610c0156610bce565b6101405161016051610180516101a0516101c0516101e051610160516102005261018051610220526102205161020051600658016103f3565b610280526101e0526101c0526101a052610180526101605261014052610280516101e0526102006080610300602463d1febfb9610280526101e0516102a05261029c610160515afa610a7957600080fd5b607f3d11610a8657600080fd5b6103008080808051610380525050602081019050808080516103a0525050602081019050808080516103c0525050602081019050808080516103e0525050505060005061038080518252806020015182602001528060400151826040015280606001518260600152505060006102805261024051610180511115610b3457610180516102405180821015610b1957600080fd5b80820390509050604051811115610b2f57600080fd5b610280525b61020051610220516102805180820280806000811215610b5057195b607f1c15610b5d57600080fd5b90509050905080820380806000811215610b7357195b607f1c15610b8057600080fd5b905090509050600080821215610b965780610b98565b815b905090506000811215610baa57600080fd5b6101805166038d7ea4c680008110610bc157600080fd5b600a60c052602060c02001555b610180805162093a80818183011015610be657600080fd5b808201905090508152505b81516001018083528114156109d8575b50506101805160015561014051565b63b21ed5026000511415610c2c576006580161095a565b600050005b600015611294575b6101a0526101405261016052610180526040366101c03760206102a0602463010ae75761022052610140516102405261023c610160515afa610c7557600080fd5b601f3d11610c8257600080fd5b6000506102a0516102005260005461022052610200511515610cad5760006000526000516101a05156505b60026101405160e05260c052604060c0205461024052610240511515610d5f576101405161016051610180516101a0516101c0516101e05161020051610220516102405161016051610260526101405161028052610220516102a052610200516102c0526102c0516102a0516102805161026051600658016105ae565b610320526102405261022052610200526101e0526101c0526101a052610180526101605261014052610320516101c052610d76565b60036101405160e05260c052604060c020546101c0525b6101c0511515610d875760016101c0525b610260608061038060446328d09d476102e05261014051610300526101c051610320526102fc610160515afa610dbc57600080fd5b607f3d11610dc957600080fd5b61038080808080516104005250506020810190508080805161042052505060208101905080808051610440525050602081019050808080516104605250505050600050610400805182528060200151826020015280604001518260400152806060015182606001525050610240511515610ea0576102a05162093a80818183011015610e5457600080fd5b80820190509050600180821015610e6a57600080fd5b8082039050905062093a808082049050905062093a808082028215828483041417610e9457600080fd5b80905090509050610240525b6101805161024051101515610ebe5760006000526000516101a05156505b61022051610240511015610ed55761022051610240525b6080366102e03761036060006032818352015b6101805161024051101515610efc576111db565b6102a05161024051101515610f1a57610200516101c0511115610f1d565b60005b15611038576101c080516001818183011015610f3857600080fd5b808201905090508152506102e0610260805182528060200151826020015280604001518260400152806060015182606001525050610200516101c0511115610f865760803661026037611033565b610260608061042060446328d09d4761038052610140516103a0526101c0516103c05261039c610160515afa610fbb57600080fd5b607f3d11610fc857600080fd5b61042080808080516104a0525050602081019050808080516104c0525050602081019050808080516104e05250506020810190508080805161050052505050506000506104a08051825280602001518260200152806040015182604001528060600151826060015250505b6111ca565b61024051610320518082101561104d57600080fd5b8082039050905060405181111561106357600080fd5b610380526102e05161038051610300518082028080600081121561108357195b607f1c1561109057600080fd5b905090509050808203808060008112156110a657195b607f1c156110b357600080fd5b9050905090506000808212156110c957806110cb565b815b9050905060008112156110dd57600080fd5b6103a0526103a05115156110f957610200516101c051116110fc565b60005b15611106576111db565b60006103a05111156111a7576101e080516103a0516102405166038d7ea4c68000811061113257600080fd5b600560c052602060c0200154808202821582848304141761115257600080fd5b809050905090506102405166038d7ea4c68000811061117057600080fd5b600a60c052602060c0200154808061118757600080fd5b82049050905081818301101561119c57600080fd5b808201905090508152505b610240805162093a808181830110156111bf57600080fd5b808201905090508152505b5b8151600101808352811415610ee8575b5050610200516101c0516001808210156111f457600080fd5b8082039050905080821115611209578061120b565b815b905090506101c0526101c05160036101405160e05260c052604060c020556102405160026101405160e05260c052604060c020556101e051610360526101c05161038052610200516103a052610140517f9cdcf2f7714cca3508c7f0110b04a90a80a3a8dd0e35de99689db74d28c5383e6060610360a26101e0516000526000516101a0515650005b634e71d92d60005114156112ac5733610140526112e2565b631e83409a60005114156112da5760043560a01c156112ca57600080fd5b60206004610140376000506112e2565b60001561154c575b62ffffff54156112f157600080fd5b600162ffffff55600f541561130557600080fd5b6001544210151561132557610140516006580161095a565b610140526000505b60045461016052600d541561135957610160516201518081818301101561134b57600080fd5b80820190509050421161135c565b60005b156113835761014051610160516006580161003a565b610160526101405260005042610160525b6101605162093a808082049050905062093a8080820282158284830414176113aa57600080fd5b8090509050905061016052610140516101605161018051610140516101a0526006546101c052610160516101e0526101e0516101c0516101a05160065801610c34565b610240526101805261016052610140526102405161018052600061018051181561152f5761018051601154808202821582848304141761142c57600080fd5b80905090509050670de0b6b3a7640000808204905090506101a052610180516101a0518082101561145c57600080fd5b808203905090506101c0526007546101e05260206102a0604463a9059cbb6102005261014051610220526101c0516102405261021c60006101e0515af16114a257600080fd5b601f3d116114af57600080fd5b6000506102a0516114bf57600080fd5b60206102a0604463a9059cbb61020052601054610220526101a0516102405261021c60006101e0515af16114f257600080fd5b601f3d116114ff57600080fd5b6000506102a05161150f57600080fd5b60098054610180518082101561152457600080fd5b808203905090508155505b61018051600052600062ffffff5560206000f350600062ffffff55005b637b935a2360005114156118855762ffffff541561156957600080fd5b600162ffffff556000610120525b610120516004013560a01c1561158c57600080fd5b60206101205101610120526102806101205110156115a957611577565b600f54156115b657600080fd5b600154421015156115ce576006580161095a565b6000505b60045461014052600d54156116025761014051620151808181830110156115f457600080fd5b808201905090504211611605565b60005b1561162457610140516006580161003a565b6101405260005042610140525b6101405162093a808082049050905062093a80808202821582848304141761164b57600080fd5b8090509050905061014052600654610160526007546101805260006101a0526101e060006014818352015b60206101e05102600401356101c0526101c05115156116945761183c565b6101405161016051610180516101a0516101c0516101e051610200516101c051610220526101605161024052610140516102605261026051610240516102205160065801610c34565b6102c052610200526101e0526101c0526101a0526101805261016052610140526102c05161020052600061020051181561182b5761020051601154808202821582848304141761172c57600080fd5b80905090509050670de0b6b3a7640000808204905090506102205261020051610220518082101561175c57600080fd5b80820390509050610240526020610300604463a9059cbb6102605260105461028052610220516102a05261027c6000610180515af161179a57600080fd5b601f3d116117a757600080fd5b600050610300516117b757600080fd5b6020610300604463a9059cbb610260526101c05161028052610240516102a05261027c6000610180515af16117eb57600080fd5b601f3d116117f857600080fd5b6000506103005161180857600080fd5b6101a080516102005181818301101561182057600080fd5b808201905090508152505b5b8151600101808352811415611676575b505060006101a051181561186a57600980546101a0518082101561185f57600080fd5b808203905090508155505b6001600052600062ffffff5560206000f350600062ffffff55005b6389afcb4460005114156119aa5760043560a01c156118a357600080fd5b600754600435146118b357600080fd5b600f54156118c057600080fd5b60206101e060246370a0823161016052336101805261017c6004355afa6118e657600080fd5b601f3d116118f357600080fd5b6000506101e05161014052600061014051181561199d57602061022060646323b872dd610160523361018052306101a052610140516101c05261017c60006004355af161193f57600080fd5b601f3d1161194c57600080fd5b60005061022050600d541561197f576004546201518081818301101561197157600080fd5b808201905090504211611982565b60005b1561199c57610140516006580161003a565b610140526000505b5b600160005260206000f350005b63b1d3db756000511415611a0c5760043560a01c156119c857600080fd5b600b5433146119d657600080fd5b600435600c55600435610140527f59a407284ae6e2986675fa1400d6498af928ed01f4fd2dd6be4a2a8b4fc35b346020610140a1005b63c0e991a66000511415611a7657600b543314611a2857600080fd5b6000600c5418611a3757600080fd5b600c546101405261014051600b5561014051610160527f756f845176805c8ebf249854e909627308157f63c96e470e44a9e8549ba6fb1e6020610160a1005b632121bfc36000511415611ad257600b543314611a9257600080fd5b600d54156101405261014051600d5561014051610160527fdbe6ac1081ebd8e648718341126659456f4009fcadfe1c23f66f5e61522610b26020610160a1005b63e36988536000511415611b8357600b543314611aee57600080fd5b6001600f556007546101405260206102a0604463a9059cbb61020052600e546102205260206101e060246370a0823161016052306101805261017c610140515afa611b3857600080fd5b601f3d11611b4557600080fd5b6000506101e0516102405261021c6000610140515af1611b6457600080fd5b601f3d11611b7157600080fd5b6000506102a051611b8157600080fd5b005b63db2f5f796000511415611d4b5760043560a01c15611ba157600080fd5b600b543314611baf57600080fd5b60075460043518611bbf57600080fd5b60206101e060246370a0823161016052306101805261017c6004355afa611be557600080fd5b601f3d11611bf257600080fd5b6000506101e05161014052600060046101c0527fa9059cbb000000000000000000000000000000000000000000000000000000006101e0526101c060048060208461022001018260208501600060045af1505080518201915050600e5460208261022001015260208101905061014051602082610220010152602081019050806102205261022090508051602001806102c08284600060045af1611c9557600080fd5b505060206103806102c0516102e060006004355af1611cb357600080fd5b60203d80821115611cc45780611cc6565b815b90509050610360526103608051602001806101608284600060045af1611ceb57600080fd5b50506000610160511815611d3e57610160806020015160008251806020901315611d1457600080fd5b8091901215611d2257600080fd5b806020036101000a82049050905090501515611d3d57600080fd5b5b600160005260206000f350005b63a688c7e06000511415611d9d57600b543314611d6757600080fd5b600435601155600435610140527fdb5160cb520340c5b40cde4e18cb6fa0375a88f0fd4ab8027bf402759debec826020610140a1005b63b6b6805b6000511415611dff5760043560a01c15611dbb57600080fd5b600b543314611dc957600080fd5b600435601055600435610140527f338e8652f97d92dc615790fbe0fba33e7ce110c00e6e328be604e8119a3b6aa66020610140a1005b63834ee4176000511415611e1b5760005460005260206000f350005b63127dcbd36000511415611e375760015460005260206000f350005b632a2a314b6000511415611e715760043560a01c15611e5557600080fd5b600260043560e05260c052604060c0205460005260206000f350005b63d5d46e886000511415611eab5760043560a01c15611e8f57600080fd5b600360043560e05260c052604060c0205460005260206000f350005b637f58e8f86000511415611ec75760045460005260206000f350005b63edf599976000511415611f025760043566038d7ea4c680008110611eeb57600080fd5b600560c052602060c020015460005260206000f350005b63dfe050316000511415611f1e5760065460005260206000f350005b63fc0c546a6000511415611f3a5760075460005260206000f350005b632f0c222e6000511415611f565760085460005260206000f350005b6322b04bfc6000511415611f725760095460005260206000f350005b63d4dafba86000511415611fad5760043566038d7ea4c680008110611f9657600080fd5b600a60c052602060c020015460005260206000f350005b63f851a4406000511415611fc957600b5460005260206000f350005b6317f7182a6000511415611fe557600c5460005260206000f350005b63aeba4737600051141561200157600d5460005260206000f350005b632c3f531e600051141561201d57600e5460005260206000f350005b639c868ac0600051141561203957600f5460005260206000f350005b63f5e8fa2360005114156120555760105460005260206000f350005b634ff2cc4460005114156120715760115460005260206000f350005b5b60006000fd5b61011661218e0361011660003961011661218e036000f3";

type FeeDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeDistributor__factory extends ContractFactory {
  constructor(...args: FeeDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FeeDistributor";
  }

  deploy(
    _voting_escrow: string,
    _start_time: BigNumberish,
    _token: string,
    _admin: string,
    _emergency_return: string,
    _fee_percent: BigNumberish,
    _fee_collector: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeeDistributor> {
    return super.deploy(
      _voting_escrow,
      _start_time,
      _token,
      _admin,
      _emergency_return,
      _fee_percent,
      _fee_collector,
      overrides || {}
    ) as Promise<FeeDistributor>;
  }
  getDeployTransaction(
    _voting_escrow: string,
    _start_time: BigNumberish,
    _token: string,
    _admin: string,
    _emergency_return: string,
    _fee_percent: BigNumberish,
    _fee_collector: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _voting_escrow,
      _start_time,
      _token,
      _admin,
      _emergency_return,
      _fee_percent,
      _fee_collector,
      overrides || {}
    );
  }
  attach(address: string): FeeDistributor {
    return super.attach(address) as FeeDistributor;
  }
  connect(signer: Signer): FeeDistributor__factory {
    return super.connect(signer) as FeeDistributor__factory;
  }
  static readonly contractName: "FeeDistributor";
  public readonly contractName: "FeeDistributor";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeDistributorInterface {
    return new utils.Interface(_abi) as FeeDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeDistributor {
    return new Contract(address, _abi, signerOrProvider) as FeeDistributor;
  }
}
