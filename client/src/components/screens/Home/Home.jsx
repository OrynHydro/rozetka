'use client'
import CategorySidebar from '@/components/layout/CategorySidebar/CategorySidebar'
import Item from '@/components/ui/Item/Item'
import s from './Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import Loader from '@/components/ui/Loader/Loader'

const HomePage = () => {
	const pathname = usePathname()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()

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
			<Item />
		</div>
	)
}

export default HomePage
