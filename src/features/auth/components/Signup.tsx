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
import { useSignUpForm } from "../hooks/useSignUpForm";
import { motion } from "framer-motion";

export const Signup = () => {
	const { form, onSubmit } = useSignUpForm();
	return (
		<Form {...form}>
			<motion.form
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 flex flex-col w-full sm:w-fit"
			>
				{/* Email Field */}
				<FormField
					control={form.control}
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
					control={form.control}
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
					className="capitalize bg-golden hover:bg-golden w-full"
					type="submit"
				>
					Signup
				</Button>
			</motion.form>
		</Form>
	);
};
