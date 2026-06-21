import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function GsspNonJson({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <p data-testid="gssp-non-json">hello {time.toString()}</p>;
}

export const getServerSideProps: GetServerSideProps<{ time: Date }> = async () => ({
  props: { time: new Date("2026-06-21T00:00:00.000Z") },
});
