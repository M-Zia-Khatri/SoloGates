import { Heading } from "@/components/ui/Heading";

const MsnVsnCard = ({
  headingText,
  textContent,
}: {
  headingText: string;
  textContent: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-center ${headingText.toLowerCase() === "our mission" ? "md:justify-start" : "md:justify-end"} gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4`}
    >
      <Heading hdSize="h2" asChild>
        <h2>{headingText}</h2>
      </Heading>
      <p className="hyphens-auto" lang="de">
        {textContent}
      </p>
    </div>
  );
};

export default MsnVsnCard;
