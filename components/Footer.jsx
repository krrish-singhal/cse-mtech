import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="w-full text-white py-12"
      style={{ backgroundColor: '#164265' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                style={{ backgroundColor: '#F26520' }}
              >
                KIET
              </div>
              <div>
                <h3 className="font-bold text-lg">KIET University</h3>
                <p className="text-sm text-gray-300">Empowering Minds</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  KIET, Delhi-NCR. Ghaziabad-Meerut Road, Ghaziabad (201206)
                </span>
              </p>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F26520' }}>
              About
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#overview"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Governance
                </a>
              </li>
              <li>
                <a
                  href="#approvals"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Approvals
                </a>
              </li>
              <li>
                <a
                  href="#infrastructure"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Academics
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F26520' }}>
              Courses & Admission
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#undergraduate"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Undergraduate Course
                </a>
              </li>
              <li>
                <a
                  href="#postgraduate"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Postgraduate Course
                </a>
              </li>
              <li>
                <a
                  href="#diploma"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Diploma Course
                </a>
              </li>
              <li>
                <a
                  href="#doctoral"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Doctoral Course
                </a>
              </li>
              <li>
                <a
                  href="#admission"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Admission Procedure
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F26520' }}>
              Important
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#icc"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Internal Complaints Committee
                </a>
              </li>
              <li>
                <a
                  href="#grievance"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Student Grievance Redressal
                </a>
              </li>
              <li>
                <a
                  href="#discipline"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Student Discipline Policy
                </a>
              </li>
              <li>
                <a
                  href="#counselling"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Counselling Support
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-all duration-300 hover:pl-2"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-start space-x-3">
              <Phone size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Helpline Number</p>
                <p>+91-7949335337</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">For Admission</p>
                <p>+91-8445557599</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <div className="space-y-1">
                  <p>director@kiet.edu</p>
                  <p>registrar@kiet.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
          <p className="mb-2">Copyright 2026 KIET. All Rights Reserved</p>
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} style={{ color: '#F26520' }} className="fill-current" />
            <span>by</span>
            <span style={{ color: '#F26520' }} className="font-semibold">
              TEAM ERP
            </span>
          </p>
          <p>
            KIET under the aegis of Krishna Charitable Society.
            <a href="#privacy" className="text-blue-400 hover:underline ml-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
