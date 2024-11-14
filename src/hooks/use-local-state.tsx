import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

export function useLocalState<T>(
  initialState: T,
  key: string,
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const [value, setValue] = useState(() => {
    const stringLocalValue = localStorage.getItem(key);

    if (!stringLocalValue) {
      return initialState;
    }

    if (typeof initialState === "bigint") {
      return BigInt(stringLocalValue) as T;
    }

    if (typeof initialState === "boolean") {
      return Boolean(stringLocalValue) as T;
    }

    if (typeof initialState === "number") {
      return Number(stringLocalValue) as T;
    }

    if (typeof initialState === "object") {
      return JSON.parse(stringLocalValue) as T;
    }

    return String(stringLocalValue) as T;
  });

  const setLocalStorage = (value: T) => {
    if (typeof initialState === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, String(value));
    }
  };

  useEffect(() => {
    setLocalStorage(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const reset = () => {
    setValue(initialState);
    setLocalStorage(initialState);
  };

  return [value, setValue, reset];
}
