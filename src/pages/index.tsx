import React from "react";
import { Hero } from "../components";

import { Section } from "../layout";
import { Layout } from "../layout/Layout";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <Section>
        <div>Section #1</div>
      </Section>
      <Section>
        <div>Section #2</div>
      </Section>
    </Layout>
  );
}
