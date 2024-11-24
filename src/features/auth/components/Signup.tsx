import { Button } from "@/components/ui/button";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useSignUpForm } from "../index";

export const Signup = () => {
	const { signupForm, onSubmit, isSigning } = useSignUpForm();
	return (
		<div className="min-h-[304px] ">
			<Form {...signupForm}>
				<motion.form
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					onSubmit={signupForm.handleSubmit(onSubmit)}
					className="space-y-8 flex flex-col w-full sm:w-fit"
				>
					{/* Email Field */}
					<FormField
						control={signupForm.control}
						name="username"
						render={({ field }) => (
							<FormItem className="w-full sm:w-96">
								<FormLabel className="text-white">Email</FormLabel>
								<FormControl>
									<Input
										className=" bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
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
						control={signupForm.control}
						name="password"
						render={({ field }) => (
							<FormItem className="w-full sm:w-96">
								<FormLabel className="text-white">Password</FormLabel>
								<FormControl>
									<Input
										className=" bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
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
						disabled={isSigning}
						className="capitalize w-full bg-golden duration-200 font-[600] hover:bg-white hover:text-black"
						type="submit"
					>
						{isSigning ? "Registering..." : "Signup"}
					</Button>
				</motion.form>
			</Form>
		</div>
	);
};
