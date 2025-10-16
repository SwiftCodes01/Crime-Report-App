"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hambugger from "../assets/Group 1.png";
import MobileNavMenu from "./MobileNavMenu";

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className=" top-0 left-0 z-50 border-b text-white border-white/5 bg-black/60 backdrop-blur-xl">
        <div className=" mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            <Link href={"/"} className="flex space-x-2 items-center">
              <div className="h-9 w-9 bg-gradient-to-br from-sky-600 to-blue-800 rounded flex items-center justify-center">
                <p className="text-lg font-bold">S</p>
              </div>
              <h1 className="md:text-lg">SafeReport</h1>
            </Link>

            <div className="hidden md:flex space-x-6 items-center">
              <Link
                href={"/submit-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href={"/track-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href={"/how-it-works"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href={"/resources"}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>

            <div className="flex space-x-4 items-center">
              <Link
                href={"/contact"}
                className="hidden md:block text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link>

              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-bounce" />
                <span className="text-xs">Emergency: 911</span>
              </button>

              {/* Mobile Navigation */}

              <button
                className="md:hidden text-zinc-400 hover:text-white transition-colors"
                onClick={() => setOpenMobileMenu(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileNavMenu
        isOpen={openMobileMenu}
        toggle={() => setOpenMobileMenu(false)}
      />
    </>
  );
}
