"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "./button";
import { Send, AlignLeft, AlignCenter, AlignRight, AlignJustify, Italic, Bold, Underline, Strikethrough, Text, Type, Cpu, Globe, Lock, Github } from "lucide-react";
import { Squircle } from "@squircle-js/react";


const toolbarIcons = [
  { icon: AlignLeft, key: 'align-left' },
  { icon: AlignCenter, key: 'align-center' },
  { icon: AlignRight, key: 'align-right' },
  { icon: AlignJustify, key: 'align-justify' },
  { icon: Text, key: 'text' },
  { icon: Italic, key: 'italic' },
  { icon: Bold, key: 'bold' },
  { icon: Underline, key: 'underline' },
  { icon: Strikethrough, key: 'strikethrough' },
  { icon: Type, key: 'type' },
];

const features = [
  {
    icon: Cpu,
    label: "Built on Rust",
    desc: "for blazing speed, privacy, and reliability"
  },
  {
    icon: Underline,
    label: "No underlines",
    desc: "No distracting grammar marks or squiggles"
  },
  {
    icon: Lock,
    label: "Data stays private",
    desc: "We never store or see your writing"
  },
  {
    icon: Globe,
    label: "Works with any app",
    desc: "One shortcut, every app on your Mac"
  },
  {
    icon: Github,
    label: "Open Source",
    desc: "Transparent and community-driven"
  }
];

const animatedWords = ["popups", "underlines", "interruptions"];

export default function Hero() {
  const [improvedText, setImprovedText] = useState("I'd like to follow up on our discussion regarding the quarterly results.");
  const [showImproved, setShowImproved] = useState(false);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  const defaultMessage = "I wana follow up on our discussion about quarterly results.";

  const triggerImprovement = useCallback(() => {
    setShowImproved(true);
  }, []);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
      e.preventDefault();
      triggerImprovement();
    }
  }, [triggerImprovement]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    if (currentWordIdx < animatedWords.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIdx(currentWordIdx + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentWordIdx]);

  return (
    <section className="relative py-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-8">
          <Squircle cornerRadius={8} cornerSmoothing={1} className="inline-flex items-center gap-2 bg-gray-200 px-4 py-2 text-xs text-gray-700 mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-label="Desktop app icon">
              <title>Desktop app icon</title>
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
            <span>Desktop app</span>
          </Squircle>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-[600] text-gray-800">
                Writing that
                works silently
              </h2>
            </div>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-600 max-w-2xl mt-4">
              Unlike traditional grammar tools, Refixy works silently in the background.<br className="hidden md:block" />
              Select text, press a key, get better writing. <span className="text-blue-600 font-semibold">Your focus stays unbroken.</span>
            </p>
          </div>
        </div>

        {/* Modern Input Demo */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl shadow-xl bg-white border border-gray-200 p-0 overflow-hidden">
            <div className="px-6 pt-6 pb-2">
              <textarea
                className="w-full resize-none border-none outline-none bg-transparent text-gray-800 text-base min-h-[80px] max-h-40 placeholder-gray-400 focus:ring-0 cursor-default"
                placeholder="Enter your message here..."
                value={showImproved ? improvedText : defaultMessage}
                readOnly
                spellCheck={false}
                contentEditable={false}
              />
            </div>
            <div className="flex items-center justify-between px-4 pb-4 pt-2 border-t border-gray-100 bg-white">
              <div className="flex gap-2">
                {toolbarIcons.map(({ icon: Icon, key }) => (
                  <button
                    key={key}
                    type="button"
                    tabIndex={-1}
                    className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500"
                    aria-label="Formatting icon"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <Button
                size="sm"
                onClick={triggerImprovement}
                type="button"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
              <span>Press</span>
              <kbd className="px-2 py-1 bg-white rounded border text-xs font-mono">⌘ ⇧ E</kbd>
              <span>to see the magic</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mt-12">
          {features.map(({ icon: Icon, label, desc }) => (
            <Squircle key={label} cornerRadius={18} cornerSmoothing={1} className="bg-[#e4e4e48b]">
              <div className="flex flex-col items-center text-center px-4 py-8">
                <Icon className="w-7 h-7 text-gray-800 mb-2" />
                <h2 className="font-bold text-lg text-gray-800">{label}</h2>
                <div className="text-sm text-gray-500 mt-1">{desc}</div>
              </div>
            </Squircle>
          ))}
        </div>
      </div>
    </section>
  );
}
