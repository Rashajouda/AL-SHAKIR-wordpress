export function getSessionStorage(item: string) {
  try {
    return sessionStorage.getItem(item);
  } catch (e) {
    return null;
  }
}

export function setSessionStorage(item: string, value: string) {
  try {
    sessionStorage.setItem(item, value);
  } catch (e) {
    // no-op
  }
}

export function deleteSessionStorage(item: string) {
  try {
    sessionStorage.removeItem(item);
  } catch (e) {
    // no-op
  }
}
