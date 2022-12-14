/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.17.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { BalanceHuman, Uint128, Expiration, Timestamp, Uint64, DetailsResponse, Coin, Cw20Coin, ExecuteMsg, Binary, CreateMsg, Cw20ReceiveMsg, InstantiateMsg, ListResponse, QueryMsg } from "./Cw20.types";
export interface Cw20ReadOnlyInterface {
  contractAddress: string;
  list: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListResponse>;
  details: ({
    id
  }: {
    id: string;
  }) => Promise<DetailsResponse>;
}
export class Cw20QueryClient implements Cw20ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.list = this.list.bind(this);
    this.details = this.details.bind(this);
  }

  list = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list: {
        limit,
        start_after: startAfter
      }
    });
  };
  details = async ({
    id
  }: {
    id: string;
  }): Promise<DetailsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      details: {
        id
      }
    });
  };
}
export interface Cw20Interface extends Cw20ReadOnlyInterface {
  contractAddress: string;
  sender: string;
  create: ({
    expires,
    hash,
    id,
    recipient
  }: {
    expires: Expiration;
    hash: string;
    id: string;
    recipient: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  release: ({
    id,
    preimage
  }: {
    id: string;
    preimage: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  refund: ({
    id
  }: {
    id: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Cw20Client extends Cw20QueryClient implements Cw20Interface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.create = this.create.bind(this);
    this.release = this.release.bind(this);
    this.refund = this.refund.bind(this);
    this.receive = this.receive.bind(this);
  }

  create = async ({
    expires,
    hash,
    id,
    recipient
  }: {
    expires: Expiration;
    hash: string;
    id: string;
    recipient: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create: {
        expires,
        hash,
        id,
        recipient
      }
    }, fee, memo, funds);
  };
  release = async ({
    id,
    preimage
  }: {
    id: string;
    preimage: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release: {
        id,
        preimage
      }
    }, fee, memo, funds);
  };
  refund = async ({
    id
  }: {
    id: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      refund: {
        id
      }
    }, fee, memo, funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
}