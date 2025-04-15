import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="/hero.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hero-dots">
        <div className="hero-dot"></div>
        <div className="hero-dot active"></div>
        <div className="hero-dot"></div>
        <div className="hero-dot"></div>
      </div>
    </div>
  )
}
