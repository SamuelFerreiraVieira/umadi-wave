function FloatingBadge() {
  return (
    <div
      className="
        btn-delay-2 btn-appear
        relative
        w-[160px] h-[140px]
        origin-top-left
        scale-[0.75] sm:scale-90 md:scale-100 lg:scale-110
      "
    >
      
      <div className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)]" />

      
      <div className="absolute left-6 top-10 w-14 h-14 rounded-full bg-white border border-black/10 shadow-[0_10px_20px_rgba(0,0,0,0.08)] grid place-items-center">
        <div className="w-6 h-6 rounded-full bg-black grid place-items-center">
          <div className="w-3 h-3 bg-white rotate-45 rounded-sm" />
        </div>
      </div>

      
      <div className="absolute right-6 top-8 w-16 h-16 rounded-full bg-white border border-black/10 shadow-[0_10px_20px_rgba(0,0,0,0.08)] grid place-items-center">
        <div className="w-6 h-6 rounded-full bg-black grid place-items-center rotate-slow">
          <div className="w-3 h-3 bg-white rotate-45 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default FloatingBadge;
