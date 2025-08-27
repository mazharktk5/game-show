import { notFound } from "next/navigation";
import { segmentData } from "../../data/segmentData";

export default function SegmentPage({ params }: { params: { slug: string } }) {
    const data = segmentData[params.slug];
    if (!data) return notFound();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white py-20 px-6 mt-0">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold 
                    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
                    bg-clip-text text-transparent mb-6 drop-shadow-xl"
                >
                    {data.title}
                </h1>

                <p className="text-gray-300 text-lg">{data.content}</p>

                {data.children && (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.children.map((child, idx) => (
                            <div
                                key={idx}
                                className="relative cursor-pointer 
                                    bg-gradient-to-br from-[#F5E0A9]/10 via-[#D4AF37]/5 to-gray-900 
                                    p-6 rounded-2xl shadow-lg border border-[#D4AF37]/40 
                                    hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] 
                                    transition duration-300"
                            >
                                <h3 className="text-lg font-semibold 
                                    bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
                                    bg-clip-text text-transparent"
                                >
                                    {child.name}
                                </h3>
                                <p className="mt-2 text-gray-300 text-sm">
                                    {child.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
