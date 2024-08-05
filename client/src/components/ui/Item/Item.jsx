import Image from 'next/image'
import s from './Item.module.css'
import { FaRegHeart } from 'react-icons/fa'
import Link from 'next/link'

const Item = () => {
	return (
		<Link href={'/item/228'} className={s.item}>
			<div className={s.heart}>
				<FaRegHeart color='#FFA900' strokeWidth={2} fontSize={24} />
			</div>
			<div className={s.main}>
				<Image
					className={s.img}
					src={'/images/410768842.webp'}
					width={140}
					height={105}
					alt=''
				/>
				<p className={s.title}>Ноутбук ASUS TUF Gaming A15 FA506NC-</p>
			</div>
			<span className={s.price}>36 999₴</span>
		</Link>
	)
}

export default Item
