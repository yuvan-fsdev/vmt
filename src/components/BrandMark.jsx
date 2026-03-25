import logo from "../../logo/logo.svg";

export function LogoImage({ alt = "VMT logo", className = "" }) {
  return <img className={`logo-image ${className}`.trim()} src={logo} alt={alt} />;
}

export default function BrandMark({ className = "", alt = "VMT logo" }) {
  return (
    <span className={`brand-mark ${className}`.trim()}>
      <LogoImage alt={alt} />
    </span>
  );
}
