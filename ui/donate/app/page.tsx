import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SiAgora } from "react-icons/si";
import { FaHandHoldingHeart, FaLock, FaGlobe } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";

const features = [
  {
    name: "Secure Smart Contracts",
    description: "Leverage Agoric's secure-by-design smart contracts for transparent and trustless donations.",
    icon: <FaLock className="h-6 w-6" />,
  },
  {
    name: "Global Reach",
    description: "Connect donors and causes worldwide using Agoric's interoperable blockchain technology.",
    icon: <FaGlobe className="h-6 w-6" />,
  },
  {
    name: "Low Fees",
    description: "Benefit from Agoric's efficient consensus mechanism for cost-effective donations.",
    icon: <FaHandHoldingHeart className="h-6 w-6" />,
  },
  {
    name: "Fast Transactions",
    description: "Experience quick donation processing with Agoric's high-performance blockchain.",
    icon: <IoMdSpeedometer className="h-6 w-6" />,
  },
];

const donationTiers = [
  {
    name: "Supporter",
    description: "Make a difference with small contributions",
    amount: 10,
    features: [
      "Receive thank you email",
      "Name on donor list",
      "Quarterly impact report",
    ],
  },
  {
    name: "Champion",
    description: "Amplify your impact with larger donations",
    amount: 50,
    features: [
      "All Supporter benefits",
      "Exclusive donor badge",
      "Monthly video updates",
      "Invitation to annual virtual event",
    ],
    popular: true,
  },
  {
    name: "Visionary",
    description: "Lead the change with significant contributions",
    amount: 250,
    features: [
      "All Champion benefits",
      "Personal impact consultation",
      "Recognition in annual report",
      "VIP access to charity events",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00DAF7] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#7B61FF]/30 dark:to-[#00DAF7]/30 dark:opacity-100">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="72"
                    height="56"
                    patternUnits="userSpaceOnUse"
                    x="-12"
                    y="4"
                  >
                    <path d="M.5 56V.5H72" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6 animate-fade-in">
              <span className="font-semibold">Powered by Agoric</span> - Secure and Transparent Donations
            </Badge>
            <h1 className="mb-10 bg-gradient-to-r from-[#7B61FF] to-[#00DAF7] bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
              Empower Change with AgoriDonate
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Join the future of charitable giving. Secure, transparent, and global donations powered by Agoric blockchain technology.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/login">
                <RainbowButton>
                  Start Donating Now 💖
                </RainbowButton>
              </Link>
              <Link href="/causes">
                <Button variant="outline">
                  Explore Causes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AgoriDonate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="text-[#7B61FF] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Impact Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <div key={index} className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md ${tier.popular ? 'border-2 border-[#7B61FF]' : ''}`}>
                {tier.popular && <Badge className="mb-4">Most Popular</Badge>}
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <p className="text-3xl font-bold mb-6">${tier.amount} <span className="text-sm font-normal">/ month</span></p>
                <ul className="mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <SiAgora className="text-[#7B61FF] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                  Choose {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7B61FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join thousands of donors using AgoriDonate to support causes worldwide.</p>
          <Link href="/signup">
            <RainbowButton>
              Create Your Account
            </RainbowButton>
          </Link>
        </div>
      </section>
    </div>
  );
}

