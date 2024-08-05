'use client'

import s from './Email.module.css'
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

const Email = () => {
	const [isHashed, setIsHashed] = useState(true)
	return (
		<div className={s.container}>
			<form className={s.form}>
				<div className={s.top}>
					<h2>Вхід</h2>
				</div>
				<div className={s.main}>
					<label className={s.label} htmlFor='email'>
						Ел. пошта
					</label>
					<input className={s.input} id='email' type='email' />
					<label className={`${s.label} ${s.mt}`} htmlFor='password'>
						Пароль
					</label>
					<div className={s.inputBlock}>
						<input
							className={s.input}
							id='password'
							type={isHashed ? 'password' : 'text'}
						/>
						{isHashed ? (
							<FaEyeSlash
								onClick={() => setIsHashed(!isHashed)}
								className={s.eye}
								fontSize={24}
							/>
						) : (
							<FaEye
								onClick={() => setIsHashed(!isHashed)}
								className={s.eye}
								fontSize={24}
							/>
						)}
					</div>

					<button className={s.button} type='submit'>
						Продовжити
					</button>
					<div className={s.divider}>
						<span className={s.or}>або</span>
					</div>
					<Link href={'/phone'} className={s.link}>
						Увійти через телефон
					</Link>
					<Link href={'/register'} className={s.link}>
						Немає акаунту? Зареєструватися
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Email
