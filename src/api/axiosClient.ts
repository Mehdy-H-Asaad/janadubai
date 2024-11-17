import axios from "axios";

export const axiosPublic = axios.create({
	baseURL: "https://web-mown68cp2cv9.up-de-fra1-k8s-1.apps.run-on-seenode.com",
	headers: {
		"Content-Type": "application/json",
	},
});

export const axiosClient = axios.create({
	baseURL: "https://web-mown68cp2cv9.up-de-fra1-k8s-1.apps.run-on-seenode.com",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);
