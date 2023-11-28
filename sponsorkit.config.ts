import {
    BadgePreset,
    ProviderName,
    Sponsorship,
    defineConfig,
    presets,
} from "sponsorkit";

export default defineConfig({
    onSponsorsFetched: async (
        sponsors: Sponsorship[],
        provider: ProviderName | string
    ) => {
        if (provider !== "github") {
            return;
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

        return sponsors;
    },
    tiers: [
        {
            title: "Platinum Sponsors",
            preset: presets.xl,
        },
    ],
});
