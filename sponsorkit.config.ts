import type {
  ProviderName,
  SponsorkitConfig,
  Sponsorship,
  SvgComposer,
} from "sponsorkit";
import {
  defineConfig,
  presets,
} from "sponsorkit";

export default defineConfig({
  includePastSponsors: true,
  onSponsorsFetched: (
    sponsors: Sponsorship[],
    provider: ProviderName | string,
  ) => {
    if (provider !== "github") {
      return;
    }

    for (const sponsor of sponsors) {
      if (sponsor.sponsor.name === "wjy-yy") {
        sponsor.monthlyDollars = 10;
        sponsor.isOneTime = true;
        sponsor.tierName = "$10 one time";
        sponsor.createdAt = "2023-11-13T08:00:00Z";
      }
      console.log(sponsor);
    }

    {
      const s: Sponsorship = {
        isOneTime: true,
        provider: "github",
        monthlyDollars: 30,
        privacyLevel: "PUBLIC",
        tierName: "$30 one time",
        createdAt: "2023-11-05T08:00:00Z",
        sponsor: {
          type: "User",
          login: "Hsueh-Xue",
          name: "Hsueh-Xue",
          avatarUrl:
            "https://avatars.githubusercontent.com/u/41107630?v=4",
        },
      };

      sponsors.push(s);
    }

    {
      const s: Sponsorship = {
        isOneTime: true,
        provider: "github",
        monthlyDollars: 31,
        privacyLevel: "PUBLIC",
        tierName: "$31 one time",
        createdAt: "2024-02-02T08:00:00Z",
        sponsor: {
          type: "Organization",
          login: "杭师 Coder",
          name: "杭师 Coder",
          avatarUrl: "http://localhost:8000/images/hznu-coder-wechat.jpg",
        },
      };

      sponsors.push(s);
    }

    {
      const s: Sponsorship = {
        isOneTime: true,
        provider: "github",
        monthlyDollars: 70,
        privacyLevel: "PUBLIC",
        tierName: "$70 one time",
        createdAt: "2024-06-03T13:30:00Z",
        sponsor: {
          type: "User",
          login: "cy1999",
          name: "cy1999",
          avatarUrl: "http://localhost:8000/images/cy1999.jpg",
        },
      };

      sponsors.push(s);
    }

    return sponsors;
  },
  tiers: [
    {
      title: "Platinum Sponsors",
      preset: presets.xl,
      composeBefore: async (composer: SvgComposer, sponsors: Sponsorship[], _config: SponsorkitConfig) => {
        sponsors.sort((a, b) => {
          return b.monthlyDollars - a.monthlyDollars;
        });
      },
    },
  ],
});
