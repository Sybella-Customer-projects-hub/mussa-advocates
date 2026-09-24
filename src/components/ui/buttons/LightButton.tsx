import type { ReactNode } from "react";

interface LightButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function LightButton({ children, onClick }: LightButtonProps) {
  return <button className="light-button" onClick={onClick}>{children}</button>;
}
