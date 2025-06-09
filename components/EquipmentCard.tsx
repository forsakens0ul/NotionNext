export interface Device {
  name: string
  category: string
  cover: string
  description: string
  link?: string
}

interface Props {
  device: Device
}

export default function EquipmentCard({ device }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4">
      {device.cover && (
        <img src={device.cover} alt={device.name} className="w-full h-40 object-cover rounded-lg mb-3" />
      )}
      <h3 className="text-lg font-bold mb-1">{device.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{device.description}</p>
      {device.link && (
        <a
          href={device.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          查看详情 →
        </a>
      )}
    </div>
  )
}
