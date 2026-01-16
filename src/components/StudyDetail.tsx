import { ChevronRight, Mail, Phone, MapPin, Calendar, Clock, DollarSign, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudyDetailProps {
  onBack: () => void;
  study: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    color: string;
    irb: string;
    age: string;
    duration: string;
    location: string;
    compensation: string;
    eligibility: string[];
    contact: {
      email: string;
      phone: string;
      coordinator: string;
    };
    objectives: string[];
    procedures: string[];
  };
}

export function StudyDetail({ onBack, study }: StudyDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={onBack} className="hover:text-[#00677F] transition-colors">
              Participate in Research
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00677F]">{study.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00677F] to-[#005566] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-24 rounded-full mb-6" style={{ backgroundColor: study.color }}></div>
              <h1 className="text-5xl mb-6">{study.title}</h1>
              <p className="text-xl leading-relaxed mb-6">
                {study.description}
              </p>
              <div className="flex gap-4">
                <a 
                  href="#enroll"
                  className="bg-white text-[#00677F] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  I'm Interested
                </a>
                <a 
                  href={`mailto:${study.contact.email}`}
                  className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Study Details Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl mb-6 text-gray-900">Study Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Age */}
            <div className="flex gap-3 items-start">
              <div className="bg-indigo-100 rounded-lg p-2.5 shrink-0">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Age</p>
                <p className="text-lg text-gray-900">{study.age}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex gap-3 items-start">
              <div className="bg-purple-100 rounded-lg p-2.5 shrink-0">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                <p className="text-lg text-gray-900">{study.duration}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 items-start">
              <div className="bg-blue-100 rounded-lg p-2.5 shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-lg text-gray-900">{study.location}</p>
              </div>
            </div>

            {/* Compensation */}
            <div className="flex gap-3 items-start">
              <div className="bg-[#d0fae5] rounded-lg p-2.5 shrink-0">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Compensation</p>
                <p className="text-lg text-gray-900">{study.compensation}</p>
              </div>
            </div>
          </div>

          {/* IRB Number */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="text-gray-900">IRB Protocol:</span> {study.irb}
            </p>
          </div>
        </div>

        {/* Study Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About This Study */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl mb-4 text-gray-900">About This Study</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {study.fullDescription}
              </p>
            </div>

            {/* Study Objectives */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl mb-4 text-gray-900">Study Objectives</h2>
              <ul className="space-y-3">
                {study.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00677F] mt-1 text-xl">•</span>
                    <span className="text-lg text-gray-700 leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl mb-4 text-gray-900">What to Expect</h2>
              <p className="text-lg text-gray-700 mb-4">
                As a participant in this study, you will be asked to complete the following:
              </p>
              <ul className="space-y-3">
                {study.procedures.map((procedure, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00677F] mt-1">✓</span>
                    <span className="text-lg text-gray-700 leading-relaxed">{procedure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-2xl mb-4 text-gray-900">Eligibility Criteria</h3>
              <p className="text-gray-700 mb-4">You may be eligible if you meet the following criteria:</p>
              <ul className="space-y-3 mb-6">
                {study.eligibility.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#00677F] mt-1">✓</span>
                    <span className="text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>

              <div id="enroll" className="space-y-3">
                <a 
                  href={`mailto:${study.contact.email}?subject=Interest in ${study.title}`}
                  className="block w-full bg-[#00677F] text-white text-center px-6 py-3 rounded-lg hover:bg-[#005566] transition-colors"
                >
                  I'm Interested
                </a>
                <button className="block w-full bg-white border-2 border-[#00677F] text-[#00677F] text-center px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Not Now
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xl mb-4 text-gray-900">Contact Information</h4>
                <div className="space-y-3">
                  <p className="text-gray-900">{study.contact.coordinator}</p>
                  <a 
                    href={`mailto:${study.contact.email}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-[#00677F] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm break-all">{study.contact.email}</span>
                  </a>
                  <a 
                    href={`tel:${study.contact.phone}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-[#00677F] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{study.contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <h3 className="text-xl mb-3 text-gray-900">Important Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Participation is completely voluntary. You may withdraw at any time without penalty.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>All information collected will be kept strictly confidential and protected.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>This study has been reviewed and approved by the Houston Methodist Institutional Review Board (IRB).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Before participating, you will receive a detailed informed consent document explaining all study procedures, risks, and benefits.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
