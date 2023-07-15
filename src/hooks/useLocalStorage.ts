import React, { useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(initialValue);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      setState(savedValue);
    }
  }, [key]);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue && initial) {
      setInitial(false);
      return;
    }

    localStorage.setItem(key, state);
  }, [key, state, initial]);

  return [state, setState];
}
