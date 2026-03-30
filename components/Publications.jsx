import React, { useState } from 'react';
import { BookOpen, Users, Book, BookMarked, Lightbulb, GraduationCap, FileText, X } from 'lucide-react';
import pdf2022 from '../src/assets/pdf/Session 2022-23.pdf';
import pdf2023 from '../src/assets/pdf/Session 2023-24 .pdf';
import pdf2024 from '../src/assets/pdf/Session 2024-25  .pdf';

export default function Publications() {
  const [activePdf, setActivePdf] = useState(null);
  const [activeResearch, setActiveResearch] = useState(null);

  const featuredResearchList = [
    {
      id: 1,
      title: 'Quantifying overall agreement between explanation methods to address the disagreement problem',
      journal: 'Evolutionary Intelligence',
      publisher: 'Springer nature',
      faculty: 'Mr. Gaurav Parashar',
      impactFactor: '2.6',
      link: 'https://link.springer.com/article/10.1007/s12065-026-01145-y'
    },
    {
      id: 2,
      title: 'Hybrid CNN–transformer model with BM3D and YOLOv8 for early detection of lung cancer in low-dose CT scans',
      journal: 'Scientific Reports',
      publisher: 'Nature',
      faculty: 'Mr. Gagan Thakral',
      impactFactor: '3.9',
      link: 'https://www.nature.com/articles/s41598-026-43517-5'
    },
    {
      id: 3,
      title: 'SGELAN-T3: A Novel Lightweight Convolutional Block for Efficient Sugarcane Stem Health Detection',
      journal: 'Journal of Intelligent & Fuzzy Systems: Applications in Engineering and Technology',
      publisher: 'Sage Journals, IoS Press',
      faculty: 'Mr. Pushpendra Kumar',
      impactFactor: '1.0',
      link: 'https://journals.sagepub.com/home/IFS'
    },
    {
      id: 4,
      title: 'Real time sugarcane stem health detection with YOLOv8 tinier and RepNCSP ELAN',
      journal: 'Scientific Reports',
      publisher: 'Nature',
      faculty: 'Mr. Pushpendra Kumar',
      impactFactor: '3.9',
      link: 'https://www.nature.com/articles/s41598-025-27502-y'
    }
  ];

  const annualReports = [
    { id: 1, title: 'Research and Publications 2024-25', file: pdf2024 },
    { id: 2, title: 'Research and Publications 2023-24', file: pdf2023 },
    { id: 3, title: 'Research and Publications 2022-23', file: pdf2022 },
  ];

  const publicationCategories = [
    { id: 1, title: 'JOURNAL', count: '94+', icon: BookOpen },
    { id: 2, title: 'CONFERENCE', count: '144+', icon: Users },
    { id: 3, title: 'BOOK', count: '3+', icon: Book },
    { id: 4, title: 'BOOK CHAPTER', count: '26+', icon: BookMarked },
    { id: 5, title: 'PATENT PUBLISHED', count: '68+', icon: Lightbulb },
    { id: 6, title: 'Ph.D GUIDANCE', count: '9+', icon: GraduationCap },
  ];

  return (
    <section id="publications" className="py-20 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Publications & Research
            </span>
          </h2>
        </div>

        {/* Publication Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mb-20 max-w-5xl mx-auto">
          {publicationCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-[16px] px-6 py-6 flex flex-row items-center justify-center gap-6 sm:gap-8 border-2 border-transparent shadow-[0px_4px_24px_rgba(0,0,0,0.04)] hover:border-[#F26520] hover:shadow-[0px_8px_32px_rgba(242,101,32,0.12)] transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="text-[#0f172a] shrink-0">
                  <Icon size={54} strokeWidth={1.2} />
                </div>
                
                {/* Text Container */}
                <div className="flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-[#0f172a] text-[13px] font-semibold tracking-wide leading-snug mb-1 text-center uppercase">
                    {category.title}
                  </span>
                  <span className="text-[#0f172a] text-[42px] font-extrabold leading-none tracking-tight text-[#164265]">
                    {category.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Research */}
        <div className="bg-white border border-gray-100 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] rounded-[20px] p-8 md:p-12 mb-16 max-w-5xl mx-auto">
          <h3 className="text-[24px] font-bold text-[#0f172a] mb-8 text-center md:text-left">
            Recent Research Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResearchList.map((research) => (
              <div
                key={research.id}
                onClick={() => setActiveResearch(research)}
                className="flex items-start space-x-4 p-5 rounded-[12px] bg-[#fafbfc] transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer border border-transparent hover:border-[#F26520]"
              >
                <FileText className="text-[#164265] shrink-0 mt-0.5" fill="#dbeafe" size={28} />
                <div>
                  <p className="text-[#0f172a] font-semibold text-[15px] leading-snug mb-1">
                    {research.title}
                  </p>
                  <p className="text-[13px] text-[#475569]">
                    Published by {research.publisher}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Research Reports */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col gap-4">
            {annualReports.map((report) => (
              <div 
                key={report.id}
                onClick={() => setActivePdf(report.id)}
                className="bg-white border border-gray-200 rounded-[8px] p-5 flex items-center shadow-sm hover:shadow-md hover:border-[#F26520] transition-all duration-300 cursor-pointer"
              >
                <FileText className="text-[#164265] mr-4 shrink-0" fill="#dbeafe" size={24} />
                <span className="text-[#164265] font-medium text-[16px] xl:text-[18px]">
                  {report.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Research Details Modal */}
      {activeResearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0f172a]/60 backdrop-blur-sm">
          <div 
            className="bg-white rounded-[16px] shadow-2xl w-full max-w-3xl flex flex-col overflow-hidden relative" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-gray-50 shrink-0">
              <h3 className="font-bold text-[20px] text-[#0f172a]">
                Research Details
              </h3>
              <button
                onClick={() => setActiveResearch(null)}
                className="p-2 text-gray-500 hover:text-[#F26520] hover:bg-orange-50 rounded-full transition-colors focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body (Table) */}
            <div className="p-6 md:p-8 bg-white overflow-y-auto max-h-[75vh]">
               <div className="border border-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-[#f8fafc] border-b border-gray-200">
                       <th className="py-4 px-6 font-semibold text-[#334155] w-1/3">Detail</th>
                       <th className="py-4 px-6 font-semibold text-[#334155]">Information</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Title</td>
                       <td className="py-4 px-6 text-[#475569]">{activeResearch.title}</td>
                     </tr>
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Name of Journal</td>
                       <td className="py-4 px-6 text-[#475569]">{activeResearch.journal}</td>
                     </tr>
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Publisher</td>
                       <td className="py-4 px-6 text-[#475569]">{activeResearch.publisher}</td>
                     </tr>
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Name of faculty</td>
                       <td className="py-4 px-6 text-[#475569]">{activeResearch.faculty}</td>
                     </tr>
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Impact factor</td>
                       <td className="py-4 px-6 text-[#475569]">{activeResearch.impactFactor}</td>
                     </tr>
                     <tr className="hover:bg-gray-50 transition-colors">
                       <td className="py-4 px-6 font-semibold text-[#0f172a]">Link</td>
                       <td className="py-4 px-6">
                         <a href={activeResearch.link} target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-[#2563eb] hover:underline font-medium">
                           View Publication
                         </a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0f172a]/60 backdrop-blur-sm">
          <div className="bg-white rounded-[16px] shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50 shrink-0">
              <h3 className="font-bold text-[18px] text-[#0f172a]">
                {annualReports.find((r) => r.id === activePdf)?.title}
              </h3>
              <button
                onClick={() => setActivePdf(null)}
                className="p-2 text-gray-500 hover:text-[#F26520] hover:bg-orange-50 rounded-full transition-colors focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            {/* Modal Body */}
            <div className="flex-1 w-full relative bg-gray-100/50 flex items-center justify-center p-4">
              {annualReports.find((r) => r.id === activePdf)?.file === 'about:blank' ? (
                <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <p className="text-gray-500 mb-2 font-medium">PDF source will be added here...</p>
                  <p className="text-sm text-gray-400">Update the 'file' property in the annualReports array.</p>
                </div>
              ) : (
                <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <iframe
                    src={`${annualReports.find((r) => r.id === activePdf)?.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title="PDF Viewer"
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
