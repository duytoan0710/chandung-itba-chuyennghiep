/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Anatomy from './components/Anatomy';
import TShapeModel from './components/TShapeModel';
import MaturityLevels from './components/MaturityLevels';
import ValueStream from './components/ValueStream';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Anatomy />
        <TShapeModel />
        <MaturityLevels />
        <ValueStream />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p className="font-medium">© {new Date().getFullYear()} ITBA Training - Chuẩn BABOK® v3</p>
      </footer>
    </div>
  );
}
