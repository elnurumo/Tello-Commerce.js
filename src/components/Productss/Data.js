import { v4 as uuidv4 } from 'uuid';

export const optionsOrder = [
    {
        label: 'Ən yenilər',
        actions: {
            sortBy: "created",
            sortDirection: 'desc',
        }
    },
    {
        label: 'Ada görə',
        actions: {
            sortBy: "name",
            sortDirection: 'asc',
        }
    },
    {
        label: 'Qiymətə görə',
        actions: {
            sortBy: "price",
            sortDirection: 'desc',
        }
    }
]

export const optionsFilter = [
    { id: uuidv4(), label: 'Apple', value: ['iphone', 'ipad', 'airpods', 'macbook, apple'], checked: false },
    { id: uuidv4(), label: 'Samsung', value: ['samsung'], checked: false },
    { id: uuidv4(), label: "Huawei", value: ['huawei'], checked: false },
    { id: uuidv4(), label: 'Honor', value: ['honor'], checked: false },
    { id: uuidv4(), label: 'Lenova', value: ['pad', "lenova"], checked: false },
    { id: uuidv4(), label: 'MSI', value: ["msi"], checked: false }
]