import { useGetCategories } from "@/features/category";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useSearchProducts } from "../index";

export const useSearchFilter = () => {
	const [searchInputValue, setSearchInputValue] = useState<string>("");
	const [categoryId, setCateogryId] = useState<string>("");
	const [deboundedValue, setDebouncedValue] = useState<string>("");
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(e.target.value);
		setShowResults(true);
	};

	const [showResults, setShowResults] = useState<boolean>(false);
	const searchRef = useRef<HTMLDivElement>(null);

	const handleCategoryChange = (selectedCategory: string) => {
		setCateogryId(selectedCategory);
		setShowResults(true);
	};

	const { categories } = useGetCategories({ type: "products" });

	useEffect(() => {
		const debouneTime = setTimeout(() => {
			setDebouncedValue(searchInputValue);
		}, 500);

		return () => clearTimeout(debouneTime);
	}, [searchInputValue]);

	const { filteredProducts, isLoadingfilteredProducts } = useSearchProducts({
		name: deboundedValue,
		categoryId: Number(categoryId),
	});

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event?.target as Node)
			) {
				setShowResults(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return {
		filteredProducts,
		isLoadingfilteredProducts,
		handleCategoryChange,
		handleInputChange,
		searchRef,
		searchInputValue,
		categories,
		showResults,
	};
};
