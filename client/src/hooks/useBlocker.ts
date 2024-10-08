import { UNSAFE_NavigationContext } from "react-router-dom";
import type { History, Blocker, Transition } from "history";
import { useContext, useEffect } from "react";
/* istanbul ignore next */
export function useBlocker(blocker: Blocker, when: boolean): void {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as History;

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}
