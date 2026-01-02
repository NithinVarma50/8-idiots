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
    <div className="relative min-h-screen bg-background">
      {/* Back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground hover:bg-foreground/10 transition-colors font-instrument-serif"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Header */}
      <div className="fixed top-20 left-0 right-0 z-10 p-6 pointer-events-none">
        <h1 className="max-w-[750px] mx-auto text-foreground text-center font-instrument-serif px-6 md:text-5xl text-3xl text-balance tracking-tight font-normal leading-tight">
          I create; therefore I am
        </h1>
      </div>

      {/* Gallery */}
      <InfiniteGallery images={sampleImages} className="h-screen w-full" />

      {/* Instructions */}
      <div className="fixed bottom-6 left-0 right-0 z-10 p-6 pointer-events-none">
        <p className="text-foreground/60 text-center font-instrument-serif text-sm">
          Use mouse wheel, arrow keys, or touch to navigate
        </p>
        <p className="text-foreground/40 text-center font-instrument-serif text-xs mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </div>
  );
};

export default Gallery;
