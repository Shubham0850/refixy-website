import React from "react";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer >
      <Divider />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/refixy.png" alt="Refixy Logo" className="h-8 mr-2" />
            <h2 className="text-2xl font-bold text-black tracking-[-2px]">R e f i x y</h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-600 mb-6 md:mb-0">
            <a href="https://github.com/Shubham0850/refixy" className="hover:text-black transition-colors">GitHub</a>
            <a href="/privacy" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Refixy. Open source, built with ❤️ by indie developers.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>🔒 Privacy-first</span>
              <span>⚡ Built on Rust</span>
              <span>🌐 Works everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


