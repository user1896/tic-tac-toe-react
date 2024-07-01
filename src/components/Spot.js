export default function Spot({id ,mark}){
	function handleClick(){}

	return (
		<div
			onClick={handleClick}
			key={id}
			className="text-6xl font-semibold border-solid border-2 p-5 cursor-pointer"
		>
			{mark}
		</div>
	)
}