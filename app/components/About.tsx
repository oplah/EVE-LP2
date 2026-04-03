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

          {/* Right: Phone image */}
          <div className="relative flex justify-center h-[520px]">
            <div className="relative w-full rounded-3xl overflow-hidden">
              <Image
                src="/phone-eve.jpg"
                alt="EVE app experience"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
