import React from "react";
import Image from "next/image";

interface UserCardProps {
	fName: string;
	lName: string;
	institute: string;
	role: string;
	imgSrc: string;
}
const UserCard = ({ fName, lName, institute, role, imgSrc }: UserCardProps) => {
	return (
		<div className="mx-3 my-3 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-800 dark:border-white-700">
			<div className="flex flex-col items-center pb-20 px-4 pt-4">
				<Image
					className="mb-3 w-24 h-24 rounded-full shadow-lg"
					src={imgSrc}
					alt="AVATAR"
					width={100}
					height={100}
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-Black">
					{fName} {lName}
				</h5>
				<span className="text-sm text-gray-500 dark:text-Black-400">
					{role}
				</span>
				<div className="flex mt-4 space-x-3 lg:mt-6">
					<p className="text-Black text-center">{institute}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
