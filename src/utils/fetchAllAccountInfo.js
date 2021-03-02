const fetchAllAcountInfo = async (publicKey, connection, privateKey = null) => {
  if (publicKey) {
    const balance = await connection.getBalance(publicKey);

    const accountInfo = await connection.getAccountInfoAndContext(publicKey);

    return {
      publicKey,
      balance,
      privateKey,
      accountInfo,
    };
  }
  return null;
};

export default fetchAllAcountInfo;
