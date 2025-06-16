import LucideImageUp from '~icons/lucide/image-up';
import LucideX from '~icons/lucide/x';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/lib/style';

interface ImgUploaderProps {
  className?: string;
}

export default function ImgUploader({ className }: ImgUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [inputId, setInputId] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file || null);
  };
  const onClickUploader = () => {
    if (image) {
      setFile(null);
    } else {
      document.getElementById(inputId)?.click();
    }
    
  };
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  }, [file]);
  useEffect(() => {
    setInputId(nanoid());
  }, []);
  return (
    <div
      role="button"
      className={cn('btn btn-sm relative', className)}
      style={{ backgroundImage: `url(${image || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onClick={onClickUploader}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        !image ? (
          <LucideImageUp className="w-5 h-5" />
        ) : null
      }
      {
        Boolean(isHover && image) ? (
          <div className="absolute top-0 left-0 w-full h-full bg-white/30 flex items-center justify-center">
            <LucideX className="w-5 h-5 font-bold text-black drop-shadow-lg" />
          </div>
        ) : null
      }
      <input
        id={inputId}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        className="hidden"
        onChange={handleFileChange}
      />
      
    </div>
  );
}
