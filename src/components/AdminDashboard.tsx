import React, { useState } from 'react';
import { useContent } from '../store/ContentContext';
import { Settings, Layout, Type, Palette, Eye, Share2, Save, Trash2, Plus, Image as ImageIcon, Check, Globe } from 'lucide-react';
import LandingPage from './LandingPage';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const InputGroup = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">{label}</label>
    {children}
  </div>
);

const AdminSidebar = () => {
  const { state, updateContent, updateTheme, updateSEO, updateSectionVisibility } = useContent();
  const [activeTab, setActiveTab] = useState<'content' | 'theme' | 'seo'>('content');

  return (
    <aside className="w-[360px] h-screen bg-white border-r border-black/5 flex flex-col z-20">
      <div className="p-6 border-b border-black/5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#1A1A1E]">
          <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center font-black text-white">R</div>
          <span className="font-bold tracking-tight">리코멘드 <span className="text-[10px] text-gray-400 bg-black/5 px-1.5 py-0.5 rounded ml-1">ADMIN</span></span>
        </div>
        <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
          <Globe size={18} className="text-gray-400" />
        </button>
      </div>

      <div className="flex border-b border-black/5">
        {[
          { id: 'content', icon: Layout, label: '콘텐츠' },
          { id: 'theme', icon: Palette, label: '테마' },
          { id: 'seo', icon: Share2, label: 'SEO' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "flex-1 py-4 flex flex-col items-center gap-1 transition-all border-b-2",
              activeTab === tab.id ? "border-pink-500 text-pink-500 bg-pink-500/5" : "border-transparent text-gray-500 hover:text-gray-300"
            )}
          >
            <tab.icon size={18} />
            <span className="text-[10px] font-bold uppercase">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* HERO SECTION */}
            <section>
              <h3 className="text-xs font-black text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> HERO SECTION
              </h3>
              <InputGroup label="Badge Text">
                <input 
                  type="text" 
                  value={state.content.hero.badge} 
                  onChange={(e) => updateContent('hero.badge', e.target.value)}
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none text-gray-900"
                />
              </InputGroup>
              <InputGroup label="Main Title">
                <textarea 
                  rows={2}
                  value={state.content.hero.title} 
                  onChange={(e) => updateContent('hero.title', e.target.value)}
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none resize-none text-gray-900"
                />
              </InputGroup>
              <InputGroup label="Subtitle">
                <input 
                  type="text" 
                  value={state.content.hero.subtitle} 
                  onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none text-gray-900"
                />
              </InputGroup>
              <InputGroup label="Hook Line">
                <input 
                  type="text" 
                  value={state.content.hero.hookLine} 
                  onChange={(e) => updateContent('hero.hookLine', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
              <InputGroup label="Book Cover URL">
                <input 
                  type="text" 
                  value={state.content.hero.image} 
                  onChange={(e) => updateContent('hero.image', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
            </section>

            {/* PROBLEM SECTION */}
            <section className="pt-6 border-t border-black/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-black text-gray-900 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> PROBLEM SECTION
                </h3>
                <button 
                  onClick={() => updateSectionVisibility('problem', !state.content.problem.isEnabled)}
                  className={cn("w-10 h-5 rounded-full relative transition-all", state.content.problem.isEnabled ? "bg-pink-500" : "bg-gray-200")}
                >
                  <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", state.content.problem.isEnabled ? "right-1" : "left-1")} />
                </button>
              </div>
              <InputGroup label="Section Title">
                <input 
                  type="text" 
                  value={state.content.problem.title} 
                  onChange={(e) => updateContent('problem.title', e.target.value)}
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none text-gray-900"
                />
              </InputGroup>
              <InputGroup label="Description">
                <textarea 
                  rows={2}
                  value={state.content.problem.description} 
                  onChange={(e) => updateContent('problem.description', e.target.value)}
                  className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none resize-none text-gray-900"
                />
              </InputGroup>
              <InputGroup label="Pain Points">
                <div className="space-y-3">
                  {state.content.problem.painPoints.map((point, i) => (
                    <div key={i} className="flex gap-2">
                      <input 
                        type="text" 
                        value={point} 
                        onChange={(e) => {
                          const newList = [...state.content.problem.painPoints];
                          newList[i] = e.target.value;
                          updateContent('problem.painPoints', newList);
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none"
                      />
                      <button 
                        onClick={() => {
                          const newList = state.content.problem.painPoints.filter((_, idx) => idx !== i);
                          updateContent('problem.painPoints', newList);
                        }}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => updateContent('problem.painPoints', [...state.content.problem.painPoints, 'New pain point'])}
                    className="w-full py-2 border border-dashed border-white/20 rounded-lg text-xs text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={12} /> Add Pain Point
                  </button>
                </div>
              </InputGroup>
            </section>

            {/* SOLUTION SECTION */}
            <section className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-black text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> SOLUTION SECTION
                </h3>
                <button 
                  onClick={() => updateSectionVisibility('solution', !state.content.solution.isEnabled)}
                  className={cn("w-10 h-5 rounded-full relative transition-all", state.content.solution.isEnabled ? "bg-pink-500" : "bg-gray-700")}
                >
                  <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", state.content.solution.isEnabled ? "right-1" : "left-1")} />
                </button>
              </div>
              <InputGroup label="Section Title">
                <input 
                  type="text" 
                  value={state.content.solution.title} 
                  onChange={(e) => updateContent('solution.title', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
              <InputGroup label="Description">
                <textarea 
                  rows={2}
                  value={state.content.solution.description} 
                  onChange={(e) => updateContent('solution.description', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none resize-none"
                />
              </InputGroup>
              <InputGroup label="Killer Features">
                <div className="space-y-4">
                  {state.content.solution.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-between mb-3">
                        <span className="text-[10px] font-bold text-gray-500">FEATURE {i + 1}</span>
                        <button 
                          onClick={() => {
                            const newList = state.content.solution.features.filter((_, idx) => idx !== i);
                            updateContent('solution.features', newList);
                          }}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <input 
                        type="text" 
                        value={feat.title} 
                        placeholder="Feature Title"
                        onChange={(e) => {
                          const newList = [...state.content.solution.features];
                          newList[i].title = e.target.value;
                          updateContent('solution.features', newList);
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs mb-2 focus:border-pink-500 outline-none"
                      />
                      <textarea 
                        rows={2}
                        value={feat.description} 
                        placeholder="Feature Description"
                        onChange={(e) => {
                          const newList = [...state.content.solution.features];
                          newList[i].description = e.target.value;
                          updateContent('solution.features', newList);
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none resize-none"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => updateContent('solution.features', [...state.content.solution.features, { title: 'New Feature', description: 'Description', icon: 'Zap' }])}
                    className="w-full py-2 border border-dashed border-white/20 rounded-lg text-xs text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={12} /> Add Feature
                  </button>
                </div>
              </InputGroup>
            </section>

             {/* BOOK FEATURE SECTION */}
             <section className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-black text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> BOOK FEATURES
                </h3>
                <button 
                  onClick={() => updateSectionVisibility('feature', !state.content.feature.isEnabled)}
                  className={cn("w-10 h-5 rounded-full relative transition-all", state.content.feature.isEnabled ? "bg-pink-500" : "bg-gray-700")}
                >
                  <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", state.content.feature.isEnabled ? "right-1" : "left-1")} />
                </button>
              </div>
              <InputGroup label="Section Title">
                <input 
                  type="text" 
                  value={state.content.feature.title} 
                  onChange={(e) => updateContent('feature.title', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
              <InputGroup label="Benefits List">
                <div className="space-y-3">
                  {state.content.feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-2">
                      <input 
                        type="text" 
                        value={benefit} 
                        onChange={(e) => {
                          const newList = [...state.content.feature.benefits];
                          newList[i] = e.target.value;
                          updateContent('feature.benefits', newList);
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none"
                      />
                      <button 
                        onClick={() => {
                          const newList = state.content.feature.benefits.filter((_, idx) => idx !== i);
                          updateContent('feature.benefits', newList);
                        }}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={() => updateContent('feature.benefits', [...state.content.feature.benefits, 'New benefit'])}
                    className="w-full py-2 border border-dashed border-white/20 rounded-lg text-xs text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={12} /> Add Benefit
                  </button>
                </div>
              </InputGroup>
            </section>

            {/* PROOF SECTION */}
            <section className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-black text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> PROOF SECTION
                </h3>
                <button 
                  onClick={() => updateSectionVisibility('proof', !state.content.proof.isEnabled)}
                  className={cn("w-10 h-5 rounded-full relative transition-all", state.content.proof.isEnabled ? "bg-pink-500" : "bg-gray-700")}
                >
                  <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", state.content.proof.isEnabled ? "right-1" : "left-1")} />
                </button>
              </div>
              <InputGroup label="Section Title">
                <input 
                  type="text" 
                  value={state.content.proof.title} 
                  onChange={(e) => updateContent('proof.title', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
              <InputGroup label="Testimonials">
                <div className="space-y-4">
                  {state.content.proof.testimonials.map((t, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-between mb-3">
                        <span className="text-[10px] font-bold text-gray-500">TESTIMONIAL {i + 1}</span>
                        <button 
                          onClick={() => {
                            const newList = state.content.proof.testimonials.filter((_, idx) => idx !== i);
                            updateContent('proof.testimonials', newList);
                          }}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input 
                          type="text" 
                          value={t.name} 
                          placeholder="Name"
                          onChange={(e) => {
                            const newList = [...state.content.proof.testimonials];
                            newList[i].name = e.target.value;
                            updateContent('proof.testimonials', newList);
                          }}
                          className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none"
                        />
                        <input 
                          type="text" 
                          value={t.role} 
                          placeholder="Role"
                          onChange={(e) => {
                            const newList = [...state.content.proof.testimonials];
                            newList[i].role = e.target.value;
                            updateContent('proof.testimonials', newList);
                          }}
                          className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none"
                        />
                      </div>
                      <textarea 
                        rows={2}
                        value={t.text} 
                        placeholder="Testimonial text"
                        onChange={(e) => {
                          const newList = [...state.content.proof.testimonials];
                          newList[i].text = e.target.value;
                          updateContent('proof.testimonials', newList);
                        }}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-pink-500 outline-none resize-none"
                      />
                    </div>
                  ))}
                  <button 
                    onClick={() => updateContent('proof.testimonials', [...state.content.proof.testimonials, { name: 'New User', role: 'Developer', text: 'Amazing!' }])}
                    className="w-full py-2 border border-dashed border-white/20 rounded-lg text-xs text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={12} /> Add Testimonial
                  </button>
                </div>
              </InputGroup>
            </section>

            {/* CTA & FOOTER SECTION */}
            <section className="pt-6 border-t border-white/5">
              <h3 className="text-xs font-black text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> CTA & FOOTER
              </h3>
              <InputGroup label="CTA Headline">
                <textarea 
                  rows={2}
                  value={state.content.cta.headline || ''} 
                  onChange={(e) => updateContent('cta.headline', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none resize-none"
                />
              </InputGroup>
              {state.content.cta.buttons.map((btn, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-4">
                  <InputGroup label={`Button ${i + 1} Label`}>
                    <input 
                      type="text" 
                      value={btn.label} 
                      onChange={(e) => {
                        const newBtns = [...state.content.cta.buttons];
                        newBtns[i].label = e.target.value;
                        updateContent('cta.buttons', newBtns);
                      }}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-pink-500 outline-none"
                    />
                  </InputGroup>
                  <InputGroup label="Target URL">
                    <input 
                      type="text" 
                      value={btn.url} 
                      onChange={(e) => {
                        const newBtns = [...state.content.cta.buttons];
                        newBtns[i].url = e.target.value;
                        updateContent('cta.buttons', newBtns);
                      }}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-pink-500 outline-none"
                    />
                  </InputGroup>
                </div>
              ))}
              <InputGroup label="Footer Copyright Text">
                <input 
                  type="text" 
                  value={state.content.cta.footerText} 
                  onChange={(e) => updateContent('cta.footerText', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
            </section>
          </div>
        )}

        {activeTab === 'theme' && (
          <div className="space-y-8">
            <InputGroup label="Point Color">
              <div className="flex gap-4 items-center">
                <input 
                  type="color" 
                  value={state.theme.pointColor}
                  onChange={(e) => updateTheme('pointColor', e.target.value)}
                  className="w-12 h-12 bg-transparent border-none cursor-pointer rounded-lg"
                />
                <input 
                  type="text" 
                  value={state.theme.pointColor}
                  onChange={(e) => updateTheme('pointColor', e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>
            </InputGroup>
            <InputGroup label="Background Color">
              <div className="flex gap-4 items-center">
                <input 
                  type="color" 
                  value={state.theme.backgroundColor}
                  onChange={(e) => updateTheme('backgroundColor', e.target.value)}
                  className="w-12 h-12 bg-transparent border-none cursor-pointer rounded-lg"
                />
                <input 
                  type="text" 
                  value={state.theme.backgroundColor}
                  onChange={(e) => updateTheme('backgroundColor', e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>
            </InputGroup>
            <InputGroup label="Font Family">
              <select 
                value={state.theme.fontFamily}
                onChange={(e) => updateTheme('fontFamily', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
              >
                <option value="Pretendard">Pretendard (Standard)</option>
                <option value="Inter">Inter (Global)</option>
                <option value="system-ui">System</option>
              </select>
            </InputGroup>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-8">
             <InputGroup label="Meta Title">
                <input 
                  type="text" 
                  value={state.seo.title} 
                  onChange={(e) => updateSEO('title', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
              <InputGroup label="Meta Description">
                <textarea 
                  rows={4}
                  value={state.seo.description} 
                  onChange={(e) => updateSEO('description', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none resize-none"
                />
              </InputGroup>
              <InputGroup label="OG Image URL">
                <input 
                  type="text" 
                  value={state.seo.ogImage} 
                  onChange={(e) => updateSEO('ogImage', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-pink-500 outline-none"
                />
              </InputGroup>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-white/5 space-y-4">
        <button className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 py-4 rounded-2xl font-black text-sm transition-all shadow-[0_0_20px_rgba(239,56,122,0.3)]">
          <Save size={18} />
          저장 및 배포하기
        </button>
      </div>
    </aside>
  );
};

export default function AdminDashboard() {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('mobile');

  return (
    <div className="flex h-screen bg-[#F7F7F9] text-[#1A1A1E]">
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="h-16 border-b border-black/5 px-8 flex items-center justify-between bg-white text-gray-900">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live Preview</span>
          </div>
          
          <div className="flex bg-black/5 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('mobile')}
              className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", viewMode === 'mobile' ? "bg-white text-gray-900 shadow-sm border border-black/5" : "text-gray-400 hover:text-gray-600")}
            >
              Mobile
            </button>
            <button 
              onClick={() => setViewMode('desktop')}
              className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", viewMode === 'desktop' ? "bg-white text-gray-900 shadow-sm border border-black/5" : "text-gray-400 hover:text-gray-600")}
            >
              Desktop
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Eye size={20} />
            </button>
            <div className="w-px h-4 bg-black/5" />
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-black transition-all">
              <Plus size={14} /> New Section
            </button>
          </div>
        </div>

        <div className="flex-1 p-10 overflow-y-auto flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(239,56,122,0.03)_0%,transparent_70%)]">
          {viewMode === 'mobile' ? (
            <div className="relative">
              <div className="absolute -inset-10 blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: '#ef387a' }} />
              <div className="w-[375px] h-[760px] bg-black border-[12px] border-[#1a1a1a] rounded-[60px] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1a1a1a] rounded-b-3xl z-50 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="w-full h-full overflow-y-auto scrollbar-hide pt-2">
                  <LandingPage />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full max-w-6xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl bg-black">
               <LandingPage />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
