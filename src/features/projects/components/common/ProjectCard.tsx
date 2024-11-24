// import { CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
type TProjectCard = {
	title: string;
	image: {
		mime_type: string;
		content: string;
	}[];
	id: number;
};

export const ProjectCard = ({ title, image, id }: TProjectCard) => {
	return (
		<Link to={`/projects/${id}`}>
			{/* <CarouselItem> */}
			<img
				src={`data:${image[0].mime_type};base64,${image[0].content}`}
				className="rounded-md mx-auto size-72 object-cover duration-300 transition-all hover:scale-95"
				alt=""
			/>
			<h1 className="mx-auto block w-fit mt-4 font-[600] uppercase text-white">
				{title}
			</h1>
			{/* </CarouselItem> */}
		</Link>
	);
};
