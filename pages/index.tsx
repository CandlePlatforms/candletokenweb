import HomeHero from "components/sections/home/hero";
import ByTheNumbersSection from "components/sections/home/by-the-numbers";
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do";
import PrimerBanner from "components/sections/home/primer-banner";
import CommunitySection from "components/sections/home/community";
import PageLayout from "components/layouts/page";
import { useEffect } from "react";
import HaveACallSection from "components/sections/home/have-a-call";
import { getProtocolStatistics } from "lib/document-helpers";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function HomePage({ youtubeVideos, totalActiveStake }): any {
  const router = useRouter();
  const { t } = useTranslation(["home"]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);

  const headProps: HeadProps = {
    meta: {
      title: t("page-home-meta-title"),
      description: t("page-home-meta-description"),
      url: "https://CandleLabs.org",
      siteName: "CandleLabs.org",
      image: "https://candelabs.org/go.png",
      twitterUsername: "@Candle_Labs",
    },
  };

  return (
    <PageLayout
      headProps={headProps}
      navProps={{ isInmersive: true }}
      pushContentSx={{ marginTop: "-72px" }}>
      <HomeHero
        title={router.locale !== "en" && t("page-home-title")}
        subtitle={t("page-home-intro")}
        cta={t("page-home-get-started")} videoLabel={undefined} />
      <LetLivepeerDoSection
        label={t("page-home-get-started")}
        title={t("page-home-what-role")}
        subtitle={t("page-home-jump-in")}
        tokenholders={{
          title: t("page-home-tokenholders"),
          description: t("page-home-tokenholders-text"),
        }}
        developers={{
          title: t("page-home-developers"),
          description: t("page-home-developers-text"),
        }}
        products={{
          title: t("page-home-products"),
          description: t("page-home-products-text"),
        }} />
      <ByTheNumbersSection
        title={t("page-home-stats-title")}
        subtitle={t("page-home-stats-text")}
        label={t("page-home-stats")}
        totalActiveStake={totalActiveStake} />
      <CommunitySection
        title={t("page-home-communities-title")}
        subtitle={t("page-home-communities-text")}
        label={t("page-home-communities")} />
      <HaveACallSection
        title={t("page-home-call")}
        subtitle={t("page-home-call-text")}
        ctaText={t("page-home-call-cta")}
        youtubeVideos={youtubeVideos} />
    </PageLayout>
  );
}

export default HomePage;
