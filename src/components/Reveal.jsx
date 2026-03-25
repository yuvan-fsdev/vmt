export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...props }) {
  return (
    <Tag
      className={className}
      data-reveal
      style={{ "--delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
