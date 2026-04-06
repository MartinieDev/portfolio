function CapabilityPill({ contentObj }) {
  return (
    <div className="capability-pill">
      {contentObj.icon}

      <div className="tool-name">{contentObj.title}</div>
    </div>
  );
}

export default CapabilityPill;
