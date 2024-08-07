import Image from 'next/image'
import s from './Header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { FaRegListAlt } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

const Header = () => {
	const PF = process.env.NEXT_PUBLIC_API_URL
	return (
		<header className={s.header}>
			<div className='wrapper'>
				<div className={s.container}>
					<div className={s.icon}>
						<RxHamburgerMenu color='#fff' fontSize={24} strokeWidth={0.75} />
					</div>

					<Link href={'/'}>
						<Image src={`${PF}logo/logo.svg`} width={240} height={40} alt='' />
					</Link>

					<div className={s.catalogue}>
						<HiOutlineSquares2X2 color='#fff' fontSize={24} strokeWidth={2} />{' '}
						Каталог
					</div>

					<div className={s.search}>
						<div className={s.input}>
							<CiSearch fontSize={20} strokeWidth={0.75} color='#555555' />
							<input type='text' placeholder='Я шукаю...' />
						</div>

						<button>Знайти</button>
					</div>

					<div className={s.icon}>
						<FaRegListAlt color='#fff' fontSize={24} />
					</div>
					<div className={s.icon}>
						<FaRegBell color='#fff' fontSize={24} />
					</div>
					<div className={s.icon}>
						<LuShoppingCart color='#fff' fontSize={24} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
