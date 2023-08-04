import React, { useState } from "react";

export default function Likes() {
  const [like, setLike] = useState(0);

  const handleLikes = () => {
    setLike(like + 1);
  };

  return (
    <>
      <button onClick={handleLikes}>
        {" "}
        Likes<span> 👍</span> : ({like})
      </button>
    </>
  );
}
