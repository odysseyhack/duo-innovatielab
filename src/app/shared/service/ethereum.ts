import {Injectable} from "@angular/core";

declare let require: any;
declare let window: any;

let abi = require('../badgecontract.json');
let bytecode = require('../bytecode.json');

@Injectable({providedIn: 'root'})
export class Ethereum {

    private _web3: any;
    private _contracts: any;
    private _abi: any;
    private _code: any;
    private _contract: any;

  constructor() {
      if (typeof window.web3 !== 'undefined') {
        this._web3 = window.web3.currentProvider;

        if (this._web3.version.network !== '4') {
          alert('Please connect to the Rinkeby network');
        }
      } else {
          console.warn('Please use a dApp browser like mist or MetaMask plugin for chrome');
      }
    this._contracts = JSON.parse(bytecode)["contracts"];
    this._abi = JSON.parse(this._contracts.Badge.abi);
    this._code = '0x' + this._contracts.Badge.bin;
    this._contract = this._web3.eth.contract(abi);
  }

  storeOnBlockchain() {
    this._contract = this._web3.eth.contract.new(abi,{from: this._web3.eth.accounts[0], data: this._code});
  }

}
