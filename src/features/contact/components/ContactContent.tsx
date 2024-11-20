import MainTitle from "@/components/MainTitle";
import { Label } from "@/components/ui/label";
import { contactDetails, ContactForm, useContactForm } from "../index";

export const ContactContent = () => {
	const { errors, handlePhoneInput, handleSubmit, onSumbit, register } =
		useContactForm();

	return (
		<section className="bg-primary-black text-white py-20">
			<div className="container">
				<MainTitle
					heading="LET'S GET IN TOUCH"
					subHeading="Our custom exhibition stands are designed to suit all your specifications and requirements."
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
					{contactDetails.map(item => (
						<div
							key={item.title}
							className="border-2 border-secondary-grey p-8"
						>
							<a href={`${item.href}`}>
								<span className="font-bold mb-4 block text-xl">
									{item.title}
								</span>
								<p className="text-primary-grey">{item.description}</p>
							</a>
						</div>
					))}
				</div>

				<form
					onSubmit={handleSubmit(onSumbit)}
					className="flex flex-col gap-10 mt-20"
				>
					<div className="flex gap-6">
						<ContactForm
							label="Fullname"
							name="name"
							register={register}
							error={errors.name}
						/>

						<ContactForm
							label="Email"
							name="email"
							register={register}
							error={errors.email}
						/>
					</div>

					<div className="flex gap-6">
						<ContactForm
							error={errors.phone}
							label="Phone"
							name="phone"
							register={register}
							onInput={handlePhoneInput}
						/>

						<ContactForm
							error={errors.company}
							label="Company"
							name="company"
							register={register}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<Label className={`text-sm ${errors.message && "text-red-600"}`}>
							Message
						</Label>
						<textarea
							{...register("message")}
							className={`resize-none py-2 px-4 min-h-48 bg-transparent border-2 border-secondary-grey text-white outline-none`}
							placeholder="Your Message"
						></textarea>
						{errors.message && (
							<div className=" font-[500] mt-1 text-red-700">
								{errors.message.message}
							</div>
						)}
					</div>
					<button className="bg-white text-black py-1 px-5 w-fit font-bold rounded-md">
						SUBMIT
					</button>
				</form>
			</div>
		</section>
	);
};
