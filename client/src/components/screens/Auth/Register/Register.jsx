'use client'
import { useState } from 'react'
import s from './Register.module.css'
import Link from 'next/link'

const Register = () => {
	return (
		<div className={s.container}>
			<form className={s.form}>
				<div className={s.top}>
					<h2>Створити акаунт</h2>
				</div>
				<div className={s.main}>
					<label className={s.label} htmlFor='phone'>
						Телефон або ел. пошта
					</label>
					<input className={s.input} id='phone' type='text' />
					<button className={s.button} type='submit'>
						Продовжити
					</button>
					<div className={s.divider}>
						<span className={s.or}>або</span>
					</div>
					<Link href={'/phone'} className={s.link}>
						Вже маєте акаунт? Увійти
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Register
