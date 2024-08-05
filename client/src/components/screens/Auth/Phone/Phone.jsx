'use client'
import { useState } from 'react'
import s from './Phone.module.css'
import Link from 'next/link'

const Phone = () => {
	const [value, setValue] = useState('+380')

	const handleChange = e => {
		const newValue = e.target.value
		if (/^\+380\d*$/.test(newValue)) {
			setValue(newValue)
		}
	}
	return (
		<div className={s.container}>
			<form className={s.form}>
				<div className={s.top}>
					<h2>Вхід</h2>
				</div>
				<div className={s.main}>
					<label className={s.label} htmlFor='phone'>
						Телефон
					</label>
					<input
						className={s.input}
						id='phone'
						type='tel'
						value={value}
						onChange={handleChange}
						pattern='\+380\d*'
						required
					/>
					<button className={s.button} type='submit'>
						Продовжити
					</button>
					<div className={s.divider}>
						<span className={s.or}>або</span>
					</div>
					<Link href={'/email'} className={s.link}>
						Увійти через пошту
					</Link>
					<Link href={'/register'} className={s.link}>
						Немає акаунту? Зареєструватися
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Phone
