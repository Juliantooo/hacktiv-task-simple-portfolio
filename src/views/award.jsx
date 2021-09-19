import { bioData } from "../data"

export const Award = ({refName}) => {
    return (
        <div className="w-full bg-gray-600 h-full p-20 relative" ref={refName}>
            <div className="text-lg text-gray-200 flex items-center h-3/4">
            {bioData.award.description}
            </div>
            <div className="space-y-1 w-10/12 absolute bottom-20 text-gray-200">
                <p className="text-5xl font-medium mb-2">{bioData.award.title}</p>
            </div>
        </div>
    )
}
