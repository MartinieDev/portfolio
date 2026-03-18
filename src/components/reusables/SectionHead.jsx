function SectionHead({ title, subtitle, TagLevel }) {
  return (
    <div
      className="section-head"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <TagLevel className="head-title">{title}</TagLevel>

      {subtitle ? <p className="subtitle-muted">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHead;
