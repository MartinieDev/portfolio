import SectionHead from '../../reusables/SectionHead';
import CapabilityGroup from './CapabilityGroup/CapabilityGroup';
import { capabilitiesData } from '../../../data/capabilitiesData';

import './coreCapabilities.css';

function CoreCapabilities() {
  return (
    <div id="core-capabilities" className="capabilities-section container">
      <div>
        <SectionHead
          title="Core Capabilities"
          TagLevel="h2"
          subtitle="Technologies, frameworks, and tools I use to design and build modern web applications."
        />

        <div className="capabilities-card">
          <div className="open-to-work-wrapper">
            <div className="available-indicator"></div>

            <p className="otw-title">Open to work</p>
          </div>
          
          {capabilitiesData.map((capabilitiyObj) => (
            <CapabilityGroup
              key={capabilitiyObj.title}
              capabilitiyObj={capabilitiyObj}
            />
          ))}

          <div className="section-divider"></div>

          <div className="bottom-container">
            <div className="key-summary-container">
              {capabilitiesData.map((capabilitiyObj) => (
                <div className="key-wrapper">
                  <div
                    className="key-title-indicator"
                    style={{
                      background: capabilitiyObj.indicatorColor,
                    }}
                  ></div>

                  <div className="key-title">{capabilitiyObj.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreCapabilities;
