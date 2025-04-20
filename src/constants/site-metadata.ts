interface SiteMetadata {
  SITE_URL: string;
  SITE_NAME: string;
  SITE_DESC: string;
  SOCIAL_MEDIA: {
    twitter: string;
    github: string;
  };
}

const SITE_URLS = {
  development: "http://localhost:3000",
  production: "#", // 本番環境のURLを指定
  test: "http://localhost:3000",
};

const siteUrl = SITE_URLS[process.env.NODE_ENV];

export const siteMetadata: SiteMetadata = {
  SITE_URL: siteUrl,
  SITE_NAME: "My Next Starter",
  SITE_DESC:
    "My Next Starterは、Next.jsとshadcn/uiを使用した、最新のWeb開発体験を提供するスターターテンプレートです。",
  // 下記はダミーのURLです。実際のURLに置き換えてください。
  SOCIAL_MEDIA: {
    twitter: "https://x.com/b13ocom",
    github: "https://github.com/b13o",
  },
};
