import { useEffect, useRef } from 'react';

import { addUseUpdatesListener } from './UpdatesEmitter';
import type { UseUpdatesInternalEvent } from './UseUpdates.types';

/**
 * @hidden
 */
export const useUpdatesInternalEvents = (listener: (event: UseUpdatesInternalEvent) => void) => {
  // Used internally by the useUpdates() hook
  const listenerRef = useRef<typeof listener>();

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (listenerRef.current) {
      const subscription = addUseUpdatesListener(listenerRef.current);
      return () => {
        subscription.remove();
      };
    }
    return undefined;
  }, []);
};
