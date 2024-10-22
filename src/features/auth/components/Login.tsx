import MainTitle from "@/components/MainTitle";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import { useState } from "react";
import { Signup } from "./Signup";
import { useLoginForm } from "../hooks/useLoginForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Login = () => {
	const [toggleAuth, setToggleAuth] = useState<boolean>(true);

	const { form, onSubmit } = useLoginForm();

	return (
		<div className="bg-[#1a1a1a] py-20">
			<PageBreadCrumb
				breadcrumbLink="/"
				breadcrumbPage="My account"
				breadcrumbLinkName="Home"
			/>

			<MainTitle heading="Join our community" subHeading="Login" />
			<div className="container">
				<div className="flex flex-col lg:flex-row justify-center items-center gap-20 min-h-[350px]">
					{toggleAuth ? (
						<Form {...form}>
							<motion.form
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8 flex flex-col w-full sm:w-fit "
							>
								{/* Email Field */}
								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem className="w-full sm:w-96">
											<FormLabel className="text-white">Email</FormLabel>
											<FormControl className="">
												<Input
													className="  bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
													type="text"
													placeholder="you@example.com"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Password Field */}
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem className="w-full sm:w-96">
											<FormLabel className="text-white">Password</FormLabel>
											<FormControl>
												<Input
													className="  bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
													type="password"
													placeholder="••••••••"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									className="capitalize bg-golden hover:bg-golden w-full"
									type="submit"
								>
									Login
								</Button>

								<Link to="/forgot" className="text-golden">
									Forgot your password ?
								</Link>
							</motion.form>
						</Form>
					) : (
						<Signup />
					)}
					<div className="max-w-[500px] text-center text-white flex flex-col gap-10">
						<div className="">
							Registering for this site allows you to access your order status
							and history. Just fill in the fields below, and we'll get a new
							account set up for you in no time. We will only ask you for
							information necessary to make the purchase process faster and
							easier.
						</div>

						<div
							onClick={() => setToggleAuth(!toggleAuth)}
							className="cursor-pointer select-none text-white bg-black py-2 px-4 rounded-md block w-fit mx-auto uppercase font-bold tracking-wider"
						>
							{toggleAuth ? "Signup" : "Login"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
