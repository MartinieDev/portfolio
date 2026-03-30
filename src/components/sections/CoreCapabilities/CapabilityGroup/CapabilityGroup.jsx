import CapabilityPill from '../CapabilityPill/CapabilityPill';

function CapabilityGroup({ capabilitiyObj }) {
  return (
    <div className="capability-group">
      <div className="capability-title-wrapper">
        <div
          className="title-indicator"
          style={{
            background: capabilitiyObj.indicatorColor,
          }}
        ></div>

        <h3 className="category-title">{capabilitiyObj.title}</h3>
      </div>

      <div className="pill-wrapper">
        {capabilitiyObj.pillContents.map((contentObj) => (
          <CapabilityPill key={contentObj.title} contentObj={contentObj} />
        ))}
      </div>
    </div>
  );
}

export default CapabilityGroup;
