import React from 'react';

export default function PathwaysModal({ open, onClose, pathway }) {
  if (!open || !pathway) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 animate-fadeIn">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
          style={{ 
            fontFamily: 'inherit'
          }}
        >
          {/* Close Button */}
          <button
            className="sticky top-4 float-right mr-4 mt-4 text-3xl text-gray-400 hover:text-gray-700 transition-colors z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

          {/* Header Section */}
          <div className="pt-8 pb-6 px-8 border-b border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 
                  className="text-3xl font-bold mb-2 text-gray-900"
                >
                  {pathway.title}
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  {pathway.subtitle}
                </p>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                  {pathway.shortDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Curriculum Flow Section */}
          <div className="px-8 py-6">
            <h3 
              className="text-2xl font-bold mb-6 pb-2 border-b-2"
              style={{ borderColor: pathway.color, color: '#1F2937' }}
            >
              Complete Curriculum Flow
            </h3>

            <div className="space-y-6">
              {pathway.details.map((section, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-50 rounded-xl p-6 border-l-4 hover:shadow-md transition-shadow duration-300"
                  style={{ borderLeftColor: pathway.color }}
                >
                  {/* Phase Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span 
                        className="text-sm font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: pathway.color }}
                      >
                        {section.semester}
                      </span>
                      <h4 
                        className="text-xl font-bold"
                        style={{ color: pathway.color }}
                      >
                        {section.phase}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold italic">
                      {section.description}
                    </p>
                  </div>

                  {/* Points List */}
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-800"
                      >
                        <span 
                          className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: pathway.color }}
                        ></span>
                        <span className="text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: ${pathway.color};
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: ${pathway.color}dd;
        }
      `}</style>
    </>
  );
}