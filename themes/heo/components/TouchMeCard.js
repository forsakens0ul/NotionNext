import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
 const [isHovered, setIsHovered] = useState(false);
  const isSocialCardEnabled = JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG));

  if (!isSocialCardEnabled) return <></>;
  return (
    <div className={'relative h-28 text-white flex flex-col'}>
      <FlipCard
        className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#1AAD19] dark:bg-[#1AAD19] dark:border-gray-600'
        frontContent={
          <div className='h-full relative'>
            {/* 主标题 + 右上角小字 */}
            <div className='flex justify-between items-center'>
              <h2 className='font-[1000] text-3xl'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_1', CONFIG)}
              </h2>
              <span className='bg-white text-[#1AAD19] text-2xl px-2 py-1 rounded ml-2'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_4', CONFIG)}
              </span>
            </div>
            <h3 className='pt-2 flex items-center'>
              {siteConfig('HEO_SOCIAL_CARD_TITLE_2', CONFIG)}
              
            </h3>
            {/* 背景图 - 只显示右 1/3 */}
            <div
              className={`absolute left-0 top-0 w-full h-full ${
                isHovered ? 'slide-down-animation' : ''
              }`}
              style={{
                backgroundImage:
                  'url(https://raw.githubusercontent.com/forsakens0ul/image/refs/heads/main/wechatbg.png)',
                backgroundPosition: '-200% center',
                backgroundSize: '300% 100%',
                backgroundRepeat: 'no-repeat',
                opacity: isHovered ? 0 : 0.2,
                transition: 'opacity 0.6s ease-out'
              }}
            ></div>
          </div>
        }
        backContent= {
          <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
            <div className='h-full flex items-center'>
              {/* 左侧文字部分 */}
              <div className='mr-4'>
                <h2 className='text-3xl mb-2 font-bold'>
                  {siteConfig('HEO_SOCIAL_CARD_TITLE_5', CONFIG)}
                </h2>
                <div className='flex items-center'>
                  <span>{siteConfig('HEO_SOCIAL_CARD_TITLE_3',CONFIG)}</span>
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
