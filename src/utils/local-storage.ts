export const setToLocalStorage = (key: string, product: any) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, product);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
