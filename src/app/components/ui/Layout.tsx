import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`container mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({ subtitle, title, description, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <h2 className="text-sm font-bold text-cyan-500 tracking-[0.2em] mb-4 uppercase">
          {subtitle}
        </h2>
      )}
      <h3 className="text-4xl font-bold">{title}</h3>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
