export const RevenueCard = ({
    title,
    orderCount,
    amount
})=>{
    return <div className="bg-white rounded-[8px] shadow-md p-3 m-3">
        <div className="text-md text-gray-800 flex p-2">
            <div>
                <h5>{title}</h5>
            </div>
            <div className="flex justify-center flex-col ml-21 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />        
                </svg>
            </div>

        </div>
        <div className="flex justify-between p-2 items-center">
            <div className="font-semibold text-2xl ">
                ₹{amount}        
            </div>
            {orderCount ? <div className="flex cursor-pointer underline items-center">
                    <div className="text-blue-700 font-semibold text-md">
                        {orderCount} Orders
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="stroke-blue-700" className="size-5 stroke-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div> : null}
        </div>
    </div>
}