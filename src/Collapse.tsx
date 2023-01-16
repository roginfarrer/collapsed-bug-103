import type { FunctionComponent } from "react";
import React, { useState } from "react";

import useCollapse from "react-collapsed";

type CollapseProps = {
  children: React.ReactNode;
  show: boolean;
};

export const CollapseWithBug: FunctionComponent<CollapseProps> = ({
  children,
  show
}) => {
  const [mountChildren, setMountChildren] = useState(show);
  const { getCollapseProps } = useCollapse({
    isExpanded: show,
    onCollapseEnd: () => {
      setMountChildren(false);
    },
    onExpandStart: () => {
      setMountChildren(true);
    }
  });

  return (
    <div {...getCollapseProps()}>{(show || mountChildren) && children}</div>
  );
};

export const CollapseWithoutBug: FunctionComponent<CollapseProps> = ({
  children,
  show
}) => {
  const { getCollapseProps } = useCollapse({
    isExpanded: show
  });

  return <div {...getCollapseProps()}>{children}</div>;
};
