/** 
* Tạo 1 mảng mới chứa dữ liệu đã được lọc và phân trang
@param data: T[]: dữ liệu cần filter, sort, paginate
@param page: number: trang hiện tại
@param limit: number: số lượng item trên 1 trang
@param search: string: từ khóa tìm kiếm
@param filter: { [key: string]: any[] }: filter theo các trường trong dữ liệu
*/
export function filter<T extends Record<string, any>>(
    data: T[],
    page: number,
    limit: number,
    search?: string,
    sort?: { type: string, key: keyof T },
    filter?: { [key: string]: any[] })
    : { result: T[], total: number, numberOfPage: number } {
    try {
        if (!data || data.length == 0) return { result: [], total: 0, numberOfPage: 0 }

        if (page < 1 || limit < 1) return { result: [], total: 0, numberOfPage: 0 }

        let result: T[] = [...data]

        //Filter 
        // if (filter) {
        //     for (const key in filter) {
        //         if (filter[key].length > 0) {

        //             result = result.filter((el: T) => {
        //                 return filter[key].some((val: any) => val === el[key]);
        //             });
        //         }
        //     }
        // }

        //Search
        if (search || filter) {
            const searchChar = search?.toLowerCase() || ""
            result = result.filter((el: T) => {
                let isMatchFilter = true
                if (filter && Object.keys(filter).length > 0)
                    for (const key in filter) {
                        if (filter[key].length > 0) isMatchFilter = filter[key].some((val: any) => val === el[key]);
                    }
                return (el.name.includes(searchChar) || el.email.includes(searchChar)) && isMatchFilter
            })
        }
        //Sort 
        const sortConfig = sort ?? { type: "asc", key: "name" };
        result = result.sort((a, b) => {
            const key = sortConfig.key;
            if (sortConfig.type == "asc")
                return typeof a[key] == "string" ? a[key].localeCompare(b[key]) : a[key] - b[key];
            return typeof a[key] == "string" ? b[key].localeCompare(a[key]) : b[key] - a[key];
        });

        const total = result.length

        if (total == 0) return { result, total: 0, numberOfPage: 0 }

        //Number of Page 

        const numberOfPage = Math.ceil(total / limit)
        //Pagination 
        result = result.slice((page - 1) * limit, page * limit);


        return { result, total, numberOfPage }
    } catch (error) {
        console.log(error);
        return { result: data, total: data.length, numberOfPage: Math.ceil(data.length / limit) }
    }

}