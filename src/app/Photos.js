import Image from "next/image";
import { motion } from "framer-motion";

const images = [
	{
		src: "/images/IMG_6635.JPG",
		col: "col-span-2 row-span-2",
		row: "row-span-2",
	},
	{
		src: "/images/IMG-20250316-WA0003.jpg",

		col: "col-span-1",
		row: "row-span-1",
	},
	{
		src: "/images/IMG_6633.JPG",
		col: "col-span-1",
		row: "row-span-1",
	},
	{
		src: "/images/IMG-20250316-WA0006.jpg",
		col: "col-span-1",
		row: "row-span-1",
	},
	{
        src: "/images/IMG_6634.JPG",
		col: "col-span-1",
		row: "row-span-1",
	},
    {
        src: "/images/IMG-20250316-WA0001.jpg",
        col: "col-span-1",
        row: "row-span-1",
    },
];
function Photos() {
	return (
		<div className="grid grid-cols-3 grid-rows-3 md:grid-rows-1 gap-2 p-4 max-w-3xl mx-auto">
			{images.map((img, index) => (
				<motion.div
					key={index}
					className={`overflow-hidden rounded-lg shadow-lg ${img.col} ${img.row}`}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.1, delay: index * 0.9 }}
					whileHover={{ scale: 1.05 }}
				>
					<Image
						priority
						src={img.src}
						alt={`Collage image ${index + 1}`}
						width={500}
						height={500}
						className="object-cover w-full h-full"
					/>
				</motion.div>
			))}
		</div>
	);
}

export default Photos;
