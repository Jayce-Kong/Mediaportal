import { ReactNode } from "react";

export interface NavSubItem {
  name: string;
  path: string;
  icon: ReactNode;
  desc: string;
}

export interface NavItem {
  name: string;
  id: string;
  hasDropdown: boolean;
  subItems?: NavSubItem[];
}

export interface Product {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  color: string;
  path: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: ReactNode;
}
