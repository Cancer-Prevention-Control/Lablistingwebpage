import { ChevronRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParticipateResearchProps {
  onBack: () => void;
  onStudyClick: (study: CancerStudy) => void;
}

interface CancerStudy {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  studyLink: string;
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
}

const cancerStudies: CancerStudy[] = [
  {
    title: "Liver Cancer Prevention Study",
    description: "Evaluating the role of systemic inflammation markers, altered bile acid profile, and gut microbiota in MASLD/NAFLD progression and hepatocellular carcinoma development.",
    fullDescription: "This comprehensive research study aims to understand the complex biological mechanisms that contribute to the progression of Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD), formerly known as Non-Alcoholic Fatty Liver Disease (NAFLD), and its potential progression to hepatocellular carcinoma (HCC). By examining systemic inflammation markers, bile acid metabolism, and gut microbiota composition, we hope to identify early biomarkers that can predict disease progression and inform prevention strategies.",
    image: "https://images.unsplash.com/photo-1715529134972-221f23a6c701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlciUyMGNhbmNlciUyMHJlc2VhcmNoJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjIzODAxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#liver-study",
    color: "#8B4513",
    irb: "PRO-2025-0421",
    age: "40-75 years",
    duration: "1.5 hours",
    location: "Smith Tower, Houston Methodist Hospital",
    compensation: "$75",
    eligibility: [
      "Age 40-75 years",
      "Diagnosed with MASLD/NAFLD",
      "Willing to provide blood samples",
      "Able to commit to 1.5 hours for study visit"
    ],
    contact: {
      email: "liver.study@houstonmethodist.org",
      phone: "(713) 441-6969",
      coordinator: "Research Coordinator - Liver Cancer Prevention Team"
    },
    objectives: [
      "Identify systemic inflammation markers associated with MASLD/NAFLD progression",
      "Analyze bile acid profiles in patients with varying stages of liver disease",
      "Characterize gut microbiota composition and its relationship to disease progression",
      "Develop predictive models for hepatocellular carcinoma risk in MASLD/NAFLD patients"
    ],
    procedures: [
      "One-time blood draw for biomarker and genetic analysis",
      "Stool sample collection for microbiome assessment",
      "Medical history review and questionnaire completion",
      "Review of existing imaging and laboratory results"
    ]
  },
  {
    title: "Lung Cancer Screening Study",
    description: "Improving early detection rates for lung cancer using advanced imaging techniques and biomarker analysis in high-risk individuals.",
    fullDescription: "This innovative lung cancer screening study combines state-of-the-art low-dose CT imaging with novel blood-based biomarker testing to improve early detection of lung cancer in high-risk populations. Our goal is to identify lung cancer at its earliest, most treatable stages, when survival rates are significantly higher. The study will also help us better understand which screening intervals and biomarker combinations are most effective for different risk groups.",
    image: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdW5nJTIwY2FuY2VyJTIwYXdhcmVuZXNzfGVufDF8fHx8MTc2MjM3NzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#lung-study",
    color: "#B0C4DE",
    irb: "PRO-2025-0512",
    age: "55-80 years",
    duration: "2 hours initial visit, annual follow-ups",
    location: "Houston Methodist Hospital Main Campus",
    compensation: "$100 per visit",
    eligibility: [
      "Age 55-80 years",
      "30+ pack-year smoking history",
      "Current smoker or quit within past 15 years",
      "No history of lung cancer",
      "No CT chest scan in past 12 months"
    ],
    contact: {
      email: "lungscreen@houstonmethodist.org",
      phone: "(713) 441-7000",
      coordinator: "Research Coordinator - Lung Cancer Screening Program"
    },
    objectives: [
      "Evaluate the effectiveness of combined CT imaging and biomarker screening",
      "Identify early-stage lung cancer in high-risk populations",
      "Determine optimal screening intervals for different risk categories",
      "Assess novel blood-based biomarkers for lung cancer detection"
    ],
    procedures: [
      "Low-dose chest CT scan at enrollment and annually",
      "Blood draw for biomarker analysis at each visit",
      "Comprehensive smoking history and risk factor assessment",
      "Pulmonary function testing",
      "Annual follow-up visits for up to 5 years"
    ]
  },
  {
    title: "Breast Cancer Risk Assessment",
    description: "Identifying genetic and lifestyle factors that contribute to breast cancer risk and developing personalized prevention strategies.",
    fullDescription: "This comprehensive breast cancer risk assessment study integrates genetic testing, family history analysis, and lifestyle factor evaluation to create personalized risk profiles and prevention recommendations. We utilize advanced genetic sequencing technologies to identify both common and rare genetic variants associated with breast cancer risk, while also examining modifiable lifestyle factors that can influence disease development. Participants receive detailed risk assessments and evidence-based recommendations for personalized prevention strategies.",
    image: "https://images.unsplash.com/photo-1575853168674-9222301f4f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBjYW5jZXIlMjByaWJib258ZW58MXx8fHwxNzYyMzc3MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#breast-study",
    color: "#FF69B4",
    irb: "PRO-2025-0298",
    age: "25-70 years",
    duration: "3 hours initial assessment, optional follow-ups",
    location: "Houston Methodist Cancer Center",
    compensation: "$150",
    eligibility: [
      "Women age 25-70 years",
      "Family history of breast cancer OR personal history of abnormal mammogram",
      "No current cancer diagnosis",
      "Willing to undergo genetic testing",
      "Able to complete lifestyle questionnaires"
    ],
    contact: {
      email: "breast.risk@houstonmethodist.org",
      phone: "(713) 441-8500",
      coordinator: "Research Coordinator - Breast Cancer Prevention"
    },
    objectives: [
      "Identify genetic variants associated with increased breast cancer risk",
      "Evaluate the interaction between genetic and lifestyle risk factors",
      "Develop personalized risk prediction models",
      "Provide evidence-based prevention recommendations to high-risk individuals"
    ],
    procedures: [
      "Saliva or blood sample collection for genetic analysis",
      "Detailed family history documentation (3 generations)",
      "Comprehensive lifestyle and dietary assessment questionnaires",
      "Review of previous mammograms and breast imaging",
      "Optional consultation with genetic counselor for results discussion"
    ]
  },
  {
    title: "Colorectal Cancer Prevention",
    description: "Investigating the effectiveness of screening methods and dietary interventions in preventing colorectal cancer development.",
    fullDescription: "This prevention-focused study examines the combined impact of enhanced colorectal cancer screening methods and targeted dietary interventions on reducing colorectal cancer incidence. We compare traditional colonoscopy screening with newer non-invasive methods while also investigating how specific dietary patterns and nutritional supplements may reduce polyp formation and cancer risk. This comprehensive approach aims to identify the most effective prevention strategies for different patient populations.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmVjdGFsJTIwY2FuY2VyfGVufDF8fHx8MTc2MjM3NzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#colorectal-study",
    color: "#4169E1",
    irb: "PRO-2025-0367",
    age: "45-75 years",
    duration: "Screening visit plus 3-year follow-up",
    location: "Houston Methodist Gastroenterology Center",
    compensation: "$200 total over study period",
    eligibility: [
      "Age 45-75 years",
      "Due for colorectal cancer screening",
      "No previous history of colorectal cancer or polyps",
      "Willing to follow dietary guidelines",
      "Available for follow-up visits"
    ],
    contact: {
      email: "colorectal.prevention@houstonmethodist.org",
      phone: "(713) 441-9200",
      coordinator: "Research Coordinator - Colorectal Cancer Prevention"
    },
    objectives: [
      "Compare effectiveness of different colorectal cancer screening methods",
      "Evaluate the impact of dietary interventions on polyp formation",
      "Identify dietary patterns associated with reduced colorectal cancer risk",
      "Assess patient adherence to screening and dietary recommendations"
    ],
    procedures: [
      "Colonoscopy or alternative screening method (e.g., FIT-DNA test)",
      "Baseline dietary assessment and food frequency questionnaire",
      "Random assignment to dietary intervention or standard care group",
      "Monthly dietary logs and compliance monitoring",
      "Follow-up colonoscopy at 3 years"
    ]
  },
  {
    title: "Pancreatic Cancer Early Detection",
    description: "Developing novel biomarkers and imaging techniques for early detection of pancreatic cancer in high-risk populations.",
    fullDescription: "Pancreatic cancer is often diagnosed at late stages when treatment options are limited. This pioneering study focuses on developing and validating novel biomarkers and advanced imaging protocols for early pancreatic cancer detection in individuals at increased risk. We combine cutting-edge blood-based biomarker panels with specialized MRI and endoscopic ultrasound techniques to identify precancerous lesions and early-stage tumors when they are most amenable to curative treatment.",
    image: "https://images.unsplash.com/photo-1631048008477-d46c224bbff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jcmVhdGljJTIwY2FuY2VyfGVufDF8fHx8MTc2MjM3NzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#pancreatic-study",
    color: "#9370DB",
    irb: "PRO-2025-0445",
    age: "50+ years",
    duration: "Initial visit 4 hours, annual follow-up visits",
    location: "Houston Methodist Pancreatic Cancer Center",
    compensation: "$250 per visit",
    eligibility: [
      "Age 50+ years",
      "Family history of pancreatic cancer OR chronic pancreatitis",
      "No current pancreatic cancer diagnosis",
      "Willing to undergo blood draws and imaging",
      "Able to attend multiple study visits"
    ],
    contact: {
      email: "pancreatic.early@houstonmethodist.org",
      phone: "(713) 441-7800",
      coordinator: "Research Coordinator - Pancreatic Cancer Early Detection"
    },
    objectives: [
      "Validate novel biomarker panels for early pancreatic cancer detection",
      "Develop imaging protocols for high-risk pancreatic screening",
      "Identify precancerous pancreatic lesions in high-risk individuals",
      "Establish optimal surveillance intervals for different risk groups"
    ],
    procedures: [
      "Comprehensive blood draw for multiple biomarker panels",
      "Pancreatic protocol MRI or CT scan",
      "Endoscopic ultrasound (EUS) if indicated by imaging or biomarkers",
      "Detailed family history and risk factor assessment",
      "Annual surveillance visits with repeat imaging and biomarker testing"
    ]
  },
  {
    title: "Prostate Cancer Monitoring Study",
    description: "Evaluating active surveillance strategies and novel screening approaches for prostate cancer in men over 50.",
    fullDescription: "This study evaluates innovative approaches to prostate cancer screening and monitoring, combining traditional PSA testing with advanced imaging and novel biomarkers to better distinguish aggressive cancers requiring treatment from indolent cancers suitable for active surveillance. We aim to reduce unnecessary biopsies and overtreatment while ensuring that clinically significant cancers are detected early. Participants receive state-of-the-art multiparametric MRI and comprehensive biomarker analysis as part of the study.",
    image: "https://images.unsplash.com/photo-1759142449398-89357aa1bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zdGF0ZSUyMGNhbmNlciUyMGF3YXJlbmVzc3xlbnwxfHx8fDE3NjIzNzcyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    studyLink: "#prostate-study",
    color: "#4682B4",
    irb: "PRO-2025-0589",
    age: "50+ years (45+ with family history)",
    duration: "2-3 hours initial visit, annual follow-ups",
    location: "Houston Methodist Urology Clinic",
    compensation: "$125 per visit",
    eligibility: [
      "Men age 50+ years (45+ with family history)",
      "No previous prostate cancer diagnosis",
      "Willing to undergo PSA testing",
      "Available for annual follow-up",
      "No contraindications for MRI"
    ],
    contact: {
      email: "prostate.screening@houstonmethodist.org",
      phone: "(713) 441-6200",
      coordinator: "Research Coordinator - Prostate Cancer Screening Program"
    },
    objectives: [
      "Evaluate the accuracy of multiparametric MRI for prostate cancer detection",
      "Assess novel biomarkers that distinguish aggressive from indolent prostate cancer",
      "Optimize active surveillance protocols for low-risk prostate cancer",
      "Reduce unnecessary biopsies while maintaining high detection rates for significant cancers"
    ],
    procedures: [
      "Baseline PSA test and comprehensive urologic examination",
      "Multiparametric prostate MRI",
      "Blood and urine collection for novel biomarker analysis",
      "Targeted biopsy only if imaging or biomarkers suggest significant cancer",
      "Annual follow-up with PSA, biomarkers, and repeat MRI as indicated"
    ]
  }
];

function CancerStudyCard({ study, onStudyClick }: { study: CancerStudy; onStudyClick: (study: CancerStudy) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className="h-48 overflow-hidden">
        <ImageWithFallback 
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="h-2 rounded-full mb-4" style={{ backgroundColor: study.color }}></div>
        <h3 className="text-2xl mb-3 text-gray-900">{study.title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {study.description}
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-lg text-[#00677F] hover:text-[#005566] transition-colors"
          >
            Am I eligible?
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          
          {isExpanded && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <h4 className="text-lg text-gray-900 mb-2">Eligibility Criteria:</h4>
              <ul className="space-y-2">
                {study.eligibility.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#00677F] mt-1">✓</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            onClick={() => onStudyClick(study)}
            className="inline-flex items-center gap-2 bg-[#00677F] text-white px-6 py-3 rounded-lg hover:bg-[#005566] transition-colors group-hover:gap-3"
          >
            View Study Details
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ParticipateResearch({ onBack, onStudyClick }: ParticipateResearchProps) {
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
            <span className="text-[#00677F]">Participate in Research</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00677F] to-[#005566] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">Join Our Studies Today!</h1>
              <p className="text-xl leading-relaxed mb-6">
                Your participation in our cancer research studies can make a real difference. By joining our research, you contribute to groundbreaking discoveries in cancer prevention, early detection, and treatment that could benefit millions of people worldwide.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h2 className="text-2xl mb-4">How You Benefit</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-white/90 mt-1">✓</span>
                    <span>Access to advanced screening and cutting-edge diagnostic tools at no cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/90 mt-1">✓</span>
                    <span>Close monitoring and care from expert medical professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/90 mt-1">✓</span>
                    <span>Compensation for your time and travel expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/90 mt-1">✓</span>
                    <span>Contribute to medical breakthroughs that help future generations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1655720359248-eeace8c709c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcG9wdWxhdGlvbiUyMGNvbW11bml0eSUyMGhlYWx0aHxlbnwxfHx8fDE3Njg4NDUzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Research participants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Research Studies Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Current Research Studies</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore our active cancer research studies. Each study focuses on a specific cancer type and offers participants the opportunity to contribute to life-saving research while receiving expert medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cancerStudies.map((study, index) => (
            <CancerStudyCard key={index} study={study} onStudyClick={onStudyClick} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl mb-6 text-gray-900">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">Participation Process</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00677F] mt-1">1.</span>
                  <span>Review study eligibility criteria and submit interest form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00677F] mt-1">2.</span>
                  <span>Speak with our research coordinator about the study details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00677F] mt-1">3.</span>
                  <span>Review and sign informed consent documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00677F] mt-1">4.</span>
                  <span>Complete eligibility screening and baseline assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00677F] mt-1">5.</span>
                  <span>Begin study participation with ongoing support from our team</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">Your Rights as a Participant</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B1538] mt-1">•</span>
                  <span>Voluntary participation - withdraw at any time without penalty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B1538] mt-1">•</span>
                  <span>Complete confidentiality and privacy protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B1538] mt-1">•</span>
                  <span>Full transparency about study procedures and potential risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B1538] mt-1">•</span>
                  <span>Ethical oversight by institutional review boards (IRB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B1538] mt-1">•</span>
                  <span>Access to study results and findings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#1a3a5c] to-[#2a4a6c] text-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl mb-4">Questions About Our Studies?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our dedicated research coordinators are available to answer your questions, discuss eligibility requirements, and help you find the right study for you. Contact us today to learn more about how you can participate in groundbreaking cancer research.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="mailto:cpc.research@houstonmethodist.org"
              className="bg-white text-[#1a3a5c] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Research Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}