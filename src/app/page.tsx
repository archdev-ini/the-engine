import Hero from '@/components/sections/hero';
import ProtocolOverview from '@/components/sections/protocol-overview';
import CampaignPreview from '@/components/sections/campaign-preview';
import Ecosystem from '@/components/sections/ecosystem';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProtocolOverview />
      <CampaignPreview />
      <Ecosystem />
    </div>
  );
}
