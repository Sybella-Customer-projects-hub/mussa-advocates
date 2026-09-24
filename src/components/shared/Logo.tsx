interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className={`logo ${light ? "logo-light" : "logo-dark"}`}>
      <div className="logo-mark"><span>M</span><span className="logo-mark-cross">X</span></div>
      <div><strong>MOUSSA</strong><small>ADVOCATES</small></div>
    </div>
  );
}
