'use client'
import Image from 'next/image'
import s from './Item.module.css'
import { FaRegHeart } from 'react-icons/fa'
import Link from 'next/link'

const Item = ({ item }) => {
	const PF = process.env.NEXT_PUBLIC_API_URL
	const itemData = encodeURIComponent(JSON.stringify(item))
	return (
		<Link href={`/item/${item._id}?data=${itemData}`} className={s.item}>
			<div className={s.heart}>
				<FaRegHeart color='#FFA900' strokeWidth={2} fontSize={24} />
			</div>
			<div className={s.main}>
				<Image
					className={s.img}
					src={`${PF}/img/${item.photo}`}
					width={190}
					height={140}
					alt=''
				/>
				<p className={s.title}>{item.title}</p>
				<span className={s.price}>{item.price}₴</span>
			</div>
		</Link>
	)
}

export default Item
