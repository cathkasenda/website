
import { cn } from "@/lib/utils";

interface PixelAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
}

const PixelAvatar = ({
  src,
  alt,
  size = "md",
  className
}: PixelAvatarProps) => {
  const sizeStyles = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
    xxl: "w-48 h-48"
  };

  return (
    <div className={cn("pixel-avatar", sizeStyles[size], className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default PixelAvatar;
