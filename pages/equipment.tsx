import Head from 'next/head'
import ProPlayerCard from '@/components/EquipmentCard'
export interface Device {
  name: string
  category: string
  cover: string
  description: string
  link?: string
}

interface Props {
  devices: Device[]
}

export async function getStaticProps() {
  const notionTableId = '20d3a17d-9c21-80bf-a88b-caf5d21c739b'
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${notionTableId}`)
  const raw = await res.json()
  console.log('第一条记录的 raw 数据：', JSON.stringify(raw[0], null, 2))

  const devices: Device[] = raw.map((item: any) => {
    // cover 字段解析，兼容 external 和 file 类型
    let cover = ''
    const cov = item.Cover?.[0]
    if (cov) {
      if (cov.external?.url) cover = cov.external.url
      else if (cov.file?.url) cover = cov.file.url
    }
    // 描述等字段按标准方式解析
    return {
      name: item.Name?.[0]?.plain_text || '',
      category: item.Category?.[0]?.name || '',
      cover: cover || '/default-device.jpg', // 可以设定一个默认图
      description: item.Description?.[0]?.plain_text || '',
      link: item.Link?.[0]?.plain_text || ''
    }
  })

  return { props: { devices }, revalidate: 3600 }
}


export default function EquipmentCard({ device }: { device: Device }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4">
      <img
        src={device.cover}
        alt={device.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-bold mb-1">{device.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {device.description}
      </p>
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

