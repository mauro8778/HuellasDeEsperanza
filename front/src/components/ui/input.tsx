'use client';

import { FC, useState } from 'react';
import { cn } from '@/libs/utils';
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri';

interface InputProps {
  type: 'text' | 'password';
  placeholder: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean | null;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  className,
  name,
  value,
  onChange,
  isValid,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full relative mb-5">
      <input
        type={type === 'text' ? 'text' : showPassword ? 'text' : 'password'}
        className={cn(
          'bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl',
          className,
          isValid === false ? 'border-red-500' : isValid === true ? 'border-green-500' : ''
        )}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <RiLockUnlockLine /> : <RiLockLine />}
        </button>
      )}
    </div>
  );
};

export default Input;
