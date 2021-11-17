import React from "react";

export default function OfferItem({
  handleClickToken,
  token,
  index,
  metadata,
  setSelectedToken,
  selectedToken,
}) {


  const select = () => {
    setSelectedToken(token)
    handleClickToken(token)
  }
  return (
    <button
      style={{
        border: "none",
        background: "none",
        marginTop: "1rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      key={index}
      onClick={() => {
        select(token);
        // handleClickToken(token)
        //  setSelected(metadata)}
      }}
      className={selectedToken === token ? "activeClassToken" : ""}
    >
      {
        selectedToken === token && <div className="activeClassBg">
          Chose
        </div>
      }
      <img
        style={{
          width: "291px",
          height: "291px",
          margin: "1rem 1rem",
          pointerEvents: "none",
        }}
        src={metadata.image ? metadata.image : "https://rair.mypinata.cloud/ipfs/QmNtfjBAPYEFxXiHmY5kcPh9huzkwquHBcn9ZJHGe7hfaW"}
        alt={metadata}
      />
    </button>
  );
}