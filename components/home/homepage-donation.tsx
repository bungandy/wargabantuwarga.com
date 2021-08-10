import Link from "next/link";
import { HomePageSection } from "./homepage-section";
import { DonationCard } from "~/components/donasi/donation-card";
import donasi from "~/lib/content/donasi";

export function HomePageDonation() {
  return (
    <HomePageSection className="px-4 py-6 pb-4 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">
        Donasi Warga Terdampak
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {donasi.donations.slice(0, 2).map((donation, i) => (
          <DonationCard
            key={i}
            category={donation.category}
            image={donation.image}
            title={donation.title}
            url={donation.url}
          />
        ))}
      </div>
      <div className="p-4 text-center space-y-3">
        <h3 className="text-brand leading-5 font-semibold">
          <Link href="/donasi">
            <a>Lihat Selengkapnya</a>
          </Link>
        </h3>
      </div>
    </HomePageSection>
  );
}
