import React from "react";

interface SectionHeaderProps {
	eyebrow: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	eyebrow,
	title,
	description,
	align = "left",
	className = "",
}) => {
	const isCenter = align === "center";

	return (
		<div
			className={`reveal ${className}`}
			style={{ textAlign: isCenter ? "center" : "left" }}
		>
			<span className="section-eyebrow">{eyebrow}</span>
			<h2 className="section-title">{title}</h2>
			{description && (
				<p
					className="section-desc"
					style={{ marginInline: isCenter ? "auto" : undefined }}
				>
					{description}
				</p>
			)}
		</div>
	);
};

export default SectionHeader;
