import { GOOGLE_ADSENSE_ID } from '@/constants/biz';

interface Props {
  clientId?: string;
}

export default function GoogleAdsense(props: Props) {
  const { clientId = GOOGLE_ADSENSE_ID } = props;
  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
