import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function ToggleSwitch({ activeColor, inactiveColor, label }) {
  const [enabled, setEnabled] = useState(true);

  const colorVariants = {
    primary: 'bg-primary',
    red: 'bg-linear-red',
    yellow: 'bg-linear-yellow',
    blue: 'bg-linear-blue',
    grey: 'bg-grey',
    inactive: 'bg-background',
  };

  return (
    <Switch.Group>
      <div className="flex items-center gap-1 ">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled
              ? `${colorVariants[activeColor]}`
              : `${colorVariants[inactiveColor]}`
          }
          relative inline-flex h-[15px] w-[27px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-3' : 'translate-x-0'}
            pointer-events-none inline-block h-[11px] w-[11px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <Switch.Label className="text-sm font-medium min-w-max">
          {label}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
}
