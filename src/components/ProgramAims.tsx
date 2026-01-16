import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProgramAimsProps {
  onBack: () => void;
}

export function ProgramAims({ onBack }: ProgramAimsProps) {
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
            <span className="text-[#00677F]">Program Aims</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <h1 className="text-5xl mb-8 text-gray-900">Program Aims</h1>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzYyOTQwODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical Research Laboratory"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            The Cancer Prevention and Control Program is guided by three strategic aims that drive our 
            research, clinical practice, and community engagement efforts. These aims represent our commitment 
            to advancing cancer prevention science and improving outcomes for all individuals in our catchment area.
          </p>
        </div>

        {/* Program Aims */}
        <div className="space-y-8">
          {/* Aim 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#00677F] to-[#004d5f] p-6">
              <h2 className="text-3xl text-white">Aim 1</h2>
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">
                Cancer Interception through Precision Prevention
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Develop molecularly targeted interventions for cancer prevention among high-risk individuals 
                likely to benefit from precision prevention.
              </p>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-3 text-gray-900">Key Focus Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Identification of high-risk populations through advanced molecular profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Development of targeted prevention strategies based on individual risk profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Translation of precision medicine approaches to cancer prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aim 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#8B1538] to-[#6b0f2a] p-6">
              <h2 className="text-3xl text-white">Aim 2</h2>
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">
                Cancer Control through Innovations in Early Detection and Treatment
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Develop innovative strategies for early cancer detection and implementation of cancer control 
                delivery and survivorship care guided by a cancer exposome framework.
              </p>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-3 text-gray-900">Key Focus Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B1538] mt-1">•</span>
                    <span>Novel early detection technologies and screening methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B1538] mt-1">•</span>
                    <span>Comprehensive survivorship care programs to improve quality of life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B1538] mt-1">•</span>
                    <span>Integration of cancer exposome research to understand environmental and lifestyle factors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aim 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#00677F] to-[#004d5f] p-6">
              <h2 className="text-3xl text-white">Aim 3</h2>
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">
                Cancer Disparities and Patient Outcomes
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Develop and evaluate cancer care throughout the cancer continuum.
              </p>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl mb-3 text-gray-900">Key Focus Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Addressing cancer health disparities across diverse populations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Improving patient-reported outcomes and quality of life measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">•</span>
                    <span>Evaluating effectiveness of interventions across the entire cancer care continuum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#00677F] to-[#004d5f] rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6 leading-relaxed">
            These program aims guide our collaborative efforts to reduce the burden of cancer through 
            innovative research, clinical excellence, and community partnerships. We welcome researchers, 
            clinicians, and community members to join us in this important work.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#00677F] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Learn More About Our Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
