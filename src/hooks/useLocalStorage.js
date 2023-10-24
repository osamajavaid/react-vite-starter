import React from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      return value === "true" ? true : value === "false" ? false : defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = newValue => {
    try {
      window.localStorage.setItem(keyName, String(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};



// this is how we can use it
// const MyApp = () => {
//     const [name, setName] = useLocalStorage('name', 'John');
  
//     return <input value={name} onChange={e => setName(e.target.value)} />;
//   };