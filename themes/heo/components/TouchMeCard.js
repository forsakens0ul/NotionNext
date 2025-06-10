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
                    <div >
                        {/* 主标题和右上角标签 */}
                        <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-extrabold leading-none">
                                {siteConfig('HEO_SOCIAL_CARD_TITLE_1', CONFIG)}
                            </h2>
                            <span className="bg-white text-[#1AAD19] text-sm font-bold px-2 py-1 rounded ml-2">
                                {siteConfig('HEO_SOCIAL_CARD_TITLE_4', CONFIG)}
                            </span>
                        </div>
                        {/* 副标题 */}
                        <h3 className="pt-2 text-lg font-medium">
                            {siteConfig('HEO_SOCIAL_CARD_TITLE_2', CONFIG)}
                        </h3>
                        {/* 微信公众号风格背景图 */}
                        
                         <div className="w-20 h-20 object-contain opacity-20">
                          <img
                            src="https://raw.githubusercontent.com/forsakens0ul/image/refs/heads/main/wechatbg.png"
                            alt="wechat background"
                            className="w-24 h-24 object-contain max-w-[50%]"
                          />
                        </div>
                    </div>
                }

                backContent={
                                       <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                      <div className='h-full w-full flex items-center justify-between px-4 py-2'>
                        {/* 左侧：文字区域 */}
                        <div>
                          <h2 className='text-2xl font-bold mb-1'>
                            {siteConfig('HEO_SOCIAL_CARD_TITLE_5', CONFIG)}
                          </h2>
                          <p className='text-base'>
                            {siteConfig('HEO_SOCIAL_CARD_TITLE_3', CONFIG)}
                          </p>
                        </div>
                    
                        {/* 右侧：二维码 */}
                        <img
                          src="https://raw.githubusercontent.com/forsakens0ul/image/refs/heads/main/wechatQR.jpg"
                          alt="QR Code"
                          className='w-16 h-16 rounded object-cover'
                        />
                      </div>
                    </Link>
                }
            />
        </div>
    )
}
