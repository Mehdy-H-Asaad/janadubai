import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useSearchParams } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { MainButton } from "@/components/MainButton";

import { useResetPasswordForm } from "../index";

export const ResetPassword = () => {
	const [searchParams, _] = useSearchParams();
	const token = searchParams.get("token");

	const { onSubmit, resetPasswordForm } = useResetPasswordForm(token);

	return (
		<div className="bg-primary-black text-white py-10">
			<PageBreadCrumb
				breadcrumbLink="/"
				breadcrumbLinkName="Home"
				breadcrumbPage="Reset password"
			/>
			<div className="container flex items-center justify-center gap-8 my-10">
				<Form {...resetPasswordForm}>
					<form
						className="flex w-1/2 flex-col md:flex-col gap-4 mb-20"
						onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
					>
						<FormField
							control={resetPasswordForm.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>New Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="bg-transparent border-[#fff3] rounded-none text-white placeholder:text-gray-400"
											type="text"
											placeholder="Enter new password..."
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<MainButton title="Submit" />
					</form>
				</Form>
			</div>
		</div>
	);
};
