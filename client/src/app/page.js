import CategorySidebar from '@/components/layout/CategorySidebar/CategorySidebar'
import Item from '@/components/ui/Item/Item'

export default function Home() {
	return (
		<div className='wrapper'>
			<main>
				<CategorySidebar />
				<div className='main'>
					<div className='test'>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
					<div className='test'>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
					<div className='test'>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</main>
		</div>
	)
}
