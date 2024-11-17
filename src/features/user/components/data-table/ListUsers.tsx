import { Skeleton } from "@/components/ui/skeleton";
import { useGetUsers } from "../../index";
import { ColumnsUser } from "../../index";
import { DataTableUser } from "../../index";
import MainTitle from "@/components/MainTitle";

export const ListUsers = () => {
	const { isLoadingUsers, users } = useGetUsers();

	return (
		<div className="container mx-auto py-10">
			<MainTitle heading="List of your users" subHeading="Users" />
			{isLoadingUsers ? (
				<div className="flex flex-col gap-10 justify-center mt-10">
					<div className="flex items-center justify-between gap-10">
						<Skeleton className="w-60 h-6" />
						<Skeleton className="w-40 h-6" />
					</div>
					{Array.from({ length: 10 }).map(_ => (
						<div className="flex flex-col gap-5">
							<Skeleton className="w-600 h-3" />
							<Skeleton className="w-40 h-3" />
						</div>
					))}
				</div>
			) : (
				<DataTableUser columns={ColumnsUser} data={users || []} />
			)}
		</div>
	);
};
