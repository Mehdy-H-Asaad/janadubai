import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useForgotPasswordForm } from "../index";

export const ForgotPassword = () => {
	const { form, onSubmit } = useForgotPasswordForm();

	return (
		<div className="bg-[#1a1a1a] py-10">
			<PageBreadCrumb
				breadcrumbLink="/"
				breadcrumbLinkName="Home"
				breadcrumbPage="Forgot Password"
			/>
			<div className="container flex items-center justify-center gap-8 my-10 ">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex w-1/2 flex-col md:flex-col gap-4 mb-20"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="w-full">
									<Label className="text-white text-sm">
										Please enter your email address to reset your password.
									</Label>
									<FormControl className="">
										<Input
											className="bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
											type="text"
											placeholder="you@example.com"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							className="capitalize bg-golden hover:bg-golden w-fit"
							type="submit"
						>
							SUBMIT
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
