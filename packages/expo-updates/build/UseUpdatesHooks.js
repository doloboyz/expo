import { useEffect, useRef } from 'react';
import { addUseUpdatesListener } from './UpdatesEmitter';
/**
 * @hidden
 */
export const useUpdatesInternalEvents = (listener) => {
    // Used internally by the useUpdates() hook
    const listenerRef = useRef();
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
//# sourceMappingURL=UseUpdatesHooks.js.map