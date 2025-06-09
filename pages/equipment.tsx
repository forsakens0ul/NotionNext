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
