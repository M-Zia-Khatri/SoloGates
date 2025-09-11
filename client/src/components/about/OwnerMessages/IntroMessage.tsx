import { Heading } from "@/components/ui/Heading";

const IntroMessage = () => (
  <div className="flex flex-col space-y-3 mb-4">
    <Heading asChild hdSize="h2">
      <h2>Message</h2>
    </Heading>
    <p>
      Every brand has a story — but very few know how to tell it. That's why I
      started Sologate. Not just to create campaigns. but to spark
      conversations. Not just to sell products. but to build presence and
      purpose.
    </p>
    <p>
      To my team — know this: We are not marketers. We are architects of trust,
      clarity, and impact. When we write, we write to connect. When we
      strategize, we do it with intention. Let's always remember that behind
      every brief is a business dream waiting to be realized.
    </p>
  </div>
);

export default IntroMessage;
