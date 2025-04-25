"use client";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import type { buttonVariants } from "@/components/ui";
import type { VariantProps } from "class-variance-authority";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
	buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
	// buttonSize?: VariantProps<typeof buttonVariants>["size"];
}

export function ThemeToggle({ buttonVariant = "outline" }: ThemeToggleProps) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant={buttonVariant}
					size="icon"
				>
					<SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
