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
                    <div className="relative bg-[#1AAD19] rounded-2xl text-white p-6 w-full h-32 overflow-hidden">
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
                        <div className="absolute bottom-2 right-2 opacity-30 blur-sm">
                            <img
                                src="https://raw.githubusercontent.com/forsakens0ul/image/refs/heads/main/wechatbg.png" // 你需要准备这张图
                                alt="wechat background"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                }

                backContent={
                    <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                        <div className='h-full flex items-center'>
                            {/* 左侧文字部分 */}
                            <div className='mr-4'>
                                <h2 className='text-3xl mb-2 font-bold'>
                                    {siteConfig('HEO_SOCIAL_CARD_TITLE_5', CONFIG)}
                                </h2>
                                <div className='flex items-center'>
                                    <span>{siteConfig('HEO_SOCIAL_CARD_TITLE_3', CONFIG)}</span>
                                </div>
                            </div>
                            {/* 右侧二维码部分 */}
                            <img
                                src="https://raw.githubusercontent.com/forsakens0ul/image/refs/heads/main/wechatQR.jpg"
                                alt="QR Code"
                                className='w-16 h-16 rounded'
                            />
                        </div>
                    </Link>
                }
            />
        </div>
    )
}
