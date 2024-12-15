"use client";

const UserDetail = ({ field, value, action }) => {
    const handleClick = async () => {
        try {
            if (action === "copy") {
                await navigator.clipboard.writeText(value);  // Await the promise
                alert(`${field} copied to clipboard!`);
            } else if (action === "mailto") {
                window.location.href = `mailto:${value}`;
            } else if (action === "link") {
                window.open(value, "_blank");
            } else if (action === "tel") {
                window.location.href = `tel:${value}`;
            }
        } catch (error) {
            alert("Failed to copy text to clipboard.");
            console.error(error);
        }
    };
    return (
        <li
            className={`flex items-center ${
                action ? "cursor-pointer hover:text-theme" : ""
            }`}
            onClick={action ? handleClick : undefined}
        >
            <span className="flex-[0_0_6rem]">{field}</span>
            <span className="flex-[0_0_2rem]">:</span>
            <span className="text-black dark:text-white">{value}</span>
        </li>
    );
};

export default UserDetail;
