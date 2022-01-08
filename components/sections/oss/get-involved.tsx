/** @jsx jsx */
import { jsx, Box, Text, Heading, Link as A, Grid } from "theme-ui";
import {
  FiGithub,
  FiCode,
  FiBook,
  FiMessageCircle,
  FiPlay,
} from "react-icons/fi";
import ListItem, { ListItemProps } from "components/primitives/list-item";
import Link from "next/link";

const listItems: ListItemProps[] = [
  {
    icon: <FiCode />,
    children: (
      <>
        Read the{" "}
        <A
          href="https://github.com/CandlePlatforms/candlejs/blob/master/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Candle.js
        </A>{" "}
        contributor guidelines.
      </>
    ),
  },
  {
    icon: <FiGithub />,
    children: (
      <>
        Look for “good first issues” in{" "}
        <A
          href="https://github.com/CandlePlatforms/candletokenweb"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Candle Labs Website
        </A>{" "}
        (Javascript),{" "}
        <A
          href="https://github.com/CandlePlatforms/docs"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          docs
        </A>{" "}
        (documentation), or{" "}
        <A
          href="https://github.com/CandlePlatforms/governance"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Governance
        </A>{" "}
        (react).
      </>
    ),
  },
  {
    icon: <FiBook />,
    children: (
      <>
        View the{" "}
        <A
          href="https://github.com/CandlePlatforms/Grant-Program"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Grant Proposals
        </A>{" "}
        to see application concepts with some funding attached.
      </>
    ),
  },
  {
    icon: <FiMessageCircle />,
    children: (
      <>
        Chat with the development team in{" "}
        <A
          href="https://discord.gg/4nABzqsX8C"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Discord
        </A>{" "}
        - we’re a welcoming bunch, so don’t be shy. Ask how you can get
        involved.
      </>
    ),
  },
  {
    icon: <FiPlay />,
    children: (
      <>
        Looking to build within the Candle ecosystem? Check out our open{" "}
        <Link href="/docs/video-developers/overview" passHref>
          <A variant="accent" data-dark>
            developer docs
          </A>
        </Link>{" "}
        and support programs  <br /> at{" "}
        <A
          href="https://candlelabs.org"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          candlelabs.org
        </A>
        .
      </>
    ),
  },
];

const GetInvolvedSection = ({ label, title, subtitle }) => (
  <Box sx={{ bg: "text", color: "background" }}>
    <Grid
      variant="layout.section"
      gap={5}
      columns={[1, null, 2]}
      sx={{ pt: ["80px", null, null, "160px"] }}>
      <Box>
        <Text
          variant="section.titleLabel"
          sx={{ textAlign: ["center", null, "left"] }}>
          {label}
        </Text>
        <Heading
          variant="section.title"
          sx={{ textAlign: ["center", null, "left"] }}>
          {title}
        </Heading>
        <Heading
          variant="section.subtitle"
          sx={{ textAlign: ["center", null, "left"], color: "lightGray" }}>
          {subtitle}
        </Heading>
      </Box>
      <Box
        sx={{
          ".list-item:not(:last-of-type)": {
            mb: "40px",
          },
        }}>
        {listItems.map((item, i) => (
          <ListItem
            key={`get-involved-link-${i}`}
            className="list-item"
            {...item}
          />
        ))}
      </Box>
    </Grid>
  </Box>
);

export default GetInvolvedSection;
