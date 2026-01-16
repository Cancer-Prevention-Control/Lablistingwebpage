import { ChevronRight } from 'lucide-react';
import { LabCard } from './LabCard';

interface CPCLabsProps {
  onBack: () => void;
}

const labsData = [
  {
    name: "Cancer Epidemiology and Prevention Lab",
    pi: "Dr. Sarah Johnson",
    focus: "Our laboratory focuses on identifying environmental and lifestyle risk factors for cancer development. We conduct large-scale population studies to understand cancer patterns and develop evidence-based prevention strategies for high-risk communities.",
    imageUrl: "https://images.unsplash.com/photo-1576669801343-117bb4054118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc2MTg0NTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Molecular Oncology Laboratory",
    pi: "Dr. Michael Chen",
    focus: "We investigate the molecular mechanisms underlying cancer initiation and progression. Our research combines genomics, proteomics, and bioinformatics to identify novel therapeutic targets and biomarkers for early cancer detection.",
    imageUrl: "https://images.unsplash.com/photo-1758573466927-87ba2f725c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBzY2llbnRpc3QlMjBsYWJ8ZW58MXx8fHwxNzYxODQ1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cancer Genomics and Precision Medicine Lab",
    pi: "Dr. Jennifer Martinez",
    focus: "Our team specializes in genomic profiling of tumors to guide personalized treatment strategies. We develop and validate genetic tests for cancer risk assessment and treatment response prediction.",
    imageUrl: "https://images.unsplash.com/photo-1578496479763-c21c718af028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBzZXF1ZW5jaW5nJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYxODQ1OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cancer Pathology and Diagnostics Laboratory",
    pi: "Dr. Robert Kim",
    focus: "We focus on advancing cancer diagnostic techniques through innovative pathology methods. Our research includes development of new immunohistochemical markers and digital pathology tools for improved cancer classification.",
    imageUrl: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWJvcmF0b3J5JTIwc2xpZGVzfGVufDF8fHx8MTc2MTg0NTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cancer Immunology and Immunotherapy Lab",
    pi: "Dr. Amanda Williams",
    focus: "Our laboratory investigates the interactions between the immune system and cancer. We develop novel immunotherapeutic approaches and study mechanisms of immune evasion to improve cancer treatment outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1668511237388-404cc7e56e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9tZWRpY2FsJTIwcmVzZWFyY2glMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxODQ1OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cancer Biomarker Discovery Laboratory",
    pi: "Dr. David Anderson",
    focus: "We specialize in identifying and validating biomarkers for cancer screening, diagnosis, and monitoring. Our work integrates multi-omics approaches to discover novel molecular signatures across various cancer types.",
    imageUrl: "https://images.unsplash.com/photo-1582719471257-05db68be5ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBiaW9sb2d5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjE4NDU5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Translational Cancer Therapeutics Lab",
    pi: "Dr. Lisa Thompson",
    focus: "Our research bridges basic science and clinical application by developing and testing new cancer treatments. We conduct preclinical studies of novel therapeutic agents and optimize drug delivery systems.",
    imageUrl: "https://images.unsplash.com/photo-1669101602104-bfa264a17cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwbGFifGVufDF8fHx8MTc2MTgzMTEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cancer Health Disparities Research Lab",
    pi: "Dr. Marcus Brown",
    focus: "We study social, behavioral, and biological factors contributing to cancer disparities in underserved populations. Our goal is to develop culturally appropriate interventions to reduce cancer burden in minority communities.",
    imageUrl: "https://images.unsplash.com/photo-1706639996436-3c90695c7dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjBjZWxscyUyMG1pY3Jvc2NvcHl8ZW58MXx8fHwxNzYxODQ1OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CPCLabs({ onBack }: CPCLabsProps) {
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
            <span className="text-[#00677F]">CPC Labs</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-gray-900">Our Research Labs</h1>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            The Cancer Prevention and Control Program houses world-class research laboratories dedicated to 
            advancing our understanding of cancer and developing innovative prevention and treatment strategies. 
            Our multidisciplinary teams collaborate to translate scientific discoveries into clinical applications 
            that improve patient outcomes and reduce cancer burden in our community.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labsData.map((lab, index) => (
            <LabCard
              key={index}
              name={lab.name}
              pi={lab.pi}
              focus={lab.focus}
              imageUrl={lab.imageUrl}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl mb-4 text-gray-900">Interested in Collaboration?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our laboratories welcome collaborations with researchers, clinicians, and industry partners. 
            If you're interested in learning more about our research or exploring potential partnerships, 
            please contact us.
          </p>
          <a 
            href="mailto:cancer.center@houstonmethodist.org" 
            className="inline-flex items-center gap-2 bg-[#00677F] text-white px-6 py-3 rounded hover:bg-[#005566] transition-colors"
          >
            Contact Our Research Team
          </a>
        </div>
      </div>
    </div>
  );
}
