import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";
import testImg from "../../../../public/imgs/felt-kece-panel-1.webp";
export const Shop = () => {
	return (
		<div className="bg-primary-black py-10">
			<PageBreadCrumb
				breadcrumbLinkName="Home"
				breadcrumbLink="/"
				breadcrumbPage="Shop"
			/>
			<div className="container">
				<div className="my-10">
					<div className="flex items-center justify-between gap-8 flex-col sm:flex-row ">
						<p className="text-white">Showing 1-16 of 33 results</p>
						<Select>
							<SelectTrigger className="w-[180px] bg-transparent text-white ml-0 sm:ml-auto">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[180px] bg-transparent text-white ">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
						{Array.from({ length: 12 }).map(_ => (
							<div className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
								<img src={testImg} className="rounded-md mx-auto" alt="" />
								<h1 className="mx-auto block w-fit mt-4 font-[600] uppercase text-white">
									Cinema
								</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
