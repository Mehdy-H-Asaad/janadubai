import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type TReactQueryProvider = {
	children: ReactNode;
};

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: TReactQueryProvider) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
