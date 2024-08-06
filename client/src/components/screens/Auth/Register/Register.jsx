'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Link from 'next/link'
import s from './Register.module.css' // Импортируйте ваши стили

const Register = () => {
	const [isHashed, setIsHashed] = useState(true)
	const [inputValue, setInputValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [errors, setErrors] = useState({ input: '', password: '' })
	const [serverError, setServerError] = useState('')

	const validateInput = input => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const phonePattern = /^\+?[1-9]\d{1,14}$/

		if (emailPattern.test(input)) {
			return 'email'
		} else if (phonePattern.test(input)) {
			return 'phone'
		} else {
			return 'invalid'
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const inputType = validateInput(inputValue)
		const newErrors = { input: '', password: '' }

		if (inputType === 'invalid') {
			newErrors.input = 'Введіть правильний номер телефону або ел. пошту'
		}

		if (passwordValue.length < 6) {
			newErrors.password = 'Пароль повинен містити не менше 6 символів'
		}

		setErrors(newErrors)

		if (!newErrors.input && !newErrors.password) {
			setServerError('')

			try {
				const response = await axios.post('/api/users/register', {
					phone: inputType === 'phone' ? inputValue : null,
					email: inputType === 'email' ? inputValue : null,
					password: passwordValue,
				})

				console.log(response.data)
			} catch (err) {
				console.error(err)
				setServerError('Помилка на сервері, спробуйте пізніше')
			}
		}
	}

	const cookie = document.cookie
	console.log(cookie)

	return (
		<div className={s.container}>
			<form className={s.form} onSubmit={handleSubmit}>
				<div className={s.top}>
					<h2>Створити акаунт</h2>
				</div>
				<div>fergtyhe</div>
				<div className={s.main}>
					<label className={s.label} htmlFor='phone'>
						Телефон або ел. пошта
					</label>
					<input
						className={s.input}
						id='phone'
						type='text'
						value={inputValue}
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
					<Link href={'/phone'} className={s.link}>
						Вже маєте акаунт? Увійти
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Register
