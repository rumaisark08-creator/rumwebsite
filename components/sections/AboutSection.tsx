export default function AboutSection() {
  return (
    <section id="about" className="bg-[#fffaf3] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-[#fff1d6] text-[#b7790f] text-[11px] font-bold tracking-wide rounded-full mb-5">
          About Us
        </span>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[44px] font-extrabold leading-[1.1] text-black max-w-2xl">
          Your Trusted Partner in
          <br />
          <span className="text-[#ff8a00] relative inline-block">
            Recovery & Wellness
            <span className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-black"></span>
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-[14px] leading-[1.7] text-[#6b6b6b] mt-6 max-w-[560px]">
          At Suryakiran Physiotherapy Clinic, we believe everyone deserves to live a pain-free, active life. With over 20 years of experience and 10000+ patients treated, we're committed to providing exceptional care.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {/* Mission */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="w-11 h-11 rounded-xl bg-[#fff6e6] flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" fill="black" />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Our Mission</h3>
            <p className="text-[13.5px] leading-[1.7] text-[#6b6b6b]">
              To provide personalized, evidence-based physiotherapy treatments that restore mobility, reduce pain, and improve quality of life for every patient who walks through our doors.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="w-11 h-11 rounded-xl bg-[#fff6e6] flex items-center justify-center mb-6">
              <span className="text-[18px]">🏆</span>
            </div>
            <h3 className="text-[18px] font-bold text-black mb-3">Our Vision</h3>
            <p className="text-[13.5px] leading-[1.7] text-[#6b6b6b]">
              To be the most trusted physiotherapy clinic in Kerala, known for our clinical excellence, compassionate care, and unwavering commitment to patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}