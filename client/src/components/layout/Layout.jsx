'use client'

import { usePathname } from 'next/navigation'
import Header from './Header/Header'
import CategorySidebar from './CategorySidebar/CategorySidebar'
import s from './Layout.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Layout = ({ children }) => {
	const pathname = usePathname()

	return (
		<div>
			{pathname === '/' || pathname.includes('/item') ? (
				<div>
					<Header />
					<div className='wrapper'>
						<div className={s.flex}>{children}</div>
					</div>
				</div>
			) : (
				<div>{children}</div>
			)}
		</div>
	)
}

export default Layout
