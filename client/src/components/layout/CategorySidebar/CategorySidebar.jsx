import { categoryData } from '@/data/category.data'
import s from './CategorySidebar.module.css'

const CategorySidebar = ({ fetchFunc }) => {
	return (
		<div className={s.sidebar}>
			{categoryData.map(item => (
				<span
					className={s.item}
					key={item.id}
					onClick={() => {
						fetchFunc(item.id)
					}}
				>
					{item?.icon && item.icon}
					<p className={s.title}>{item.title}</p>
				</span>
			))}
		</div>
	)
}

export default CategorySidebar
