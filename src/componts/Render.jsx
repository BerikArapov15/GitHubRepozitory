import React, { useState } from "react";

const Render = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {/* {password.length < 8 ? (<h2>weak password</h2>):(<h2>strong password</h2>)} */}
      {password.length < 8 && <h2>weak password</h2>}
    </div>
  );
};

export default Render;
