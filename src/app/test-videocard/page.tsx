import VideoCard from '@/components/VideoCard';

export default function TestVideoCardPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-md mx-auto">
        <VideoCard
          title="Terror from Mexico"
          remark="Community Channel"
          description="Explore the unique terror rooted in Mexican culture and folklore that makes Revenia special."
          embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
      </div>
    </div>
  );
} 