import React from 'react'

interface Props {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: Props) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="hidden peer" checked={checked} onChange={onChange} />
      <div className="w-4 h-4 border border-gray-500 peer-checked:bg-green-500 peer-checked:border-green-500 rounded-sm flex items-center justify-center">
        {checked && (
          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L7 9.94l5.72-5.72a.75.75 0 0 1 1.06 0z" />
          </svg>
        )}
      </div>
      <span className="text-gray-300">{label}</span>
    </label>
  );

export default Checkbox
