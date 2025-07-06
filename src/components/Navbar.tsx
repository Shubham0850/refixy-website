"use client";
import { useState } from "react";
import { Github, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { Squircle } from "@squircle-js/react";

const Navbar = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'whatsapp' | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleDownload = () => {
    setShowDownloadPopup(true);
    setSelectedMethod(null);
    setEmail('');
    setPhone('');
  };

  const handleEmailDownload = () => {
    setSelectedMethod('email');
  };

  const handleWhatsAppDownload = () => {
    setSelectedMethod('whatsapp');
  };

  const handleSubmitEmail = () => {
    // Handle email submission
    console.log("Email submitted:", email);
    setShowDownloadPopup(false);
    setSelectedMethod(null);
    setEmail('');
  };

  const handleSubmitWhatsApp = () => {
    // Handle WhatsApp submission
    console.log("WhatsApp submitted:", phone);
    setShowDownloadPopup(false);
    setSelectedMethod(null);
    setPhone('');
  };

  return (
    <>
      <header className="max-w-6xl mx-auto mx-2 shadow-md rounded-3xl">
        <Squircle
          cornerRadius={18}
          cornerSmoothing={1}
          className="bg-white"
        >
          <div className="p-2">
            <nav className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <Link href="/" title="Refixy" className="flex">
                    <div className="flex items-center mb-6 md:mb-0">
                      <img src="/refixy.png" alt="Refixy Logo" className="h-8 mr-2" />
                      <h2 className="text-2xl font-bold text-black tracking-[-2px]">R e f i x y</h2>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Shubham0850/refixy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="purple"
                    className="flex items-center gap-2 bg-gray-100 text-gray-800 hover:bg-gray-50 shadow-none"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden md:inline">GitHub</span>
                  </Button>
                </a>
                <Button onClick={handleDownload}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="18"
                    height="18"
                    className="inline-block align-middle"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M54.166,19.783c-0.258,0.162-6.401,3.571-6.401,11.13c0.29,8.621,7.752,11.644,7.88,11.644 c-0.128,0.162-1.127,4.119-4.085,8.267C49.213,54.398,46.607,58,42.65,58c-3.764,0-5.115-2.381-9.458-2.381 c-4.664,0-5.984,2.381-9.555,2.381c-3.957,0-6.756-3.795-9.232-7.335c-3.216-4.633-5.95-11.903-6.047-18.883 c-0.065-3.699,0.644-7.335,2.444-10.423c2.541-4.312,7.077-7.238,12.031-7.335c3.795-0.128,7.173,2.606,9.49,2.606 c2.22,0,6.37-2.606,11.065-2.606C45.415,14.026,50.82,14.636,54.166,19.783z M32.002,13.285c-0.676-3.378,1.19-6.756,2.927-8.911 C37.149,1.769,40.655,0,43.678,0c0.193,3.378-1.03,6.691-3.216,9.104C38.5,11.71,35.122,13.671,32.002,13.285z" />
                  </svg>
                  <span className="hidden md:inline">Download for macOS</span>
                </Button>
              </div>
            </nav>
          </div>
        </Squircle>
      </header>

      {/* Download Popup */}
      {showDownloadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Squircle cornerRadius={18} cornerSmoothing={1} className="bg-white p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Get Refixy for macOS</h3>
              <button
                type="button"
                onClick={() => setShowDownloadPopup(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!selectedMethod ? (
              <>
                <p className="text-gray-600 mb-6">
                  Where would you like to receive the download link?
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={handleEmailDownload}
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Mail className="w-5 h-5" />
                    Send to Email
                  </Button>

                  <Button
                    onClick={handleWhatsAppDownload}
                    className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </div>
              </>
            ) : selectedMethod === 'email' ? (
              <>
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Enter your email</h4>
                  <p className="text-gray-600 text-sm">{"We'll send the download link to your email address"}</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedMethod(null)}
                      className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitEmail}
                      disabled={!email}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                    >
                      Send Link
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Enter your phone number</h4>
                  <p className="text-gray-600 text-sm">{"We'll send the download link via WhatsApp"}</p>
                </div>

                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedMethod(null)}
                      className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitWhatsApp}
                      disabled={!phone}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                    >
                      Send Link
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Squircle>
        </div>
      )}
    </>
  );
};

export default Navbar;
