import { readActionRevalidateLayoutVersion } from "./state";

export default function ActionRevalidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div id="layout-version">{readActionRevalidateLayoutVersion()}</div>
      {children}
    </section>
  );
}
