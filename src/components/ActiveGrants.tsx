import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ActiveGrantsProps {
  onBack: () => void;
}

const grants = [
  {
    id: 'grant-1',
    pi: 'Dr. Sarah Chen, PhD',
    title: 'Precision Prevention Strategies for High-Risk Populations: A Multi-Cohort Study',
    fundingSource: 'National Cancer Institute (NCI) R01 CA234567',
    period: 'July 2023 - June 2028',
    abstract: 'This project aims to develop and validate precision prevention strategies for individuals at high risk of developing cancer. By integrating genomic, environmental, and lifestyle data from multiple cohorts across the Houston Methodist catchment area, we seek to identify personalized risk profiles and intervention targets. The study will leverage machine learning algorithms to predict cancer risk and develop tailored prevention protocols that can be implemented in clinical settings. Our comprehensive approach includes prospective follow-up of 5,000 high-risk individuals, biomarker validation studies, and implementation of evidence-based interventions. This work has the potential to transform cancer prevention from a one-size-fits-all approach to a precision medicine model that maximizes benefit while minimizing unnecessary interventions.',
    figure: 'https://images.unsplash.com/photo-1761106082516-61d4c6883f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MjMwNTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    figureCaption: 'Figure 1: Laboratory analysis of biomarkers for cancer risk assessment in precision prevention study.'
  },
  {
    id: 'grant-2',
    pi: 'Dr. Michael Rodriguez, MD, MPH',
    title: 'Reducing Cancer Disparities Through Community-Based Screening Programs',
    fundingSource: 'American Cancer Society (ACS) RSGI-23-456789-01-CPHPS',
    period: 'January 2024 - December 2027',
    abstract: 'Cancer screening rates remain significantly lower in underserved communities, contributing to disparities in cancer outcomes. This community-engaged research project partners with local organizations, churches, and community centers in the Houston area to implement evidence-based screening programs for breast, cervical, and colorectal cancers. We will use a multi-level intervention approach that addresses individual barriers (e.g., knowledge, fear), healthcare system barriers (e.g., access, cost), and community-level factors (e.g., social norms, cultural beliefs). The project includes a randomized trial comparing different implementation strategies, with primary outcomes of screening rates and early-stage cancer detection. We will also conduct economic analyses to determine cost-effectiveness and sustainability of the interventions. This research will generate critical evidence for scaling effective screening programs to reduce cancer disparities.',
    figure: 'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjByZXNlYXJjaCUyMGRhdGElMjBhbmFseXNpc3xlbnwxfHx8fDE3NjIzMDY0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    figureCaption: 'Figure 2: Data analysis showing screening rates across different community intervention sites.'
  },
  {
    id: 'grant-3',
    pi: 'Dr. Jennifer Williams, PhD',
    title: 'Enhancing Quality of Life in Cancer Survivors: An Integrative Intervention Study',
    fundingSource: 'Patient-Centered Outcomes Research Institute (PCORI) CER-2023-07891',
    period: 'September 2023 - August 2027',
    abstract: 'Cancer survivors face numerous long-term physical and psychological challenges that impact their quality of life. This patient-centered comparative effectiveness research study evaluates an integrative intervention program designed to address multiple domains of survivorship care, including physical function, psychological well-being, social support, and management of treatment-related side effects. We will randomize 400 cancer survivors to either the integrative intervention (which combines exercise, nutrition counseling, stress management, and peer support) or usual care. Patient-reported outcomes will be assessed at baseline and multiple follow-up time points over two years. The study includes a diverse patient population representative of the Houston Methodist catchment area, with special attention to ensuring adequate representation of minority and underserved survivors. Results will inform the development of comprehensive survivorship care models that can be implemented in community cancer centers.',
    figure: 'https://images.unsplash.com/photo-1761106082516-61d4c6883f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MjMwNTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    figureCaption: 'Figure 3: Assessment of patient-reported outcomes in cancer survivorship intervention study.'
  }
];

export function ActiveGrants({ onBack }: ActiveGrantsProps) {
  const [activeSection, setActiveSection] = useState('grant-1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('[id^="grant-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            <span className="text-[#00677F]">Active Grants</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg mb-4 text-gray-900">Active Grants</h3>
              <nav className="space-y-2">
                {grants.map((grant, index) => (
                  <button
                    key={grant.id}
                    onClick={() => scrollToSection(grant.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                      activeSection === grant.id
                        ? 'bg-[#00677F] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Grant {index + 1}: {grant.pi}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-5xl mb-4 text-gray-900">Active Grants</h1>
            <p className="text-lg text-gray-600 mb-8">
              Our Cancer Prevention and Control Program is supported by competitive grants from federal agencies, 
              foundations, and other funding organizations. These grants support our research mission to prevent 
              cancer, improve early detection, and enhance survivorship.
            </p>

            {grants.map((grant) => (
              <section
                key={grant.id}
                id={grant.id}
                className="bg-white rounded-lg shadow-md p-8 mb-8"
              >
                {/* Principal Investigator */}
                <div className="mb-6">
                  <h3 className="text-xl text-gray-600 mb-2">Principal Investigator</h3>
                  <p className="text-2xl text-[#00677F]">{grant.pi}</p>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-xl text-gray-600 mb-2">Grant Title</h3>
                  <h2 className="text-3xl text-gray-900">{grant.title}</h2>
                </div>

                {/* Funding Source and Period - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl text-gray-600 mb-2">Funding Source</h3>
                    <p className="text-lg text-gray-800">{grant.fundingSource}</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-600 mb-2">Award Period</h3>
                    <p className="text-lg text-gray-800">{grant.period}</p>
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h3 className="text-xl text-gray-600 mb-2">Abstract</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {grant.abstract}
                  </p>
                </div>

                {/* Figure */}
                <div className="mt-6">
                  <h3 className="text-xl text-gray-600 mb-4">Figure</h3>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <ImageWithFallback
                      src={grant.figure}
                      alt={grant.figureCaption}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {grant.figureCaption}
                  </p>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
