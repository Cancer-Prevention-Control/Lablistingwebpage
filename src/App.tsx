import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Bell, User, Search, ChevronLeft, ChevronRight, Calendar, ExternalLink, Users, FileText, BarChart3 } from 'lucide-react';
import imgCancerRibbons from 'figma:asset/a070039bd686e33027864bfe5c2f961eb7236ee4.png';
import imgSecureStudy from 'figma:asset/17bdb62b252c00054397a389e3adc65d0a97b5ba.png';
import { MissionVision } from './components/MissionVision';
import { CPCLabs } from './components/CPCLabs';
import { ParticipateResearch } from './components/ParticipateResearch';
import { ActiveGrants } from './components/ActiveGrants';
import { RecentPublications } from './components/RecentPublications';
import { FundingOpportunities } from './components/FundingOpportunities';
import { CPCLogo } from './components/CPCLogo';
import { StudyDetail } from './components/StudyDetail';
import { ProgramAims } from './components/ProgramAims';

const carouselSlides = [
  {
    image: imgSecureStudy,
    title: "Our Mission",
    description: "The mission of the Cancer Prevention and Control (CPC) Program within the Houston Methodist Dr. Mary and Ron Neal Cancer Center (HMNCC) is to prevent and control cancer by identifying factors that contribute to cancer development, conducting interventions in high-risk individuals who would benefit most from precision prevention strategies, and supporting cancer patients after cancer treatment to improve quality of life for survivors"
  },
  {
    image: "https://images.unsplash.com/photo-1575853168674-9222301f4f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcmliYm9uJTIwY2FuY2VyfGVufDF8fHx8MTc2MTg0NDQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Our Vision",
    description: "The CPC Program vision is to be a \"nucleus\" for promoting evidence-based, multidisciplinary, and translational research in cancer prevention and control for the community, clinicians, and researchers that promotes equitable cancer care and outcomes for all residents of the 8-county catchment area."
  },
  {
    image: "https://images.unsplash.com/photo-1600673645627-1c47394132ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjBzdXBwb3J0JTIwcmliYm9ufGVufDF8fHx8MTc2MTg0NDQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Our Commitment",
    description: "Advancing precision medicine and ensuring equitable access to cutting-edge cancer care for all populations"
  },
  {
    image: imgCancerRibbons,
    title: "Awareness & Education",
    description: "Supporting all cancer types through comprehensive awareness programs, early detection initiatives, and community education. Every ribbon represents a life touched, a survivor celebrated, and a mission to end cancer in all its forms."
  },
  {
    image: "https://images.unsplash.com/photo-1630959302878-a30de73cdbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGZ1bmRpbmclMjBncmFudHxlbnwxfHx8fDE3NjIzNzY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "CPC Pilot Funding",
    description: "Supporting innovative cancer prevention and control research through pilot funding opportunities that advance our understanding and improve patient outcomes."
  }
];

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1660213628047-4ac5592d3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdW5nJTIwY2FuY2VyJTIwYXdhcmVuZXNzJTIwcmliYm9ufGVufDF8fHx8MTc2MjMwNTM0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "November: Lung Cancer Awareness Month",
    category: "Awareness",
    date: "November 1, 2025"
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjE3Njc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "CPC Annual Research Symposium Success",
    category: "Events",
    date: "November 15, 2025"
  },
  {
    image: "https://images.unsplash.com/photo-1760074032615-2e35d8c5e5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBicmVha3Rocm91Z2h8ZW58MXx8fHwxNzYxNzY3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Breakthrough in Immunotherapy Research",
    category: "Research",
    date: "November 20, 2025"
  }
];

