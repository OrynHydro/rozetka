'use client'
import Image from 'next/image'
import s from './Item.module.css'
import { IoMdHome } from 'react-icons/io'
import { BiChevronLeftCircle } from 'react-icons/bi'
import { BiChevronRightCircle } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import { RiScales3Line } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiTruck } from 'react-icons/fi'
import { CiShop } from 'react-icons/ci'
import { IoWalletOutline } from 'react-icons/io5'
import { GoShieldCheck } from 'react-icons/go'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loader from '@/components/ui/Loader/Loader'
import axios from 'axios'
import { categoryData } from '@/data/category.data'
import Link from 'next/link'

const Item = () => {
	const searchParams = useSearchParams()
	const data = searchParams.get('data')
	const [item, setItem] = useState(null)
	const pathname = usePathname()

	const fetchItem = async () => {
		try {
			const res = await axios.get(`/api/goods/${pathname.split('/')[2]}`)
			setItem(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (data) {
			setItem(JSON.parse(decodeURIComponent(data)))
		} else {
			fetchItem()
		}
	}, [data])

	if (!item) {
		return <Loader />
	}

	const PF = process.env.NEXT_PUBLIC_API_URL
	return (
		<div className={s.container}>
			<span className={s.breadcrumbs}>
				<Link href={'/'}>
					<IoMdHome className={s.img} /> /{' '}
				</Link>
				{categoryData.find(c => c.id === item.category).title}
			</span>
			<div className={s.menu}>
				<div className={`${s.item} ${s.active}`}>Усе про товар</div>
				<div className={s.item}>Характеристики</div>
				<div className={s.item}>Відгуки</div>
				<div className={s.item}>Поставити запитання</div>
			</div>
			<div className={s.content}>
				<div className={s.imgBlock}>
					<BiChevronLeftCircle fontSize={40} />
					<img src={`${PF}img/${item.photo}`} alt='' />
					<BiChevronRightCircle fontSize={40} />
				</div>
				<div className={s.textBlock}>
					<h1 className={s.title}>{item.title}</h1>
					<div className={s.data}>
						<div className={s.starRating}>
							{[1, 2, 3, 4, 5].map(value => (
								<span
									key={value}
									className={`${s.star} ${
										value <= item.rating ? s.active : ''
									}`}
									data-value={value}
								>
									&#9733;
								</span>
							))}
						</div>
						<span className={s.code}>Код: {item.code}</span>
					</div>
					<div className={s.block}>
						<div className={s.flex}>
							<div className={s.price}>
								<p
									className={
										item.availability
											? s.availability
											: `${s.availability} ${s.red}`
									}
								>
									{item.availability ? 'В наявності' : 'Немає в наявності'}
								</p>
								<h4 className={s.cost}>{item.price}₴</h4>
							</div>
							<button className={`${s.button} ${s.green}`}>
								<FiShoppingCart color='#fff' fontSize={24} />
								<p>Купити</p>
							</button>
							<button className={s.button}>
								<p>Купити в кредит</p>
							</button>
							<div className={s.icon}>
								<RiScales3Line fontSize={24} color='#a7a7a7' />
							</div>
							<div className={s.icon}>
								<FaRegHeart fontSize={24} color='#eca240' />
							</div>
						</div>
					</div>
					<div className={`${s.block} ${s.noP}`}>
						<div className={s.top}>
							<FaMapMarkerAlt fontSize={24} color='#9d9d9d' />
							<span className={s.order}>
								Доставка в <b>Дніпро</b>
							</span>
						</div>
						<div className={s.bottom}>
							<div className={s.orderBlock}>
								<div className={s.left}>
									<Image
										src={`${PF}logo/logoNoText.png`}
										width={24}
										height={24}
										alt=''
									/>
									<div className={s.info}>
										<p>Самовивіз з магазинів Rozetka</p>
										<span className={s.map}>Дивитись на мапі</span>
									</div>
								</div>
								<span className={s.middle}>Відправимо завтра</span>
								<span className={`${s.right} ${s.green}`}>Безкоштовно</span>
							</div>
							<div className={s.orderBlock}>
								<div className={s.left}>
									<FiTruck fontSize={24} color='#787878' />
									<div className={s.info}>
										<p>Доставка кур'єром Rozetka, Meest ПОШТА</p>
									</div>
								</div>
								<span className={s.middle}>Відправимо завтра</span>
								<span className={s.right}>110₴ - 119₴</span>
							</div>
							<div className={s.orderBlock}>
								<div className={s.left}>
									<CiShop fontSize={24} color='#787878' strokeWidth={1} />
									<div className={s.info}>
										<p>Самовивіз з відділень поштових операторів</p>
										<span className={s.map}>Дивитись на мапі</span>
									</div>
								</div>
								<span className={s.middle}>Відправимо завтра</span>
								<span className={s.right}>39₴ - 99₴</span>
							</div>
						</div>
					</div>
					<div className={`${s.block} ${s.noP}`}>
						<div className={s.paymentInfo}>
							<IoWalletOutline fontSize={24} color='#221f1' />
							<span>
								<b>Оплата.</b> Оплата під час отримання товару, Оплата карткою у
								відділенні, Картою онлайн, Google Pay, -5% знижки в разі оплати
								від 500 грн карткою Visa, Безготівковими для юридичних осіб,
								Оплатити онлайн соціальною картою "Пакунок малюка",
								Безготівковий для фізичних осіб, PrivatPay, Apple Pay, Visa,
								Mastercard
							</span>
						</div>
						<hr />
						<div className={s.paymentInfo}>
							<GoShieldCheck fontSize={24} color='#221f1f' />
							<span>
								<b>Гарантія.</b> 24 місяці офіційної гарантії від виробника
								Обмін/повернення товару впродовж 14 днів
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
