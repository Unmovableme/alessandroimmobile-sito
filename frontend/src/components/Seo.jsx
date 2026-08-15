import { Helmet } from "react-helmet-async";

export const Seo = ({ title, description }) => (
  <Helmet>
    <html lang="it" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);
