'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
  debounceMs?: number;
  className?: string;
}

export default function Search({
  placeholder = 'Search...',
  onSearch,
  onClear,
  debounceMs = 300,
  className = '',
}: SearchProps) {
  const [query, setQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimer) clearTimeout(debounceTimer);

    if (value.trim()) {
      const timer = setTimeout(() => {
        onSearch(value);
      }, debounceMs);
      setDebounceTimer(timer);
    } else {
      onClear?.();
    }
  };

  const handleClear = () => {
    setQuery('');
    if (debounceTimer) clearTimeout(debounceTimer);
    onClear?.();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 ${className}`}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Clear
        </button>
      )}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        Search
      </button>
    </form>
  );
}
