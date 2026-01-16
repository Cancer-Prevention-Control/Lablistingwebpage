import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface MissionVisionProps {
  onBack: () => void;
}

export function MissionVision({ onBack }: MissionVisionProps) {
  const [activeSection, setActiveSection] = useState('mission');

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
    { id: 'section-mission', label: 'Mission' },
    { id: 'section-approach', label: 'Our Comprehensive Approach' },
    { id: 'section-research', label: 'Research Excellence' },
    { id: 'section-community', label: 'Community Impact' },
    { id: 'section-collaboration', label: 'Collaboration & Innovation' },
    { id: 'section-goals', label: 'Program Aims' }
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
              About Us
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00677F]">Mission and Vision</span>
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
            <h1 className="text-5xl mb-8 text-gray-900">Mission and Vision</h1>

            {/* Mission Section */}
            <section id="section-mission" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-4 text-gray-900">Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The CPC Cancer Center is committed to reducing the burden of cancer through prevention research, 
                comprehensive patient care, and community engagement. We strive to accelerate discoveries into clinical 
                applications that improve outcomes for cancer patients. Our mission encompasses translational research, 
                state-of-the-art clinical programs, and patient-centered care. The Cancer Prevention and Control Program 
                uniquely integrates strategies to prevent cancer development and progression with efforts to improve 
                prevention, screening, and treatment outcomes for cancer patients and survivors in our catchment area.
              </p>
            </section>

            {/* Our Comprehensive Approach */}
            <section id="section-approach" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-4 text-gray-900">Our Comprehensive Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are dedicated to the multidisciplinary, translational research that combines cutting-edge basic and 
                Cancer Center-wide resources into Research Programs that understand and support cancer patients. The State 
                University System Program advances cancer prevention, diagnosis, and treatment through interdisciplinary 
                collaboration and a unique integration of basic, translational, and clinical research. Our Cancer Prevention 
                Program brings together diverse scientific approaches under a unified goal: reducing the human toll of cancer 
                through prevention, early detection, and treatment optimization to accelerate progress and save lives.
              </p>
            </section>

            {/* Research Excellence & Community Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Research Excellence */}
              <section id="section-research" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl mb-4 text-gray-900">Research Excellence</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our program emphasizes cancer prevention and care using:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Disease epidemiology and disease dynamics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Cancer screening and early detection strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Health economics, services research, and health disparities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Cancer control, patient-reported outcomes, and quality of life assessment</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  cancer.center@houstonmethodist.org
                </p>
              </section>

              {/* Community Impact */}
              <section id="section-community" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl mb-4 text-gray-900">Community Impact</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  By utilizing the diverse, urban catchment area, we implement the NCI cancer care continuum to support 
                  cancer prevention and screening efforts through the regional catchment area Houston Methodist Hospital. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This includes promoting community outreach programs that address cancer disparities and leveraging 
                  population-based resources through the National Institutes of Health to improve health outcomes for 
                  underserved populations.
                </p>
              </section>
            </div>

            {/* Collaboration & Innovation Banner */}
            <section id="section-collaboration" className="bg-[#1a3a5c] text-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-4">Collaboration & Innovation</h2>
              <p className="text-lg leading-relaxed mb-4">
                Collaboration is central to our mission. Through investments in both core facilities and shared resources 
                that provide access to cutting-edge technologies, we identify evidence-based prevention and control strategies 
                to provide a dynamic environment for the development of our regional cancer center that translates research 
                into clinical practice. This not only gives each student, postdoctoral fellow, and faculty member access to 
                world-class resources and support, but also enhances translational research that will improve cancer 
                prevention outcomes.
              </p>
            </section>

            {/* Program Aims */}
            <section id="section-goals" className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl mb-6 text-gray-900">Program Aims</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#00677F] pl-6">
                  <h3 className="text-2xl mb-3 text-gray-900">Aim 1. Cancer Interception through Precision Prevention.</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Develop molecularly targeted interventions for cancer prevention among high-risk individuals likely to benefit from precision prevention.
                  </p>
                </div>

                <div className="border-l-4 border-[#8B1538] pl-6">
                  <h3 className="text-2xl mb-3 text-gray-900">Aim 2. Cancer Control through Innovations in Early Detection and Treatment.</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Develop innovative strategies for early cancer detection and implementation of cancer control delivery and survivorship care guided by a cancer exposome framework.
                  </p>
                </div>

                <div className="border-l-4 border-[#00677F] pl-6">
                  <h3 className="text-2xl mb-3 text-gray-900">Aim 3. Cancer Disparities and Patient Outcomes.</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Develop and evaluate cancer care throughout the cancer continuum.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
