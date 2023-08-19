import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    // Get the stored value from local storage
    const storedValue = localStorage.getItem(key);

    // Set the initial value to either the stored value or the provided initial value
    const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;

    // Create a state variable to track the current value
    const [value, setValue] = useState(initial);

    // Update the local storage whenever the value changes
    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
}

export default useLocalStorage;
