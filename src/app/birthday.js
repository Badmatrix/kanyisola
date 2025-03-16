"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Confetti from "react-confetti";
import Photos from "./Photos";



function BirthdayPage() {
	const [balloons, setBalloons] = useState([]);
	const [showBalloons, setShowBalloons] = useState(true);
	const [showConfetti, setShowConfetti] = useState(true);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	useEffect(() => {
		// Function to update state
		const updateSize = () => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight });
		};

		// Set initial size
		updateSize();

		// Add event listener
		window.addEventListener("resize", updateSize);

		// Cleanup on unmount
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// Stop confetti after 10 seconds
	useEffect(() => {
		const timer = setTimeout(() => setShowConfetti(false), 10000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setBalloons(
			Array.from({ length: 10 }).map((_, i) => ({
				id: i,
				left: `${Math.random() * 100}%`,
				delay: Math.random() * 5,
			}))
		);
		const timer = setTimeout(() => setShowBalloons(false), 20000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="relative min-h-screen bg-purple-100/90 flex flex-col items-center justify-center p-6 overflow-hidden">
			{showConfetti && (
				<Confetti width={dimensions.width} height={dimensions.height} />
			)}

			<motion.p
				className="mt-6 text-lg md:text-xl text-purple-950 text-center font-stretch-75%"
				initial={{ opacity: 0, x: -150 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1, duration: 2 }}
			>
				🎉 Happy Birthday to a Truly Special Girl! 🎂💖 today is the most
				special day because it&apos;s the day you came into this world and made
				it brighter. ✨ every moment with you has always being filled with
				happiness, love, and endless joy. I am so grateful for every smile,
				every laugh, and every beautiful moment we share. Today is all about
				you—your kindness, your beauty, your heart, and the joy you bring to
				everyone around you. ✨ On your special day, I wish you all the love,
				success, and happiness in the world—because you deserve nothing less
				than the best You deserve all the laughter, love, and blessings in the
				world. May this new year of your life bring new adventures, exciting
				opportunities, and dreams that come true! Keep shining, keep smiling,
				and keep being the incredible person you are! 💕🎈 Wishing you a
				birthday as amazing as you are! 🥳🎂🎊🎁 With love and best wishes, and
				I&apos;ll always be here to celebrate you—not just today, but every
				single day.
			</motion.p>
			{/* Floating Balloons */}
			{showBalloons &&
				balloons.map((balloon) => (
					<motion.img
						key={balloon.id}
						src="/images/ballon.png"
						alt="Balloon"
						className="absolute w-12 h-16 z-0"
						style={{ left: balloon.left }}
						initial={{ y: "100vh", opacity: 0 }}
						animate={{ y: "-70vh", opacity: 1, rotate: [0, 30, -30, 0] }}
						transition={{
							duration: 6,
							repeat: Infinity,
							delay: balloon.delay,
							ease: "linear",
						}}
					/>
				))}

			<Photos />
			{/* Animated Birthday Message */}
			<motion.h1
				className="text-3xl md:text-6xl font-bold text-center text-purple-700 mb-6 z-10"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 3 }}
			>
				🎉 Happy Birthday! My smallie 💖🎂
			</motion.h1>
		</div>
	);
}

export default BirthdayPage;
