// pages/equipment.tsx

import Head from 'next/head'
import { Client } from '@notionhq/client'
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

// 初始化 Notion 客户端
const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function getStaticProps() {
  const databaseId = process.env.NOTION_DATABASE_ID as string
  const res = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
  })

  const devices: Device[] = res.results.map((item: any) => {
    const props = item.properties
    const coverFile = props.Cover?.files?.[0]
    const coverUrl =
      coverFile?.file?.url || coverFile?.external?.url || ''

    return {
      name: props.Name?.title?.[0]?.plain_text || '',
      category: props.Category?.select?.name || '',
      cover: coverUrl,
      description: props.Description?.rich_text?.[0]?.plain_text || '',
      link: props.Link?.url || '',
    }
  })

  return {
    props: { devices },
    revalidate: 3600,
  }
}

export default function EquipmentPage({ devices }: Props) {
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
