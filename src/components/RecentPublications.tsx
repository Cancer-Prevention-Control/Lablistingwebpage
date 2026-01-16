import { useState } from 'react';
import { ChevronRight, ExternalLink, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RecentPublicationsProps {
  onBack: () => void;
}

interface Publication {
  id: string;
  year: string;
  title: string;
  authors: string;
  journal: string;
  yearPublished: string;
  doi: string;
  pmid: string;
  thumbnail: string;
}

const publications: Publication[] = [
  // 2025 Publications
  {
    id: 'pub-1',
    year: '2025',
    title: 'Precision Prevention Strategies for High-Risk Populations: Integrating Genomic and Environmental Data',
    authors: 'Chen S, Rodriguez M, Williams J, Thompson K, Martinez A, Shah R',
    journal: 'Cancer Prevention Research',
    yearPublished: '2025',
    doi: '10.1158/1940-6207.CAPR-24-0234',
    pmid: '38756432',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyMzU1OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-2',
    year: '2025',
    title: 'Machine Learning Approaches to Early Cancer Detection in Community Settings',
    authors: 'Williams J, Thompson K, Martinez A, Shah R',
    journal: 'Journal of the National Cancer Institute',
    yearPublished: '2025',
    doi: '10.1093/jnci/djae289',
    pmid: '38234567',
    thumbnail: 'https://images.unsplash.com/photo-1631203886769-f4b4d0b1446c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYyNDYyMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-3',
    year: '2025',
    title: 'Impact of Integrative Survivorship Care on Quality of Life Outcomes: Results from a Randomized Clinical Trial',
    authors: 'Rodriguez M, Chen S, Kumar V, Patel N, Williams J',
    journal: 'JAMA Oncology',
    yearPublished: '2025',
    doi: '10.1001/jamaoncol.2024.1234',
    pmid: '38945678',
    thumbnail: 'https://images.unsplash.com/photo-1656337426914-5e5ba162d606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5vbWljJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjI0NjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-4',
    year: '2025',
    title: 'Novel Biomarkers for Early Detection of Pancreatic Cancer in High-Risk Cohorts',
    authors: 'Patel N, Williams J, Chen S, Rodriguez M, Shah R, Kumar V',
    journal: 'Cancer Discovery',
    yearPublished: '2025',
    doi: '10.1158/2159-8290.CD-23-1456',
    pmid: '38567890',
    thumbnail: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMHRyaWFsfGVufDF8fHx8MTc2MjQ2MjA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-5',
    year: '2025',
    title: 'Social Determinants of Health and Cancer Outcomes: A Population-Based Cohort Study',
    authors: 'Shah R, Kumar V, Thompson K, Martinez A, Chen S, Rodriguez M',
    journal: 'The Lancet Oncology',
    yearPublished: '2025',
    doi: '10.1016/S1470-2045(24)00089-7',
    pmid: '38123456',
    thumbnail: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YXxlbnwxfHx8fDE3NjI0NjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-6',
    year: '2025',
    title: 'Digital Health Interventions for Cancer Risk Reduction in Underserved Communities',
    authors: 'Martinez A, Thompson K, Williams J, Shah R, Rodriguez M',
    journal: 'Journal of Medical Internet Research',
    yearPublished: '2025',
    doi: '10.2196/45678',
    pmid: '38445566',
    thumbnail: 'https://images.unsplash.com/photo-1706806595099-f07588729caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MjQyMDEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-7',
    year: '2025',
    title: 'The Role of Artificial Intelligence in Personalized Cancer Screening Programs',
    authors: 'Kumar V, Patel N, Chen S, Williams J, Thompson K',
    journal: 'Nature Medicine',
    yearPublished: '2025',
    doi: '10.1038/s41591-024-03456-7',
    pmid: '38334455',
    thumbnail: 'https://images.unsplash.com/photo-1674544362969-a4269ef0ea69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjI0NjIwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-8',
    year: '2025',
    title: 'Lifestyle Interventions for Breast Cancer Prevention: A Meta-Analysis',
    authors: 'Thompson K, Martinez A, Shah R, Rodriguez M, Chen S',
    journal: 'Journal of Clinical Oncology',
    yearPublished: '2025',
    doi: '10.1200/JCO.24.01234',
    pmid: '38556677',
    thumbnail: 'https://images.unsplash.com/photo-1581056771188-021d4a0f8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjBwcmV2ZW50aW9ufGVufDF8fHx8MTc2MjQ2MjA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  // 2024 Publications
  {
    id: 'pub-9',
    year: '2024',
    title: 'Community-Based Cancer Screening Programs: Implementation and Outcomes',
    authors: 'Williams J, Chen S, Martinez A, Thompson K',
    journal: 'American Journal of Preventive Medicine',
    yearPublished: '2024',
    doi: '10.1016/j.amepre.2023.12.001',
    pmid: '38112233',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyMzU1OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-10',
    year: '2024',
    title: 'Genomic Risk Assessment in Cancer Prevention: Current Evidence and Future Directions',
    authors: 'Shah R, Rodriguez M, Patel N, Kumar V',
    journal: 'Cancer Epidemiology, Biomarkers & Prevention',
    yearPublished: '2024',
    doi: '10.1158/1055-9965.EPI-23-0567',
    pmid: '38223344',
    thumbnail: 'https://images.unsplash.com/photo-1631203886769-f4b4d0b1446c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYyNDYyMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-11',
    year: '2024',
    title: 'Telemedicine for Cancer Survivorship Care: A Randomized Trial',
    authors: 'Martinez A, Williams J, Chen S, Shah R',
    journal: 'JAMA Network Open',
    yearPublished: '2024',
    doi: '10.1001/jamanetworkopen.2023.45678',
    pmid: '38334455',
    thumbnail: 'https://images.unsplash.com/photo-1656337426914-5e5ba162d606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5vbWljJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjI0NjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-12',
    year: '2024',
    title: 'Physical Activity and Cancer Risk: Updated Meta-Analysis of Prospective Studies',
    authors: 'Thompson K, Kumar V, Rodriguez M, Patel N',
    journal: 'British Journal of Cancer',
    yearPublished: '2024',
    doi: '10.1038/s41416-023-02345-1',
    pmid: '38445566',
    thumbnail: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMHRyaWFsfGVufDF8fHx8MTc2MjQ2MjA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  // 2023 Publications
  {
    id: 'pub-13',
    year: '2023',
    title: 'Disparities in Colorectal Cancer Screening: A Comprehensive Analysis',
    authors: 'Chen S, Williams J, Martinez A, Shah R',
    journal: 'Cancer',
    yearPublished: '2023',
    doi: '10.1002/cncr.34567',
    pmid: '37889900',
    thumbnail: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YXxlbnwxfHx8fDE3NjI0NjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'pub-14',
    year: '2023',
    title: 'Nutritional Interventions in Cancer Prevention: Evidence and Recommendations',
    authors: 'Patel N, Rodriguez M, Thompson K, Kumar V',
    journal: 'Nutrition and Cancer',
    yearPublished: '2023',
    doi: '10.1080/01635581.2023.2234567',
    pmid: '37998811',
    thumbnail: 'https://images.unsplash.com/photo-1706806595099-f07588729caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MjQyMDEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function RecentPublications({ onBack }: RecentPublicationsProps) {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get unique years and sort them
  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter publications by selected year
  const filteredPublications = publications.filter(pub => pub.year === selectedYear);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={onBack} className="hover:text-[#00677F] transition-colors">
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={onBack} className="hover:text-[#00677F] transition-colors">
              Publications and Grants
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00677F]">Recent Publications</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl text-gray-900">Recent Publications</h1>
            
            {/* Year Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#00677F] text-[#00677F] rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">Year: {selectedYear}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedYear === year ? 'bg-[#00677F] text-white hover:bg-[#005266]' : 'text-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Explore our latest research contributions advancing cancer prevention and control.
          </p>
        </div>

        {/* Publications List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="p-8 hover:bg-gray-50 transition-colors">
              <div className="flex gap-6">
                {/* Thumbnail Image */}
                <div className="flex-shrink-0 w-24 h-24">
                  <ImageWithFallback
                    src={pub.thumbnail}
                    alt={pub.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Publication Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-lg text-gray-700 mb-3">
                    {pub.authors}
                  </p>

                  {/* Journal and Year */}
                  <p className="text-gray-600 mb-2 italic">
                    {pub.journal}, {pub.yearPublished}
                  </p>

                  {/* DOI */}
                  <p className="text-sm text-gray-500 mb-4">
                    DOI: <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {pub.doi}
                    </a>
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#00677F] text-white rounded-md hover:bg-[#005266] transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </a>
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      PubMed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl text-[#00677F] mb-2">{filteredPublications.length}</div>
            <div className="text-gray-600">Publications in {selectedYear}</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl text-[#00677F] mb-2">{publications.length}</div>
            <div className="text-gray-600">Total Publications</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-4xl text-[#00677F] mb-2">{years.length}</div>
            <div className="text-gray-600">Years of Research</div>
          </div>
        </div>
      </div>
    </div>
  );
}
