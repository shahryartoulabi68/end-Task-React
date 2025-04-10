import Select from '../../Ui/Select'

const options = [
    {
        label: "مرتب سازی صعودی",
        value: "asc"
    },
    {
        label: "مرتب سازی نزولی",
        value: "desc"
    }
]


function Sort({ onChangeHandle, sortValue }) {
    return (
        <div className='flex items-center justify-between mb-6'>
            <span className='text-secondary-700 text-lg'>مرتب سازی</span>
            <Select sortValue={sortValue} onChangeHandle={onChangeHandle} options={options} />
        </div>
    )
}

export default Sort
