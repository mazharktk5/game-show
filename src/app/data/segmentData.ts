export const segmentData: Record<
    string,
    { title: string; content: string; children?: { name: string; description: string }[] }
> = {
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
        content: "Investment and travel opportunities abroad",
        children: [
            { name: "Investment Abroad", description: "Explore global investment opportunities" },
            { name: "Visit Abroad", description: "Discover travel opportunities worldwide" },
        ],
    },
    "scholar-entrepreneur": {
        title: "Become a Scholar / Entrepreneur",
        content: "Education and business programs to elevate your career",
        children: [
            { name: "Scholar Programs", description: "Access educational programs and scholarships" },
            { name: "Entrepreneur Programs", description: "Join business development initiatives" },
        ],
    },
};
