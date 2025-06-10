import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
    <div className={'relative h-28 text-white flex flex-col'}>
      <FlipCard
        className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#1AAD19] dark:bg-[#1AAD19] dark:border-gray-600'
        frontContent={
          <div className='h-full relative'>
            {/* 主标题 + 右上角小字 */}
            <div className='flex justify-between items-start'>
              <h2 className='font-[1000] text-3xl'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}
              </h2>
              <span className='bg-white text-[#1AAD19] text-2xl px-2 py-1  rounded ml-2'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_4', null, CONFIG)}
              </span>
            </div>
            <h3 className='pt-2'>
              {siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}
            </h3>
            {/* 微信公众号风格背景图 */}
            <div
              className='absolute left-0 top-0 w-full h-full opacity-20'
              style={{
                background: 'url(./wechatbg.png) center center no-repeat',
                backgroundSize: 'cover'
              }}></div>
          </div>
        }
        backContent={
          <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
            <div className='font-[1000] text-xl h-full flex flex-col justify-center'>
              {/* 新增标题5（与标题1同字号） */}
              <h2 className='text-3xl mb-2'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_5', null, CONFIG)}
              </h2>
              {/* 原标题3 + 右侧方形图片 */}
              <div className='flex items-center'>
                <div className='flex-1'>
                  {siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}
                </div>
                <img 
                  src="./wechat.png" 
                  alt="WeChat" 
                  className='w-12 h-12 ml-2 rounded-sm border border-white'
                />
              </div>
            </div>
          </Link>
        }
      />
    </div>
  )
}
