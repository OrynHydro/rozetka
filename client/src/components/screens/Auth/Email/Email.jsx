'use client'

import s from './Email.module.css'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Email = () => {
	const [isHashed, setIsHashed] = useState(true)
	const [inputValue, setInputValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [errors, setErrors] = useState({ input: '', password: '' })
	const [serverError, setServerError] = useState('')

	const router = useRouter()

	const handleSubmit = async e => {
		e.preventDefault()

		const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
		const newErrors = { input: '', password: '' }

		if (isEmailValid === false) {
			newErrors.input = 'Введіть правильну ел. пошту'
		}

		if (passwordValue.length < 6) {
			newErrors.password = 'Пароль повинен містити не менше 6 символів'
		}

		setErrors(newErrors)

		if (!newErrors.input && !newErrors.password) {
			setServerError('')

			try {
				await axios
					.post('/api/users/login', {
						email: inputValue,
						password: passwordValue,
					})
					.then(() => router.push('/'))
			} catch (err) {
				console.error(err)
				setServerError('Помилка на сервері, спробуйте пізніше')
			}
		}
	}
	return (
		<div className={s.container}>
			<form className={s.form} onSubmit={handleSubmit}>
				<div className={s.top}>
					<h2>Вхід</h2>
				</div>
				<div className={s.main}>
					<label className={s.label} htmlFor='email'>
						Ел. пошта
					</label>
					<input
						className={s.input}
						id='email'
						type='email'
						onChange={e => setInputValue(e.target.value)}
					/>
					{errors.input && <div className={s.error}>{errors.input}</div>}
					<label className={`${s.label} ${s.mt}`} htmlFor='password'>
						Пароль
					</label>
					<div className={s.inputBlock}>
						<input
							className={s.input}
							id='password'
							type={isHashed ? 'password' : 'text'}
							onChange={e => setPasswordValue(e.target.value)}
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
					{errors.password && <div className={s.error}>{errors.password}</div>}
					{serverError && <div className={s.error}>{serverError}</div>}
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
