export const segmentData: Record<
    string,
    { title: string; content: string; children?: { name: string; description: string }[] }
> = {
    "game-show": {
        title: "Game Show",
        content: "Participate in exciting challenges and competitions",
    },
    "lucky-draw": {
        title: "Lucky Draw",
        content: "Win amazing prizes in our lucky draw events",
    },
    jobs: {
        title: "Jobs",
        content: "Explore job opportunities locally and abroad",
        children: [
            { name: "Job in Pakistan", description: "Find the perfect career opportunity locally" },
            { name: "Job Abroad", description: "Explore international career prospects" },
        ],
    },
    "company-representative": {
        title: "Company Representative",
        content: "Regional and international representation opportunities",
        children: [
            { name: "KPK", description: "Regional representative opportunities in KPK" },
            { name: "Punjab", description: "Regional representative opportunities in Punjab" },
            { name: "Sindh", description: "Regional representative opportunities in Sindh" },
            { name: "Balochistan", description: "Regional representative opportunities in Balochistan" },
            { name: "Dubai", description: "Business opportunities in Dubai" },
            { name: "Middle East", description: "Expand your reach in the Middle East" },
            { name: "Europe", description: "Connect with opportunities across Europe" },
            { name: "USA", description: "Establish connections in the USA" },
        ],
    },
    "investment-abroad": {
        title: "Investment / Visit Abroad",
        content: "Discover investment and travel opportunities",
    },
    "scholar-entrepreneur": {
        title: "Scholar / Entrepreneur",
        content: "Educational and business development programs",
    },
};
