import PageLayout from "components/layouts/page";
import HowProductsWorksSection from "components/sections/products/how-video-mining-works";
import LetTheNumbersTalkSection from "components/sections/products/let-the-numbers-talk";
import HowToGetStartedSection from "components/sections/products/how-to-get-started";
import RequirementsSection from "components/sections/products/requirements";
import ProductsHero from "components/sections/products/hero";
import {
  getTotalActiveNodes,
  getTotalMinutes,
  getProtocolStatistics,
  getLivepeerComUsageData,
} from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const ProductsPage = ({ totalVolumeUSD, totalActiveNodes, totalMinutes }) => {
  const { t } = useTranslation(["videominers", "developers", "common"]);

  const headProps: HeadProps = {
    meta: {
      title: t("page-products-meta-title"),
      description: t("page-products-meta-description"),
      url: "https://candelabs.org/products",
      siteName: "CandleLabs.org",
      image: "https://candelabs.org/go.png",
      twitterUsername: "@Candle_Labs",
    },
  };

  return (
    <PageLayout headProps={headProps} footerProps={{ prefooter: null }}>
      <ProductsHero
        title={t("page-products-title")}
        subtitle={t("page-products-intro")}
        cta={{
          label: t("common:nav-get-started"),
          href: "/docs/products/getting-started/overview",
        }}
      />
      <HowProductsWorksSection
        title={t("page-products-how")}
        text1={t("page-products-how-text-one")}
        text2={t("page-products-how-text-two")}
      />
      <LetTheNumbersTalkSection
        title={t("page-products-numbers")}
        subtitle={t("page-products-numbers-text")}
        label1={t("page-products-numbers-nodes-text")}
        label2={t("page-products-numbers-fees-text")}
        label3={t("page-products-numbers-cost-text")}
        totalActiveNodes={totalActiveNodes}
        totalMinutes={totalMinutes}
        totalVolume={totalVolumeUSD}
      />
      <RequirementsSection
        title={t("page-products-requirements")}
        subtitle={t("page-products-requirements-intro")}
        cards={[
          {
            title: t("page-products-requirements-title-one"),
            description: t("page-products-requirements-text-one"),
          },
          {
            title: t("page-products-requirements-title-two"),
            description: t("page-products-requirements-text-two"),
          },
          {
            title: t("page-products-requirements-title-three"),
            description: t("page-products-requirements-text-three"),
          },
        ]}
      />
      <HowToGetStartedSection
        title={t("common:nav-get-started")}
        subtitle={t("page-products-intro")}
        ctaText={t("developers:page-developers-public-network-cta")}
      />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  let totalMinutes = 0;
  const { totalVolumeUSD } = await getProtocolStatistics();
  const totalActiveNodes = await getTotalActiveNodes();
  if (process.env.LIVEPEER_COM_API_ADMIN_TOKEN) {
    totalMinutes = await getTotalMinutes();
  }

  return {
    props: {
      totalVolumeUSD,
      totalActiveNodes,
      totalMinutes,
      ...(await serverSideTranslations(locale, [
        "common",
        "videominers",
        "developers",
      ])),
    },
    revalidate: 1,
  };
}

export default ProductsPage;
