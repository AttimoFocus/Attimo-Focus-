/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, CircleDot, Settings, ArrowRight, MessageCircle } from 'lucide-react';
import React from 'react';

const FadeInUp: React.FC<{ children: React.ReactNode; delay?: number; duration?: number; className?: string }> = ({ children, delay = 0, duration = 1.2, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle: React.FC<{ en: string; ja: string }> = ({ en, ja }) => (
  <div className="flex flex-col items-center mb-20 md:mb-28 relative">
    <motion.span 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 0.04, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-[-30%] md:top-[-40%] font-en text-6xl md:text-8xl lg:text-9xl text-slate-dark tracking-widest pointer-events-none select-none z-0"
    >
      {en}
    </motion.span>
    <FadeInUp className="z-10 flex flex-col items-center">
      <h2 className="font-serif text-3xl md:text-4xl text-slate-dark tracking-widest mb-4">
        {ja}
      </h2>
      <div className="w-px h-12 md:h-16 bg-gold opacity-40 mt-2"></div>
    </FadeInUp>
  </div>
);

export default function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen overflow-hidden selection:bg-gold selection:text-white bg-base-light font-sans text-slate-dark">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-24 bg-base-blue text-white overflow-hidden">
        
        {/* Header Logo */}
        <div className="absolute top-8 left-6 md:top-10 md:left-10 z-50 flex flex-col items-start font-en leading-[1.1]">
          <span className="text-[26px] md:text-[32px] tracking-widest text-white drop-shadow-sm font-light">Attimo</span>
          <span className="text-[26px] md:text-[32px] tracking-widest text-white drop-shadow-sm font-light ml-8 relative">
            Focus
            <Star className="absolute -top-1 -right-4 w-3 h-3 opacity-60" fill="currentColor" strokeWidth={0} />
          </span>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {/* Subtle light flares */}
          <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] sm:w-[800px] sm:h-[800px] bg-white opacity-20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] sm:w-[700px] sm:h-[700px] bg-white opacity-10 rounded-full blur-[100px]"></div>
          
          {/* Circular Image Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: [0, 0.4, 0.4, 0.85], scale: [0.95, 1, 1, 1] }}
            transition={{ duration: 4.5, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full overflow-hidden flex items-center justify-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-slate-dark opacity-30 mix-blend-multiply z-10"></div>
            <img src="/DSC05164.JPG" alt="Background" className="w-full h-full object-cover object-[70%_30%]" />
          </motion.div>

          {/* Large Arc Text (Simulation of reference design) */}
          <div className="absolute top-[5%] -right-[15%] w-[130%] h-[130%] rounded-full border-[1px] border-white border-opacity-20 pointer-events-none"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] rounded-full border-[1px] border-white border-opacity-10 pointer-events-none"></div>

          <div className="absolute inset-0 border-[1px] border-white border-opacity-10 m-4 md:m-8 rounded-sm"></div>

          {/* Rotating Curved Text */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[1200px] sm:h-[1200px] pointer-events-none opacity-10 mix-blend-overlay"
          >
            <svg viewBox="0 0 1000 1000" className="w-full h-full text-white overflow-visible">
              <defs>
                <path id="hugeCirclePath" d="M 500, 500 m -450, 0 a 450,450 0 1,1 900,0 a 450,450 0 1,1 -900,0" />
              </defs>
              <text className="font-en text-[40px] tracking-[0.3em] font-light" fill="currentColor">
                <textPath href="#hugeCirclePath" startOffset="0%">
                  SYSTEM DESIGN & AUTOMATION • ATTIMO FOCUS • SYSTEM DESIGN & AUTOMATION • ATTIMO FOCUS • 
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>

        <div className="max-w-5xl w-full text-center relative z-0 flex flex-col items-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4.5, times: [0, 0.15, 0.8, 1], delay: 0 }}
          >
            <p className="font-serif text-[13px] md:text-sm tracking-[0.3em] text-white opacity-90 mb-8 md:mb-10 drop-shadow-md">
              <span className="inline-block">手作業の予約管理・</span><wbr /><span className="inline-block">問い合わせ対応からの解放</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -20] }}
            transition={{ duration: 4.5, times: [0, 0.15, 0.8, 1], delay: 0.4 }}
          >
            <h1 className="font-serif text-[24px] sm:text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.8] md:leading-[1.7] text-white mb-10 md:mb-12 tracking-[0.12em] md:tracking-[0.15em] drop-shadow-2xl">
              <span className="inline-block">業務自動化と</span><span className="inline-block">SNS集客を</span><br />
              <span className="inline-block">二人三脚で構築する</span><br />
              <span className="inline-block">専門パートナー</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4.5, times: [0, 0.15, 0.8, 1], delay: 0.6 }}
          >
            <div className="flex flex-col items-center mb-16 md:mb-20">
              <span className="text-lg md:text-xl tracking-widest font-serif opacity-100 drop-shadow-md">
                草賀 大輝 <span className="font-en text-sm opacity-80 ml-3 tracking-widest">shon</span>
              </span>
            </div>
          </motion.div>
          
          <FadeInUp delay={0.8}>
            <a href="https://lin.ee/uevZMYa" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm border border-white border-opacity-60 text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-serif text-sm md:text-base tracking-[0.1em] overflow-hidden transition-all duration-500 hover:border-opacity-100 hover:bg-white hover:text-slate-dark hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] shadow-lg">
              無料の自動化診断はこちら（公式LINE）
              <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" strokeWidth={1} />
            </a>
          </FadeInUp>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="font-en text-[10px] uppercase tracking-[0.3em] opacity-60">Scroll</span>
          <div className="w-[1px] h-12 bg-white opacity-30 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[50%] bg-white opacity-80"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Concept Section */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 relative z-10 bg-base-light">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-[32px] mb-10 text-slate-dark leading-[2] tracking-widest">
              予約対応の負担を手放し、<br/>
              限りある家族との時間を。
            </h3>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="space-y-8 md:space-y-10 text-[14px] md:text-base opacity-80 leading-[2.4] md:leading-[2.5] tracking-widest font-light text-left md:text-center inline-block w-full max-w-[90%] md:max-w-full mx-auto">
              <p>
                毎日頻繁に鳴る電話。<br className="md:hidden"/>
                DMでの手作業による予約対応。<br/>
                日々の業務に、<br className="md:hidden"/>疲弊していませんか？
              </p>
              <p>
                気がつけば、<br className="md:hidden"/>目の前のお客様に向き合う時間や、<br/>
                家族と過ごす大切な時間までもが<br className="md:hidden"/>奪われている…。<br/>
                そんなお悩みはありませんか。
              </p>
              <p>
                私たちは、<br className="md:hidden"/>AI自動応答による問い合わせの削減から、<br/>
                スプレッドシート連携での<br className="md:hidden"/>「重複ゼロ」完全自動予約まで。<br/>
                業務全体を効率化する仕組みを<br className="md:hidden"/>ご提供します。
              </p>
              <p>
                負担を手放し、<br className="md:hidden"/>本当に大切なことに集中できる環境をつくる。<br/>
                それが私たちの使命です。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 3. Program Section */}
      <section className="py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-ice-blue/30 relative">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-dark/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto">
          <SectionTitle en="PROGRAM" ja="半年間で業務効率化・自動化マスターへ" />
          
          <FadeInUp>
            <div className="text-center mb-24">
              <p className="opacity-70 text-[14px] md:text-base tracking-widest leading-[2.4]">立川・多摩地域で直接指導。<br className="md:hidden"/>自走できるまで対面とオンラインで伴走します。</p>
            </div>
          </FadeInUp>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[27px] md:left-[39px] top-6 bottom-6 w-px bg-gold opacity-20"></div>
            
            <div className="space-y-20 md:space-y-28">
              {[
                { 
                  step: '01', 
                  title: '業務効率化システム構築', 
                  desc: '美容院やエステサロンにも対応。スプレッドシート顧客管理×Googleカレンダーの重複ゼロ完全自動予約システムを構築します。',
                  hasVideo: true 
                },
                { step: '02', title: '自動受付・AI応答連携', desc: '公式LINEやSNSを活用し、お問い合わせ対応の削減からWeb予約システムへ誘導するシームレスで負担のない流れを作ります。' },
                { step: '03', title: '振り返りと改善の伴走', desc: '利用状況を見ながら一緒に運用を改善。電話や手作業でのDM対応をなくし、放置でも予約対応が完結する体制へと磨き上げます。' },
                { step: '04', title: '対面指導・自走卒業', desc: '単なるツール導入で終わらせず、対面での技術指導を通じてご自身で自信を持って操作・運用できる状態になってから卒業します。' }
              ].map((item, idx) => (
                <FadeInUp key={item.step} delay={idx * 0.15}>
                  <div className="relative flex items-start pl-20 md:pl-32 group">
                    <div className="absolute left-0 top-0 w-14 h-14 md:w-20 md:h-20 bg-base-light rounded-full border-[1px] border-gold border-opacity-30 flex items-center justify-center transition-all duration-700 group-hover:border-opacity-100 group-hover:bg-white z-10">
                      <span className="font-en text-gold text-lg md:text-xl tracking-widest font-light">{item.step}</span>
                    </div>
                    <div className="pt-2 md:pt-6 w-full">
                      <h3 className="font-serif text-xl md:text-2xl mb-4 text-slate-dark tracking-widest">{item.title}</h3>
                      <p className="opacity-70 leading-[2.2] text-[14px] md:text-[15px] tracking-wider font-light">{item.desc}</p>
                      
                      {item.hasVideo && (
                        <div className="mt-10 mb-4 w-full max-w-[280px] rounded-[16px] overflow-hidden shadow-[0_15px_30px_rgba(61,52,43,0.12)] border border-slate-dark border-opacity-[0.03] relative aspect-[9/16] bg-base-blue/30 group-hover:shadow-[0_20px_40px_rgba(61,52,43,0.18)] transition-all duration-700">
                          <iframe 
                            src="https://www.youtube.com/embed/SLjZm3VqcSM?rel=0" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Profile Section (Story) */}
      <section className="py-32 md:py-40 px-6 sm:px-12 lg:px-24 relative z-10 bg-base-light">
        <div className="max-w-6xl mx-auto">
          <SectionTitle en="PROFILE" ja="代表挨拶" />
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-10">
            <div className="w-full lg:w-[45%] order-2 lg:order-1 relative">
              <FadeInUp delay={0.3}>
                <div className="relative aspect-[3/4] w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
                  <div className="absolute inset-0 border border-gold border-opacity-30 rounded-t-[100px] rounded-b-[10px] transform translate-x-4 translate-y-4"></div>
                  <div className="absolute inset-0 bg-base-blue/30 rounded-t-[100px] rounded-b-[10px] overflow-hidden flex items-center justify-center shadow-lg group">
                    <img 
                      src="/IMG_7264.JPG" 
                      alt="代表挨拶" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </FadeInUp>
            </div>
            
            <div className="w-full lg:w-[55%] order-1 lg:order-2 flex flex-col">
              <FadeInUp>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-[32px] mb-12 text-slate-dark leading-[1.8] tracking-widest">
                  元・AI嫌いだからこそ、<br/>寄り添えること。
                </h3>
              </FadeInUp>
              
              <FadeInUp delay={0.2}>
                <div className="space-y-8 text-[14px] md:text-base opacity-80 leading-[2.4] tracking-wider font-light">
                  <p>
                    私自身、元々はAIや複雑なITツールに<br className="md:hidden"/>強い苦手意識がありました。
                  </p>
                  <p>
                    だからこそ、<br className="md:hidden"/>ITに不慣れな方でも直感的に操作でき、<br/>
                    「本当に必要な機能だけ」を厳選した<br className="md:hidden"/>システムづくりを大切にしています。
                  </p>
                  <p>
                    自動化によって生まれた時間は、<br className="md:hidden"/>ぜひご家族や大切な方と<br className="md:hidden"/>過ごすために使ってください。<br/>
                    システム構築を通じて、<br className="md:hidden"/>皆さまの本来の笑顔を取り戻す<br className="md:hidden"/>お手伝いをします。
                  </p>
                  <div className="pt-6 pb-2 border-t border-gold border-opacity-20 md:border-none md:pt-2">
                    <p className="font-serif text-slate-dark opacity-100 text-[16px] md:text-xl tracking-widest leading-[2.2] md:leading-[1.8] mt-2 border-l-[3px] border-gold pl-5 md:border-none md:pl-0">
                      ツールを提供して終わりではなく、<br />
                      専属トレーナーとして<br className="md:hidden"/>隣で温かく伴走します。
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Achievement Section */}
      <section className="py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-ice-blue/30 relative">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-dark/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <SectionTitle en="ACHIEVEMENTS" ja="確かな実績と、自走する仕組み" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-10">
            {/* Card 1 */}
            <FadeInUp delay={0.2} className="h-full">
              <div className="bg-white/60 backdrop-blur-sm rounded-[2px] p-8 md:p-10 border border-slate-dark border-opacity-[0.08] h-full flex flex-col group hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(61,52,43,0.05)] transition-all duration-700">
                <div className="mb-8 text-gold opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 origin-left">
                  <Star className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl tracking-widest mb-6 text-slate-dark">自動化による業務削減実績</h3>
                <p className="text-[14px] leading-[2.4] opacity-70 tracking-wider font-light mb-6">
                  Threads等のSNSと公式LINE・<br className="md:hidden"/>予約システムを連携構築。<br/>週221万回の閲覧を獲得しつつ、<br className="md:hidden"/>月50件の新規予約対応を含む<br className="md:hidden"/>関連業務を完全自動化。
                </p>
                
                <div className="space-y-5 mb-8 border-t border-gold border-opacity-20 pt-6">
                  <div className="flex justify-between items-start text-[14px] gap-2">
                    <span className="opacity-70 leading-[1.5]">予約対応時間削減<br/><span className="text-[11.5px] opacity-80">（DM対応やLINEでのやり取り）</span></span>
                    <span className="font-serif text-gold font-bold whitespace-nowrap mt-0.5">月40時間から0時間へ</span>
                  </div>
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="opacity-70">重複予約ミス</span>
                    <span className="font-serif text-gold font-bold">月5件から0件へ</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="opacity-70">お客様満足度向上</span>
                    <span className="font-serif text-gold font-bold">24時間自動対応</span>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <img src="/screenshot-1.png" alt="SNS自動投稿と分析データ" className="w-full h-auto rounded-[2px] shadow-sm border border-slate-dark border-opacity-[0.05] object-cover" />
                </div>
              </div>
            </FadeInUp>
            
            {/* Card 2 */}
            <FadeInUp delay={0.4} className="h-full">
              <div className="bg-white/60 backdrop-blur-sm rounded-[2px] p-8 md:p-10 border border-slate-dark border-opacity-[0.08] h-full flex flex-col group hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(61,52,43,0.05)] transition-all duration-700">
                <div className="mb-8 text-[#728E66] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 origin-left">
                  <CircleDot className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl tracking-widest mb-6 text-slate-dark">AI×SNSコーチング</h3>
                <p className="text-[14px] leading-[2.4] opacity-70 tracking-wider font-light mb-6">
                  ITに苦手意識がある方のための<br className="md:hidden"/>スクール運営。<br/>総生徒数は200名以上。
                </p>
                <div className="space-y-3 mb-8 border-t border-gold border-opacity-20 pt-6">
                  <p className="text-[13.5px] font-medium opacity-80 tracking-widest">主な生徒実績</p>
                  <ul className="space-y-3 text-[13px] opacity-70 leading-[2] list-none tracking-wider font-light">
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gold before:rounded-full">
                      Threads開始1ヶ月でフォロワー500人、<br className="md:hidden"/>商圏地域のフォロー率70％
                    </li>
                    <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gold before:rounded-full">
                      開始1週間で閲覧数100万越え、<br className="md:hidden"/>コーチング2ヶ月目でAI案件獲得
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-8">
                  <img src="/screenshot-2.png" alt="お客様のご予約フォーム" className="w-full h-auto rounded-[2px] shadow-sm border border-slate-dark border-opacity-[0.05] object-cover" />
                </div>
              </div>
            </FadeInUp>
            
            {/* Card 3 */}
            <FadeInUp delay={0.6} className="h-full">
              <div className="bg-white/60 backdrop-blur-sm rounded-[2px] p-8 md:p-10 border border-slate-dark border-opacity-[0.08] h-full flex flex-col group hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(61,52,43,0.05)] transition-all duration-700">
                <div className="mb-8 text-slate-dark opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 origin-left">
                  <Settings className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl tracking-widest mb-6 text-slate-dark">完全自動予約管理</h3>
                <p className="text-[14px] leading-[2.4] opacity-70 tracking-wider font-light">
                  スプレッドシート連携による<br className="md:hidden"/>完全自動予約システム。<br/>カレンダー空き枠のみを自動判定し、<br className="hidden xl:block"/>重複予約を100%防止。<br/>変更やキャンセルも<br className="md:hidden"/>お問い合わせ不要で自動対応。
                </p>
                <div className="mt-auto pt-8 space-y-3">
                  <img src="/screenshot-3.png" alt="完全自動予約システム管理データ" className="w-full h-auto rounded-[2px] shadow-sm border border-slate-dark border-opacity-[0.05] object-cover" />
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 7. Plans Section */}
      <section className="py-32 md:py-40 px-6 sm:px-12 lg:px-24 relative z-10 bg-base-light">
        <div className="max-w-6xl mx-auto">
          <SectionTitle en="PLANS" ja="ご提供プラン" />
          
          <div className="space-y-10 md:space-y-12 mt-16 md:mt-24">
            
            {/* Plan 1: Main Plan */}
            <FadeInUp delay={0.2}>
              <div className="bg-slate-dark text-white border border-slate-dark p-6 sm:p-8 md:p-12 rounded-[2px] flex flex-col lg:flex-row gap-7 md:gap-8 lg:gap-12 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="lg:w-1/3 flex flex-col justify-center z-10">
                  <span className="text-gold font-serif text-[11px] md:text-xs tracking-widest mb-3 block border-l-2 border-gold pl-2">MAIN PLAN</span>
                  <h3 className="font-serif text-[18px] md:text-2xl tracking-widest text-white mb-4 leading-snug">
                    <span className="inline-block">予約自動化システム導入・</span><wbr /><span className="inline-block">カスタマイズパッケージ</span>
                  </h3>
                  <p className="text-[13.5px] md:text-[14.5px] tracking-widest opacity-90 mb-6 font-light leading-[2.4]">
                    深夜の対応や手作業での転記を手放し、<br className="md:hidden"/>本来の仕事と笑顔でお客様に向き合いたい。<br/>その想いを実現するための、<br className="md:hidden"/>ビジネスを自走させる<br className="md:hidden"/>一生モノの土台構築プランです。
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="font-en text-3xl tracking-wider text-white">¥450,000 <span className="text-xs md:text-sm text-white opacity-60">（税別）</span></div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-px h-px lg:h-auto bg-white opacity-20"></div>
                <div className="lg:w-2/3 flex flex-col justify-center space-y-6 z-10">
                  <div className="text-[14px] md:text-[15px] leading-[2.4] tracking-wider opacity-90 font-light">
                    <p>
                      広く一般に普及しているクラウドサービスを活用した<br className="md:hidden"/>設定・カスタマイズ・技術指導までを<br className="md:hidden"/>ワンストップでサポート。<br/>予約導線の完全自動化により、<br className="md:hidden"/>劇的な業務効率化を実現します。
                    </p>
                  </div>

                  <div className="bg-white text-slate-dark p-6 md:p-7 rounded-[2px] border border-slate-dark border-opacity-5 relative">
                    <div className="space-y-5">
                       <p className="font-serif text-gold border-b border-slate-dark border-opacity-10 pb-3 tracking-widest">提供内容と内訳</p>
                       
                       <div className="space-y-4 text-[13.5px] md:text-[14.5px] font-light leading-[1.8] opacity-90">
                          <div>
                            <div className="flex justify-between font-medium mb-1">
                              <span>■ Googleスプレッドシート設定・予約連携カスタマイズ</span>
                              <span className="font-en tracking-widest">¥150,000</span>
                            </div>
                            <p className="opacity-80 text-[12.5px] md:text-[13px]">カレンダー空き枠の自動判定から顧客の自動リスト化までを構築し、手作業での予約対応と重複予約ミスをゼロにします。</p>
                          </div>
                          
                          <div>
                            <div className="flex justify-between font-medium mb-1">
                              <span>■ LINE Official Account設定・自動応答構築</span>
                              <span className="font-en tracking-widest">¥150,000</span>
                            </div>
                            <p className="opacity-80 text-[12.5px] md:text-[13px]">深夜や施術中の問い合わせに対してAIが即時回答。予約画面へシームレスに誘導し、お客様の取り逃がしを確実に防ぎます。</p>
                          </div>

                          <div>
                            <div className="flex justify-between font-medium mb-1">
                              <span>■ システム定着に向けた運用技術指導（6ヶ月）</span>
                              <span className="font-en tracking-widest">¥150,000</span>
                            </div>
                            <p className="opacity-80 text-[12.5px] md:text-[13px]">導入して終わりではなく、スタッフ様が迷わず操作し業務効率化が確実に実現するまで、対面とオンラインで丁寧にサポートします。</p>
                          </div>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeInUp>

            {/* Plan 2: Option Plan */}
            <FadeInUp delay={0.3}>
              <div className="bg-white border text-slate-dark border-slate-dark border-opacity-10 p-6 sm:p-8 md:p-12 rounded-[2px] flex flex-col lg:flex-row gap-7 md:gap-8 lg:gap-12 hover:shadow-[0_20px_40px_-15px_rgba(61,52,43,0.05)] transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-dark opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <span className="text-slate-dark opacity-60 font-serif text-[11px] md:text-xs tracking-widest mb-3 block border-l-2 border-slate-dark border-opacity-20 pl-2">OPTION</span>
                  <h3 className="font-serif text-xl md:text-2xl tracking-widest mb-4 leading-snug">
                    <span className="inline-block">業務効率化・AI運用</span><br/><span className="inline-block">コンサルティングパッケージ</span><br/><span className="text-[14px] md:text-[15px] mt-2 block opacity-80 tracking-widest">（並走オプション）</span>
                  </h3>
                  <p className="text-[13.5px] md:text-[14.5px] tracking-widest opacity-80 mb-6 leading-[2.4] font-light">
                    メインプランのシステム導入効果を最大化し、<br className="md:hidden"/>あなた自身が最新AIを使いこなして<br className="md:hidden"/>自走できる自信とスキルを育てます。
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="font-en text-2xl tracking-wider text-gold">¥250,000 <span className="text-xs md:text-sm text-slate-dark opacity-60">（税別）</span></div>
                      <p className="text-[11px] md:text-xs font-serif tracking-widest opacity-70 mt-3 border-l-2 border-slate-dark border-opacity-20 pl-2">期間：半年間（月2回の個別コーチング）</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-px h-px lg:h-auto bg-slate-dark opacity-10"></div>
                <div className="lg:w-2/3 flex flex-col justify-center space-y-6">
                  <div className="text-[14.5px] md:text-[15.5px] leading-[2.2] tracking-wider text-slate-dark opacity-80">
                    <span className="font-serif tracking-widest border-b border-gold border-opacity-30 pb-1 mb-5 inline-block">共に歩むための提供内容</span>
                    <ul className="space-y-6 md:space-y-5 mt-1 ml-1 text-[14px] md:text-[15px] font-light">
                      <li className="flex items-start">
                        <span className="text-gold mr-2 mt-[2px]">■</span>
                        <div>
                          Geminiを活用した投稿作成とスプレッドシート管理<br/>
                          <span className="text-[13.5px] md:text-[14px] opacity-80 mt-1.5 block leading-[1.8]">アカウント凍結リスクのある完全自動化ではなく、最新AIであなたらしい投稿文のベースを作成し、シートで効率よく一元管理する安全な運用手法を構築します。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2 mt-[2px]">■</span>
                        <div>
                          ランディングページ修正など日常業務のAI活用スキル習得<br/>
                          <span className="text-[13.5px] md:text-[14px] opacity-80 mt-1.5 block leading-[1.8]">外部業者に依存せず、ご自身でサイトの文章改善や日々の業務にAIを使いこなせる一生モノの自走スキルを育てます。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2 mt-[2px]">■</span>
                        <div>
                          立川・多摩地域密着の徹底伴走（月2回の個別コーチング）<br/>
                          <span className="text-[13.5px] md:text-[14px] opacity-80 mt-1.5 block leading-[1.8]">オンラインだけでなく現場に足を運び、SNSの閲覧数UPから実際の集客導線まで数字を見ながら直接アドバイス。自力で集客をコントロールできる状態へと導きます。</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Plan 4: AI Support */}
            <FadeInUp delay={0.4}>
              <div className="bg-white border border-slate-dark border-opacity-10 p-6 sm:p-8 md:p-12 rounded-[2px] flex flex-col lg:flex-row gap-7 md:gap-8 lg:gap-12 hover:shadow-[0_20px_40px_-15px_rgba(61,52,43,0.05)] transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-dark opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-xl md:text-2xl tracking-widest text-slate-dark mb-4">AI伴走サポート</h3>
                  <p className="text-[13.5px] md:text-[14.5px] tracking-widest opacity-80 mb-6 font-light leading-[2.2]">
                    システム導入で生まれた時間を使い、ビジネスをさらに加速させたい方のための継続コーチング環境です。<br/>
                    テキスト生成はもちろん、最新の動画生成AIの活用やGoogleツールの高度な連携など、事業者として「AIを使いこなす力」を育てます。
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-[13.5px] font-medium opacity-80 tracking-widest mb-3">こんなご相談、いつでもお待ちしています</p>
                    <ul className="space-y-2 text-[12.5px] md:text-[13px] opacity-70 leading-[1.8] list-none tracking-wider font-light">
                      <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[3px] before:h-[3px] before:bg-gold before:rounded-full">
                        最新の動画生成AIを使って、自社のPR動画やSNSコンテンツを効率よく作りたい
                      </li>
                      <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[3px] before:h-[3px] before:bg-gold before:rounded-full">
                        自分のビジネスに使える新しいAIツールがないか、定期的に情報をアップデートしてほしい
                      </li>
                      <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[3px] before:h-[3px] before:bg-gold before:rounded-full">
                        AIを活用して、新しい案件を獲得するための戦略を一緒に練りたい
                      </li>
                      <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[3px] before:h-[3px] before:bg-gold before:rounded-full">
                        単なる作業の自動化から一歩進んで、自社のサービスをもっと魅力的にするアイデアを壁打ちしたい
                      </li>
                    </ul>
                  </div>

                  <p className="text-[12.5px] md:text-[13px] leading-[2] tracking-wider text-slate-dark opacity-70 mt-auto">
                    ※AI機能等の利用料が発生する場合は、各自での実費負担となります。
                  </p>
                </div>
                <div className="w-full lg:w-px h-px lg:h-auto bg-slate-dark opacity-10"></div>
                <div className="lg:w-2/3 flex flex-col justify-center space-y-8">
                  <div className="space-y-2 relative before:absolute before:left-[-16px] before:top-2 before:w-1 before:h-1 before:bg-gold before:rounded-full ml-4">
                    <p className="text-[14px] md:text-[15px] font-serif tracking-widest text-slate-dark opacity-90">
                      週1回コース
                    </p>
                    <p className="text-[14px] leading-[2.2] tracking-wider text-slate-dark opacity-80 mb-1">
                      <span className="font-en text-gold text-lg tracking-widest mr-1">50,000円</span>/月
                    </p>
                    <p className="text-[12.5px] md:text-[13px] opacity-70 leading-[1.8] tracking-wider font-light">
                      最速でAIスキルを習得し、案件獲得レベルまで一気に引き上げたい方向けの徹底コーチング
                    </p>
                  </div>
                  <div className="space-y-2 relative before:absolute before:left-[-16px] before:top-2 before:w-1 before:h-1 before:bg-gold before:rounded-full ml-4">
                    <p className="text-[14px] md:text-[15px] font-serif tracking-widest text-slate-dark opacity-90">
                      月2回コース
                    </p>
                    <p className="text-[14px] leading-[2.2] tracking-wider text-slate-dark opacity-80 mb-1">
                      <span className="font-en text-gold text-lg tracking-widest mr-1">30,000円</span>/月
                    </p>
                    <p className="text-[12.5px] md:text-[13px] opacity-70 leading-[1.8] tracking-wider font-light">
                      新しいAIツールの活用法を定期的に学び、自社のビジネスへ着実に落とし込んでいく標準コース
                    </p>
                  </div>
                  <div className="space-y-2 relative before:absolute before:left-[-16px] before:top-2 before:w-1 before:h-1 before:bg-gold before:rounded-full ml-4">
                    <p className="text-[14px] md:text-[15px] font-serif tracking-widest text-slate-dark opacity-90">
                      月1回コース
                    </p>
                    <p className="text-[14px] leading-[2.2] tracking-wider text-slate-dark opacity-80 mb-1">
                      <span className="font-en text-gold text-lg tracking-widest mr-1">15,000円</span>/月
                    </p>
                    <p className="text-[12.5px] md:text-[13px] opacity-70 leading-[1.8] tracking-wider font-light">
                      最新のAIトレンドのキャッチアップや、月1回のペースでじっくり壁打ちや相談をしたい方向け
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* 8. CTA & Footer */}
      <section id="contact" className="pt-32 pb-16 px-6 sm:px-12 lg:px-24 bg-base-blue relative mt-16 md:mt-24 text-white">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeInUp>
            <div className="font-en text-gold text-sm tracking-[0.3em] mb-8 drop-shadow-sm">CONTACT</div>
            <p className="font-serif text-[22px] md:text-[28px] mb-12 leading-[2.2] tracking-widest text-white drop-shadow-sm">
              家族時間を増やす第一歩を。<br/>
              <span className="text-[14.5px] md:text-xl md:mt-4 block opacity-90 leading-[2.2] md:leading-[1.8] mt-6 max-w-[280px] md:max-w-none mx-auto font-light">
                多摩地域の事業者様、<br className="md:hidden" />まずは対面やお茶で<br className="md:hidden" />気軽にお話ししましょう。
              </span>
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2} className="w-full">
            <a 
              href="https://lin.ee/uevZMYa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-white border border-[#E0D9CD] text-base-blue px-8 md:px-16 py-6 md:py-8 rounded-[2px] font-serif text-base md:text-lg tracking-widest hover:bg-[#F9F7F4] hover:shadow-[0_15px_30px_rgba(61,52,43,0.06)] transition-all duration-500 w-full max-w-md group"
            >
              <div className="w-10 h-10 rounded-full bg-[#06C755] bg-opacity-10 flex items-center justify-center text-[#06C755] group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-slate-dark">公式LINEで無料診断を受ける</span>
            </a>
          </FadeInUp>

          <FadeInUp delay={0.4} className="w-full mt-32 md:mt-40">
            <div className="w-px h-16 bg-white opacity-30 mx-auto mb-10"></div>
            <div className="font-en text-2xl tracking-[0.3em] text-white opacity-90 mb-6 drop-shadow-sm">Attimo Focus</div>
            <p className="text-[11px] md:text-xs opacity-80 tracking-widest mb-4">東京都立川市上砂町</p>
            <p className="text-[11px] md:text-xs opacity-80 tracking-widest mb-10">Tel: 070-1424-1105 | Mail: d.kusaga0904@gmail.com</p>
            <div className="mb-12">
              <button 
                onClick={() => setIsLegalModalOpen(true)}
                className="text-[11px] md:text-[12px] opacity-60 hover:opacity-100 tracking-widest underline underline-offset-4 transition-opacity"
              >
                特定商取引法に基づく表記
              </button>
            </div>
            <p className="font-en text-[10px] md:text-[11px] uppercase tracking-[0.2em] opacity-60">&copy; {new Date().getFullYear()} Attimo Focus. All Rights Reserved.</p>
          </FadeInUp>
        </div>
      </section>

      {/* Legal Notice Modal */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-dark/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2px] w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative text-slate-dark">
            <button 
              onClick={() => setIsLegalModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <div className="relative w-4 h-4">
                <span className="absolute top-1/2 left-0 w-full h-px bg-slate-dark rotate-45 transform -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-0 w-full h-px bg-slate-dark -rotate-45 transform -translate-y-1/2"></span>
              </div>
            </button>
            <div className="p-8 md:p-12 lg:p-16 space-y-10">
              <div className="text-center">
                <h2 className="font-serif text-2xl md:text-3xl tracking-widest mb-4">特定商取引法に基づく表記</h2>
                <div className="w-12 h-px bg-gold mx-auto opacity-30"></div>
              </div>
              
              <div className="space-y-8 text-[13px] md:text-[14px] leading-[2.2] tracking-wider opacity-90 font-light max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">販売事業者名</div>
                  <div>Attimo Focus</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">代表者</div>
                  <div>草賀 大輝</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">所在地</div>
                  <div>東京都立川市上砂町</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">電話番号</div>
                  <div>
                    070-1424-1105<br/>
                    <span className="text-[12px] opacity-80 mt-1 block">（お問い合わせはなるべく公式LINE、またはメールにてお願いいたします。）</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">メールアドレス</div>
                  <div>d.kusaga0904@gmail.com</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">販売価格</div>
                  <div>各サービスの案内ページに記載しております。</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">商品代金以外の<br className="hidden md:block"/>必要料金</div>
                  <div>
                    ・消費税<br/>
                    ・銀行振込手数料（銀行振込をご利用の場合）<br/>
                    ・サービス利用に伴うインターネット通信費用<br/>
                    ・その他、外部ツール（AIサービス等のプレミアム機能など）をご自身で契約される場合の月額利用料
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">代金の支払方法</div>
                  <div>・銀行振込<br/>・クレジットカード決済<br/>・PayPay決済</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">代金の支払時期</div>
                  <div>
                    原則として、ご契約から7日以内にお支払いをお願いいたします。<br/>
                    （特別なご事情がある場合は要相談とさせていただきます。）
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">サービスの提供時期</div>
                  <div>ご入金確認後、10日以内に初回ミーティングを実施し、サービスの提供を開始いたします。</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">返品・キャンセルに<br className="hidden md:block"/>関する特約</div>
                  <div>
                    提供するサービスの性質上、ご契約締結後およびサービス提供開始後のキャンセルや返金はお受けできかねます。あらかじめご了承ください。<br/>
                    ただし、当方の都合によりサービス提供が困難となった場合はこの限りではありません。
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-slate-dark/10 pb-6">
                  <div className="font-medium opacity-70">動作環境<br className="hidden md:block"/>（システム要件）</div>
                  <div>
                    ・インターネット接続環境<br/>
                    ・Googleアカウント（スプレッドシート利用のため）<br/>
                    ・LINEアプリが動作するスマートフォン、およびパソコン
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 pb-6">
                  <div className="font-medium opacity-70">免責事項</div>
                  <div>
                    本サービスは事業者様（個人事業主を含む）向けのサービスとなります。事業者間取引においてはクーリングオフの適用対象外となりますので、あらかじめご了承ください。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
