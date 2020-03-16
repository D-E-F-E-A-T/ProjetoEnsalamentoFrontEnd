import React, { useRef } from "react";

const TesteForm = ({ submitBuilding }) => {

  return (
    <form >
      <input name="name" type="text" />
      <input name="password" type="password" />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default TesteForm;
