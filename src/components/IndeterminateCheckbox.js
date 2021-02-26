import React, { useEffect, forwardRef, useRef } from "react";

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, handeChangeSelectedRow, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
