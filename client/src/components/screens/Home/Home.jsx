'use client'
import CategorySidebar from '@/components/layout/CategorySidebar/CategorySidebar'
import Item from '@/components/ui/Item/Item'
import s from './Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import Loader from '@/components/ui/Loader/Loader'
import { categoryData } from '@/data/category.data'

const HomePage = () => {
	const pathname = usePathname()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()
	const [goods, setGoods] = useState([])
	const [goodsLoading, setGoodsLoading] = useState(true)
	const [activeCategory, setActiveCategory] = useState(1)

	const fetchUser = async () => {
		try {
			const res = await axios.get('/api/users')
			setUser(res.data)
		} catch (err) {
			router.push('/phone')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (!user && isLoading) {
			fetchUser()
		}
	}, [user, isLoading])

	useEffect(() => {
		const fetchAllGoods = async () => {
			try {
				const res = await axios.get('/api/goods')
				setGoods(res.data)
				setGoodsLoading(false)
			} catch (err) {
				console.log(err)
				setGoodsLoading(false)
			}
		}
		if (user) {
			fetchAllGoods()
		}
	}, [user])

	const fetchGoodsByCategory = async category => {
		setActiveCategory(category)
		setGoodsLoading(true)
		try {
			if (category === 1) {
				const res = await axios.get('/api/goods')
				setGoods(res.data)
				return
			}
			const res = await axios.get(`/api/goods/category/${category}`)
			setGoods(res.data)
		} catch (err) {
			console.log(err)
		} finally {
			setGoodsLoading(false)
		}
	}

	if (
		isLoading ||
		(!user &&
			pathname !== '/phone' &&
			pathname !== '/email' &&
			pathname !== '/register')
	) {
		return <Loader />
	}

	return (
		<div className={s.page}>
			<div className={s.container}>
				<CategorySidebar fetchFunc={fetchGoodsByCategory} />
				<div className={s.main}>
					{goodsLoading ? (
						<div className={s.loader}></div>
					) : goods.length === 0 ? (
						<>
							<div className={s.title}>
								{activeCategory === 1
									? 'Всі товари'
									: categoryData.find(c => c.id === activeCategory).title}
							</div>
							<div className={s.title}>У даній категорії товарів немає</div>
						</>
					) : (
						<>
							<div className={s.title}>
								{activeCategory === 1
									? 'Всі товари'
									: categoryData.find(c => c.id === activeCategory).title}
							</div>
							<div className={s.items}>
								{goods.map((good, index) => (
									<Item key={index} item={good} />
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default HomePage
