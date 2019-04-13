import {Inject, Injectable} from '@angular/core';
import {WEB3} from './web3';
import Web3 from 'web3';

declare let require: any;
declare let window: any;

let abi = require('../badgecontract.json');
let bytecode = require('../bytecode.json');

@Injectable({providedIn: 'root'})
export class Ethereum {

  private _web3: Web3;
  private _code: any;
  private _abi: any;
  private _accounts: any;

  constructor(@Inject(WEB3) private web3: Web3) {
    this._web3 = web3;
    this._code = '0x' + bytecode.object;
    this._abi = web3.eth.abi;
  }

  async storeOnBlockchain(hash: string) {
    this._accounts = await this._web3.eth.getAccounts();

    const deployedBadge = new this._web3.eth.Contract(abi);

    let that = this;
    let contractAddress;

    return new Promise(
      function(resolve, reject) {
        deployedBadge.deploy({data: that._code, arguments: [hash]})
          .send({from: that._accounts[0]}, function(error, _result) {
            if (error) {
              console.log('Rian van Rijbroek heeft de transactie onderschept.');
            } else {
              let callback = function() {
                that._web3.eth.getTransactionReceipt(_result.toString(), function(error, result) {
                  if (result == null) {
                    setTimeout(callback, 1000);
                    console.log('Nog 1 sec wachten..');
                  } else {
                    console.log(result.contractAddress);
                    contractAddress = result.contractAddress;
                    resolve(contractAddress);
                  }
                });
              };
              callback();
            }
          });

      });
  }

  async verifyOnBlockchain(contractAddress: string, hash: string) {
    this._accounts = await this._web3.eth.getAccounts();

    const deployedBadge = new this._web3.eth.Contract(abi, contractAddress);

    return deployedBadge.methods.verify(hash).call({from: this._accounts[0]});

  }
}
