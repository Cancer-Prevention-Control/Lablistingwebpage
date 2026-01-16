import { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, DollarSign, Calendar, Award } from 'lucide-react';

interface FundingOpportunitiesProps {
  onBack: () => void;
}

export function FundingOpportunities({ onBack }: FundingOpportunitiesProps) {
  const [activeSection, setActiveSection] = useState('section-internal');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'section-internal', label: 'Cancer Prevention Funds' },
    { id: 'section-r01', label: 'R01 Grants' },
    { id: 'section-rfas', label: 'Open RFA\'s' }
  ];

  const internalFunds = [
    {
      name: 'CPC Pilot Research Grant',
      amount: 'Up to $50,000',
      duration: '1 year',
      deadline: 'Rolling submissions - Reviewed quarterly',
      description: 'Supports innovative pilot research projects in cancer prevention and control. Priority given to early-stage investigators and projects that leverage Houston Methodist resources and catchment area populations.',
      eligibility: 'CPC program members, postdoctoral fellows, and junior faculty'
    },
    {
      name: 'Trainee Development Award',
      amount: 'Up to $25,000',
      duration: '1 year',
      deadline: 'April 1, 2025',
      description: 'Provides support for predoctoral students and postdoctoral fellows to develop independent research projects in cancer prevention, early detection, or survivorship.',
      eligibility: 'Graduate students and postdoctoral fellows with CPC mentors'
    },
    {
      name: 'Community Engagement Research Award',
      amount: 'Up to $75,000',
      duration: '2 years',
      deadline: 'June 15, 2025',
      description: 'Funds community-engaged research projects that address cancer disparities and improve cancer prevention and screening in underserved populations within the Houston Methodist catchment area.',
      eligibility: 'CPC members with established community partnerships'
    }
  ];

  const r01Info = [
    {
      mechanism: 'R01 - Research Project Grant',
      description: 'The R01 is the original and historically oldest grant mechanism used by NIH. It provides support for health-related research and development based on the mission of the NIH.',
      highlights: [
        'Support for up to 5 years',
        'No specific dollar limit (modular budget up to $250,000 direct costs per year)',
        'Suitable for established researchers with preliminary data',
        'Three standard receipt dates per year: February 5, June 5, October 5'
      ]
    },
    {
      mechanism: 'R21 - Exploratory/Developmental Research Grant',
      description: 'Encourages new exploratory and developmental research projects in cancer prevention and control.',
      highlights: [
        'Support for up to 2 years',
        'Combined budget up to $275,000 direct costs',
        'Does not require preliminary data',
        'Ideal for testing novel hypotheses or new methodological approaches'
      ]
    }
  ];

  const openRFAs = [
    {
      title: 'NCI RFA-CA-25-012: Cancer Prevention Research Resource',
      agency: 'National Cancer Institute',
      closingDate: 'March 15, 2025',
      link: 'https://grants.nih.gov/grants/guide/rfa-files/RFA-CA-25-012.html',
      description: 'This program supports the development and maintenance of research resources to advance cancer prevention research, including biospecimen repositories, cohort studies, and data coordinating centers.'
    },
    {
      title: 'NCI PAR-24-189: Community-Based Prevention and Control Research',
      agency: 'National Cancer Institute',
      closingDate: 'Standard dates',
      link: 'https://grants.nih.gov/grants/guide/pa-files/PAR-24-189.html',
      description: 'Supports community-based participatory research to reduce cancer health disparities through prevention, screening, and survivorship interventions.'
    },
    {
      title: 'ACS RSGI: Research Scholar Grants',
      agency: 'American Cancer Society',
      closingDate: 'April 1, 2025',
      link: 'https://www.cancer.org/research/we-fund-cancer-research/apply-research-grant.html',
      description: 'Supports independent investigators in cancer prevention and control research. Includes special emphasis on health equity and health services research.'
    },
    {
      title: 'PCORI: Patient-Centered Outcomes Research',
      agency: 'Patient-Centered Outcomes Research Institute',
      closingDate: 'May 20, 2025',
      link: 'https://www.pcori.org/funding-opportunities',
      description: 'Funds comparative effectiveness research focused on patient-centered outcomes in cancer prevention, screening, treatment, and survivorship care.'
    },
    {
      title: 'CDC DP25-2501: Cancer Prevention and Control Programs',
      agency: 'Centers for Disease Control and Prevention',
      closingDate: 'June 30, 2025',
      link: 'https://www.cdc.gov/cancer/npcr/funding.htm',
      description: 'Supports state and community programs for cancer screening, early detection, and prevention interventions, with focus on evidence-based strategies.'
    },
    {
      title: 'CPRIT: Cancer Prevention Research Interest',
      agency: 'Cancer Prevention and Research Institute of Texas',
      closingDate: 'August 15, 2025',
      link: 'https://www.cprit.texas.gov/grants-funded/how-to-apply',
      description: 'Texas-specific funding for cancer research and prevention programs. Supports both basic research and population-based prevention initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={onBack} className="hover:text-[#00677F] transition-colors">
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={onBack} className="hover:text-[#00677F] transition-colors">
              Publications and Grants
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00677F]">Funding Opportunities</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg mb-4 text-gray-900">On This Page</h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                      activeSection === item.id
                        ? 'bg-[#00677F] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-5xl mb-4 text-gray-900">Funding Opportunities</h1>
            <p className="text-lg text-gray-600 mb-8">
              The CPC Program offers internal funding opportunities and provides guidance for external grant 
              applications. We support researchers at all career stages in securing funding for cancer prevention 
              and control research.
            </p>

            {/* Unique Cancer Prevention Funds */}
            <section id="section-internal" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-6 text-gray-900">Unique Cancer Prevention Funds</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Houston Methodist CPC Program offers several internal funding mechanisms to support innovative 
                research in cancer prevention and control. These awards are designed to help investigators develop 
                preliminary data, establish new collaborations, and position themselves for external funding.
              </p>

              <div className="space-y-6">
                {internalFunds.map((fund, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl mb-4 text-[#00677F]">{fund.name}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-[#8B1538]" />
                        <div>
                          <p className="text-sm text-gray-600">Award Amount</p>
                          <p className="text-gray-900">{fund.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#8B1538]" />
                        <div>
                          <p className="text-sm text-gray-600">Duration</p>
                          <p className="text-gray-900">{fund.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#8B1538]" />
                        <div>
                          <p className="text-sm text-gray-600">Deadline</p>
                          <p className="text-gray-900">{fund.deadline}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      {fund.description}
                    </p>

                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-600">Eligibility</p>
                      <p className="text-gray-800">{fund.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#00677F] rounded">
                <p className="text-lg text-gray-800">
                  <strong>How to Apply:</strong> Contact Dr. Jennifer Cullen at{' '}
                  <a href="mailto:jcullen@houstonmethodist.org" className="text-[#00677F] hover:underline">
                    jcullen@houstonmethodist.org
                  </a>{' '}
                  for application guidelines and submission instructions.
                </p>
              </div>
            </section>

            {/* R01 Grants */}
            <section id="section-r01" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-6 text-gray-900">R01 and Other NIH Mechanisms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The National Institutes of Health (NIH) offers several grant mechanisms suitable for cancer 
                prevention and control research. The CPC Program provides mentorship and grant development 
                support for investigators pursuing NIH funding.
              </p>

              <div className="space-y-6">
                {r01Info.map((mechanism, index) => (
                  <div key={index} className="border-l-4 border-[#00677F] pl-6 py-4">
                    <h3 className="text-2xl mb-3 text-gray-900">{mechanism.mechanism}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {mechanism.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 mb-2">Key Features:</p>
                      <ul className="space-y-2">
                        {mechanism.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#00677F] mt-1">•</span>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://grants.nih.gov/grants/funding/funding_program.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#00677F] text-white rounded hover:bg-[#005266] transition-colors"
                >
                  NIH Funding Opportunities
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.cancer.gov/grants-training/grants-funding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border border-[#00677F] text-[#00677F] rounded hover:bg-gray-50 transition-colors"
                >
                  NCI Grant Programs
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* Open RFA's from Dr. Cullen */}
            <section id="section-rfas" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-6 text-gray-900">Open Request for Applications (RFA's)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Jennifer Cullen, CPC Program Director, maintains a curated list of funding opportunities 
                relevant to cancer prevention and control research. These include federal agencies, foundations, 
                and other organizations supporting our mission.
              </p>

              <div className="space-y-4">
                {openRFAs.map((rfa, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl text-[#00677F]">{rfa.title}</h3>
                      <a
                        href={rfa.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-[#8B1538] text-white text-sm rounded hover:bg-[#6d1028] transition-colors whitespace-nowrap"
                      >
                        View RFA
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {rfa.agency}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Closes: {rfa.closingDate}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {rfa.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#1a3a5c] text-white rounded-lg">
                <h3 className="text-2xl mb-3">Grant Development Support</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The CPC Program offers comprehensive grant development support including:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Individual consultations on grant strategy and specific aims development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Mock study sections and peer review of draft applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Biostatistical consultation and sample size calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Assistance with budget development and letters of support</span>
                  </li>
                </ul>
                <p className="text-lg">
                  Contact{' '}
                  <a href="mailto:jcullen@houstonmethodist.org" className="text-yellow-400 hover:underline">
                    Dr. Jennifer Cullen
                  </a>{' '}
                  to schedule a consultation.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
