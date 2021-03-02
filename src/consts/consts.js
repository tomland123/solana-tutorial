import { Connection } from "@solana/web3.js";

export const url = "http://testnet.solana.com:8899";

export async function connectToSolana() {
  return new Connection(url, "recent");
}
