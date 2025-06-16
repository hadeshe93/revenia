import { GA4_ID } from '@/constants/biz';

interface Props {
  gid?: string;
}

export default function GoogleTag(props: Props) {
  const { gid = GA4_ID } = props;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${gid}");
            `,
        }}
      ></script>
    </>
  );
}
