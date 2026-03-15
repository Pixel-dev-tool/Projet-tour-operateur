

type Props = {
    guide: {
    id: number
    name: string
    role: string
    image: string}
}


export default function GuideProfileCard({ guide }: Props) {
    return (
        <div className={`${guide.id % 2 === 0 ? 'self-end' : 'self-start'}`}>
            <img
                src={guide.image}
                alt={guide.name}
                className="w-52 h-54 object-cover rounded"  
            />
            <h3 className="mt-3 text-lg font-semibold">{guide.name}</h3>
            <p className="text-gray-600 text-sm">{guide.role}</p>
        </div>
    )
}

