import PackagesSec from './PackagesSec';
export interface PackageData {
  title: string;
  desc: string;
  price: number;
  features: string[];
}

const socialMediaPackages: PackageData[] = [
  {
    title: 'SILVER Package',
    price: 999,
    desc: 'For small businesses & startups to build digital presence.',
    features: [
      '1-2 Ads Campaigns (FBI IG)',
      '12-16 Social Media Posts',
      '4 Reels/Short Videos',
      '5 Story Designs',
      'Ad Copy & Captions',
      'Basic Brand Audit',
      'Audience Research & Targeting',
      'Ad Performance Testing',
      'Monthly Report',
    ],
  },
  {
    title: 'Platinum Package',
    price: 1999,
    desc: 'For growing brands to scale reach and boost sales.',
    features: [
      'Full Funnel Ad Campaigns',
      '8-10 Creative Ads',
      '20-25 Social Media Posts',
      '10 Reels/Short Videos',
      '12 Story Designs',
      'Advanced Audit & Market Positioning',
      'Deep Audience Segmentation',
      '10 Video Thumbnails',
      '4 High-Quality Video Ads',
      'Content Calendar & Roadmap',
      'Weekly Reports',
    ],
  },
  {
    title: 'GOLDEN Package',
    price: 1499,
    desc: 'For growing brands to scale reach and boost sales.',
    features: [
      '3—4 Ads Campaigns (FB, IG)',
      '16-18 Social Media Posts',
      '6 Reels/Short Videos',
      '8 Story Designs',
      '2 Custom Thumbnails',
      'Advanced Brand Audit',
      'Audience Targeting & Retargeting',
      'Strategy Plan',
      '2 Video Ads (15—30 sec)',
    ],
  },
];

const videoEditingPackages: PackageData[] = [
  {
    title: 'SILVER Package',
    price: 999,
    desc: 'For startups & small businesses building video presence.',
    features: [
      '8 Short-Form Videos (≤60 sec)',
      'Editing + Subtitles + SFX',
      '8 Thumbnails',
      'Color Grading & Audio Fix',
      'Monthly Feedback',
    ],
  },
  {
    title: 'Platinum Package',
    price: 1999,
    desc: 'For brands that want volume, quality & professional positioning.',
    features: [
      '25 Short-Form Videos (≤60 sec)',
      '8 VSLs/Testimonials (5-15 min)',
      'Advanced Editing + B-roll + Graphics',
      '25 Custom Shorts Thumbnails + 8 YouTube Thumbnails',
      '4-8 Video Ads Creation',
      'YouTube & Facebook Banners',
      'Script & Content Support',
      'Weekly Strategy Calls',
    ],
  },
  {
    title: 'GOLDEN Package',
    price: 2499,
    desc: 'For growing creators & brands scaling content.',
    features: [
      '16 Short-Form Videos (≤60 sec)',
      '8 VSLs/Testimonials (≤5 min)',
      'Advanced Editing + Motion Graphics',
      '16 Custom Shorts Thumbnails + 8 YouTube Thumbnails',
      '2-4 Video Ads Creation',
      'Performance Report + Optimization',
      'Weekly Strategy Calls',
    ],
  },
];

const MainPackagesSec = () => {
  return (
    <section className="sec-container my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14">
      <div>
        <PackagesSec title="Social Media Packages" data={socialMediaPackages} />
        <PackagesSec
          title="Social Media Packages"
          data={videoEditingPackages}
        />
      </div>
    </section>
  );
};

export default MainPackagesSec;
