export type Without<T extends object, U extends keyof T> = Omit<T, keyof U>;
