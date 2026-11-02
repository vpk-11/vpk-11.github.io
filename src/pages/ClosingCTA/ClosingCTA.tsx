import React from 'react';
import { Linkedin } from 'lucide-react';
import generalData from '../../data/general.json';
import type { GeneralData, ProfileData } from '../../types';
import { formatText } from '../../utils/formatText';
import profileData from '../../data/profile.json';
import Button from '../../components/ui/Button/Button';
import Panel from '../../components/ui/Panel/Panel';
import './ClosingCTA.scss';

const ClosingCTA: React.FC = () => {
  const general = generalData as GeneralData;
  const cta = general.closingCta;

  const headlineLines = cta.headline.split('\n');

  return (
    <section id="closing-cta" className="section closing-cta-section">
      <div className="container">

        <h2 className="closing-cta-headline">
          {headlineLines.map((line, i) => (
            <span className="closing-cta-line" key={i}>{formatText(line)}</span>
          ))}
        </h2>

        <p className="closing-cta-tagline">{formatText(cta.tagline)}</p>

        <Button
          variant="primary"
          href={(profileData as ProfileData).linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="closing-cta-contact"
          icon={<Linkedin size={18} />}
        >
          Message me on LinkedIn
        </Button>

        {cta.channels.length > 0 && (
          <div className="closing-cta-channels">
            {cta.channels.map((channel, i) => (
              <Panel className="cta-channel-card" key={i}>
                <div className="cta-channel-label">{channel.label}</div>
                <div className="cta-channel-value">{channel.value}</div>
                <div className="cta-channel-caption">{channel.caption}</div>
              </Panel>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ClosingCTA;
