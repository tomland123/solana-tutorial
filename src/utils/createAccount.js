import { Account } from "@solana/web3.js";

const createAccount = async (string) => {
  return await new Account(string);
};

export default createAccount;
