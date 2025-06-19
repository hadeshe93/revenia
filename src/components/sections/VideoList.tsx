import VideoCard, { VideoCardProps } from '@/components/VideoCard';
import { cn } from '@/lib/style';

interface Props {
  i18nText: {
    titlePrefix: string;
    title: string;
    titleSuffix: string;
    description: string;
    contents: Omit<VideoCardProps, 'videoType'>[];
  };
  videoType?: string;
  className?: string;
}

export default function VideoList(props: Props) {
  const { i18nText, videoType = 'youtube' as const, className } = props;
  const { titlePrefix, title, titleSuffix, description, contents } = i18nText;

  return (
    <div className="section-container max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 md:mb-10">
        {titlePrefix}&nbsp;
        <span className="text-primary">{title}</span>&nbsp;
        {titleSuffix}
      </h2>
      <p className="text-center mb-6 md:mb-10">{description}</p>
      <div className={cn(' grid grid-cols-1 gap-4', className)}>
        {contents.map((content) => (
          <VideoCard key={content.title} videoType={videoType} {...content} />
        ))}
      </div>
    </div>
  );
}
