import { StarIcon } from "./Icons";
import { cn } from "../utils/cn";

// Rating bintang 1–5 dengan label aksesibel.
interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`Rating ${rating} dari 5 bintang`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          width={18}
          height={18}
          className={i < rating ? "text-gold" : "text-charcoal/15"}
        />
      ))}
    </div>
  );
}
