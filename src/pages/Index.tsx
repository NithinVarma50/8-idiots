import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleSphere } from "@/components/ui/cosmos-3d-orbit-gallery"
import { Suspense } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const pexelsImages = Array.from({ length: 15 }, (_, i) => `/gallery-images/img-${(i + 1).toString().padStart(2, '0')}.jpg`)

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#d4a853" wireframe />
    </mesh>
  )
}

const Index = () => {
  return (
    <div className="w-full h-[100dvh] bg-background relative overflow-hidden">
      {/* Hero text overlay */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-10 p-4 md:p-6 pointer-events-none">
        <h1 className="max-w-[750px] mx-auto text-foreground text-center font-instrument-serif px-4 md:px-6 text-3xl md:text-6xl text-balance tracking-tight font-normal leading-tight">
          The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.
        </h1>
        <p className="mt-4 md:mt-6 text-foreground/80 text-center font-instrument-serif text-base md:text-xl">
          Kovidh • Pranieth • Manoritha • Bhindu
        </p>
        <p className="mt-1 md:mt-2 text-foreground/80 text-center font-instrument-serif text-base md:text-xl">
          Philip • Tanmayi • Ashritha • Nithin
        </p>
        <p className="mt-4 md:mt-6 text-foreground/60 text-center font-instrument-serif text-sm md:text-lg italic px-4">
          These are just moments. But they meant more than we knew then.
        </p>
      </div>

      {/* Next button */}
      <Link
        to="/gallery"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-20 flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-full text-foreground hover:bg-foreground/20 transition-colors font-instrument-serif text-base md:text-lg"
      >
        Next
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </Link>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<LoadingFallback />}>
          <ParticleSphere images={pexelsImages} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>

    </div>
  )
}

export default Index
