import useGetCategory from "../category/useGetCategory"



function Select({ options, onChangeHandle, sortValue }) {

    return (
        <select
            value={sortValue}
            onChange={onChangeHandle}
            className="textFiled__input w-4/12 bg-secondary-0 text-secondary-800">
            {options.map((item) => <option key={item.value} value={item.value} >{item.label}</option>)}
        </select>
    )
}

export default Select