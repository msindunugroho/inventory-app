import { datas } from "../utils/datas.js";

export const showDatas = () => {
    const $Datas = datas;
    const $ingridient_name = document.querySelectorAll('.ingridient_name');
    const $ingridient_total = document.querySelectorAll('.ingridient_total');

    if($ingridient_name.length !== $ingridient_total.length) {
        alert('ingridient name and ingridient total does not match');
        return;
    }

    $Datas.forEach((value, key) => {
        for(let i = 0; i < $ingridient_name.length; i++) {
            if($ingridient_name[i].textContent === '' || $ingridient_name[i].textContent === key) {
                $ingridient_name[i].textContent = key;
                $ingridient_total[i].textContent = value;
                break;
            }
        }
    })
}