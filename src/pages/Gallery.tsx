import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sampleImages = [
  {
    src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Ocean waves",
  },
  {
    src: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Forest path",
  },
  {
    src: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Desert dunes",
  },
  {
    src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "City skyline",
  },
  {
    src: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Northern lights",
  },
  {
    src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Waterfall",
  },
  {
    src: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Sunset beach",
  },
];

const Gallery = () => {
  return (
    <div className="relative min-h-[100dvh] bg-background">
      {/* Back button */}
      <Link
        to="/"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-background/80 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground hover:bg-foreground/10 transition-colors font-instrument-serif text-sm md:text-base"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        Back
      </Link>



      {/* Gallery */}
      <InfiniteGallery images={sampleImages} className="h-[100dvh] w-full" />

      {/* Instructions */}
      <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-10 p-4 md:p-6 pointer-events-none">
        <p className="text-foreground/60 text-center font-instrument-serif text-xs md:text-sm">
          Use mouse wheel, arrow keys, or touch to navigate
        </p>
        <p className="text-foreground/40 text-center font-instrument-serif text-[10px] md:text-xs mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </div>
  );
};

export default Gallery;
