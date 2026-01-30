import ButtonObreiro from "@/components/buttons/ButtonObreiro";
import ButtonCristao from "@/components/buttons/ButtonCristao";
import FloatingBadge from "@/components/animations/FloatingBadge";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto pt-10 sm:pt-12 text-center">
          <h1 className="hero-title text-black text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Bem-vindo à
          </h1>

          <h2 className="hero-title text-cyan-600 text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight">
            WaveConference
          </h2>

          <p className="hero-subtitle mt-6 sm:mt-10 text-sm sm:text-base lg:text-2xl text-gray-700 leading-relaxed">
            Seja muito bem-vindo à Umadi. Este é um espaço preparado com carinho
            para você se inscrever, se conectar e caminhar conosco. Estamos
            ansiosos pela sua presença e por tudo o que Deus fará através deste
            encontro.
          </p>

          <h3 className="mt-10 sm:mt-16 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight question-appear">
            Você quer ser <span className="text-cyan-600">Obreiro</span> ou{" "}
            <span className="text-cyan-600">Participante</span>?
          </h3>

          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
            <ButtonObreiro className="btn-ripple btn-wave btn-jump-up" />
            <ButtonCristao />
          </div>

          
          <div className="  w-{10} mt-15 ml-8 flex justify-center sm:hidden">
            <FloatingBadge />
          </div>

          
          <div className="hidden sm:block absolute left-10 top-32 floaty pointer-events-none">
            <FloatingBadge />
          </div>
        </div>
      </main>

      
      <h3
        className="
          fixed bottom-6 left-4 sm:bottom-10 sm:left-10
          max-w-xs
          text-gray-800 text-3xl sm:text-5xl lg:text-6xl
          font-medium leading-snug
          pointer-events-none wavecon-appear
        "
      >
        #WaveConference
      </h3>
    </div>
  );
}
