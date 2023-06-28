// home page
"use client";

import { useAuthState } from "react-firebase-hooks/auth"; //
import { auth } from "./lib/firebase"; //
import { Nav } from "./nav/navbar"; //
import { RxCross2 } from "react-icons/rx"; //
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [showWarningModal, setShowWarningModal] = useState(true);
  const { theme, setTheme } = useTheme();
  const [user] = useAuthState(auth); //add

  return (
    <div className={theme == "dark" ? "dark" : undefined}>
      <div className="min-h-screen min-w-screen max-w-screen bg-white dark:bg-slate-900">
        <Nav />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="py-6"
        >
          <img src="/scaledshimlogo.png" width={520} height={77} alt="" />
        </div>
        <div className="mx-auto min-w-screen max-w-2xl py-32 sm:py-0 px-6 pt-14 lg:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our newest update.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl py-12 dark:text-white">
              Smart Hospital Inventory Management.
            </h1>
            <p className="mt-0 text-lg leading-8 text-gray-600">
              Developed by Ventare, a team of computer science and software
              engineers at the University of Texas at Arlington.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                onClick={() => setShowWarningModal(true)}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
