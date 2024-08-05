import { CgMenuGridO } from 'react-icons/cg'
import { IoLaptopOutline } from 'react-icons/io5'
import { BsPhone } from 'react-icons/bs'
import { GiWashingMachine } from 'react-icons/gi'
import { LuShirt } from 'react-icons/lu'
import { LiaCocktailSolid } from 'react-icons/lia'
import { LuArmchair } from 'react-icons/lu'
import { GiDelicatePerfume } from 'react-icons/gi'
import { GoPaperclip } from 'react-icons/go'
import { RiBearSmileLine } from 'react-icons/ri'
import { MdOutlineSportsVolleyball } from 'react-icons/md'
import { FaTools } from 'react-icons/fa'
import { LiaBathSolid } from 'react-icons/lia'
import { GiGardeningShears } from 'react-icons/gi'
import { ImBarcode } from 'react-icons/im'
import { CiGift } from 'react-icons/ci'

export const categoryData = [
	{
		id: 1,
		title: 'Всі товари',
		icon: <CgMenuGridO color='#4c6e91' fontSize={24} />,
	},
	{
		id: 2,
		title: "Ноутбуки, планшети та комп'ютерна периферія",
		icon: <IoLaptopOutline color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 3,
		title: 'Смартфони, ТВ і електроніка',
		icon: <BsPhone color='#ADB8C8' fontSize={24} strokeWidth={0.5} />,
	},
	{
		id: 4,
		title: 'Побутова техніка',
		icon: <GiWashingMachine color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 5,
		title: 'Одяг і взуття',
		icon: <LuShirt color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 6,
		title: 'Напої і продукти',
		icon: <LiaCocktailSolid color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 7,
		title: 'Товари для дому',
		icon: <LuArmchair color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 8,
		title: "Краса та здоров'я",
		icon: <GiDelicatePerfume color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 9,
		title: 'Офіс, школа, книги',
		icon: <GoPaperclip color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 10,
		title: 'Товари для дітей',
		icon: <RiBearSmileLine color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 11,
		title: 'Спорт і активний відпочинок',
		icon: <MdOutlineSportsVolleyball color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 12,
		title: 'Інструменти та автотовари',
		icon: <FaTools color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 13,
		title: 'Сантехніка та ремонт',
		icon: <LiaBathSolid color='#ADB8C8' fontSize={24} strokeWidth={1} />,
	},
	{
		id: 14,
		title: 'Дача, сад, город',
		icon: <GiGardeningShears color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 15,
		title: 'Товари для бізнесу',
		icon: <ImBarcode color='#ADB8C8' fontSize={24} />,
	},
	{
		id: 16,
		title: 'Товари для свята',
		icon: <CiGift color='#ADB8C8' fontSize={24} strokeWidth={1} />,
	},
]
