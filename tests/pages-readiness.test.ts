import { describe, expect, it } from "vite-plus/test";
import { buildPagesReadinessNextData } from "../packages/vinext/src/server/pages-readiness.js";

describe("Pages readiness serialization", () => {
  it("omits false Next.js data-fetching markers", () => {
    expect(
      buildPagesReadinessNextData({
        pageModule: {},
        appComponent: null,
        hasRewrites: false,
      }),
    ).toEqual({
      autoExport: true,
      __vinext: { hasRewrites: false },
    });
  });

  it("emits true getServerSideProps marker", () => {
    expect(
      buildPagesReadinessNextData({
        pageModule: { getServerSideProps: async () => ({ props: {} }) },
        appComponent: null,
        hasRewrites: false,
      }),
    ).toMatchObject({ gssp: true });
  });
});
