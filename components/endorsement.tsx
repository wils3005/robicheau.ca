import React, { FC, ReactNode } from "react";

const Endorsement: FC = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col lg:flex-row my-4">{children}</div>;
};

export default Endorsement;
