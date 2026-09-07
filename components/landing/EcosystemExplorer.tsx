import React from "react";
import { SectorDefinition } from "@/types/ecosystem";

export function EcosystemExplorer() {
  const sectors: SectorDefinition[] = [
    {
      title: "Education Sector",
      hindiTitle: "शिक्षा क्षेत्र",
      theme: "from-blue-500/20 to-cyan-500/10",
      accentBorder: "border-blue-500/40",
      accentBg: "bg-blue-600",
      icon: "🎓",
      verticals: [
        {
          name: "Job Avedan",
          hindiName: "जॉब आवेदन",
          role: "Information (Discovery)",
          subdomain: "jobavedan.myavedan.com",
          description:
            "Real-time recruitment notifications, syllabus distribution, qualification matching, and career alerts.",
          status: "Upcoming Integration",
        },
        {
          name: "Exam Avedan",
          hindiName: "एग्जाम आवेदन",
          role: "Service (Fulfillment)",
          subdomain: "examavedan.myavedan.com",
          description:
            "Assisted form submission, error-free document resizing, admit card tracking, and examination advisory.",
          status: "Upcoming Integration",
        },
      ],
    },
    {
      title: "Business Sector",
      hindiTitle: "व्यापार क्षेत्र",
      theme: "from-emerald-500/20 to-teal-500/10",
      accentBorder: "border-emerald-500/40",
      accentBg: "bg-emerald-600",
      icon: "💼",
      verticals: [
        {
          name: "BizAvedan",
          hindiName: "बिज आवेदन",
          role: "Information (Discovery)",
          subdomain: "bizavedan.myavedan.com",
          description:
            "MSME policies, subsidies, startup grants, GST/Udyam advisories, and industry compliance checklists.",
          status: "Upcoming Integration",
        },
        {
          name: "Legal Avedan",
          hindiName: "लीगल आवेदन",
          role: "Service (Fulfillment)",
          subdomain: "legalavedan.myavedan.com",
          description:
            "Business registrations, trademark filings, documentation drafting, and compliance lifecycle processing.",
          status: "Upcoming Integration",
        },
      ],
    },
    {
      title: "Public / G2C Sector",
      hindiTitle: "लोक सेवाएं (G2C)",
      theme: "from-amber-500/20 to-orange-500/10",
      accentBorder: "border-amber-500/40",
      accentBg: "bg-amber-600",
      icon: "🏛️",
      verticals: [
        {
          name: "Yojana Avedan",
          hindiName: "योजना आवेदन",
          role: "Information (Discovery)",
          subdomain: "yojanaavedan.myavedan.com",
          description:
            "Central and state welfare scheme search, eligibility calculators, and guideline repositories.",
          status: "Upcoming Integration",
        },
        {
          name: "Sarkari Avedan",
          hindiName: "सरकारी आवेदन",
          role: "Service (Fulfillment)",
          subdomain: "sarkariaavedan.myavedan.com",
          description:
            "End-to-end citizen application assistance for certificates, Jan Aadhaar services, and social welfare benefits.",
          status: "Upcoming Integration",
        },
      ],
    },
  ];

  return (
    <section id="ecosystem" className="py-20 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Architecture Blueprint
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            3 Sectors • 6 Integrated Verticals
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Each sector couples an <strong className="text-slate-200">Information (Discovery)</strong> vertical with a dedicated <strong className="text-slate-200">Service (Fulfillment)</strong> vertical, connected to the core identity hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className={`rounded-2xl border ${sector.accentBorder} bg-gradient-to-b ${sector.theme} p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{sector.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {sector.title}
                    </h3>
                    <span className="text-sm font-medium text-slate-400">
                      {sector.hindiTitle}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {sector.verticals.map((vert) => (
                    <div
                      key={vert.name}
                      className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 transition hover:border-slate-700"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-slate-100 flex items-center gap-1.5">
                            {vert.name}
                            <span className="text-xs font-normal text-slate-400">
                              ({vert.hindiName})
                            </span>
                          </h4>
                          <span className="inline-block mt-1 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                            {vert.role}
                          </span>
                        </div>
                        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-0.5 font-medium text-slate-300 border border-slate-700">
                          {vert.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                        {vert.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
                        <span>Target: {vert.subdomain}</span>
                        <span className="text-blue-400/80 hover:text-blue-300">SSO Ready →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 text-center">
                <span className="text-xs text-slate-400">
                  Shared Identity & Encryption via <strong className="text-slate-200">myavedan.com</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
