interface FakeLocalStorage {
  getItem: any,
  setItem: any,
  removeItem: any,
  clear: any,
}
/* istanbul ignore next */
export const fakeLocalStorage = (function (): FakeLocalStorage {
  let store: any = {};
  return {
    getItem: function (key: any): string | null {
      return store[key] || null;
    },
    setItem: function (key: any, value: any): void {
      store[key] = value.toString();
    },
    removeItem: function (key: any): void {
      delete store[key];
    },
    clear: function (): void {
      store = {};
    }
  };
});