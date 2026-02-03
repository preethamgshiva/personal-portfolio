import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts';

import { portfolioConfig } from "@/config/portfolio.config";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SkillsChart = () => {
    const data = portfolioConfig.skills.skillsChart;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Rotate based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="h-full w-full flex flex-col items-center justify-center overflow-visible [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            <motion.div
                className="h-[500px] w-full max-w-2xl relative transition-all duration-200 ease-linear"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="#374151" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                            angle={30}
                            domain={[0, 100]}
                            tick={false}
                            axisLine={false}
                        />
                        <Radar
                            name="Skills"
                            dataKey="A"
                            stroke="#00aaff"
                            strokeWidth={3}
                            fill="#00aaff"
                            fillOpacity={0.3}
                        />
                    </RadarChart>
                </ResponsiveContainer>

                {/* Glow effect behind the chart */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -z-10 transform translate-z-[-50px]"></div>
            </motion.div>
        </div>
    );
};

export default SkillsChart;
