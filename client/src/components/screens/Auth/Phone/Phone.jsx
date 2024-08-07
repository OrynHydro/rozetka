'use client'
import { useState } from 'react'
import s from './Phone.module.css'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Phone = () => {
	const [isHashed, setIsHashed] = useState(true)

	const [value, setValue] = useState('+380')

	const handlePhoneChange = e => {
		const newValue = e.target.value
		const phonePattern = /^\+380\d*$/

		if (phonePattern.test(newValue)) {
			setValue(newValue)
		}
	}
	
	const router = useRouter()

	const [passwordValue, setPasswordValue] = useState('')
	const [errors, setErrors] = useState({ input: '', password: '' })
	const [serverError, setServerError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		const isPhoneValid = /^\+380\d{9}$/.test(value)
		const newErrors = { input: '', password: '' }

		if (isPhoneValid === false) {
			newErrors.input = 'Введіть правильний номер телефону'
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
						phone: value,
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
					<label className={s.label} htmlFor='phone'>
						Телефон
					</label>
					<input
						className={s.input}
						id='phone'
						type='tel'
						value={value}
						onChange={handlePhoneChange}
						pattern='\+380\d*'
						required
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
							value={passwordValue}
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
