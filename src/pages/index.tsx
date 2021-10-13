import React from "react";
import { Section } from "../layout";
import { Layout } from "../layout/Layout";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Section>
        <div>Section #1</div>
      </Section>
      <Section>
        <div>Section #2</div>
      </Section>
    </Layout>
  );
}
