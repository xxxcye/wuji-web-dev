import { useState } from "react";
import Topbar from "@/components/Topbar";
import PlexusEffect from "@/components/PlexusEffect";
import FadeIn from "@/components/FadeIn";

import { Link } from "react-router-dom";
import { ArrowRight, Mail, ChevronRight, Award, Building2, FileCheck, ExternalLink, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import patentInvention from "@/assets/patent-invention.jpg";
import patentUtility from "@/assets/patent-utility.jpg";
import m2Layout from "@/assets/m2-layout.jpg";
import pillowHero from "@/assets/pillow-hero.png";
import home1 from "@/assets/home1.png";
import home2 from "@/assets/home2.png";
import hospital1 from "@/assets/hospital1.png";
import hospital2 from "@/assets/hospital2.png";
import aihealth2 from "@/assets/aihealth2.png";
import sleepHypnogram from "@/assets/sleep-hypnogram.png";
import tsinghua from "@/assets/partners/tsinghua.svg";
import ucsf from "@/assets/partners/ucsf.svg";
import pkuhsc from "@/assets/partners/pkuhsc.svg";
import ruijin from "@/assets/partners/ruijin.png";
import cuhk from "@/assets/partners/cuhk.svg";
import srrsh from "@/assets/partners/srrsh.png";
import huaxi from "@/assets/partners/huaxi.png";
import hlgh from "@/assets/partners/hlgh.png";
import takeda from "@/assets/partners/takeda.svg";
import btch from "@/assets/partners/btch.png";
import bch from "@/assets/partners/bch.png";
import cupes from "@/assets/partners/cupes.png";
import stu from "@/assets/partners/stu.png";
import nmgBrain from "@/assets/partners/nmg-brain.png";
import longhua from "@/assets/partners/longhua.png";
import partner8 from "@/assets/partners/partner8.png";
import foozhou2 from "@/assets/partners/foozhou2.png";
import partner10 from "@/assets/partners/partner10.png";
import harvard from "@/assets/partners/harvard.png";

const CollapsibleCard = ({ title, subtitle, keyMetric, children }: {
  title: string;
  subtitle: string;
  keyMetric: { label: string; value: string };
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border rounded-xl p-5 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className="text-lg font-bold text-primary leading-none">{keyMetric.value}</p>
            <p className="text-[9px] text-muted-foreground">{keyMetric.label}</p>
          </div>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="mt-5 pt-5 border-t border-border">
          {children}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const { language } = useLanguage();
  const isZh = language === "zh";

  const partnerLogos = isZh
    ? [
        { name: "清华大学", src: tsinghua },
        { name: "UCSF", src: ucsf },
        { name: "哈佛医学院", src: harvard },
        { name: "北京大学医学部", src: pkuhsc },
        { name: "瑞金医院", src: ruijin },
        { name: "香港中文大学", src: cuhk },
        { name: "邵逸夫医院", src: srrsh },
        { name: "华西医院", src: huaxi },
        { name: "回龙观医院", src: hlgh },
        { name: "武田制药", src: takeda },
        { name: "北京清华长庚医院", src: btch },
        { name: "北京儿童医院", src: bch },
        { name: "首都体育学院", src: cupes },
        { name: "汕头大学", src: stu },
        { name: "内蒙古脑科医院", src: nmgBrain },
        { name: "龙华医院", src: longhua },
        { name: "中国科协", src: partner8 },
        { name: "福州第二医院", src: foozhou2 },
        { name: "厦门大学", src: partner10 },
      ]
    : [
        { name: "Tsinghua University", src: tsinghua },
        { name: "UCSF", src: ucsf },
        { name: "Harvard Medical School", src: harvard },
        { name: "Peking University Health Science Center", src: pkuhsc },
        { name: "Ruijin Hospital", src: ruijin },
        { name: "The Chinese University of Hong Kong", src: cuhk },
        { name: "Sir Run Run Shaw Hospital", src: srrsh },
        { name: "West China Hospital", src: huaxi },
        { name: "Beijing Huilongguan Hospital", src: hlgh },
        { name: "Takeda", src: takeda },
        { name: "Beijing Tsinghua Changgung Hospital", src: btch },
        { name: "Beijing Children's Hospital", src: bch },
        { name: "Capital University of Physical Education and Sports", src: cupes },
        { name: "Shantou University", src: stu },
        { name: "Inner Mongolia Brain Hospital", src: nmgBrain },
        { name: "Longhua Hospital", src: longhua },
        { name: "China Association for Science and Technology", src: partner8 },
        { name: "Fuzhou Second Hospital", src: foozhou2 },
        { name: "Xiamen University", src: partner10 },
      ];

  return (
    <div className="min-h-screen bg-background">
      <Topbar />

      {/* Hero */}
      <section className="relative flex items-center pt-24 pb-12">
        <div className="absolute inset-0 dot-grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto section-padding w-full py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6">
                  SLEEP MONITORING · AI ANALYSIS · INTERVENTION
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  {isZh ? "以AI深度解码睡眠" : "Decode Sleep with AI"}
                  <br />
                  <span className="text-gradient-primary text-4xl">
                    {isZh ? "从无感监测到精准医学洞察" : "From unobtrusive monitoring to precision medical insights"}
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-3 mb-8">
                  <p className="font-medium text-foreground">{isZh ? "我们的目标：" : "Our mission:"}</p>
                  <p>
                    {isZh
                      ? "通过AI赋能的医疗级数字健康产品，实现数字生物标志物的采集和计算，为消费者提供疾病的筛查预警和长期健康管理；"
                      : "With AI-enabled, medical-grade digital health products, we collect and compute digital biomarkers to deliver screening, early warning, and long-term health management for consumers."}
                  </p>
                  <p>
                    {isZh
                      ? "在循证医学框架下，助力医生通过长期数据积累和真实世界研究，不断提升诊断、干预和健康服务能力。"
                      : "Within an evidence-based medicine framework, we help clinicians continuously improve diagnosis, intervention, and care through longitudinal data and real-world research."}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  <a href="#capabilities" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                    {isZh ? "查看方案" : "Explore Solutions"} <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded-lg text-foreground hover:bg-muted transition-colors">
                    {isZh ? "合作咨询" : "Partner With Us"}
                  </a>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <div className="hidden md:block h-[550px] scale-110 origin-center mt-8">
                <PlexusEffect />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 1) Core Technology */}
      <section id="capabilities" className="section-spacing bg-surface-sunken">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {isZh ? "核心技术" : "Core Technology"}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              {isZh
                ? "以居家无感采集为入口，经 AI 基座模型解码生理信号，输出数字生物标志物，驱动个性化健康干预——形成从感知到行动的完整闭环"
                : "Starting from unobtrusive at-home sensing, our AI foundation models decode physiological signals into digital biomarkers that power personalized interventions—closing the loop from sensing to action."}
            </p>
          </FadeIn>

          {/* ── Layer 1: Sensing ── */}
          <FadeIn>
            <div className="bg-card rounded-xl border p-6 mb-4">
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">1</span>
                  {isZh ? "多模态睡眠监测数据" : "Multimodal Sleep Monitoring Data"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {isZh ? "全球最大单机构睡眠数据库，构筑模型训练与验证核心壁垒" : "One of the largest single-site sleep datasets—built for model training and clinical-grade validation."}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
                {(isZh ? ["脑电 EEG", "呼吸", "心跳 BCG", "体动", "血氧"] : ["EEG", "Respiration", "BCG Heartbeat", "Movement", "SpO₂"]).map((signal) => (
                  <span key={signal} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{signal}</span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-background rounded-lg border p-3 text-center">
                  <p className="text-xs font-medium text-foreground">
                    {isZh ? "自研无感睡眠监测垫，真实世界数据采集" : "Proprietary unobtrusive sleep mat for real-world data capture"}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {isZh ? "居家场景 · 长期连续 · 多病种覆盖" : "At-home · Longitudinal · Multi-condition coverage"}
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-3 text-center">
                  <p className="text-xs font-medium text-foreground">
                    {isZh ? "全球最大睡眠数据底座" : "A global-scale sleep data foundation"}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {isZh ? "PSG 80万+ 小时 · BCG 600万+ 小时" : "PSG 800k+ hours · BCG 6M+ hours"}
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-3 text-center">
                  <p className="text-xs font-medium text-foreground">
                    {isZh ? "多终端设备采集数据支持" : "Multi-device data acquisition support"}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {isZh ? "院内/便携 PSG · 监测垫 · 可穿戴设备" : "In-lab/portable PSG · Sleep mat · Wearables"}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Arrow connector */}
          <div className="flex justify-center py-1">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 16 16" fill="none"><path d="M8 2v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* ── Layer 2: Decoding ── */}
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-xl border p-6 mb-4">
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">2</span>
                  {isZh ? "从生成式AI大模型到数字生物标志物" : "From Foundation Models to Digital Biomarkers"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {isZh ? "逼近临床金标准PSG的监测能力" : "Monitoring performance approaching PSG gold standard"}
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-primary/5 to-primary/15 rounded-lg p-4 border border-primary/20 mb-4">
                <p className="text-sm font-semibold text-foreground text-center mb-1">
                  {isZh ? "生理信号基座模型" : "Physiological Foundation Model"}
                </p>
                <p className="text-[11px] text-muted-foreground text-center">
                  {isZh ? "多任务自监督预训练 · 跨模态特征对齐" : "Multi-task self-supervised pretraining · Cross-modal feature alignment"}
                </p>
              </div>

              <div className="flex justify-center py-1 mb-3">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 16 16" fill="none"><path d="M8 2v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {/* Accuracy KPIs — 01 full-width, 02+03 side by side */}
              <div className="space-y-3">
                {/* 01 指标体系 — full width */}
                <div className="bg-background rounded-lg border p-5">
                  <div className="flex items-center gap-3">
                    {/* 左侧两张卡片 */}
                    <div className="flex flex-col gap-2 flex-1">
                      {(isZh
                        ? [
                            { label: "睡眠行为全周期分析", sub: "睡眠4分期 · 恢复预测 · 睡眠年龄" },
                            { label: "呼吸健康", sub: "AHI · 呼吸频率" },
                          ]
                        : [
                            { label: "Full-cycle sleep behavior", sub: "4-stage staging · recovery prediction · sleep age" },
                            { label: "Respiratory health", sub: "AHI · respiratory rate" },
                          ]).map((out) => (
                        <div key={out.label} className="bg-surface-sunken rounded-lg border p-3 text-center">
                          <p className="text-xs font-semibold text-foreground mb-1">{out.label}</p>
                          <p className="text-[10px] text-muted-foreground leading-snug">{out.sub}</p>
                        </div>
                      ))}
                    </div>
                    {/* 中间：指标体系 + 30+ */}
                    <div className="flex flex-col items-center justify-center px-4 shrink-0">
                      <span className="text-sm font-medium text-foreground">{isZh ? "指标体系" : "Biomarker set"}</span>
                      <span className="text-3xl font-bold text-primary">30+</span>
                    </div>
                    {/* 右侧两张卡片 */}
                    <div className="flex flex-col gap-2 flex-1">
                      {(isZh
                        ? [
                            { label: "心脏监测", sub: "心率 · HRV · 房颤" },
                            { label: "疾病风险", sub: "失眠 · 抑郁 · 帕金森 · COPD" },
                          ]
                        : [
                            { label: "Cardiac monitoring", sub: "Heart rate · HRV · AF" },
                            { label: "Disease risk", sub: "Insomnia · depression · Parkinson's · COPD" },
                          ]).map((out) => (
                        <div key={out.label} className="bg-surface-sunken rounded-lg border p-3 text-center">
                          <p className="text-xs font-semibold text-foreground mb-1">{out.label}</p>
                          <p className="text-[10px] text-muted-foreground leading-snug">{out.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 02 + 03 side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-background rounded-lg border p-5 text-center">
                    <span className="text-sm font-medium text-foreground mb-2 block">{isZh ? "睡眠分期准确性" : "Sleep staging accuracy"}</span>
                    <p className="text-3xl font-bold text-primary mb-2">85%</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {isZh ? (
                        <>对比临床金标准多导睡眠仪PSG评价结果：<br />4 分期准确性 85%，Kappa=0.77</>
                      ) : (
                        <>Evaluated against PSG gold standard:<br />4-stage accuracy 85%, Kappa=0.77</>
                      )}
                    </p>
                  </div>
                  <div className="bg-background rounded-lg border p-5 text-center">
                    <span className="text-sm font-medium text-foreground mb-2 block">{isZh ? "OSA 诊断准确性" : "OSA screening accuracy"}</span>
                    <p className="text-3xl font-bold text-primary mb-2">92.1%</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {isZh ? (
                        <>对比临床金标准多导睡眠仪PSG评价结果：<br />AHI≥5 敏感性 92.1%、特异性 94.4%，与金标准相关系数 r=0.967</>
                      ) : (
                        <>Evaluated against PSG gold standard:<br />AHI≥5 sensitivity 92.1%, specificity 94.4%, correlation r=0.967</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Arrow connector */}
          <div className="flex justify-center py-1">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 16 16" fill="none"><path d="M8 2v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* ── Layer 3: Intervention ── */}
          <FadeIn delay={0.2}>
            <div className="bg-card rounded-xl border p-6">
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">3</span>
                  {isZh ? "个性化干预与主动健康" : "Personalized Intervention & Proactive Health"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {isZh ? "从数据洞察到异常发现、主动管理" : "From insights to anomaly detection and proactive management"}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                {(isZh ? ["睡眠", "疾病", "健康"] : ["Sleep", "Condition", "Health"]).map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{item}</span>
                    {i < 2 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-background rounded-lg border p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </div>
                  <p className="font-medium text-foreground mb-1 text-sm">
                    {isZh ? "异常指标驱动" : "Anomaly-driven"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {isZh ? "实时识别异常生理信号，自动触发干预响应" : "Detect abnormal physiology in real time and trigger interventions automatically"}
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/><path d="M12 7v5l3 3"/></svg>
                  </div>
                  <p className="font-medium text-foreground mb-1 text-sm">
                    {isZh ? "个体化居家长期伴随" : "Personalized long-term companion"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {isZh ? "持续监测 + 个性化方案，全生命周期健康陪伴" : "Continuous monitoring + tailored plans across the full health journey"}
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <p className="font-medium text-foreground mb-1 text-sm">
                    {isZh ? "预防 + 行为管理" : "Prevention + Behavioral Coaching"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {isZh ? "结合体位干预、睡眠行为指导与风险预防策略" : "Combine positional interventions, sleep coaching, and risk prevention strategies"}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2) 产品矩阵 Product */}
      <section id="products" className="section-spacing">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {isZh ? "产品矩阵" : "Products"}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-2xl">
              {isZh ? "两条产品线共享同一底层能力：无感采集与AI计算" : "Two product lines share the same foundation: unobtrusive sensing and AI analytics."}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Link to="/product1" className="group bg-card rounded-2xl border overflow-hidden block hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={m2Layout} alt={isZh ? "睡眠监测垫" : "Sleep Monitoring Mat"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary mb-2 block">{isZh ? "产品一" : "Product 1"}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {isZh ? "睡眠监测垫（零负担居家监测）" : "Sleep Monitoring Mat (Zero-burden at-home monitoring)"}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>{isZh ? "· 枕下放置即可监测，零穿戴、零接触、零配置" : "· Place under the pillow—no wearables, no contact, no setup"}</li>
                    <li>{isZh ? "· 自动输出睡眠分期、AHI及多维生理指标" : "· Automatic sleep staging, AHI, and multi-dimensional biomarkers"}</li>
                    <li>{isZh ? "· 面向长期筛查预警、随访管理与科研数据积累" : "· Built for screening, longitudinal follow-up, and research data accumulation"}</li>
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {isZh ? "查看详情" : "View details"} <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/product2" className="group bg-card rounded-2xl border overflow-hidden block hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={pillowHero} alt={isZh ? "AI智能止鼾枕" : "AI Anti-snoring Pillow"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary">{isZh ? "产品二" : "Product 2"}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">
                      {isZh ? "即将发布" : "Coming soon"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {isZh ? "AI智能止鼾枕（睡眠干预方向）" : "AI Anti-snoring Pillow (Sleep Intervention)"}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>{isZh ? "· 聚焦打鼾与睡眠呼吸暂停人群的干预需求" : "· Designed for snoring and sleep apnea intervention needs"}</li>
                    <li>{isZh ? "· 结合实时识别与行为/体位干预思路，提升夜间睡眠质量" : "· Real-time detection + behavioral/positional interventions to improve sleep quality"}</li>
                    <li>{isZh ? "· 通过志愿者与真实场景数据持续迭代干预效果" : "· Continuously improved with volunteer studies and real-world data"}</li>
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {isZh ? "查看详情" : "View details"} <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3) 应用场景 Solution Scenario */}
      <section id="scenes" className="section-spacing bg-surface-sunken">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {isZh ? "应用场景" : "Use Cases"}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-2xl">
              {isZh ? "以居家无感采集为入口，形成可用于筛查预警、随访管理与科研的长期数据链路" : "Build a long-term data pipeline for screening, follow-up, and research—starting from unobtrusive at-home sensing."}
            </p>
          </FadeIn>

          {/* 三大应用维度 */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isZh ? "居家连续监测" : "Continuous At-home Monitoring",
                desc: isZh ? "通过无感监测形成连续睡眠画像，帮助用户和医生看到「单次检查」之外的长期变化趋势。" : "Create a continuous sleep profile to reveal longitudinal trends beyond one-off tests—for both users and clinicians.",
                images: [home1, home2],
              },
              {
                title: isZh ? "数字化实时干预" : "Digital Real-time Intervention",
                subtitle: isZh ? "睡眠相关疾病的全周期管理" : "End-to-end management for sleep-related conditions",
                desc: isZh ? "覆盖筛查/诊断、分级、治疗全流程。结合干预枕与AI助眠师，实现个体化睡眠干预与健康管理。" : "Cover screening/diagnosis, stratification, and treatment workflows. Combine an intervention pillow with an AI sleep coach for personalized interventions and health management.",
                images: [aihealth2],
              },
              {
                title: isZh ? "临床科研赋能" : "Clinical + Research Enablement",
                subtitle: isZh ? "定义下一代医学诊断标准" : "Shaping next-generation diagnostic standards",
                desc: isZh ? "基于院内标准流程开展筛查、随访与科研协同，连接临床决策与居家长期监测数据；助力医疗机构开展长程、客观的真实世界研究。" : "Integrate in-hospital workflows for screening, follow-up, and research, bridging clinical decisions with long-term at-home data to support objective, longitudinal real-world studies.",
                images: [hospital1, hospital2],
              },
            ].map((scene, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border overflow-hidden h-full">
                  <div className="grid grid-cols-1 gap-0">
                    {scene.images.map((img, imgIdx) => (
                      <div key={imgIdx} className={`overflow-hidden bg-muted ${scene.images.length === 1 ? 'aspect-[16/18]' : 'aspect-video'}`}>
                        <img src={img} alt={`${scene.title} ${imgIdx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-muted-foreground font-mono mb-1 block">
                      {isZh ? `场景 0${i + 1}` : `Use case 0${i + 1}`}
                    </span>
                    <h3 className="text-base font-semibold text-foreground mb-1">{scene.title}</h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{scene.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 数据链路 */}
          <FadeIn delay={0.2}>
            <div className="mt-16">
              <h3 className="text-xl font-bold text-foreground mb-3 md:text-xl">
                {isZh ? "从家庭监测到临床科研，一套数据链路贯通" : "One data pipeline from home monitoring to clinical research"}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-2xl">
                {isZh
                  ? "相较院内 PSG 的导联复杂、成本高、首夜偏差等问题，五季医学将「便捷 + 准确 + 持续」放在同一方案中"
                  : "Compared with in-lab PSG (complex leads, high cost, first-night effect), we bring convenience, accuracy, and continuity into a single solution."}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {(isZh
              ? [
                  "监测垫枕下放置，自动启动整夜信号采集",
                  "基于 AI 模型完成睡眠分期与呼吸事件分析",
                  "小程序推送每日摘要与风险预警指标",
                  "医生/科研端查看实时指标、长期趋势与原始数据",
                ]
              : [
                  "Place the mat under the pillow to automatically capture signals overnight",
                  "AI models perform sleep staging and respiratory event analysis",
                  "Mini-program delivers daily summaries and risk alerts",
                  "Clinicians/researchers review real-time metrics, trends, and raw data",
                ]).map((step, i) => (
              <FadeIn key={i} delay={0.25 + i * 0.1}>
                <div className="bg-card rounded-xl border p-5 h-full">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 4) 科研成果 Evidence */}
      <section id="research" className="section-spacing">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              {isZh ? "科研成果" : "Research"}
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isZh ? "数据库建设" : "Dataset Building"}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {(isZh
                  ? [
                      { num: "120万+小时", label: "11万+人次回顾性多导睡眠监测数据" },
                      { num: "5000+晚", label: "多导睡眠监测和心动图平行数据" },
                      { num: "600万+小时", label: "居家睡眠监测心动图数据" },
                    ]
                  : [
                      { num: "1.2M+ hours", label: "110k+ retrospective PSG studies" },
                      { num: "5,000+ nights", label: "Paired PSG + ECG parallel data" },
                      { num: "6M+ hours", label: "At-home sleep BCG data" },
                    ]).map((d, i) => (
                  <div key={i} className="bg-card border rounded-xl p-5">
                    <p className="text-xl font-bold text-primary mb-1">{d.num}</p>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-card border rounded-xl p-6">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "高质量数据库标准化流程与严格标注质控流程" : "Standardized dataset pipelines with strict annotation QA/QC"}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "与公开代表性研究相比，在患者人数、总小时数和数据集数量上具备显著优势" : "Significant scale advantages vs. representative public studies (participants, total hours, dataset count)"}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "支持后续模型训练、临床研究和产品迭代" : "Built to support model training, clinical studies, and product iteration"}
                  </li>
                </ul>
                <div className="border-t pt-5">
                  <p className="text-[11px] text-muted-foreground mb-4 text-center tracking-wide">
                    {isZh ? "与已知数据规模最大睡眠领域学术研究的比较*" : "Comparison with the largest-known sleep research dataset*"}
                  </p>
                  <div className="flex items-end justify-center gap-12 md:gap-16">
                    {[
                      {
                        label: isZh ? "患者人数" : "Participants",
                        ours: 240000,
                        theirs: 15660,
                        ratio: isZh ? "15倍" : "15x",
                        oursLabel: "240,000",
                        theirsLabel: "15,660",
                      },
                      {
                        label: isZh ? "生理信号总小时数" : "Total signal hours",
                        ours: 1992000,
                        theirs: 159392,
                        ratio: isZh ? "13倍" : "13x",
                        oursLabel: "1,992,000",
                        theirsLabel: "159,392",
                      },
                      {
                        label: isZh ? "数据集数量" : "Datasets",
                        ours: 52,
                        theirs: 21,
                        ratio: isZh ? "2.5倍" : "2.5x",
                        oursLabel: "52",
                        theirsLabel: "21",
                      },
                    ].map((item, i) => {
                      const maxH = 90;
                      const oursH = maxH;
                      const theirsH = Math.max(14, (item.theirs / item.ours) * maxH);
                      return (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-sm font-bold text-primary mb-1.5">{item.ratio}</span>
                          <div className="flex items-end gap-2">
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] text-muted-foreground/70 mb-1">{item.theirsLabel}</span>
                              <div className="w-6 bg-muted/80 rounded" style={{ height: theirsH }} />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] font-medium text-primary mb-1">{item.oursLabel}</span>
                              <div className="w-6 bg-primary/80 rounded" style={{ height: oursH }} />
                            </div>
                          </div>
                          <span className="text-[10px] text-muted-foreground mt-1.5 text-center leading-tight">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center gap-5 mt-3">
                    <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><span className="w-2.5 h-2.5 rounded bg-muted/80 inline-block" />U-Sleep</span>
                    <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><span className="w-2.5 h-2.5 rounded bg-primary/80 inline-block" />{isZh ? "五季" : "Five Seasons"}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {isZh ? "睡眠生理活动监控" : "Physiological Monitoring in Sleep"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {(isZh
                  ? [
                      { label: "心率误差", value: "< ±1.8 次/分" },
                      { label: "呼吸率误差", value: "< ±0.4 次/分" },
                      { label: "睡眠分期准确性", value: "0.85 / κ=0.772" },
                      { label: "OSA 诊断", value: "敏感性/特异性 >0.92" },
                    ]
                  : [
                      { label: "Heart rate error", value: "< ±1.8 bpm" },
                      { label: "Respiratory rate error", value: "< ±0.4 rpm" },
                      { label: "Sleep staging accuracy", value: "0.85 / κ=0.772" },
                      { label: "OSA screening", value: "Sensitivity/Specificity >0.92" },
                    ]).map((m, i) => (
                  <div key={i} className="bg-card border rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                    <p className="text-sm font-semibold text-foreground">{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-card border rounded-xl p-6">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "基于 BCG 信号，在复杂条件下实现专业级生理参数感知" : "Professional-grade physiological sensing from BCG, robust to real-world complexity"}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "可与 PSG-ECG 等标准信号进行关键波形对齐验证" : "Waveform alignment validation against standard signals such as PSG-ECG"}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    {isZh ? "支持医疗级筛查预警与居家长期跟踪" : "Built for medical-grade screening/alerts and long-term at-home tracking"}
                  </li>
                </ul>
                <div className="border-t pt-5">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* 睡眠分期比较 */}
                    <div>
                      <p className="text-[11px] text-muted-foreground mb-3 text-center tracking-wide">
                        {isZh ? "五季监测垫与穿戴式/科研设备的比较（四分期）" : "Sleep staging comparison (4-stage) vs. wearable/research devices"}
                      </p>
                      <div className="flex items-end justify-center gap-6">
                        {[
                          { label: "Apple Watch", accuracy: null, kappa: 0.63 },
                          { label: "Havard", accuracy: null, kappa: 0.585 },
                          { label: "watchPAT", accuracy: 0.63, kappa: 0.418 },
                          { label: isZh ? "五季监测垫" : "Five Seasons Mat", accuracy: 0.85, kappa: 0.772 },
                        ].map((item, i) => {
                          const isOurs = i === 3;
                          const maxH = 80;
                          const kappaH = (item.kappa / 0.772) * maxH;
                          return (
                            <div key={i} className="flex flex-col items-center">
                              <div className="flex items-end gap-1">
                                {item.accuracy !== null && (
                                  <div className="flex flex-col items-center">
                                    <span className="text-[9px] text-muted-foreground/70 mb-0.5">{item.accuracy}</span>
                                    <div className={`w-5 rounded ${isOurs ? 'bg-primary/80' : 'bg-muted/80'}`} style={{ height: (item.accuracy / 0.85) * maxH }} />
                                  </div>
                                )}
                                <div className="flex flex-col items-center">
                                  <span className={`text-[9px] mb-0.5 ${isOurs ? 'text-primary font-medium' : 'text-muted-foreground/70'}`}>{item.kappa}</span>
                                  <div className={`w-5 rounded ${isOurs ? 'bg-primary/60' : 'bg-muted/60'}`} style={{ height: kappaH }} />
                                </div>
                              </div>
                              <span className={`text-[9px] mt-1.5 text-center leading-tight ${isOurs ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex justify-center gap-4 mt-3">
                        <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-2 rounded bg-muted/80 inline-block" />Accuracy</span>
                        <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-2 rounded bg-muted/60 inline-block" />Kappa</span>
                      </div>
                    </div>
                    {/* OSA诊断比较 */}
                    <div>
                      <p className="text-[11px] text-muted-foreground mb-3 text-center tracking-wide">
                        {isZh ? "五季监测垫在不同OSA诊断标准下的表现" : "OSA screening performance under different diagnostic thresholds"}
                      </p>
                      <div className="flex items-end justify-center gap-5">
                        {[
                          { label: "Nox-T3\nHSAT", ahi5: [0.988, 0.400], ahi15: [0.915, 0.765], ahi30: [0.711, 0.976] },
                          { label: "Huawei\nWatch", ahi5: [0.675, 0.947], ahi15: [0.887, 0.878], ahi30: [0.857, 0.910] },
                          { label: "Apple\nWatch", ahi5: [null, null], ahi15: [0.663, 0.985], ahi30: [null, null] },
                          { label: isZh ? "五季\n监测垫" : "Five Seasons\nMat", ahi5: [0.921, 0.944], ahi15: [0.947, 0.932], ahi30: [0.921, 0.973] },
                        ].map((item, i) => {
                          const isOurs = i === 3;
                          const maxH = 70;
                          const vals = [...item.ahi5, ...item.ahi15, ...item.ahi30].filter(v => v !== null) as number[];
                          const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
                          const barH = avg * maxH;
                          return (
                            <div key={i} className="flex flex-col items-center">
                              <span className={`text-[10px] mb-1 ${isOurs ? 'text-primary font-medium' : 'text-muted-foreground/70'}`}>{(avg).toFixed(2)}</span>
                              <div className={`w-8 rounded ${isOurs ? 'bg-primary/80' : 'bg-muted/80'}`} style={{ height: barH }} />
                              <span className={`text-[9px] mt-1.5 text-center leading-tight whitespace-pre-line ${isOurs ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[9px] text-muted-foreground/60 text-center mt-3">
                        {isZh ? "柱高 = AHI≥5/15/30 敏感性+特异性均值" : "Bar height = mean of sensitivity + specificity at AHI≥5/15/30"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {isZh ? "生理信号大模型" : "Physiological Foundation Model"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {isZh ? "全球首个生成式生理信号大模型，辅助多种疾病的诊断和病程研究" : "A generative foundation model for physiological signals to support disease screening and progression research"}
              </p>

              {/* 三大能力 */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {(isZh
                  ? [
                      { title: "疾病诊断", desc: "基于睡眠生理信号实现帕金森、抑郁等疾病的无创筛查" },
                      { title: "疾病严重程度刻画", desc: "帕金森严重程度预测与 MDS-UPDRS 问卷高度一致（R=0.94）" },
                      { title: "疾病风险预测", desc: "可预测 6 年内帕金森患病风险，支持早期干预决策" },
                    ]
                  : [
                      { title: "Disease screening", desc: "Non-invasive screening for Parkinson's, depression, and more from sleep physiology" },
                      { title: "Severity modeling", desc: "Parkinson's severity prediction aligns with MDS-UPDRS (R=0.94)" },
                      { title: "Risk prediction", desc: "Predict Parkinson's risk within 6 years to support early interventions" },
                    ]).map((item, i) => (
                  <div key={i} className="bg-card border rounded-xl p-4">
                    <span className="text-xs font-medium text-primary mb-1.5 block">› {item.title}</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 帕金森专题 - Collapsible */}
              <CollapsibleCard
                title={isZh ? "帕金森病 — 诊断、严重程度与风险预测" : "Parkinson's — screening, severity, and risk prediction"}
                subtitle={isZh ? "Yang et al., Nature Medicine, 2022 · 仅用 MIT 约 1/7 的数据即达到外部验证集上相似指标" : "Yang et al., Nature Medicine, 2022 · Comparable external validation with ~1/7 of MIT data"}
                keyMetric={{ label: isZh ? "外部验证 AUC" : "External validation AUC", value: "0.875" }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* 诊断对比 */}
                  <div>
                    <p className="text-[11px] font-medium text-foreground mb-3 text-center">
                      {isZh ? "诊断性能 — 五季 vs MIT" : "Diagnostic performance — Five Seasons vs MIT"}
                    </p>
                    <div className="flex items-end justify-center gap-6">
                      {[
                        { label: isZh ? "正样本" : "Positive samples", mit: 2351, wuji: 337, mitL: "2,351", wujiL: "337", maxRef: 2351 },
                        { label: "SHHS AUC", mit: 0.857, wuji: 0.875, mitL: "0.857", wujiL: "0.875", maxRef: 1 },
                        { label: "MrOS AUC", mit: 0.875, wuji: 0.874, mitL: "0.875", wujiL: "0.874", maxRef: 1 },
                      ].map((item, i) => {
                        const maxH = 65;
                        const mitH = (item.mit / item.maxRef) * maxH;
                        const wujiH = (item.wuji / item.maxRef) * maxH;
                        return (
                          <div key={i} className="flex flex-col items-center">
                            <div className="flex items-end gap-1.5">
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-muted-foreground/70 mb-0.5">{item.mitL}</span>
                                <div className="w-5 bg-muted/80 rounded" style={{ height: Math.max(8, mitH) }} />
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-primary font-medium mb-0.5">{item.wujiL}</span>
                                <div className="w-5 bg-primary/80 rounded" style={{ height: Math.max(8, wujiH) }} />
                              </div>
                            </div>
                            <span className="text-[9px] text-muted-foreground mt-1 text-center leading-tight">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-2 rounded bg-muted/80 inline-block" />MIT</span>
                      <span className="flex items-center gap-1 text-[9px] text-muted-foreground"><span className="w-2 h-2 rounded bg-primary/80 inline-block" />{isZh ? "五季" : "Five Seasons"}</span>
                    </div>
                  </div>
                  {/* 严重程度 */}
                  <div className="text-center">
                    <p className="text-[11px] font-medium text-foreground mb-3">
                      {isZh ? "严重程度预测" : "Severity prediction"}
                    </p>
                    <p className="text-[10px] text-muted-foreground mb-2">
                      {isZh ? "模型预测 vs MDS-UPDRS 问卷" : "Model prediction vs. MDS-UPDRS"}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="bg-primary/5 rounded-lg px-3 py-2">
                        <p className="text-lg font-bold text-primary">0.94</p>
                        <p className="text-[9px] text-muted-foreground">{isZh ? "R 值" : "R"}</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg px-3 py-2">
                        <p className="text-xs font-bold text-primary">3.6×10⁻²⁵</p>
                        <p className="text-[9px] text-muted-foreground">{isZh ? "P 值" : "p-value"}</p>
                      </div>
                    </div>
                  </div>
                  {/* 风险预测 */}
                  <div>
                    <p className="text-[11px] font-medium text-foreground mb-3 text-center">
                      {isZh ? "6 年患病风险预测" : "6-year risk prediction"}
                    </p>
                    <div className="flex items-end justify-center gap-3">
                      {[
                        { label: isZh ? "对照组\nn=377" : "Control\nn=377", score: 0.43, color: "bg-muted/80" },
                        { label: isZh ? "前驱期\nn=12" : "Prodromal\nn=12", score: 0.50, color: "bg-primary/50" },
                        { label: isZh ? "确诊组\nn=12" : "Diagnosed\nn=12", score: 0.54, color: "bg-primary/80" },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-[10px] font-medium text-primary mb-1">{item.score}</span>
                          <div className={`w-8 rounded ${item.color}`} style={{ height: (item.score / 0.6) * 55 }} />
                          <span className="text-[9px] text-muted-foreground mt-1 text-center leading-tight whitespace-pre-line">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[9px] text-muted-foreground/60 mt-2 text-center">PD Prediction Score</p>
                  </div>
                </div>
              </CollapsibleCard>

              {/* 抑郁症专题 - Collapsible */}
              <CollapsibleCard
                title={isZh ? "抑郁症患病诊断" : "Depression detection"}
                subtitle={isZh ? "基于睡眠心跳与呼吸信号的 AI 驱动检测 · SLEEP 2025" : "AI-driven detection from sleep heartbeat and breathing signals · SLEEP 2025"}
                keyMetric={{ label: "AUROC", value: "0.831" }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Confusion Matrix */}
                  <div>
                    <p className="text-[11px] font-medium text-foreground mb-2 text-center">Confusion Matrix</p>
                    <p className="text-[10px] text-muted-foreground mb-3 text-center">Accuracy: <span className="font-semibold text-foreground">74.7%</span></p>
                    <div className="mx-auto" style={{ maxWidth: 180 }}>
                      <div className="flex">
                        <div className="w-12" />
                        <div className="flex-1 grid grid-cols-2 gap-0.5 text-center">
                          <span className="text-[8px] text-muted-foreground">Predicted +</span>
                          <span className="text-[8px] text-muted-foreground">Predicted −</span>
                        </div>
                      </div>
                      <div className="flex items-stretch mt-0.5">
                        <div className="w-12 flex items-center justify-end pr-1">
                          <span className="text-[8px] text-muted-foreground">True +</span>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-0.5">
                          <div className="bg-primary/80 rounded-sm p-2 text-center">
                            <p className="text-xs font-bold text-primary-foreground">77.8%</p>
                            <p className="text-[8px] text-primary-foreground/80">Specificity</p>
                          </div>
                          <div className="bg-primary/20 rounded-sm p-2 text-center">
                            <p className="text-xs font-bold text-foreground">22.2%</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-stretch mt-0.5">
                        <div className="w-12 flex items-center justify-end pr-1">
                          <span className="text-[8px] text-muted-foreground">True −</span>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-0.5">
                          <div className="bg-primary/20 rounded-sm p-2 text-center">
                            <p className="text-xs font-bold text-foreground">26.1%</p>
                          </div>
                          <div className="bg-primary/80 rounded-sm p-2 text-center">
                            <p className="text-xs font-bold text-primary-foreground">73.9%</p>
                            <p className="text-[8px] text-primary-foreground/80">Sensitivity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AUROC Curve */}
                  <div>
                    <p className="text-[11px] font-medium text-foreground mb-2 text-center">AUROC Curve</p>
                    <div className="mx-auto" style={{ maxWidth: 180 }}>
                      <svg viewBox="0 0 100 100" className="w-full">
                        <rect x="15" y="5" width="80" height="80" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
                        {[0.2, 0.4, 0.6, 0.8].map(v => (
                          <line key={v} x1="15" y1={85 - v * 80} x2="95" y2={85 - v * 80} stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2,2" />
                        ))}
                        {[0.2, 0.4, 0.6, 0.8].map(v => (
                          <line key={v} x1={15 + v * 80} y1="5" x2={15 + v * 80} y2="85" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2,2" />
                        ))}
                        <line x1="15" y1="85" x2="95" y2="5" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="2,2" opacity="0.4" />
                        <path d="M15,85 Q15,30 30,18 Q45,8 55,7 Q70,6 80,5.5 L95,5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                        <path d="M15,85 Q15,30 30,18 Q45,8 55,7 Q70,6 80,5.5 L95,5 L95,85 Z" fill="hsl(var(--primary))" opacity="0.08" />
                        <text x="55" y="97" textAnchor="middle" className="text-[5px] fill-muted-foreground">1 − Specificity</text>
                        <text x="4" y="45" textAnchor="middle" className="text-[5px] fill-muted-foreground" transform="rotate(-90,4,45)">Sensitivity</text>
                        {[0, 0.5, 1.0].map(v => (
                          <text key={v} x={15 + v * 80} y="92" textAnchor="middle" className="text-[4px] fill-muted-foreground">{v}</text>
                        ))}
                        {[0, 0.5, 1.0].map(v => (
                          <text key={v} x="12" y={86 - v * 80} textAnchor="end" className="text-[4px] fill-muted-foreground">{v}</text>
                        ))}
                      </svg>
                    </div>
                    <p className="text-center mt-1"><span className="text-sm font-bold text-primary">AUC = 0.831</span></p>
                  </div>

                  {/* Key metrics */}
                  <div>
                    <p className="text-[11px] font-medium text-foreground mb-3 text-center">
                      {isZh ? "关键指标" : "Key metrics"}
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Accuracy", value: "74.7%" },
                        { label: "Sensitivity", value: "73.9%" },
                        { label: "Specificity", value: "77.8%" },
                        { label: "AUROC", value: "0.831" },
                      ].map((m, i) => (
                        <div key={i} className="flex items-center justify-between text-xs border-b border-border/50 pb-1.5">
                          <span className="text-muted-foreground">{m.label}</span>
                          <span className="font-semibold text-foreground">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleCard>
            </div>
          </FadeIn>

          <FadeIn>
            <Link to="/research" className="group block bg-card border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {isZh ? "查看全部科研成果" : "View all research"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? "已发表 11 篇（含 IMWUT、SLEEP、ICLR、medRxiv 等）· 投稿中 8 项"
                      : "11 published papers (IMWUT, SLEEP, ICLR, medRxiv, etc.) · 8 in review"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(isZh
                      ? ["睡眠分期与无负担长期监测", "睡眠年龄与多器官年龄建模", "睡眠碎片化生物标志物", "抑郁识别与多模态信号对齐"]
                      : ["Sleep staging & zero-burden monitoring", "Sleep age & multi-organ aging", "Sleep fragmentation biomarkers", "Depression detection & multimodal alignment"]).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 bg-muted rounded-md text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 5) 公司动态 */}
      <section id="evidence" className="section-spacing bg-surface-sunken">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {isZh ? "公司动态" : "Updates"}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl text-base">
              {isZh ? "五季医学阶段性成果与里程碑" : "Milestones and highlights"}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {(isZh
              ? [
                  { num: "50+", label: "家医院开展科研合作" },
                  { num: "2", label: "项医疗器械注册申请" },
                  { num: "10+8", label: "项专利及软件著作权" },
                  { num: "46", label: "篇SCI文章（累计影响因子253）" },
                ]
              : [
                  { num: "50+", label: "Hospitals in research collaborations" },
                  { num: "2", label: "Medical device registration applications" },
                  { num: "10+8", label: "Patents + software copyrights" },
                  { num: "46", label: "SCI papers (IF 253 total)" },
                ]).map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="text-center bg-card border rounded-xl p-5">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{s.num}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              {[
                 {
                   date: isZh ? "2025年9月25日" : "Sep 25, 2025",
                   title: isZh ? "五季医学获批第二类医疗器械注册证" : "Class II medical device registration approved",
                   link: "https://mp.weixin.qq.com/s/g2A5vrb_avVuZk5J1F9Dwg",
                  points: [
                    isZh ? "核心产品睡眠监测垫通过药监审批，合规能力升级" : "Core sleep monitoring mat approved, strengthening compliance readiness",
                    isZh ? "持续推进 AI+医疗产品研发与多场景落地" : "Accelerating AI+medical product R&D and real-world deployments",
                  ],
                },
                 {
                   date: isZh ? "2025年12月31日" : "Dec 31, 2025",
                   title: isZh ? "共建北京市重点实验室获批" : "Beijing key laboratory (joint) approved",
                   link: "https://mp.weixin.qq.com/s/XevDbAAgpuGqLiC7KVapbw",
                  points: [
                    isZh ? "围绕睡眠疾病诊疗智能化开展联合科研攻关" : "Joint research to advance intelligent diagnosis and care for sleep disorders",
                    isZh ? "强化产学研协同，提升模型转化与临床价值" : "Stronger academia-industry collaboration to boost translation and clinical impact",
                  ],
                },
                 {
                   date: isZh ? "2026年2月13日" : "Feb 13, 2026",
                   title: isZh ? "面向真实世界睡眠医学的多模态基座模型" : "A multimodal foundation model for real-world sleep medicine",
                   link: "https://mp.weixin.qq.com/s/1jYXS6sodqHN3TMxngqajg",
                  points: [
                    isZh ? "提出 sleep2vec：统一多模态生理信号表征" : "Introduced sleep2vec: unified representations for multimodal physiological signals",
                    isZh ? "支持跨设备、跨场景的睡眠监测与风险识别" : "Enables cross-device, cross-scenario sleep monitoring and risk detection",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-10 pb-10 last:pb-0">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  <div className="mb-2">
                    <span className="block text-xs text-muted-foreground font-mono">{item.date}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1.5 group">
                        <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </a>
                    ) : (
                      <h4 className="mt-1 text-base font-semibold text-foreground">{item.title}</h4>
                    )}
                  </div>
                  <ul className="space-y-1">
                    {item.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground">· {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6) 关于我们 */}
      <section id="about" className="section-spacing">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
              {isZh ? "关于我们" : "About Us"}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              {isZh ? "公司概况" : "Company Overview"}
            </h3>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-card border rounded-xl p-6 md:p-8 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                {isZh ? "创新驱动的数字医疗先行者" : "Innovation-driven digital healthcare pioneer"}
              </p>
              <ul className="space-y-2 mt-4">
                {(isZh
                  ? [
                      "成立于 2022 年，创新型数字医疗科技公司",
                      "致力于通过 AI 为用户提供创新、权威、便捷的医疗健康服务",
                      "AI 赋能数字医疗产品，实现数字生物标志物的采集和计算",
                      "帮助用户进行疾病筛查预警和长期健康管理",
                      "循证医学框架下，助力医生通过真实世界研究提升诊断与干预能力",
                    ]
                  : [
                      "Founded in 2022 as an innovative digital healthcare company",
                      "Delivering credible and convenient health services with AI",
                      "AI-powered products to collect and compute digital biomarkers",
                      "Supporting screening, early warning, and long-term health management",
                      "Advancing diagnosis and interventions through real-world evidence within an evidence-based framework",
                    ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FadeIn delay={0.15}>
              <div className="bg-card border rounded-xl p-6 h-full">
                <h4 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-foreground" />
                  {isZh ? "荣誉认可" : "Recognition"}
                </h4>
                <ul className="space-y-2">
                  {(isZh
                    ? [
                        "北京市科技型中小企业 · 创新型中小企业",
                        "中关村高新技术企业",
                        '合作获批"睡眠呼吸疾病诊治设备及系统北京市重点实验室"',
                        '入选"首都医学科技创新成果转化优促计划"',
                      ]
                    : [
                        "Beijing tech SME · Innovative SME",
                        "Zhongguancun high-tech enterprise",
                        "Jointly approved: Beijing Key Laboratory (sleep respiratory diagnosis & treatment devices and systems)",
                        "Selected for the Capital Medical S&T innovation translation program",
                      ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card border rounded-xl p-6 h-full">
                <h4 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-primary" />
                  {isZh ? "知识产权" : "IP & Patents"}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group cursor-pointer">
                    <div className="rounded-lg overflow-hidden border bg-muted mb-2">
                      <img
                        src={patentInvention}
                        alt={isZh ? "发明专利：睡眠分期方法及装置" : "Invention patent: sleep staging method and device"}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      {isZh ? "发明专利：睡眠分期方法及装置" : "Invention patent: sleep staging method and device"}
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="rounded-lg overflow-hidden border bg-muted mb-2">
                      <img
                        src={patentUtility}
                        alt={isZh ? "实用新型专利：睡眠监测垫" : "Utility model patent: sleep monitoring mat"}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      {isZh ? "实用新型专利：睡眠监测垫" : "Utility model patent: sleep monitoring mat"}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <h3 className="text-lg font-semibold text-foreground mb-6 mt-12 flex items-center gap-2">
              {isZh ? "核心团队" : "Leadership"}
            </h3>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "王小川",
                role: isZh ? "创始人" : "Founder",
                desc: isZh ? "搜狗创始人、原 CEO，清华大学工学博士，同时担任百川智能创始人。" : "Founder and former CEO of Sogou; PhD in Engineering from Tsinghua University; also founder of Baichuan Intelligence.",
              },
              {
                name: "杨洪涛",
                role: isZh ? "联合创始人" : "Co-founder",
                desc: isZh ? "搜狗原 CTO，主导研发搜狗输入法及浏览器。" : "Former CTO of Sogou; led development of Sogou Input Method and browser.",
              },
              {
                name: "陈雪松",
                role: isZh ? "算法负责人" : "Head of Algorithms",
                desc: isZh ? "聚焦睡眠医学×AI融合创新，任睡眠呼吸疾病诊治设备及系统北京市重点实验室首席研究员。" : "Focused on sleep medicine × AI innovation; chief researcher at the Beijing Key Laboratory for sleep respiratory diagnosis & treatment devices and systems.",
              },
            ].map((member, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <div className="bg-card border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground mb-4">
                    {member.name[0]}
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{member.name}</h4>
                  <span className="text-xs text-primary">{member.role}</span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="bg-card border rounded-xl p-6 mb-12">
              <h3 className="text-base font-semibold text-foreground mb-2">
                {isZh ? "团队结构" : "Team Composition"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isZh
                  ? "创始团队来自搜狗与清华等机构，长期深耕 AI 与生理信号分析方向。团队三分之一来自清华大学，硕博比例超过 70%。"
                  : "The founding team comes from institutions such as Sogou and Tsinghua, with long-term focus on AI and physiological signal analysis. One-third of the team is from Tsinghua University, and 70%+ hold Master's/PhD degrees."}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {isZh ? "合作单位" : "Partners"}
            </h3>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 bg-card border rounded-xl p-8">
              {partnerLogos.map((p) => (
                <div key={p.name} className="flex items-center justify-center h-16 md:h-20 hover:scale-105 transition-transform duration-300" title={p.name}>
                  <img src={p.src} alt={p.name} className="max-h-full max-w-[120px] md:max-w-[140px] object-contain" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-spacing">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              {isZh
                ? "五季医学：以 AI 赋能医疗级数字健康，服务筛查预警与长期管理。"
                : "Five Seasons Medical: AI-powered clinical-grade digital health for screening, alerts, and long-term management."}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
              {isZh ? "商务与科研合作可通过下方邮件与我们取得联系" : "For business and research collaboration, contact us via email:"}
            </p>
            <a
              href="mailto:service@wuji-inc.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              service@wuji-inc.com
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 北京五季医学科技有限公司. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
