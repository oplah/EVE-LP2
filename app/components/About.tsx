import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="title-bold-3 text-[#1A1A1A] mb-6">
              The AI companion designed for your growth
            </h2>
            <p className="body text-gray-500 mb-5 max-w-xl">
              EVE stands for{" "}
              <strong className="text-[#1A1A1A] font-semibold">Everyone Elevates</strong>
              {" "}— a name rooted in the belief that growth isn&apos;t reserved for the
              few, but is the birthright of every person willing to show up for it.
            </p>
            <p className="body text-gray-500 max-w-xl">
              She&apos;s your AI-powered personal growth companion — combining Mindvalley&apos;s
              world-class learning library with the intimacy of a trusted advisor who
              truly knows you. Whether navigating a career crossroads, seeking clarity,
              or wanting to grow — EVE meets you where you are.
            </p>
          </div>

          {/* Right: Image collage */}
          <div className="relative flex gap-3 h-[520px]">
            {/* Large portrait image */}
            <div className="flex-[1.2] relative rounded-3xl overflow-hidden">
              <Image
                src="/rectangle-1.png"
                alt="EVE app experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Three smaller images stacked */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/rectangle-2.png"
                  alt="EVE personalized guidance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/rectangle-3.png"
                  alt="EVE learning journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src="/rectangle-4.png"
                  alt="EVE growth companion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
