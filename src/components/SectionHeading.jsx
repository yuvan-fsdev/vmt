export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs = "h2",
  className = ""
}) {
  const TitleTag = titleAs;

  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <TitleTag>{title}</TitleTag>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
