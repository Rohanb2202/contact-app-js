/* Local Storage Common layout */

export const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const remove = (key) => {
    localStorage.removeItem(key);
};