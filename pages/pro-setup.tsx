import dynamic from 'next/dynamic'
import Head from 'next/head'
import players from '@/data/players'
import ProPlayerCard from '@/components/ProPlayerCard'

export default function ProSetupPage() {
  return (
    <>
      <Head>
        <title>职业选手设备展示</title>
      </Head>
      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">🎮 职业选手设备展示</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <ProPlayerCard key={index} player={player} />
          ))}
        </div>
      </main>
    </>
  )
}
