import React, { useEffect, useState } from 'react';
import { Activity, Atom, FlaskConical, Sparkles, Wind, Flame, Compass, Gauge } from 'lucide-react';

/**
 * Componente que renderiza o ecossistema de fórmulas físico-químicas em movimento
 * no plano de fundo e ao redor dos cartões de autenticação (Login e Cadastro).
 * Dá vida à interface, criando um ambiente de "Laboratório Quântico Dinâmico".
 */
export default function FormulasFlutuantesFundo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normaliza de -1 a 1 para deslocamento sutil
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Grid de Pontos Quânticos Estilizados */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#191A23 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* 2. Luzes e Orbes Fluorescentes de Fundo com Pulso Suave */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-brand/30 rounded-full blur-[110px] animate-pulse-subtle" />
      <div 
        className="absolute -bottom-36 -right-36 w-[520px] h-[520px] bg-yellow-300/35 rounded-full blur-[120px] animate-pulse-subtle"
        style={{ animationDelay: '2.5s' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/15 rounded-full blur-[140px] animate-pulse-subtle"
        style={{ animationDelay: '4s' }}
      />

      {/* 3. Fórmulas Grandes em Marca D'água Deslizando Lentamente (Watermarks Cinéticos) */}
      <div 
        className="absolute top-12 left-[15%] text-dark/15 font-mono font-black text-2xl lg:text-3xl tracking-widest animate-quantum-drift"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      >
        f(v) = 4π (M/2πRT)³/² v² e⁻ᴹᵛ²/²ᴿᵀ
      </div>

      <div 
        className="absolute top-1/4 right-[10%] text-dark/15 font-mono font-black text-xl lg:text-2xl tracking-widest animate-quantum-drift-rev"
        style={{ transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)` }}
      >
        ln(k₂/k₁) = -(Eₐ/R)(1/T₂ - 1/T₁)
      </div>

      <div 
        className="absolute bottom-28 left-[8%] text-dark/15 font-mono font-black text-xl lg:text-2xl tracking-widest animate-quantum-drift"
        style={{ transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)` }}
      >
        ΔH = ∫ [Cp(T) - Cp,base] dT
      </div>

      <div 
        className="absolute bottom-16 right-[18%] text-dark/15 font-mono font-black text-2xl lg:text-3xl tracking-widest animate-quantum-drift-rev"
        style={{ transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)` }}
      >
        S = k_B · ln(W)
      </div>

      <div 
        className="absolute top-2/3 left-[2%] text-dark/10 font-mono font-black text-lg lg:text-xl tracking-wider animate-quantum-drift"
      >
        c = √(γRT / M)
      </div>

      <div 
        className="absolute top-1/3 left-[5%] text-dark/10 font-mono font-black text-lg tracking-wider animate-quantum-drift-rev"
      >
        PV = nRT
      </div>

      {/* 4. Badges Interativos Flutuantes com Efeito de Levitação e Sombras Neo-Brutalistas */}
      {/* Badge 1: Cinética de 1ª Ordem (Superior Esquerdo) */}
      <div 
        className="pointer-events-auto hidden md:flex items-center space-x-2.5 absolute top-8 left-6 lg:left-14 bg-white border-3 border-dark rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#191A23] hover:shadow-[7px_7px_0px_0px_#BFFF00] hover:scale-105 transition-all duration-300 animate-quantum-1 z-0 cursor-default"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="w-7 h-7 rounded-xl bg-brand/30 border-2 border-dark flex items-center justify-center">
          <Activity className="w-4 h-4 text-dark stroke-[2.5]" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider font-extrabold text-stone-500">Cinética 1ª Ordem</span>
          <span className="font-mono font-black text-xs text-dark tracking-wide">[A] = [A]₀ · e⁻ᵏᵗ</span>
        </div>
      </div>

      {/* Badge 2: Maxwell-Boltzmann (Superior Direito) */}
      <div 
        className="pointer-events-auto hidden md:flex items-center space-x-2.5 absolute top-12 right-6 lg:right-14 bg-[#FEF08A] border-3 border-dark rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#191A23] hover:shadow-[7px_7px_0px_0px_#191A23] hover:scale-105 transition-all duration-300 animate-quantum-2 z-0 cursor-default"
        style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      >
        <div className="w-7 h-7 rounded-xl bg-white border-2 border-dark flex items-center justify-center">
          <Atom className="w-4 h-4 text-dark stroke-[2.5]" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider font-extrabold text-stone-700">Velocidade Molecular</span>
          <span className="font-mono font-black text-xs text-dark tracking-wide">v_mp = √(2RT/M)</span>
        </div>
      </div>

      {/* Badge 3: Calorimetria DSC & Splines (Inferior Esquerdo) */}
      <div 
        className="pointer-events-auto hidden md:flex items-center space-x-2.5 absolute bottom-8 left-6 lg:left-14 bg-brand border-3 border-dark rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#191A23] hover:shadow-[7px_7px_0px_0px_#191A23] hover:scale-105 transition-all duration-300 animate-quantum-3 z-0 cursor-default"
        style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}
      >
        <div className="w-7 h-7 rounded-xl bg-white border-2 border-dark flex items-center justify-center">
          <FlaskConical className="w-4 h-4 text-dark stroke-[2.5]" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider font-extrabold text-dark/70">Entalpia DSC</span>
          <span className="font-mono font-black text-xs text-dark tracking-wide">ΔH = ∫ ΔCp dT</span>
        </div>
      </div>

      {/* Badge 4: Energia Livre de Gibbs (Inferior Direito) */}
      <div 
        className="pointer-events-auto hidden md:flex items-center space-x-2.5 absolute bottom-10 right-6 lg:right-14 bg-white border-3 border-dark rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#191A23] hover:shadow-[7px_7px_0px_0px_#BFFF00] hover:scale-105 transition-all duration-300 animate-quantum-4 z-0 cursor-default"
        style={{ transform: `translate(${-mousePos.x * 1.1}px, ${-mousePos.y * 1.1}px)` }}
      >
        <div className="w-7 h-7 rounded-xl bg-purple-200 border-2 border-dark flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-dark stroke-[2.5]" />
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider font-extrabold text-stone-500">Termodinâmica</span>
          <span className="font-mono font-black text-xs text-dark tracking-wide">ΔG° = -RT ln(K)</span>
        </div>
      </div>

      {/* Badge 5: Meia-Vida (Lateral Esquerda Intermediária) */}
      <div 
        className="pointer-events-auto hidden xl:flex items-center space-x-2 absolute top-1/2 -translate-y-1/2 left-4 bg-emerald-100 border-3 border-dark rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_0px_#191A23] hover:scale-105 transition-all duration-300 animate-quantum-5 z-0 cursor-default"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      >
        <Flame className="w-4 h-4 text-emerald-800" />
        <span className="font-mono font-black text-xs text-dark">t½ = ln(2) / k</span>
      </div>

      {/* Badge 6: Equação de Arrhenius (Lateral Direita Intermediária) */}
      <div 
        className="pointer-events-auto hidden xl:flex items-center space-x-2 absolute top-1/2 -translate-y-1/2 right-4 bg-orange-100 border-3 border-dark rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_0px_#191A23] hover:scale-105 transition-all duration-300 animate-quantum-6 z-0 cursor-default"
        style={{ transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)` }}
      >
        <Wind className="w-4 h-4 text-orange-700" />
        <span className="font-mono font-black text-xs text-dark">k = A · e⁻ᴱᵃ/ᴿᵀ</span>
      </div>
    </div>
  );
}
