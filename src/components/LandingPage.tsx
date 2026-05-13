import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../store/ContentContext';
import { 
  Zap, 
  Cpu, 
  Layers, 
  CheckCircle, 
  Quote, 
  ExternalLink, 
  Check, 
  Menu, 
  Download, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  Gamepad2, 
  TrendingDown, 
  Rocket, 
  TrendingUp, 
  AlertTriangle, 
  Timer, 
  PlusCircle, 
  Gift, 
  Smile, 
  Image as LucideImage,
  Compass
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Images are served from public/assets/images/ directly via absolute paths

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FloatingNodes = ({ color }: { color: string }) => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.15] select-none text-[#ef387a]">
    {/* Top-Left Cluster */}
    <motion.div 
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[2%] flex items-center gap-6"
    >
      <div className="w-16 h-16 rounded-xl border flex items-center justify-center bg-white/5" style={{ borderColor: 'currentColor' }}>
        <Cpu size={24} style={{ color: 'currentColor' }} />
      </div>
      <div className="h-[1px] w-48 border-t border-dashed" style={{ borderColor: 'currentColor', opacity: 0.5 }} />
      <div className="w-10 h-10 rounded-full border flex items-center justify-center bg-white/5" style={{ borderColor: 'currentColor', color: 'currentColor', fontSize: '10px', fontWeight: 'bold' }}>AI</div>
    </motion.div>

    {/* Middle-Right Cluster */}
    <motion.div 
      animate={{ x: [10, -10, 10] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[45%] right-[2%] flex items-center flex-row-reverse gap-8"
    >
      <div className="w-24 h-24 rounded-3xl border-2 flex items-center justify-center font-black text-xl bg-white/5" style={{ borderColor: 'currentColor', color: 'currentColor' }}>
        n8n
      </div>
      <div className="h-[1px] w-64 border-t-2 border-dashed" style={{ borderColor: 'currentColor', opacity: 0.6 }} />
      <div className="w-12 h-12 rounded-2xl border bg-white/5" style={{ borderColor: 'currentColor' }} />
    </motion.div>

    {/* Bottom-Left Cluster */}
    <motion.div 
      animate={{ x: [-5, 15, -5] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[15%] left-[3%] flex items-center gap-8"
    >
      <div className="w-20 h-20 rounded-2xl border flex items-center justify-center bg-white/5" style={{ borderColor: 'currentColor' }}>
        <Layers size={28} style={{ color: 'currentColor' }} />
      </div>
      <div className="h-[1px] w-[30rem] border-t border-dashed" style={{ borderColor: 'currentColor', opacity: 0.4 }} />
      <div className="w-8 h-8 rounded-full border bg-white/5" style={{ borderColor: 'currentColor' }} />
    </motion.div>
  </div>
);

export default function LandingPage() {
  const { state } = useContent();
  const { content, theme } = state;

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const
      } 
    }
  };

  const normalizeUrl = (url: string) => {
    if (!url) return "#";
    if (url.startsWith("#") || url.startsWith("/") || url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:") || url.startsWith("tel:")) {
      return url;
    }
    return `https://${url}`;
  };

  const getLinkProps = (url: string) => {
    const normalized = normalizeUrl(url);
    const isAnchor = normalized.startsWith("#");
    const isRelative = normalized.startsWith("/");
    return {
      href: normalized,
      target: (!isAnchor && !isRelative) ? "_blank" : undefined,
      rel: (!isAnchor && !isRelative) ? "noopener noreferrer" : undefined,
    };
  };

  return (
    <div 
      className="min-h-screen text-[#1A1A1E] overflow-x-hidden selection:bg-pink-500/20 relative"
      style={{ backgroundColor: theme.backgroundColor, fontFamily: theme.fontFamily }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Elements removed */}
        </div>
      </nav>

      {/* Hero Section (Slide 1) */}
      {content.hero?.isEnabled && (
        <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden" style={{ backgroundColor: theme.backgroundColor }}>
          <div className="absolute inset-0 bg-grid opacity-[0.03]" />
          <FloatingNodes color={theme.pointColor} />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="w-full max-w-5xl mx-auto text-center z-10"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tighter text-gray-900">
               <span className="block mb-4">업무는 <span className="text-[#333]">AI</span>에게,</span>
               <span className="block" style={{ color: theme.pointColor }}>퇴근은 당신에게</span>
            </h1>
            
            <p className="text-gray-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-16 leading-relaxed break-keep px-4 sm:px-0">
               {content.hero.subtitle}
            </p>

            <div className="relative group max-w-xl mx-auto">
               <div className="relative p-6 rounded-[2rem] border border-black/[0.05]" style={{ backgroundColor: theme.pointColor }}>
                 <img 
                   src="./assets/images/hero_mockup.png"
                   alt="Book Mockup" 
                   className="w-full h-auto rounded-[1.5rem] transition-transform duration-500 group-hover:scale-[1.02]"
                 />
                 
                 {/* Certification Mark */}
                 <motion.div
                   initial={{ scale: 0, rotate: 20 }}
                   animate={{ scale: 1, rotate: 0 }}
                   transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                   className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full p-1 shadow-2xl flex items-center justify-center z-20 select-none group-hover:rotate-12 transition-transform duration-500"
                 >
                   <div 
                     className="w-full h-full rounded-full flex flex-col items-center justify-center p-3 text-center border-2 border-dashed border-white/40"
                     style={{ backgroundColor: theme.pointColor, color: 'white' }}
                   >
                     <div className="text-[8px] sm:text-[10px] font-black opacity-80 tracking-widest mb-1">OFFICIAL</div>
                     <span className="font-black text-[10px] sm:text-base leading-tight break-keep">
                       n8n Global<br/>Ambassador<br/>저자 직강
                     </span>
                     <div className="mt-1 flex gap-0.5">
                       {[1, 2, 3, 4, 5].map((i) => (
                         <div key={i} className="w-1 h-1 rounded-full bg-white/60" />
                       ))}
                     </div>
                   </div>
                 </motion.div>
               </div>

               {/* Hero CTA Buttons */}
               <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full">
                 <motion.a
                   {...getLinkProps(content.hero.buttons?.[0]?.url || "#cta")}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="flex-1 py-6 sm:py-8 rounded-full font-black text-xl sm:text-2xl text-white shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:brightness-110 no-underline select-none"
                   style={{ backgroundColor: theme.pointColor }}
                 >
                   <span className="leading-tight">
                     {content.hero.buttons?.[0]?.label.includes('10% 할인가') ? (
                       <>최고의 강의<br/>10% 할인가로<br/>소장하기</>
                     ) : (
                       content.hero.buttons?.[0]?.label || "지금 시작하기"
                     )}
                   </span>
                   <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-2 transition-transform" />
                 </motion.a>

                 <motion.a
                   {...getLinkProps(content.hero.buttons?.[1]?.url || "#")}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="flex-1 py-6 sm:py-8 rounded-full font-black text-xl sm:text-2xl text-gray-900 bg-white/40 backdrop-blur-md border border-black/5 shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn hover:bg-white/60 no-underline select-none"
                 >
                   <span>{content.hero.buttons?.[1]?.label || "둘러보기"}</span>
                 </motion.a>
               </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Problem Section (Slide 2) */}
      {content.problem?.isEnabled && (
        <section id="problem" className="py-24 sm:py-40 px-6 relative overflow-hidden" 
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${theme.pointColor}15 50%, #ffffff 100%)` }}>
          <div className="absolute inset-0 bg-grid opacity-[0.03]" />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="max-w-6xl mx-auto relative z-10"
          >
            <div className="text-center mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-gray-900 break-keep">
                {content.problem.title}
              </h2>
              <div className="space-y-4">
                 <p className="text-gray-900 text-xl md:text-2xl font-bold opacity-60">{content.problem.subtitle}</p>
                 <p className="text-gray-500 text-2xl font-medium max-w-2xl mx-auto leading-relaxed break-keep whitespace-pre-line">
                  {content.problem.description}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {content.problem.painPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-10 rounded-3xl border border-black/[0.05] shadow-sm flex flex-col justify-center min-h-[160px] text-center"
                >
                  <p className="text-gray-800 text-xl font-bold leading-relaxed break-keep">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Before & After Comparison Section */}
      <section className="py-24 sm:py-32 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute top-4 left-4 z-20 bg-gray-900/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold tracking-tight">
                Before
              </div>
              <div className="overflow-hidden rounded-[2.5rem] border border-black/5 shadow-lg bg-gray-200 aspect-[4/3] relative">
                <img 
                  src="./assets/images/problem_before.png" 
                  className="w-full h-full object-cover filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end text-white p-8 text-center backdrop-blur-[1px] pb-12">
                   <p className="text-2xl font-black tracking-tight leading-tight">
                     복잡한 코드, 엑셀 늪...<br/>
                     <span className="text-lg font-medium opacity-0">공백 유지</span>
                   </p>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute top-4 left-4 z-20 bg-[#ef387a] text-white px-4 py-1 rounded-full text-sm font-bold tracking-tight shadow-lg shadow-pink-500/30">
                After
              </div>
              <div className="overflow-hidden rounded-[2.5rem] border border-black/5 shadow-2xl bg-white aspect-[4/3] relative">
                <img 
                  src="./assets/images/problem_after.png" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ef387a]/80 via-transparent to-transparent flex flex-col items-center justify-end text-white p-8 text-center pb-12">
                   <p className="text-2xl font-black tracking-tight leading-tight drop-shadow-xl">
                     n8n 블록 연결만으로 끝!<br/>
                     <span className="text-lg font-medium opacity-90">여유로운 퇴근이 일상이 됩니다</span>
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section (Slide 3) */}
      {content.solution?.isEnabled && (
        <section id="solution" className="py-24 sm:py-40 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter text-gray-900 break-keep leading-tight">
               단순한 매뉴얼이 아닙니다<br/><br/>
               <span style={{ color: theme.pointColor }}>수만 명의 수강생이 검증한 최고의 강의 커리큘럼을</span><br/>
               한 권에 담았습니다
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-600 mb-2 leading-[32px]">반복 업무는 n8n에 맡기고,</p>
            <p className="text-xl md:text-2xl font-bold leading-[32px]" style={{ color: theme.pointColor }}>당신의 시간은 오직 당신을 위해서만 사용하세요</p>

            {/* Workflow Visualization */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 mb-16 p-8 sm:p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden text-left"
            >
              {/* Dotted background pattern */}
              <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                  backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', 
                  backgroundSize: '32px 32px' 
                }} 
              />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Workflow Header/Visualization */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 mb-16 w-full">
                  {/* Node 1: Google Calendar */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-3xl border-2 border-emerald-400/20 flex items-center justify-center p-5 shadow-lg group hover:border-emerald-400 transition-colors">
                      <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full p-1 shadow-lg border-2 border-white z-20">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="w-full h-full bg-[#4285f4] rounded-2xl relative flex items-center justify-center overflow-hidden shadow-inner">
                        <div className="absolute top-0 left-0 w-full h-1/4 bg-white/10" />
                        <span className="text-white font-black text-3xl sm:text-5xl">31</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-gray-900 text-lg">Google Calendar</p>
                      <p className="text-sm text-gray-500 font-medium">Event Created</p>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="hidden sm:flex items-center gap-2 opacity-30 mt-[-40px]">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <ArrowRight size={24} className="text-gray-400" />
                  </div>

                  {/* Node 2: n8n Set Node */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-3xl border-2 border-emerald-400/20 flex items-center justify-center p-5 shadow-lg group hover:border-emerald-400 transition-colors">
                      <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full p-1 shadow-lg border-2 border-white z-20">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#ef387a]">
                          <path d="M20 50 L40 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                          <path d="M60 50 L80 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
                          <circle cx="50" cy="50" r="4" fill="currentColor" />
                          <path d="M50 20 L50 36" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                          <path d="M50 64 L50 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-gray-900 text-lg">Set</p>
                      <p className="text-sm text-gray-500 font-medium">Set Fields</p>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  <div className="hidden sm:flex items-center gap-2 opacity-30 mt-[-40px]">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <ArrowRight size={24} className="text-gray-400" />
                  </div>

                  {/* Node 3: Slack */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-3xl border-2 border-emerald-400/20 flex items-center justify-center p-5 shadow-lg group hover:border-emerald-400 transition-colors">
                      <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full p-1 shadow-lg border-2 border-white z-20">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-16 h-16">
                          <path fill="#e01e5a" d="M25,55 c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10V55H25z"/>
                          <path fill="#36c5f0" d="M45,25 c0-5.5-4.5-10-10-10s-10,4.5-10,10s4.5,10,10,10h10V25z"/>
                          <path fill="#2eb67d" d="M75,45 c5.5,0,10-4.5,10-10s-4.5-10-10-10s-10,4.5-10,10v10H75z"/>
                          <path fill="#ecb22e" d="M55,75 c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10h-10V75z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-gray-900 text-lg">Slack</p>
                      <p className="text-sm text-gray-500 font-medium">Send Message</p>
                    </div>
                  </div>
                </div>

                {/* Workflow Active Card */}
                <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl border border-black/[0.05] shadow-2xl p-6 sm:p-8 flex items-center gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-gray-900 text-xl sm:text-2xl tracking-tight mb-1">Workflow Active</h4>
                    <p className="text-gray-500 font-medium sm:text-lg break-keep leading-snug">Google Calendar 일정이 생성되면 Slack으로 알림을 보냅니다.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                    <span className="font-bold text-sm">Chat</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Session: 847b4...</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%]">
                      <p className="text-sm text-blue-900 font-medium">내일 오전 9시에 구글 미트 일정 하나 만들어줘. "n8n Korea 세션 발표"로 오전 9시부터 오전 11시30분까지 진행돼.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none mr-auto max-w-[80%]">
                      <p className="text-sm text-gray-700 font-medium">네, 내일 오전 9시부터 오전 11시 30분까지 "n8n Korea 세션 발표" 일정으로 만들었습니다. 해당 일정은 구글 미트로 진행됩니다.</p>
                    </div>
                    <div className="flex items-center border rounded-full px-4 py-2 bg-gray-50">
                       <span className="text-gray-400 text-xs">Type message, or press 'up' for prev one</span>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-inner">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden font-sans">
                  <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                    <span className="font-bold text-xs">[n8nKorea] 2026-04-01 일자 매체별 광고비를 발송 드립니다.</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-8 h-8 rounded-full bg-gray-200" />
                       <div>
                          <p className="text-[10px] font-bold">jgpark1998@gmail.com</p>
                          <p className="text-[10px] text-gray-400">나에게</p>
                       </div>
                    </div>
                    <p className="text-[10px] text-gray-600 mb-4 font-bold">2026-04-01 일자 매체별 광고 데이터 입니다.</p>
                    <ul className="text-[10px] space-y-1 mb-6 font-medium">
                       <li>네이버 : 120000 원</li>
                       <li>카카오 : 85000 원</li>
                       <li>구글 : 150000 원</li>
                       <li>페이스북 : 90000 원</li>
                       <li>인스타그램 : 110000 원</li>
                    </ul>
                    <p className="text-[10px] text-gray-400 mb-4">시각 자료는 첨부파일을 확인해주세요</p>
                    <div className="p-3 border rounded bg-gray-50 flex items-center gap-3">
                       <div className="w-12 h-8 bg-blue-100/50 rounded flex items-end px-1 py-1">
                          <div className="flex-1 bg-blue-400 h-2" />
                          <div className="flex-1 bg-blue-400 h-4 mx-0.5" />
                          <div className="flex-1 bg-blue-400 h-6" />
                       </div>
                       <span className="text-[10px] font-bold">첨부파일 1개</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
      )}

      {/* Slide 4 Section: N8N Value / Book Features */}
      {content.feature?.isEnabled && (
        <section id="features" className="py-24 sm:py-40 px-6 relative overflow-hidden" 
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${theme.pointColor}15 50%, #ffffff 100%)` }}>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-[60px] font-bold sm:leading-[75px] mb-8 tracking-tighter text-gray-900 break-keep">
              {content.feature.title}
            </h2>
            <div className="max-w-4xl mx-auto mb-20 space-y-2">
              {content.feature.benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl sm:text-3xl font-black break-keep text-center leading-tight sm:leading-relaxed"
                  style={{ color: theme.pointColor }}
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4 sm:gap-10">
               <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-black/5">
                  <Zap size={32} className="text-gray-400" />
               </div>
               <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.pointColor }} />
                  ))}
               </div>
               <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4" style={{ borderColor: theme.pointColor }}>
                  <span className="font-black text-2xl" style={{ color: theme.pointColor }}>n8n</span>
               </div>
               <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.pointColor }} />
                  ))}
               </div>
               <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-black/5">
                  <Check size={32} className="text-gray-400" />
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Message Section */}
      <section className="h-[829px] px-6 bg-white overflow-hidden text-center flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-[60px] font-black leading-[1.4] tracking-tighter text-gray-900 break-keep">
              "결국 우리가 원하는 것은<br/>
              더 빠른 속도가 아니라,<br/><br/>
              <span style={{ color: theme.pointColor }}>내 시간을 내가 결정하는 힘</span>입니다"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assistants Section (Slide 5) */}
      {content.assistants?.isEnabled && (
        <section id="assistants" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid opacity-[0.03]" />
          
          {/* Badge Graphic */}
          <motion.div
            initial={{ rotate: -10, opacity: 0, scale: 0.5 }}
            whileInView={{ rotate: -10, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-8 right-4 sm:right-12 sm:top-24 z-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full flex items-center justify-center p-4 sm:p-8 text-center shadow-2xl border-4 sm:border-8 border-white group hover:scale-110 transition-transform duration-500"
            style={{ backgroundColor: theme.pointColor, color: 'white' }}
          >
            <div className="flex flex-col items-center">
              <span className="font-black text-sm sm:text-2xl leading-tight break-keep">
                '최고의 n8n AI 자동화 강의' 독점 예제
              </span>
            </div>
            {/* Inner ring for graphic feel */}
            <div className="absolute inset-1 sm:inset-2 border-2 border-dashed border-white/30 rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="max-w-7xl mx-auto relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
               <div className="space-y-12">
                  <h2 className="text-[60px] font-bold leading-[75px] mb-16 tracking-tighter text-gray-900 break-keep whitespace-pre-line">
                    {content.assistants.title}
                  </h2>
                  <div className="space-y-6">
                    {content.assistants.items.map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 group"
                      >
                         <div className="w-1.5 h-6 bg-gray-200 group-hover:bg-[#ef387a] transition-colors rounded-full" />
                         <span className="font-bold text-2xl sm:text-3xl text-gray-400 group-hover:text-gray-900 transition-colors tracking-tight">
                           {item}
                         </span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-bold text-xl sm:text-2xl text-gray-700 mt-12 break-keep leading-snug">
                    n8n 글로벌 앰배서더가 실무에서 직접 사용하는 최고 수준의 워크플로 제공
                  </p>
               </div>
               
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gray-100 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />
                  <div className="relative bg-[#f2f3f5] rounded-[2.5rem] border border-black/[0.05] shadow-2xl overflow-hidden min-h-[600px] flex flex-col font-sans">
                    {/* Discord Interface (Simulated) */}
                    <div className="flex h-full grow">
                      {/* Discord Main Chat Area */}
                      <div className="grow bg-white flex flex-col min-w-0">
                        {/* Header */}
                        <div className="h-12 border-b border-black/[0.05] flex items-center px-4 justify-between shrink-0">
                          <div className="flex items-center gap-2">
                             <span className="text-gray-400 text-xl font-light">#</span>
                             <span className="text-gray-800 font-bold text-sm">n8n-auto</span>
                          </div>
                        </div>

                        {/* Messages Area */}
                        <div className="grow p-4 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
                           {/* Action Buttons */}
                           <div className="space-y-2">
                              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-black/[0.02] hover:bg-gray-100 transition-colors cursor-pointer group">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white">
                                       <Download size={16} />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">Discord 앱 다운로드하기</span>
                                 </div>
                                 <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500" />
                              </div>
                              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-black/[0.02] hover:bg-gray-100 transition-colors cursor-pointer group">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                                       <Gamepad2 size={16} />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">첫 앱 추가하기</span>
                                 </div>
                                 <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500" />
                              </div>
                           </div>

                           {/* Date Separator */}
                           <div className="relative flex items-center justify-center my-2">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-red-200/50"></div>
                              </div>
                              <div className="relative flex items-center gap-2 bg-white px-4">
                                <span className="text-[10px] font-bold text-red-400/80">2025년 11월 6일</span>
                                <span className="bg-red-500 text-white text-[8px] px-1 rounded-sm font-black">NEW</span>
                              </div>
                           </div>

                           {/* Spidey Bot Message */}
                           <div className="flex gap-4">
                              <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                                <div className="text-white">
                                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M19.27 4.51a11.19 11.19 0 0 0-2.75-.85 1.13 1.13 0 0 0-.12.24 8.78 8.78 0 0 0-.5 1.05 10.3 10.3 0 0 0-4.8 0 8.35 8.35 0 0 0-.5-1.05 1.14 1.14 0 0 0-.12-.24 11.2 11.2 0 0 0-2.75.85 1.13 1.13 0 0 0-.47.88 12.87 12.87 0 0 0 1.93 5.43c.12.2.22.4.34.6a11.37 11.37 0 0 0 3.39 1.7 1.1 1.1 0 0 0 .23-.07c.29-.12.56-.25.82-.41l.13-.1a8.4 8.4 0 0 0 .73-.55c.19-.16.36-.31.54-.48.01 0 .02 0 .02-.01a11.32 11.32 0 0 0 3.39-1.7c.12-.2.22-.4.34-.6a12.87 12.87 0 0 0 1.93-5.43 1.13 1.13 0 0 0-.47-.88zM8.52 14.91a2.3 2.3 0 0 1-2.14-2.4 2.3 2.3 0 0 1 2.14-2.4c1.2 0 2.15 1.08 2.12 2.4 0 1.32-.93 2.4-2.12 2.4zm6.96 0a2.3 2.3 0 0 1-2.14-2.4 2.3 2.3 0 0 1 2.14-2.4c1.2 0 2.15 1.08 2.12 2.4 0 1.32-.93 2.4-2.12 2.4z"/></svg>
                                </div>
                              </div>
                              <div className="flex flex-col min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-gray-800 font-bold text-sm">Spidey Bot</span>
                                  <span className="bg-[#5865F2] text-white text-[9px] px-1 rounded-sm font-bold flex items-center gap-[2px]">
                                    <Check size={8} strokeWidth={3} /> 앱
                                  </span>
                                  <span className="text-gray-400 text-[10px]">오전 11:42</span>
                                </div>
                                <div className="text-gray-700 text-sm space-y-3 break-keep leading-relaxed">
                                  <div className="font-bold flex items-center gap-2 text-gray-900">
                                    NVDA | HOLD <div className="w-3 h-3 rounded-full bg-green-500" /> — 현재가 $195.20 vs 평단 $180 (+8.44%)
                                  </div>
                                  <div className="flex items-start gap-1.5 text-xs text-gray-600">
                                    <span className="inline-block p-1 bg-yellow-500/10 rounded-full mt-0.5"><Compass size={12} className="text-yellow-600" /></span>
                                    <p>근거: 견조한 성장세와 Morningstar의 상향된 $225 목표가가, 다가오는 실적 발표(11/19)가 강력한 촉매로 예상되어 현 포지션 유지.</p>
                                  </div>

                                  <div className="space-y-1.5">
                                    <p className="font-bold text-xs flex items-center gap-2">📊 뉴스 요약:</p>
                                    <div className="space-y-1 pr-4">
                                      <div className="flex items-start gap-2 text-[11px]">
                                        <span className="text-gray-400">•</span>
                                        <p className="flex items-center gap-1.5"><TrendingDown size={14} className="text-blue-500 shrink-0" /> 시간 외 거래는 활발했으나 시장 상승에도 주가는 소폭 하락하며 단기 변동성 관찰.</p>
                                      </div>
                                      <div className="flex items-start gap-2 text-[11px]">
                                        <span className="text-gray-400">•</span>
                                        <p className="flex items-center gap-1.5"><Rocket size={14} className="text-purple-500 shrink-0" /> AI 분야 압도적 지배력으로 $5조~$8.5조의 잠재적 시장 가치에 대한 기대감 증폭.</p>
                                      </div>
                                      <div className="flex items-start gap-2 text-[11px]">
                                        <span className="text-gray-400">•</span>
                                        <p className="flex items-center gap-1.5"><TrendingUp size={14} className="text-red-500 shrink-0" /> 월가 애널리스트들은 긍정적 시각을 유지하며 Morningstar 목표가를 $225로 상향 제시.</p>
                                      </div>
                                      <div className="flex items-start gap-2 text-[11px]">
                                        <span className="text-gray-400">•</span>
                                        <p className="flex items-center gap-1.5"><AlertTriangle size={14} className="text-yellow-600 shrink-0" /> 높은 P/E(49.59) 및 AI 과열 우려 속 미·중 반도체 규제와 경쟁사(AMD 등) 동향 주시.</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-1.5">
                                    <p className="font-bold text-xs flex items-center gap-2">✅ 실행 체크리스트:</p>
                                    <div className="space-y-1 pl-4">
                                      <p className="text-[11px] flex items-center gap-2 font-medium">• 진입: <span className="text-red-500 font-black">X</span> 높은 P/E로 추가 매수는 보류.</p>
                                      <p className="text-[11px] flex items-start gap-2 font-medium">
                                        <span className="shrink-0">• 청산: <span className="text-blue-600 text-xs">📉</span></span> 
                                        <span>평단 $180 이탈 시 손절 고려, $225 이상 도달 시 부분 익절. 실적 미달 시 즉시 청산 검토.</span>
                                      </p>
                                      <p className="text-[11px] flex items-center gap-2 font-medium">• 관망: <span className="text-blue-500 text-xs">📊</span> $190 이상 유지 및 11/19 실적 발표 결과 확인 전까지 현 포지션 HOLD.</p>
                                    </div>
                                  </div>

                                  <div className="pt-2 flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
                                    <Timer size={12} /> 데이터 기준: 2025-11-06 11:23:10 KST
                                  </div>
                                </div>
                              </div>
                           </div>
                        </div>

                        {/* Chat Bar */}
                        <div className="p-4 shrink-0 border-t border-black/[0.02]">
                          <div className="bg-[#ebedef] rounded-xl px-4 py-3 text-gray-400 text-sm flex items-center justify-between">
                            <div className="flex items-center gap-4">
                               <PlusCircle size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                               <span className="text-[13px] font-medium opacity-60">#n8n-auto에 메시지 보내기</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500">
                               <Gift size={20} className="hover:text-gray-700 transition-colors" />
                               <Smile size={20} className="hover:text-gray-700 transition-colors" />
                               <LucideImage size={20} className="hover:text-gray-700 transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Proof Section (Slide 6) */}
      {content.proof?.isEnabled && (
        <section id="proof" className="py-24 sm:py-40 px-6 relative overflow-hidden" 
          style={{ background: `linear-gradient(180deg, #ffffff 0%, ${theme.pointColor}15 50%, #ffffff 100%)` }}>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl font-black mb-24 tracking-tighter text-gray-900 break-keep">
              이미 수많은 독자들이<br className="md:hidden" /> 경험하고 있습니다
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.proof.testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-black/[0.03] shadow-sm text-left flex flex-col justify-between">
                  <p className="text-gray-600 mb-10 leading-relaxed font-medium italic break-keep text-lg">"{t.text}"</p>
                  <div>
                    <p className="font-black text-gray-900">{t.name}</p>
                    <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section (Slide 7) */}
      <section id="cta" className="py-56 px-6 relative overflow-hidden flex flex-col items-center text-center bg-white">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-[100vw] h-[100vw] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${theme.pointColor} 0%, transparent 60%)`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
           <h2 className="text-2xl sm:text-4xl font-black mb-10 text-gray-600 break-keep">
            더이상 업무에 끌려 다니지 마세요
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-20 tracking-tighter leading-[1.1] break-keep" style={{ color: theme.pointColor }}>
            주도적인 내일을 위한 n8n,<br /> 지금 바로 시작하세요
          </h2>
          
          <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-xl px-4">
            {content.cta.buttons.map((btn, i) => {
              const isPrimary = i === 0;
              return (
                <motion.a 
                  key={i} 
                  {...getLinkProps(btn.url)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "group relative px-10 py-6 sm:py-8 rounded-full font-black text-xl sm:text-3xl tracking-tighter shadow-2xl overflow-hidden text-center transition-all duration-300",
                    isPrimary ? "text-white" : "text-gray-900 bg-white border-2"
                  )}
                  style={{ 
                    backgroundColor: isPrimary ? theme.pointColor : 'white',
                    borderColor: isPrimary ? 'transparent' : theme.pointColor
                  }}
                >
                  <span className="relative z-10">{btn.label}</span>
                  {isPrimary && (
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  )}
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-black/[0.05] bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
          <p className="text-[15px] font-black tracking-[0.2em] text-gray-400 uppercase">
             ⓒ 2026. 리코멘드 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
