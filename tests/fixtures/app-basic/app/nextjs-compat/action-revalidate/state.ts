type ActionRevalidateGlobal = typeof globalThis & {
  __vinextActionRevalidateLayoutVersion?: number;
};

const actionRevalidateGlobal: ActionRevalidateGlobal = globalThis;

export function readActionRevalidateLayoutVersion(): number {
  return actionRevalidateGlobal.__vinextActionRevalidateLayoutVersion ?? 0;
}

export function incrementActionRevalidateLayoutVersion(): void {
  actionRevalidateGlobal.__vinextActionRevalidateLayoutVersion =
    readActionRevalidateLayoutVersion() + 1;
}
