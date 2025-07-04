'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TermsPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => router.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-green-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <div>
              <h1 className="text-3xl font-bold">Terms of Use</h1>
              <p className="text-green-100 mt-1">Terms and conditions for using our service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {/* Last Updated */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Acceptance of Terms</h2>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700">
                By using Mealzee's services, you agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">What We Provide</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fresh, home-cooked meal delivery services</li>
                  <li>• Customizable meal plans and dietary options</li>
                  <li>• Regular delivery to your specified address</li>
                  <li>• Customer support and order management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Your Responsibilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Accurate Information</h3>
                <p className="text-gray-600">Provide correct delivery address and contact details</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Timely Payment</h3>
                <p className="text-gray-600">Make payments as per agreed terms and schedule</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Availability</h3>
                <p className="text-gray-600">Be available to receive deliveries during scheduled times</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Respectful Conduct</h3>
                <p className="text-gray-600">Treat our delivery staff and support team with respect</p>
              </div>
            </div>
          </div>

          {/* Order and Delivery Terms */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Order & Delivery Terms</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">Order Confirmation</h3>
                <p className="text-gray-600">Orders are confirmed via WhatsApp or phone call</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Delivery Schedule</h3>
                <p className="text-gray-600">Meals are delivered according to your selected plan and timing</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-800">Modifications</h3>
                <p className="text-gray-600">Order changes must be made at least 24 hours in advance</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-800">Missed Deliveries</h3>
                <p className="text-gray-600">Please inform us if you won't be available for delivery</p>
              </div>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">Prohibited Uses</h2>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">You may not use our services for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Any unlawful or fraudulent purposes</li>
                <li>• Reselling or redistributing our meals</li>
                <li>• Providing false information or impersonating others</li>
                <li>• Interfering with our service operations</li>
                <li>• Violating any applicable laws or regulations</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                While we strive to provide the best service possible, we cannot guarantee:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Uninterrupted service availability</li>
                <li>• Exact delivery times (though we aim to be punctual)</li>
                <li>• Suitability for all dietary restrictions or allergies</li>
                <li>• Liability for damages beyond the cost of the meal</li>
              </ul>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Changes to These Terms</h3>
              <p className="text-gray-600">
                We may update these terms from time to time. We will notify you of any significant 
                changes via WhatsApp or email. Continued use of our services after changes 
                constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Questions About Terms?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these terms of use, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:legal@mealzee.com"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                📧 legal@mealzee.com
              </a>
              <a
                href="tel:+919608036638"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                📞 +91 9608036638
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
