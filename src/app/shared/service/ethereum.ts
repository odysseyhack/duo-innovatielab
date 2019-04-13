import {Inject, Injectable, InjectionToken} from "@angular/core";
import { WEB3 } from './web3';
import Web3 from 'web3';

declare let require: any;
declare let window: any;

let abi = require('../badgecontract.json');
let bytecode = require('../bytecode.json');

let web3Provider;

@Injectable({providedIn: 'root'})
export class Ethereum {

    private _web3: any;
    private _code: any;
    private _contract: any;

  constructor(@Inject(WEB3) private web3: Web3) {
    this._web3 = web3;
    this._code = '0x' + bytecode.bin;
    this._contract = this.web3.eth.abi;
  }

  storeOnBlockchain() {
    this._contract = this._web3.eth.contract.new(abi,{from: this._web3.eth.accounts[0], data: this._code});
  }
}
