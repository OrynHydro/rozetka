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

const Item = () => {
	return (
		<div className={s.container}>
			<span className={s.breadcrumbs}>
				<IoMdHome className={s.img} /> / <span>Побутова техніка, інтер'єр</span>{' '}
				/ <span>Кліматична техніка</span> / <span>Вентилятори</span> /
				<span>Вентилятори Saturn</span>
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
					<Image
						src={'/images/453099816.webp'}
						alt=''
						width={410}
						height={630}
					/>
					<BiChevronRightCircle fontSize={40} />
				</div>
				<div className={s.textBlock}>
					<h1 className={s.title}>Вентилятор настільний SATURN-ST-FN8288</h1>
					<div className={s.data}>
						<div className={s.starRating}>
							<span className={s.star} data-value='1'>
								&#9733;
							</span>
							<span className={s.star} data-value='2'>
								&#9733;
							</span>
							<span className={s.star} data-value='3'>
								&#9733;
							</span>
							<span className={s.star} data-value='4'>
								&#9733;
							</span>
							<span className={s.star} data-value='5'>
								&#9733;
							</span>
						</div>
						<span className={s.code}>Код: 441431840</span>
					</div>
					<div className={s.block}>
						<div className={s.flex}>
							<div className={s.price}>
								<p className={s.availability}>Є в наявності</p>
								<h4 className={s.cost}>899₴</h4>
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
										src={'/logo/logoNoText.png'}
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
