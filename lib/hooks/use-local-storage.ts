import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T | undefined>(() => initialValue);

  useLayoutEffect(() => {
    let initialValue;

    try {
      const localStorageValue = localStorage.getItem(key);

      initialValue =
        localStorageValue !== null
          ? parseJSON(localStorageValue)
          : initialValue;

      setValue(initialValue);
    } catch (error) {
      setValue(initialValue);
    }
  }, [key]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
        const newValue =
          e.newValue !== null ? parseJSON(e.newValue) : undefined;
        setValue(newValue);
      }
    };

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [key]);

  const set = useCallback(
    (newValue: T | ((currentValue: T | undefined) => T)) => {
      try {
        const valueToStore =
          newValue instanceof Function ? newValue(value) : newValue;
        setValue(valueToStore);

        if (typeof valueToStore === "undefined") {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error("Error writing to localStorage:", error);
      }
    },
    [key, value]
  );

  const remove = useCallback(() => {
    try {
      setValue(undefined);
      localStorage.removeItem(key);
    } catch (error) {}
  }, [key]);

  return [value, set, remove] as const;
}

function parseJSON(value: string) {
  return value === "undefined" ? undefined : JSON.parse(value);
}
