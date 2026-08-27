import { useEffect, useRef } from "react";

export function useLifecycleLogger(name, props) {
  const isFirstRender = useRef(true);
  const prevProps = useRef(props); // Stores the previous props in memory

  // Effect 1: Handles Mount and Unmount
  useEffect(() => {
    console.log(`🟢 [${name}] mounted with initial props:`, props);

    return () => {
      console.log(`🔴 [${name}] unmounted`);
    };
  }, []);

  // Effect 2: Handles Updates and pinpointing exact changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      // Find the specific keys that changed
      const changes = {};
      if (typeof props === 'object' && props !== null) {
        Object.keys(props).forEach((key) => {
          if (prevProps.current[key] !== props[key]) {
            changes[key] = {
              previous: prevProps.current[key],
              current: props[key],
            };
          }
        });
      }

      console.group(`🟡 [${name}] updated`);
      console.log("Changed properties:", changes);
      console.log("Previous Props:", prevProps.current);
      console.log("Current Props:", props);
      console.groupEnd();

      // Update the reference for the next render pass
      prevProps.current = props;
    }
  }, [props]);
}