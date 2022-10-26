import React from "react";

const useDispatch = () => {};

const haha = useDispatch;

export const App = () => {
  const dispatch = haha();
  return <div>Hello!</div>;
};
