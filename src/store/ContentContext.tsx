import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AppState, ContentContextType, SiteTheme, SEOConfig } from '../types';
import { DEFAULT_CONTENT } from '../constants';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('recommend_app_state_v13');
    if (!saved) return DEFAULT_CONTENT;
    
    try {
      const parsed = JSON.parse(saved);
      // Merge saved content with DEFAULT_CONTENT to ensure new sections exist
      return {
        ...DEFAULT_CONTENT,
        ...parsed,
        content: {
          ...DEFAULT_CONTENT.content,
          ...parsed.content
        },
        theme: {
          ...DEFAULT_CONTENT.theme,
          ...parsed.theme
        },
        seo: {
          ...DEFAULT_CONTENT.seo,
          ...parsed.seo
        }
      };
    } catch (e) {
      return DEFAULT_CONTENT;
    }
  });

  useEffect(() => {
    localStorage.setItem('recommend_app_state_v13', JSON.stringify(state));
  }, [state]);

  const updateContent = useCallback((path: string, value: any) => {
    setState((prev) => {
      const newState = { ...prev };
      const keys = path.split('.');
      let current: any = newState.content;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      
      return { ...newState };
    });
  }, []);

  const updateTheme = useCallback((path: keyof SiteTheme, value: string) => {
    setState((prev) => ({
      ...prev,
      theme: { ...prev.theme, [path]: value },
    }));
  }, []);

  const updateSEO = useCallback((path: keyof SEOConfig, value: string) => {
    setState((prev) => ({
      ...prev,
      seo: { ...prev.seo, [path]: value },
    }));
  }, []);

  const updateSectionVisibility = useCallback((sectionId: string, isEnabled: boolean) => {
    setState((prev) => {
      const newState = { ...prev };
      if (newState.content[sectionId as keyof typeof newState.content]) {
        (newState.content[sectionId as keyof typeof newState.content] as any).isEnabled = isEnabled;
      }
      return { ...newState };
    });
  }, []);

  return (
    <ContentContext.Provider value={{ state, updateContent, updateTheme, updateSEO, updateSectionVisibility }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
