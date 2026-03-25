import GridDots from './GridDots';

function SectionHead({ title, subtitle, TagLevel }) {
  return (
    <div
      className="section-head"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="title-wrapper">
        <GridDots rows="8" cols="10" size="2" />

        <TagLevel className="head-title">{title}</TagLevel>
      </div>

      {subtitle ? <p className="subtitle-muted">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHead;
