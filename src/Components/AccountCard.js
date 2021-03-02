const AccountCard = ({ account = {}, balanceLoading }) => {
  return (
    <div className="card">
      <div>
        {account?.publicKey && (
          <div>
            <h2>Public Key</h2>
            <div
              style={{
                wordWrap: "break-word",
              }}
            >
              {account.publicKey.toString()}
            </div>
          </div>
        )}
        {account?.secretKey && (
          <div>
            <h2>Secret Key</h2>
            <b>Never share this key as someone can steal your funds</b>
            <div
              style={{
                marginTop: "20px",
                wordWrap: "break-word",
                marginBottom: "20px",
              }}
            >
              {account.secretKey.toString()}
            </div>
          </div>
        )}
      </div>

      {balanceLoading ? (
        <div>Loading New Balance...</div>
      ) : !!account?.balance ? (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h2>Balance</h2>
          {(account.balance / 1000000000).toFixed(9)} Sol
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default AccountCard;
