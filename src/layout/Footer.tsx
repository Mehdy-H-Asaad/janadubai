import footerImg from "../../public/imgs/Logo2.png.webp";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import InstaQr from "../../public/imgs/Instagram-qpbhlytch1m7ni65632yn5xo12oky5vdyyn427mkeg.webp";
import TiktokQr from "../../public/imgs/TikTok-qpbhm0p0uposaq3ev3w7s5gl7ufbdk2un7y30rjs20.webp";

import Payments from "../../public/imgs/payments.webp";
import {
	footerUsefulLinks,
	footerUsefulInfo,
	footerSocials,
	footerEmails,
} from "@/shared/constants";
const Footer = () => {
	return (
		<section className="bg-primary-black pt-5 text-white">
			<div className="container">
				<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 ">
					<div className="mb-8">
						<img src={footerImg} className="w-[225px] mx-auto md:mx-0" alt="" />
						<p className=" my-3 mx-auto md:mx-0 w-fit">
							JANA DUBAI TR SOLE PROPRITORSHIP LLC.
						</p>
						<div className="flex items-center gap-2 my-7 mx-auto md:mx-0 w-fit">
							<IoPhonePortraitOutline size={14} />
							<span>Phone: +971 50 205 0510 </span>
						</div>

						<div className="flex flex-col items-center md:items-start gap-2 justify-center md:justify-start">
							<div className="flex items-center gap-2">
								<MdOutlineEmail />
								<span>Email:</span>
							</div>
							<div className="flex flex-col gap-2">
								{footerEmails.map(ele => (
									<a href={`mailto:${ele.email}`} className="text-primary-grey">
										{ele.email}
									</a>
								))}
							</div>
							<img src={Payments} className="mt-9" alt="" />
						</div>
					</div>

					<div className="py-8">
						<h1 className="mb-8 mx-auto w-fit font-bold">USEFUL LINKS</h1>
						<div className="flex flex-col gap-8">
							{footerUsefulLinks.map(ele => {
								return (
									<Link key={ele.path} className="mx-auto w-fit" to={ele.path}>
										{ele.title}
									</Link>
								);
							})}
						</div>
					</div>
					<div className="py-8">
						<h1 className="mb-8 mx-auto w-fit font-bold">USEFUL INFO</h1>
						<div className="flex flex-col gap-8">
							{footerUsefulInfo.map(ele => {
								return (
									<Link key={ele.path} className="mx-auto w-fit" to={ele.path}>
										{ele.title}
									</Link>
								);
							})}
						</div>
					</div>
					<div className="flex gap-4 py-8 justify-center flex-wrap">
						<img src={TiktokQr} className="size-[200px] rounded-md" alt="" />
						<img src={InstaQr} className="size-[200px] rounded-md" alt="" />
					</div>
				</div>
			</div>
			<div className=" border-t-[1px] border-secondary-grey ">
				<div className="container flex p-8 gap-4 items-center justify-between">
					<div>
						2024 CREATED BY {""}
						<a
							target="_blank"
							href="https://hmmosoft.com"
							className="text-golden font-[600]"
						>
							Hmmosoft {""}
						</a>
						Company - All Rights Reserved.
					</div>

					<div className="flex gap-4">
						{footerSocials.map(ele => {
							return (
								<a key={ele.path} href={ele.path}>
									<span>{ele.title}</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
