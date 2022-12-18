const monthNamesEn = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthNamesRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export function scrollRight(class_name: string): void {
    let section = document.querySelector(class_name);
    section.scrollLeft += 100;
}

export function scrollLeft(class_name: string): void {
    let section = document.querySelector(class_name);
    section.scrollLeft -= 100;
}

export function getDate(newDate: string){
    let now = new Date();
    let date = new Date(newDate);

    let dateString = [
        date.getHours().toString() + ":" + date.getMinutes().toString(),
    ]

    if (
        now.getFullYear() != date.getFullYear() ||
        now.getMonth() != date.getMonth() ||
        now.getDate() != date.getDate()
    )
        dateString.push(
            date.getDate().toString() +
            "." +
            date.getMonth().toString() +
            "." +
            date.getFullYear().toString()
        )

    return dateString.join(" ");
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}