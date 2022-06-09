import React from 'react';

export function useCurrentRef<T>(current: T): React.MutableRefObject<T> {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
}