const events = [
  {
    date: "Nov 6",
    title: "Work in Progress Speaker Seminar - Dr Quanbing Mou",
    time: "2:00 PM - 4:00 PM"
  },
  {
    date: "Nov 18",
    title: "Seminar series",
    time: "10:00 AM - 2:00 PM"
  },
  {
    date: "Dec 5",
    title: "Cancer Prevention & Control Retreat",
    time: "12:00 PM - 1:00 PM"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'mission-vision' | 'program-aims' | 'cpc-labs' | 'participate' | 'active-grants' | 'recent-publications' | 'funding-opportunities' | 'study-detail'>('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav') && !target.closest('[class*="dropdown"]')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const navigateToMissionVision = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('mission-vision');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToProgramAims = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('program-aims');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToCPCLabs = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('cpc-labs');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToParticipate = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('participate');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToActiveGrants = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('active-grants');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToRecentPublications = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('recent-publications');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToFundingOpportunities = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('funding-opportunities');
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToStudyDetail = (study: any) => {
    setSelectedStudy(study);
    setCurrentPage('study-detail');
    window.scrollTo(0, 0);
  };

  const navigateBackToParticipate = () => {
    setCurrentPage('participate');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'mission-vision') {
    return <MissionVision onBack={navigateToHome} />;
  }

  if (currentPage === 'program-aims') {
    return <ProgramAims onBack={navigateToHome} />;
  }

  if (currentPage === 'cpc-labs') {
    return <CPCLabs onBack={navigateToHome} />;
  }

  if (currentPage === 'participate') {
    return <ParticipateResearch onBack={navigateToHome} onStudyClick={navigateToStudyDetail} />;
  }

  if (currentPage === 'study-detail' && selectedStudy) {
    return <StudyDetail onBack={navigateBackToParticipate} study={selectedStudy} />;
  }

  if (currentPage === 'active-grants') {
    return <ActiveGrants onBack={navigateToHome} />;
  }

  if (currentPage === 'recent-publications') {
    return <RecentPublications onBack={navigateToHome} />;
  }

  if (currentPage === 'funding-opportunities') {
    return <FundingOpportunities onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-4 ml-6">
              <CPCLogo className="h-24 w-auto" />
              <div className="h-24 w-px bg-gray-400"></div>
              <div>
                <h1 className="text-5xl leading-tight" style={{ fontFamily: 'Old Standard TT, serif', color: '#001f3f' }}>
                  Cancer Prevention and Control
                </h1>
              </div>
            </div>

            {/* Right Side: Search, Bell, Profile */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 pr-10 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#00677F]"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Search className="w-6 h-6 text-gray-600" />
                  </button>
                )}
              </div>

              {/* Notification Bell */}
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                >
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Notifications Dropdown */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">3 New</span>
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {/* Notification Item 1 */}
                      <div className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-[#00677F] rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">Upcoming Event:</span> Work in Progress Speaker Seminar with Dr. Quanbing Mou
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Tomorrow at 2:00 PM</p>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>

                      {/* Notification Item 2 */}
                      <div className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-[#8B1538] rounded-full flex items-center justify-center">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">New Publication:</span> "Advances in Prostate Cancer Biomarkers" has been published
                            </p>
                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>

                      {/* Notification Item 3 */}
                      <div className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                              <BarChart3 className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">Grant Opportunity:</span> NIH R01 funding deadline approaching in 30 days
                            </p>
                            <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                          </div>
                          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                        </div>
                      </div>

                      {/* Notification Item 4 */}
                      <div className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">Study Update:</span> Houston Prostate Cancer Study has enrolled 50 new participants
                            </p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>

                      {/* Notification Item 5 */}
                      <div className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">Reminder:</span> Cancer Prevention & Control Retreat on December 5th
                            </p>
                            <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 border-t border-gray-200">
                      <button className="w-full text-center text-sm text-[#00677F] hover:text-[#004d5f] transition-colors">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <button 
                onClick={() => setIsProfileOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <User className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#00677F] text-white">
          <div className="w-full pl-12 pr-6">
            <nav className="flex items-center gap-8">
              <div className="relative">
                <button 
                  onClick={() => {
                    navigateToHome();
                    setActiveDropdown(null);
                  }}
                  className="py-4 text-lg font-bold hover:opacity-80 transition-opacity"
                >
                  Home
                </button>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  className={`py-4 text-lg font-bold hover:opacity-80 transition-opacity ${
                    activeDropdown === 'about' ? 'border-b-4 border-[#8B1538]' : ''
                  }`}
                >
                  About Us
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-0 bg-gray-50 shadow-lg z-40 min-w-max">
                    <div className="flex flex-col py-3 text-xl">
                      <a href="#mission-vision" onClick={navigateToMissionVision} className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Mission and Vision</a>
                      <a href="#program-aims" onClick={navigateToProgramAims} className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Program Aim</a>
                      <a href="#catchment-area" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Neal Cancer Center Catchment Area</a>
                      <a href="#awards-honors" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Awards and Honors</a>
                      <a href="#cpc-resources" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Resources</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'membership' ? null : 'membership')}
                  className={`py-4 text-lg font-bold hover:opacity-80 transition-opacity ${
                    activeDropdown === 'membership' ? 'border-b-4 border-[#8B1538]' : ''
                  }`}
                >
                  Membership
                </button>
                {activeDropdown === 'membership' && (
                  <div className="absolute top-full left-0 mt-0 bg-gray-50 shadow-lg z-40 min-w-max">
                    <div className="flex flex-col py-3 text-xl">
                      <a href="#leadership-team" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Leadership Team</a>
                      <a href="#faculty-staff" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Faculty & Staff</a>
                      <a href="#postdocs-students" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Postdocs & Students</a>
                      <div className="py-3 px-6 font-bold text-gray-500 whitespace-nowrap cursor-default">Links to Labs</div>
                      <a href="#cullen-lab" className="py-3 px-6 pl-10 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Cullen Lab</a>
                      <a href="#shah-lab" className="py-3 px-6 pl-10 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Shah Lab</a>
                      <a href="#luu-lab" className="py-3 px-6 pl-10 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Luu Lab</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'training' ? null : 'training')}
                  className={`py-4 text-lg font-bold hover:opacity-80 transition-opacity ${
                    activeDropdown === 'training' ? 'border-b-4 border-[#8B1538]' : ''
                  }`}
                >
                  Training and Career Opportunities
                </button>
                {activeDropdown === 'training' && (
                  <div className="absolute top-full left-0 mt-0 bg-gray-50 shadow-lg z-40 min-w-max">
                    <div className="flex flex-col py-3 text-xl">
                      <a href="#job-opportunities" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Job Opportunities</a>
                      <a href="#clinical-research" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Clinical Research Opportunities</a>
                      <a href="#mentorship-t32" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Mentorship / T32</a>
                      <a href="#trainee-pilot-funding" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Trainee Pilot Funding</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'publications' ? null : 'publications')}
                  className={`py-4 text-lg font-bold hover:opacity-80 transition-opacity ${
                    activeDropdown === 'publications' ? 'border-b-4 border-[#8B1538]' : ''
                  }`}
                >
                  Publications and Grants
                </button>
                {activeDropdown === 'publications' && (
                  <div className="absolute top-full left-0 mt-0 bg-gray-50 shadow-lg z-40 min-w-max">
                    <div className="flex flex-col py-3 text-xl">
                      <a href="#recent-publications" onClick={navigateToRecentPublications} className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Recent Publications</a>
                      <a href="#archive" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Publication Archive</a>
                      <a href="#active-grants" onClick={navigateToActiveGrants} className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Active Grants</a>
                      <a href="#funding-opportunities" onClick={navigateToFundingOpportunities} className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Funding Opportunities</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'research' ? null : 'research')}
                  className={`flex items-center gap-2 py-4 text-lg font-bold hover:opacity-80 transition-opacity ${
                    activeDropdown === 'research' ? 'border-b-4 border-[#8B1538]' : ''
                  }`}
                >
                  Research and Cohorts
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md animate-bounce">
                    Join our research
                  </span>
                </button>
                {activeDropdown === 'research' && (
                  <div className="absolute top-full left-0 mt-0 bg-gray-50 shadow-lg z-40 min-w-max">
                    <div className="flex flex-col py-3 text-xl">
                      <a href="#cohorts" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Cohort Studies</a>
                      <a href="#clinical-trails" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Clinical Trails (Non-interventional)</a>
                      <div className="py-3 px-6 font-bold text-gray-500 whitespace-nowrap cursor-default">Join our Research</div>
                      <a href="#join-patients" onClick={navigateToParticipate} className="py-3 px-6 pl-10 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Public</a>
                      <a href="#join-professionals" className="py-3 px-6 pl-10 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Professionals</a>
                      <a href="#data-request" className="py-3 px-6 font-bold text-[#8B1538] hover:bg-gray-100 transition-colors whitespace-nowrap">Submit a Data Request</a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h1 className="text-6xl mb-4 max-w-3xl">{slide.title}</h1>
                  <p className="text-lg max-w-4xl leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Three Action Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Collaborate with us */}
          <a
            href="#redcap"
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzYyMjg3MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collaborate with us"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00677F]/95 via-[#00677F]/80 to-[#00677F]/60"></div>
            </div>
            <div className="relative p-8 text-white">
              <FileText className="w-12 h-12 mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" />
              <h3 className="text-2xl mb-3">Collaborate with us</h3>
              <p className="text-lg mb-4 text-white/90">
                Submit your idea form
              </p>
              <div className="flex items-center gap-2 text-lg group-hover:gap-4 transition-all">
                Request Form <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Cancer Prevention and Control Laboratories */}
          <a
            href="#labs"
            onClick={navigateToCPCLabs}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635340038191-96eea7fbd056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYyMTkzMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="CPC Laboratories"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/95 via-[#8B1538]/80 to-[#8B1538]/60"></div>
            </div>
            <div className="relative p-8 text-white">
              <BarChart3 className="w-12 h-12 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-pulse" />
              <h3 className="text-2xl mb-3">Cancer Prevention and Control Laboratories</h3>
              <p className="text-lg mb-4 text-white/90">
                Explore our wet and dry research laboratories conducting cutting-edge cancer research
              </p>
              <div className="flex items-center gap-2 text-lg group-hover:gap-4 transition-all">
                View Labs <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Patient Opportunities */}
          <a
            href="#participate"
            onClick={navigateToParticipate}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682365114794-14b870355d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwaGVhbHRoY2FyZSUyMGVucm9sbG1lbnR8ZW58MXx8fHwxNzYyMTkzMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Patient Opportunities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/80 to-gray-700/60"></div>
            </div>
            <div className="relative p-8 text-white">
              <Users className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-3">Patient Opportunities</h3>
              <p className="text-lg mb-4 text-white/90">
                Join our clinical trials and research studies to advance cancer treatment
              </p>
              <div className="flex items-center gap-2 text-lg group-hover:gap-4 transition-all">
                View Opportunities <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Events Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-[#00677F]" />
                  <h2 className="text-3xl">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="border-l-4 border-[#00677F] pl-4 py-2 hover:bg-gray-50 transition-colors">
                      <div className="text-[#8B1538] mb-1">{event.date}</div>
                      <h4 className="text-lg mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-6">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.map((news, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block bg-[#00677F] text-white text-sm px-3 py-1 rounded-full mb-3">
                        {news.category}
                      </span>
                      <h3 className="text-xl mb-2">{news.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                      <button className="text-[#00677F] hover:text-[#005566] transition-colors flex items-center gap-1">
                        Learn More <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00677F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & About */}
            <div className="md:col-span-1">
              <CPCLogo className="h-24 w-auto mb-4" />
              <p className="text-sm opacity-90">
                Cancer Prevention and Control Program
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:opacity-80 transition-opacity">About Us</a></li>
                <li><a href="#research" className="hover:opacity-80 transition-opacity">Research Programs</a></li>
                <li><a href="#clinical" className="hover:opacity-80 transition-opacity">Clinical Trials</a></li>
                <li><a href="#publications" className="hover:opacity-80 transition-opacity">Publications</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#training" className="hover:opacity-80 transition-opacity">Training Programs</a></li>
                <li><a href="#membership" className="hover:opacity-80 transition-opacity">Membership</a></li>
                <li><a href="#careers" className="hover:opacity-80 transition-opacity">Careers</a></li>
                <li><a href="#events" className="hover:opacity-80 transition-opacity">Events</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl mb-4">Contact Us</h3>
              <p className="text-sm mb-2">
                Research Institute<br />
                6670 Bertner Avenue (R9)<br />
                Houston, TX 77030
              </p>
              <p className="text-sm mt-4">
                <a href="mailto:cpc@houstonmethodist.org" className="hover:opacity-80 transition-opacity">
                  cpc@houstonmethodist.org
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-sm opacity-75">
            <p>© 2025 Cancer Prevention and Control Program. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Profile Dialog */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsProfileOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">User Profile</h2>
              <button
                onClick={() => setIsProfileOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-[#00677F] rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="text-center w-full">
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <p className="text-lg text-gray-900">Dr. Jennifer Cullen</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <p className="text-lg text-gray-900">jcullen@houstonmethodist.org</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Role</label>
                  <p className="text-lg text-gray-900">CPC Program Director</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Department</label>
                  <p className="text-lg text-gray-900">Cancer Prevention and Control</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsProfileOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                className="flex-1 px-4 py-2 bg-[#00677F] text-white rounded hover:bg-[#005266] transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}