import { assetsUrl } from '@/constants/urlConstants';
import { useMemo } from 'react';

const WhySoloGateCard = () => {
  const data = useMemo(
    () => [
      {
        heading: 'Strategic Thinking',
        textContent: `We don't start with Canva. We start with questions. What's your business goal? What do your customers want? What emotion should your brand leave behind? Then we craft solutions that are not just creative but commercially sharp.`,
        gifUrl: `${assetsUrl.imagesUrl}StrategicThinking.gif`,
      },
      {
        heading: 'Creative with Purpose',
        textContent: `Designs that convert. Videos that connect. Campaigns that sell. We blend emotion with execution, ensuring every piece of content has one job to bring results.`,
        gifUrl: `${assetsUrl.imagesUrl}CreativeWithPurpose.gif`,
      },
      {
        heading: 'In-House Talent No Outsourcing',
        textContent: `Every project is handled by our internal team of experts from ideation to execution. No freelancers. No communication gaps. One agency. One standard.`,
        gifUrl: `${assetsUrl.imagesUrl}In-HouseTalentNoOutsourcing.gif`,
      },
      {
        heading: 'Contracts That Build Relationships',
        textContent: `We believe in long-term impact — not one-time jobs. That's why our clients sign annual contracts. It's not just a service, It's a partnership built on performance.`,
        gifUrl: `${assetsUrl.imagesUrl}ContractsThatBuildRelationships.gif`,
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {data.map((it, idx) => (
        <div className="relative">
          {/* content */}
          <div
            className="flex flex-col items-center gap-1.5 py-1.5 text-center md:items-start md:gap-2 md:py-2 md:text-left lg:gap-2.5 lg:px-0.5"
            key={idx}
          >
            {/* gif and number */}
            <div className="flex w-full items-center justify-center md:justify-between md:pr-2">
              <img
                className="h-12 md:h-16 lg:h-[83.33333333333333px] xl:h-[90px] 2xl:h-[95px]"
                src={it.gifUrl}
                alt=""
              />
              <p className="hidden md:block">0{idx + 1}</p>
            </div>

            <h5 className="font-Sora font-medium tracking-wide">
              {it.heading}
            </h5>
            <p lang="de">{it.textContent}</p>
          </div>

          {/* decoration */}
          <>
            {window.innerWidth >= 1024 && data.length - 1 !== idx ? (
              <div className="whySGCBorderRight" />
            ) : (
              window.innerWidth >= 768 &&
              data.length !== idx + 1 &&
              idx !== 1 && (
                <div
                  className={`whySGCBorderRight ${idx === 0 ? 'button-[15px]' : 'top-[15px]'} -translate-y-0`}
                />
              )
            )}
            {window.innerWidth >= 768 &&
              window.innerWidth < 1024 &&
              data.length > idx + 2 && <div className="whySGCBorderBottom" />}
          </>
        </div>
      ))}
    </div>
  );
};

export default WhySoloGateCard;
