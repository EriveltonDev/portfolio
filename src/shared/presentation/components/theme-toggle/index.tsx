'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};