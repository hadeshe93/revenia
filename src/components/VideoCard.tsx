export interface VideoCardProps {
  title: string;
  remark: string;
  description: string;
  embedUrl: string;
  videoType: string;
}

export default function VideoCard(props: VideoCardProps) {
  const { title, remark, description, embedUrl, videoType } = props;

  return (
    <div className="rounded-lg p-6 bg-base-200 text-base-content space-y-2 card-hover">
      {videoType === 'youtube' && (
        <iframe
          className="max-w-full mx-auto mb-4 md:mb-8 loading-bg"
          width="560"
          height="315"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
      {
        videoType === 'tiktok' && (
          <a className="block video-tiktok-bg h-40" href={embedUrl} target="_blank" rel="noopener noreferrer"></a>
        )
      }
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-xs text-neutral-content">{remark}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
