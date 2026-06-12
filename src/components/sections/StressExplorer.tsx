import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThermometerSun, Droplets, Bug, TrendingDown, Sprout, Flower2, CircleDollarSign } from 'lucide-react';

type Impact = { area: string; icon: React.ElementType; value: string; desc: string };
type StressData = {
  icon: React.ReactElement;
  label: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  headline: string;
  source: string;
  globalStat: string;
  statLabel: string;
  impacts: Impact[];
};

const stressImpacts: Record<string, StressData> = {
  heat: {
    icon: <ThermometerSun className="w-5 h-5" />,
    label: "Heat Stress",
    accentBg: "bg-orange-50",
    accentText: "text-orange-700",
    accentBorder: "border-orange-200",
    headline: "Up to 25% of global food production at risk by 2050",
    source: "FAO, 2022 / IPCC AR6",
    globalStat: "6%",
    statLabel: "Yield decline per °C warming in major cereals (FAO)",
    impacts: [
      { area: "Growth", icon: Sprout, value: "↓ 15–30%", desc: "Biomass accumulation drops sharply above 35°C due to impaired photosynthesis, enzyme denaturation, and membrane disruption." },
      { area: "Reproduction", icon: Flower2, value: "↓ 50–70%", desc: "Pollen sterility and poor grain set above 33°C during anthesis causes near-total reproductive failure in wheat and mungbean." },
      { area: "Yield", icon: TrendingDown, value: "↓ 6–23%", desc: "Wheat yields fall ~23% per 1°C rise above threshold (IPCC, 2022). Rice production losses may reach 15% globally by 2100." },
      { area: "Economic Impact", icon: CircleDollarSign, value: "~$5 Billion", desc: "Annual heat-related crop losses in South & Southeast Asia alone (World Bank, 2021). Global losses projected to triple by mid-century." },
    ]
  },
  waterlogging: {
    icon: <Droplets className="w-5 h-5" />,
    label: "Waterlogging",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    accentBorder: "border-blue-200",
    headline: "10–25% crop losses across 15% of agricultural land globally",
    source: "FAO / CGIAR, 2021",
    globalStat: "15%",
    statLabel: "Of global farmland experiences periodic waterlogging (CGIAR)",
    impacts: [
      { area: "Growth", icon: Sprout, value: "↓ 20–40%", desc: "Oxygen deprivation in roots stops aerobic respiration within 24–48 hours, causing stunted growth, chlorosis, and wilting in susceptible crops." },
      { area: "Reproduction", icon: Flower2, value: "↓ 30–60%", desc: "Flooding during the vegetative-to-reproductive transition severely reduces branching, floral initiation, and pod/grain set — especially damaging in legumes." },
      { area: "Yield", icon: TrendingDown, value: "↓ 10–50%", desc: "Wheat can lose up to 50% yield with just 7 days of waterlogging at seedling stage. Mungbean shows 30–40% losses under post-germination flooding (CGIAR, 2021)." },
      { area: "Economic Impact", icon: CircleDollarSign, value: ">$10 Billion", desc: "Global annual losses from waterlogging, with highest burden in South Asia and Sub-Saharan Africa (World Bank, 2022)." },
    ]
  },
  fungal: {
    icon: <Bug className="w-5 h-5" />,
    label: "Fungal Pathogens",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    accentBorder: "border-amber-200",
    headline: "Fungi destroy food that could feed 600 million people annually",
    source: "Nature, 2012 / FAO, 2023",
    globalStat: "10–20%",
    statLabel: "Of all field and post-harvest crop losses caused by fungi (FAO)",
    impacts: [
      { area: "Growth", icon: Sprout, value: "↓ 20–40%", desc: "Colonisation by Alternaria disrupts chlorophyll synthesis, reduces leaf area, and diverts photosynthates from plant growth to pathogen support." },
      { area: "Reproduction", icon: Flower2, value: "↓ 30–100%", desc: "Floral infections by Sclerotinia and Alternaria directly abort seeds. Pearl millet downy mildew (Sclerospora graminicola) can cause 100% crop failure in outbreaks." },
      { area: "Yield", icon: TrendingDown, value: "↓ 20–80%", desc: "Brassica diseases cause 20–80% yield losses in Indian mustard annually. Fungal diseases in pearl millet affect >5 million hectares in India alone (ICRISAT)." },
      { area: "Economic Impact", icon: CircleDollarSign, value: ">$30 Billion", desc: "Annual global losses from fungal diseases. Climate change is expanding fungal host ranges by ~7 km poleward per year (Science, 2013)." },
    ]
  }
};

const impactColors: Record<string, string> = {
  Growth: "text-emerald-600",
  Reproduction: "text-pink-600",
  Yield: "text-red-600",
  "Economic Impact": "text-amber-600",
};

export function StressExplorer() {
  const [activeTab, setActiveTab] = React.useState<keyof typeof stressImpacts>('heat');
  const safeTab = (activeTab in stressImpacts ? activeTab : 'heat') as keyof typeof stressImpacts;
  const data = stressImpacts[safeTab];

  return (
    <section id="impact" className="py-24 relative bg-accent/20 border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-secondary" />
            <span className="font-mono text-sm tracking-widest text-secondary uppercase">The Stakes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            What Drives Our Research
          </h2>
          <p className="text-muted-foreground text-lg">
            Abiotic and biotic stresses are the leading cause of global crop losses — threatening food security for billions. Explore the real-world impact of each stress on plant growth, reproduction, and yield, backed by data from FAO, IPCC, and CGIAR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab selector */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
            {(Object.keys(stressImpacts) as Array<keyof typeof stressImpacts>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-4 font-mono text-sm tracking-widest uppercase transition-all whitespace-nowrap border ${
                  safeTab === key
                    ? `${stressImpacts[key].accentBg} ${stressImpacts[key].accentText} ${stressImpacts[key].accentBorder} shadow-sm`
                    : 'bg-card border-border text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
                style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              >
                <span className={safeTab === key ? stressImpacts[key].accentText : 'text-muted-foreground'}>
                  {stressImpacts[key].icon}
                </span>
                {stressImpacts[key].label}
              </button>
            ))}

            {/* Global stat */}
            <AnimatePresence mode="wait">
              <motion.div
                key={safeTab + '-stat'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`hidden lg:flex flex-col items-center justify-center text-center p-6 border mt-2 ${data.accentBg} ${data.accentBorder}`}
              >
                <span className={`text-4xl font-bold font-mono ${data.accentText} mb-2`}>{data.globalStat}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{data.statLabel}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content panel */}
          <div className="lg:col-span-9 bg-card border border-border shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={safeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div className={`px-8 py-5 border-b ${data.accentBg} ${data.accentBorder}`}>
                  <p className={`text-xs font-mono tracking-widest uppercase mb-1 ${data.accentText}`}>{data.source}</p>
                  <p className={`text-sm font-semibold ${data.accentText}`}>{data.headline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y divide-x-0 md:divide-x divide-border">
                  {data.impacts.map((impact, i) => {
                    const Icon = impact.icon;
                    const areaColor = impactColors[impact.area] ?? 'text-primary';
                    return (
                      <motion.div
                        key={impact.area}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="p-6 group border-b border-border last:border-b-0 md:[&:nth-child(2n)]:border-b-0"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className={`w-4 h-4 ${areaColor}`} />
                          <span className={`text-xs font-mono tracking-widest uppercase font-bold ${areaColor}`}>{impact.area}</span>
                          <span className={`ml-auto text-lg font-bold font-mono ${areaColor}`}>{impact.value}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{impact.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
