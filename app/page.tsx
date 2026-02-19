import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Columns from "@/components/layout/Columns";
import Stack from "@/components/layout/Stack";
import Block from "@/components/layout/Block";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <Section>
        <Container>
          <Columns cols={2} gap={64}>
            <Stack gap={24}>
              <Typography variant="h1">
                Building Expertise Through Education
              </Typography>
              <Typography variant="body-1" className="text-white/70 max-w-[520px]">
                We solve business problems through education.
              </Typography>
            </Stack>

            <Block
              height={420}
              className="rounded-xl flex items-center justify-center text-white/40"
              style={{ background: "var(--color-surface-800)" }}
            >
              Hero Visual
            </Block>
          </Columns>
        </Container>
      </Section>

      {/* PRODUCT ACTIVATION */}
      <Section>
        <Container>
          <Columns cols={2} gap={80}>
            <Stack gap={20}>
              <Typography variant="h3">Product Activation</Typography>
              <Typography variant="body-2" className="text-white/70 max-w-[480px]">
                Create structured education programs around your product.
              </Typography>
            </Stack>

            <Block
              height={300}
              className="rounded-xl flex items-center justify-center text-white/40"
              style={{ background: "var(--color-surface-800)" }}
            >
              Visual
            </Block>
          </Columns>
        </Container>
      </Section>

      {/* DEVELOPER ADOPTION */}
      <Section>
        <Container>
          <Columns cols={2} gap={80}>
            <Block
              height={300}
              className="rounded-xl flex items-center justify-center text-white/40"
              style={{ background: "var(--color-surface-800)" }}
            >
              Visual
            </Block>

            <Stack gap={20}>
              <Typography variant="h3">Developer Adoption</Typography>
              <Typography variant="body-2" className="text-white/70 max-w-[480px]">
                Help developers understand and adopt your platform.
              </Typography>
            </Stack>
          </Columns>
        </Container>
      </Section>

      {/* GO TO MARKET */}
      <Section>
        <Container>
          <Columns cols={2} gap={80}>
            <Stack gap={20}>
              <Typography variant="h3">Go-To-Market</Typography>
              <Typography variant="body-2" className="text-white/70 max-w-[480px]">
                Launch education-led GTM strategies for real traction.
              </Typography>
            </Stack>

            <Block
              height={300}
              className="rounded-xl flex items-center justify-center text-white/40"
              style={{ background: "var(--color-surface-800)" }}
            >
              Visual
            </Block>
          </Columns>
        </Container>
      </Section>

      {/* EXPERIENCES */}
      <Section>
        <Container>
          <Stack gap={40}>
            <Typography variant="h3">
              Experiences we build with you
            </Typography>

            <Columns cols={3} gap={32}>
              {[1, 2, 3].map((i) => (
                <Block
                  key={i}
                  height={220}
                  className="rounded-lg flex items-center justify-center text-white/40"
                  style={{ background: "var(--color-surface-800)" }}
                >
                  Experience {i}
                </Block>
              ))}
            </Columns>
          </Stack>
        </Container>
      </Section>

      {/* TESTIMONIAL */}
      <Section>
        <Container>
          <Stack gap={32}>
            <Typography variant="h3">
              We don’t just optimize for outcomes.
            </Typography>
            <Typography variant="body-1" className="text-white/70 max-w-[640px]">
              We design programs that change how people see themselves and what they believe they can do next.
            </Typography>

            <Columns cols={2} gap={32}>
              {[1, 2].map((i) => (
                <Block
                  key={i}
                  height={220}
                  className="rounded-lg flex items-center justify-center text-white/40"
                  style={{ background: "var(--color-surface-800)" }}
                >
                  Testimonial {i}
                </Block>
              ))}
            </Columns>
          </Stack>
        </Container>
      </Section>

      {/* MODULAR */}
      <Section>
        <Container>
          <Columns cols={2} gap={80}>
            <Stack gap={24}>
              <Typography variant="h3">
                Full-stack or Modular. Built Around You.
              </Typography>
              <Typography variant="body-2" className="text-white/70 max-w-[520px]">
                Flexible engagement models aligned to your growth stage.
              </Typography>
            </Stack>

            <Block
              height={360}
              className="rounded-xl flex items-center justify-center text-white/40"
              style={{ background: "var(--color-surface-800)" }}
            >
              Modular Visual
            </Block>
          </Columns>
        </Container>
      </Section>

      {/* CASE STUDIES */}
      <Section>
        <Container>
          <Stack gap={40}>
            <Typography variant="h3">
              What We’ve Built with Our Partners
            </Typography>

            <Columns cols={3} gap={32}>
              {[1, 2, 3].map((i) => (
                <Block
                  key={i}
                  height={220}
                  className="rounded-lg flex items-center justify-center text-white/40"
                  style={{ background: "var(--color-surface-800)" }}
                >
                  Case {i}
                </Block>
              ))}
            </Columns>
          </Stack>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Stack gap={32} className="items-center text-center">
            <Typography variant="h3">
              Build something meaningful together.
            </Typography>

            <Block
              height={48}
              className="w-[180px] rounded-lg flex items-center justify-center text-black font-semibold"
              style={{ background: "var(--color-primary-600)" }}
            >
              CTA Button
            </Block>
          </Stack>
        </Container>
      </Section>

    </main>
  );
}
