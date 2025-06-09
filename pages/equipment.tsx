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
  const notionTableId = '20d3a17d9c21805e85ef000c5e06ae40'
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/${notionTableId}`)
  const raw = await res.json()

  const devices = raw.map((item: any) => ({
    name: item.Name[0]?.plain_text || '',
    category: item.Category[0]?.name || '',
    cover: item.Cover[0]?.[0]?.url || '',
    description: item.Description[0]?.plain_text || '',
    link: item.Link ? item.Link[0].plain_text : ''
  }))

  return { props: { devices }, revalidate: 3600 }
}

export default function EquipmentPage({ devices }: { devices: Device[] }) {
  const categories = ['生产力', '家庭娱乐', '出行', '健康生活']

  return (
    <>
      <Head><title>我的设备 & 工具</title></Head>
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">🧩 我的设备 & 工具清单</h1>
        {categories.map(cat => {
          const list = devices.filter(d => d.category === cat)
          if (list.length === 0) return null
          return (
            <section key={cat} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {list.map((item, idx) => (
                  <ProPlayerCard key={idx} device={item} />
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </>
  )
}
